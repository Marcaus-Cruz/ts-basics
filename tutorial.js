"use strict";
// ! Help
// tsx -> compile to JS
// node (file) -> execute file
// ! Basic Typing
// let id: number = 5;
// let company: string = 'Acme Corp';
// let isPublished: boolean = true;
// let ids: number[] = [5, 6, 7, 8];
// let x: any = 'Marcaus';
// let xArr: any [] = [x, 5, true];
// const concatValues = (a: string, b: string): string => {
//     return a + b;
// }
// console.log(concatValues('hello', 'world'));
// console.log(concatValues('5','10'));
// ! Interfaces
// interface UserInterface {
//     id: number,
//     name: string,
//     age?: number
// }
// const user: UserInterface = {
//     id: 1,
//     name: 'Marcaus',
//     // age: 25
// };
// ! Unions and Intersections
// type IDFieldType = string | number;
// const printId = (id: IDFieldType) => {
//     console.log(`Your ID is ${id}`);
// }
// interface BusinessPartner {
//     name: string;
//     credit: number;
// }
// interface UserIdentity {
//     id: number;
//     email: string;
// }
// // type Employee = BusinessPartner | UserIdentity;
// type Employee = BusinessPartner & UserIdentity;
// const signContract = (employee: Employee): void => {
//     console.log(`${employee.name} signed the contract with email: ${employee.email}`);
// }
// signContract({
//     id: 1,
//     name: 'Marcaus',
//     credit: 10000,
//     email: 'marcauscruz@gmail.com'
// });
// ! Enumerations
// enum LoginError {
//     INVALID_CREDENTIALS = 'Invalid credentials',
//     INVALID_TOKEN = 'Invalid token',
//     NO_ERROR = 'No error'
// }
// const printError = (error: LoginError): void => {
//     if(error === LoginError.INVALID_CREDENTIALS) {
//         console.error('Could not sign in');
//         return;
//     }
//     console.error(error);
// };
//! Generics
class StorageContainer {
    constructor() {
        this.contents = [];
    }
    addItem(item) {
        this.contents.push(item);
    }
    getItem(index) {
        return this.contents[index];
    }
}
const usernames = new StorageContainer();
usernames.addItem('Marcaus');
usernames.addItem('Sophie Joan');
console.log(usernames.getItem(1));
const friends = new StorageContainer();
friends.addItem(1);
friends.addItem(2);
console.log(friends.getItem(1));
