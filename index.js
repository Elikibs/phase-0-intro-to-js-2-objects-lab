// Write your solution in this file!
const employee = {
    name: "Elisha",
    streetAddress: "299-20400",
};

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const updatedEmployee = {...employee};
    updatedEmployee[name] = streetAddress;
    return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress){
    employee[name] = streetAddress;
    return employee;
}

function deleteFromEmployeeByKey(employee, name) {
    const updatedEmployee = { ...employee };
    delete updatedEmployee[name];
    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
