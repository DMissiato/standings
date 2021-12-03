
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

const addUser = (points, username, name, email) =>
{
    const i = parseInt(localData[localData.length-1].id) + 1;

    localData.push({
        id: i,
        points: points,
        username: username,
        name: name,
        email: email
    });

    console.log(localData);
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
    addUser,
    updatePoints
};