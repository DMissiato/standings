
import { getUsers } from './list.js';
import { Add } from './add.js';
import { Export } from './export.js';

document.addEventListener('DOMContentLoaded', () => {

    getUsers();

    const exportBtn = document.querySelector('#export');
    const addBtn = document.querySelector('#addUser');


    exportBtn.addEventListener('click', () => {
        Export();
    });

    addBtn.addEventListener('click', () => {
        Add();
    });

});