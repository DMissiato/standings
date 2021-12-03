
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

const comparePoints = (a, b) =>
{
    if (a.points < b.points) 
        return 1;
    else if (a.points > b.points) 
        return -1;

    return 0;
}

const updatePoints = (input, id = 0) =>
{
    const i = localData.findIndex(user => user.id == id);
    let data = localData;

    data[i].points = parseInt(input.value);
    setLocalData(data);
}

export { 
    localData,
    setLocalData,
    API,
    render,
    comparePoints,
    updatePoints
};