"use strict";

let info = {
    name: 'DinaDoo',
    address: '420 Lane',
    city: 'Elmington',
    state: 'Kentucky',
    zip: 50617,
};

function printContact(info) {
    console.log(
        `${info.name}\n${info.address}\n${info.city}, ${info.state} ${info.zip}`);
}

printContact(info);