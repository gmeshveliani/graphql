const {getPersons, getPerson, addPerson} = require('../data/persons');
const {getVehicle, getVehicles} = require('../data/vehicles');
const {getWeapons, getWeapon} = require('../data/weapons');

module.exports = {
    Query: {
        persons: () => getPersons(),
        person: (root, {id}) => getPerson(id),
        vehicles: () => getVehicles(),
        vehicle: (root, params) => getVehicle({...params}),
        weapons: () => getWeapons(),
        weapon: (root, params) => getWeapon({...params})

    },
    Person: {
       vehicles: (parent) => getVehicles({personId: parent.id}),
       weapons: (parent) => getWeapons({personId: parent.id})
    },
    Vehicle: {
        person: (parent) => getPerson(parent.personId)
    },
    Weapon: {
        person: (parent) => getPerson(parent.personId)
    }
};
