
import { localData, updatePoints, render } from './utils.js';
import { List } from './list.js';

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
            <h2>
                <input id="currPoints" type="number" min="0" max="10" step="1" value="${user.points}">
                <svg id="updatePoints" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="24" height="24"
                    viewBox="0 0 226 226"
                    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="#ffffff"><path d="M134.65833,53.675l-106.40833,106.40833v37.66667h37.66667l106.40833,-106.40833zM204.34167,58.38333l-18.83333,18.83333l-36.725,-36.725l18.83333,-18.83333c2.825,-3.76667 8.475,-3.76667 12.24167,-0.94167l12.24167,12.24167l12.24167,12.24167c3.76667,4.70833 3.76667,10.35833 0,13.18333z"></path></g></g></svg>
            </h2>
            <p><span>Username: </span>${user.username}</p>
            <p><span>Nominativo: </span>${user.name}</p>
            <p><span>Email: </span>${user.email}</p>
            <hr>
            <div id="backUsers">Chiudi</div>`);
        
        view.addEventListener('click', (event) => { 
            if(event.target.classList.contains('view')) view.remove(); 
        });

        document.querySelector('#backUsers').addEventListener('click', () => { view.remove(); });

        // edit points
        const input = document.querySelector('#currPoints');

        input.addEventListener('input', () => {

            if(input.classList.contains('green')) 
                input.classList.remove('green');
            if(!input.classList.contains('red')) 
                input.classList.add('red');
        });

        document.querySelector('#updatePoints').addEventListener('click', () => {

            updatePoints(input, id);
            List(localData, false);

            if(input.classList.contains('red')) 
                input.classList.remove('red');
            input.classList.add('green');
        });
}

export{
    View
}