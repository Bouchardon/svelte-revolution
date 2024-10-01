import type { LinkMessage, NodeMessage } from '$types/graph';
import { writable, type Writable } from 'svelte/store';

export const selectedNodeStore: Writable<NodeMessage | null> = writable(null);

export const nodesStore: Writable<NodeMessage[]> = writable([]);
export const linksStore: Writable<LinkMessage[]> = writable([]);
