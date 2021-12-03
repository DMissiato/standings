
import { localData, setLocalData, API, render, comparePoints } from './utils.js';
import { View } from './view.js';

const List = (data, addPoints = true) =>
{
    if(addPoints)
    {
        data.forEach(user => {
            user.points = Math.round(Math.random() * 10);
        });
    }
    
    data.sort(comparePoints);

    if(!localData.length) setLocalData(data);

    const elems = data.map(user => {
        return `<li id='${user.id}'>
                    <span class="points">${user.points}</span>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" 
                            stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M86,17.2c-19.00027,0 -34.4,15.39973 -34.4,34.4v5.73333c0,19.00027 15.39973,
                            34.4 34.4,34.4c19.00027,0 34.4,-15.39973 34.4,-34.4v-5.73333c0,-19.00027 -15.39973,-34.4 -34.4,-34.4zM85.9888,108.93333c-22.96773,0 -52.43707,12.42324 -60.91667,23.44844c-5.24027,6.81693 -0.25182,16.68489 8.34245,16.68489h105.15964c8.59427,0 13.58271,-9.86796 8.34245,-16.68489c-8.4796,
                            -11.01947 -37.96013,-23.44844 -60.92786,-23.44844z"></path></g></g></svg>
                        <span>${user.name}</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 226 226" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" 
                            stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" 
                            font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="#fff">
                            <path d="M113,18.83333c-51.9235,0 -94.16667,42.24317 -94.16667,94.16667c0,51.9235 42.24317,94.16667 94.16667,94.16667c51.9235,0 94.16667,-42.24317 94.16667,
                            -94.16667c0,-51.9235 -42.24317,-94.16667 -94.16667,-94.16667zM113,37.66667c41.53692,0 75.33333,33.79642 75.33333,75.33333c0,41.53692 -33.79642,75.33333 -75.33333,
                            75.33333c-41.53692,0 -75.33333,-33.79642 -75.33333,-75.33333c0,-41.53692 33.79642,-75.33333 75.33333,-75.33333zM113,56.5c-31.15975,0 -56.5,25.34025 -56.5,56.5c0,
                            31.15975 25.34025,56.5 56.5,56.5h9.41667v-18.83333h-9.41667c-20.77317,0 -37.66667,-16.8935 -37.66667,-37.66667c0,-20.77317 16.8935,-37.66667 37.66667,-37.66667c20.77317,
                            0 37.66667,16.8935 37.66667,37.66667v4.70833c0,2.599 -2.10933,4.70833 -4.70833,4.70833c-2.599,0 -4.70833,-2.10933 -4.70833,-4.70833h-0.47819c0.26107,-1.54008 0.47819,
                            -3.09517 0.47819,-4.70833c0,-15.57517 -12.67483,-28.25 -28.25,-28.25c-15.57517,0 -28.25,12.67483 -28.25,28.25c0,15.57517 12.67483,28.25 28.25,28.25c6.54911,0 12.50997,
                            -2.3324 17.30681,-6.08772c4.17015,3.74312 9.62302,6.08772 15.65153,6.08772c12.97617,0 23.54167,-10.5655 23.54167,-23.54167v-4.70833c0,-31.15975 -25.34025,-56.5 -56.5,-56.5zM113,
                            103.58333c5.18858,0 9.41667,4.22808 9.41667,9.41667c0,5.18858 -4.22808,9.41667 -9.41667,9.41667c-5.18858,0 -9.41667,-4.22808 -9.41667,-9.41667c0,-5.18858 4.22808,-9.41667 9.41667,-9.41667z"></path></g></g></svg>
                        <span>${user.email}</span>
                    </div>
                </li>`;
    }).join('');

    const wrapper = document.querySelector('.wrapper');
    render(wrapper, `<ul>${elems}</ul>`);

    const usersEl = [...document.querySelectorAll('.wrapper ul li')];

    usersEl.forEach(user => {
        user.addEventListener('click', () => {
            const id = user.id;

            View(id);
        });
    });

}

const getUsers = async () =>
{
    await fetch(API)
        .then((response) => response.json())
        .then((data) => List(data));
}


export{
    List,
    getUsers
}