const vehicles = [
    {
        govNum: 'AA001BB',
        model: 'mode1',
        personId: '1'
    },
    {
        govNum: 'AA003BB',
        model: 'mode3',
        personId: '2'
    },
    {
        govNum: 'AA003BB',
        model: 'mode3',
        personId: '3'
    },
    {
        govNum: 'AA003BB',
        model: 'mode3',
        personId: '4'
    },
    {
        govNum: 'AA003BB',
        model: 'mode3',
        personId: '5'
    },
    {
        govNum: 'AA003BB',
        model: 'mode3',
        personId: '3'
    }
];
const getVehicles = function (searchParams) {
    console.log('searching vehicles...');
       if(searchParams && searchParams.personId) {
            return vehicles.filter(vehicle => {
                return vehicle.personId === searchParams.personId;
            })
        }
    return vehicles;
};

const getVehicle = function (searchParams){
    const vehicle =  vehicles.filter(vehicle =>{
        return vehicle.govNum === searchParams.govNum;
    })[0];
    if(searchParams.personId && searchParams.personId != vehicle.personId){
       return {govNum: "00000", model: "nothing", personId: '0'};
    }
    console.log(vehicle);
    return vehicle;
}
module.exports = {
    getVehicles,
    getVehicle
};
