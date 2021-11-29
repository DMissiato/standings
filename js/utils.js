
const API = 'https://jsonplaceholder.typicode.com/users';

const render = (container, content) =>
{
    container.innerHTML = content;
};

function comparePoints(a, b) {
    if (a.points < b.points) 
        return 1;
    else if (a.points > b.points) 
        return -1;

    return 0;
  }


export { 
    API,
    render,
    comparePoints
};