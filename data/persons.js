
const persons = [{
    id: '1',
    personalNo: '01011061445',
    firstName: 'სახელი1',
    lastName: 'გვარი1'
}, {
    id: '2',
    personalNo: '01011061446',
    firstName: 'სახელი2',
    lastName: 'გვარი2'
}, {
    id: '3',
    personalNo: '01011061447',
    firstName: 'სახელი3',
    lastName: 'გვარი3'
}, {
    id: '4',
    personalNo: '01011061448',
    firstName: 'სახელი4',
    lastName: 'გვარი4'
}, {
    id: '5',
    personalNo: '01011061449',
    firstName: 'სახელი5',
    lastName: 'გვარი5'
}];

const getPersons = function() {
    console.log('searching all persons');
    return persons;
};

const getPerson = function(id) {
    console.log(`get person by id=${id}`);
    return persons.filter(person => {
        return person.id === id;
    })[0];
};


module.exports = {
    getPersons,
    getPerson
};
