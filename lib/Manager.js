const Employee = require('./Employee');

class Manager extends Employee {
    constructor (officeNumber){
        this.officeNumber = officeNumber;
    }
getofficeNumber(){
    return this.officeNumber;
}
getRole(){
    return "Manager";
}
}

module.exports = Manager;