"use strict";
class Validator {
    constructor(data) {
        this.data = data;
    }
}
class StringValidator extends Validator {
    constructor(data) {
        super(data);
        if (typeof (data)) {
            console.log(`${data} : É uma string!`);
        }
        else {
            throw new Error(`O tipo está errado não é string`);
        }
    }
}
class NumberValidator extends Validator {
    constructor(data) {
        super(data);
        if (typeof (data)) {
            console.log(`${data} : É um número!`);
        }
        else {
            throw new Error(`O tipo está errado, não é numero`);
        }
    }
}
class BooleanValidator extends Validator {
    constructor(data) {
        super(data);
        if (typeof (data)) {
            console.log(`${data} : É um booleano!`);
        }
        else {
            throw new Error(`O tipo está errado, não é booleano`);
        }
    }
}
let nome = new StringValidator('Adriele');
let numero = new NumberValidator(2);
let logico = new BooleanValidator(true);
console.log(nome, numero, logico);
