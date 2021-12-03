
const API = 'https://jsonplaceholder.typicode.com/users';

let localData = [];

const setLocalData = (data) =>
{
    localData = data;
}

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
    localData,
    setLocalData,
    API,
    render,
    comparePoints
};