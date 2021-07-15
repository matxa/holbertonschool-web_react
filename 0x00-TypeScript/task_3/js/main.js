"use strict";
exports.__esModule = true;
exports.teachClass = exports.executeWork = exports.isDirector = exports.createEmployee = exports.Teacher = exports.Director = void 0;
var CRUD = require("./crud");
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
exports.Director = Director;
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
exports.Teacher = Teacher;
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500)
        return new Teacher();
    else
        return new Director();
}
exports.createEmployee = createEmployee;
// Task 6
function isDirector(employee) {
    return employee instanceof Director;
}
exports.isDirector = isDirector;
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    if (employee instanceof Teacher) {
        console.log(employee.workTeacherTasks());
    }
}
exports.executeWork = executeWork;
function teachClass(todayClass) {
    if (todayClass === 'Math')
        console.log('Teaching Math');
    if (todayClass === 'History')
        console.log('Teaching History');
}
exports.teachClass = teachClass;
teachClass('Math');
// Teaching Math
teachClass('History');
// Teaching History
// Task 8 ^ Included import on top
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
var newRowID = CRUD.insertRow(row);
row.age = 23;
var updatedRow = CRUD.updateRow(newRowID, row);
CRUD.deleteRow(newRowID);
