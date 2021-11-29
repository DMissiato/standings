
import { API, render, comparePoints } from './utils.js';

const List = (data) =>
{
    data.forEach(user => {
        user.points = Math.round(Math.random() * 10);
    });

    data.sort(comparePoints);

    const elems = data.map(user => {
        return `<li>
                    <span>${user.name}</span>
                    <span>${user.points}</span>
                    <span>${user.email}</span>
                </li>`;
    }).join('');

    const wrapper = document.querySelector('.wrapper');

    render(wrapper, `<ul>${elems}</ul>`);
}

const getUsers = async () =>
{
    await fetch(API)
        .then((response) => response.json())
        .then((data) => List(data));
}


export{
    getUsers
}