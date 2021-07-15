/// <reference path="crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

export function createEmployee(salary: number | string) {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  else return new Director();
}

// Task 6
export function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director;
}

export function executeWork(employee: Teacher | Director) {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  }
  if (employee instanceof Teacher) {
    console.log(employee.workTeacherTasks());
  }
}

// Task 7
type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects) {
  if (todayClass === 'Math') console.log('Teaching Math');
  if (todayClass === 'History') console.log('Teaching History');
}

teachClass('Math'); // Teaching Math
teachClass('History'); // Teaching History

// Task 8 ^ Included import on top
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
}

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { ...row, age: 23 };

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
