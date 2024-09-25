import { pb } from '$lib/pocketbase.js';
import type { Link, SessionData } from '$types/graph/index.js';
import { error } from '@sveltejs/kit';
import { ClientResponseError } from 'pocketbase';

async function getSession(sessionId: number) {
    let session: SessionData;
    try {
        session = await pb.collection('session').getFirstListItem('slug=' + sessionId.toString());
    } catch (e) {
        const err = e as ClientResponseError;
        if (err.status === 404) {
            error(404, {
                status: 404,
                message: 'Session not found'
            });
        } else {
            error(500, {
                status: err.status,
                message: err.message
            });
        }
    }

    return session;
}

async function buildNodesAndLinks(session: SessionData) {
    const nodes = await pb.collection('Node').getFullList({ filter: `session="${session.id}"` });
    const links: Link[] = [];

    nodes.forEach((node) => {
        const parent = !node.parent ? null : String(node.parent);
        if (parent) {
            links.push({
                source: parent,
                target: node.id
            });
        }
    });

    return {
        nodes,
        links
    };
}

export async function load({ params, parent }) {
    await parent();
    const sessionData = await getSession(Number(params.slug));

    const nodesAndLinks = await buildNodesAndLinks(sessionData);

    return {
        sessionData,
        nodesAndLinks
    };
}
