import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize';
import Event from './Event';
import End from './End';

class Scenario extends Model {}

Scenario.init(
	{
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		prologue: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		lang: {
			type: DataTypes.ENUM,
			allowNull: false,
			values: ['en', 'fr', 'jp'],
			defaultValue: 'fr'
		}
	},
	{
		sequelize,
		modelName: 'Scenario'
	}
);

Scenario.hasMany(Event);
Scenario.hasMany(End);

export default Scenario;
