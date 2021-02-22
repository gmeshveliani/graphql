const weapons = [
    {
        weaponNo: '00001',
        model: 'mode1',
        personId: '1'
    },
    {
        weaponNo: '00002',
        model: 'mode2',
        personId: '2'
    },
    {
        weaponNo: '00003',
        model: 'mode3',
        personId: '3'
    },
    {
        weaponNo: '00004',
        model: 'mode4',
        personId: '4'
    }
];

const getWeapons = function (searchParams) {
    console.log('searching weapons...');
    if(searchParams && searchParams.personId) {
        return weapons.filter(weapon => {
            return weapon.personId === searchParams.personId;
        })
    }
    return weapons;
};

const getWeapon = function (searchParams){
    const weapon =  weapons.filter(weap =>{
        return weap.weaponNo === searchParams.weaponNo;
    })[0];
    if(searchParams.personId && searchParams.personId != weapon.personId){
       return {weaponNo: "00000", model: "nothing", personId: '0'};
    }
    console.log(weapon);
    return weapon;
}

module.exports = {
    getWeapon,
    getWeapons
}
