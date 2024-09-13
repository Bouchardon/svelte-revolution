import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize';

class Event extends Model {}

Event.init(
	{
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		text: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		author: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize,
		modelName: 'Event'
	}
);

export default Event;
