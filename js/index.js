
import { getUsers } from './list.js';
import { Add } from './add.js';

document.addEventListener('DOMContentLoaded', () => {

    getUsers();

    const addBtn = document.querySelector('#addUser');

    addBtn.addEventListener('click', () => {
        Add();
    });

});