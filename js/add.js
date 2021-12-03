
import { addUser, localData, render } from './utils.js';
import { List } from './list.js';


const Add = () =>
{
    const view = document.createElement('div');
    view.className = 'view';
    document.body.prepend(view);

    const addContent = document.createElement('div');
    addContent.className = 'addContent';
    view.append(addContent);

    render(addContent, `
        <label for="points">Punteggio: </label>
        <input id="points" type="number" min="0" max="10" step="1" required>
        <label for="username">Username: </label>
        <input id="username" required>
        <label for="name">Nominativo: </label>
        <input id="name" required>
        <label for="email">E-mail: </label>
        <input id="email" type="email" required>
        <hr>
        <div id="addBtn">Aggiungi</div>
        <div id="backUsers">Chiudi</div>`);

    view.addEventListener('click', (event) => { 
        if(event.target.classList.contains('view')) view.remove(); 
    });

    document.querySelector('#backUsers').addEventListener('click', () => { view.remove(); });

    
    const addBtn = document.querySelector('#addBtn');
    addBtn.addEventListener('click', () => {
        
        const pointsIn = document.querySelector('input#points');
        const userIn = document.querySelector('#username');
        const nameIn = document.querySelector('#name');
        const emailIn = document.querySelector('#email');

        addUser(parseInt(pointsIn.value), userIn.value, nameIn.value, emailIn.value);
        List(localData, false);
        view.remove();
    });
}


export{
    Add
}