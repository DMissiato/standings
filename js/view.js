
import { localData, render } from './utils.js';

const View = async (id = 0) => 
{
        const view = document.createElement('div');
        view.className = 'view';
        document.body.prepend(view);

        const viewContent = document.createElement('div');
        viewContent.className = 'viewContent';
        view.append(viewContent);
        const user = localData.find(user => user.id == id);

        render(viewContent, `
            <h2>${user.points}</h2>
            <p><span>Username: </span>${user.username}</p>
            <p><span>Nominativo: </span>${user.name}</p>
            <p><span>Email: </span>${user.email}</p>
            <hr>
            <div id="backUsers">Chiudi</div>`);
        
        view.addEventListener('click', (event) => { 
            if(event.target.classList.contains('view')) view.remove(); 
        });

        document.querySelector('#backUsers').addEventListener('click', () => { view.remove(); });
}

export{
    View
}