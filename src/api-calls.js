import request from 'superagent';

const URL = 'http://localhost:3000';

export const getGroceryList = async () => {
    const data = await request.get(`${URL}/grocery_list`)
    return data.body
}

export const getGroceryDetail = async (id) => {
    const data = await request.get(`${URL}/grocery_list/${id}`)
    return data.body
}

export const addDetail = async (groceryObj) => {
    const data = await request.post(`${URL}/grocery_list/`, groceryObj)

    return data.body;
}

// changed url pathng to all be grocery_list just in case it was naming issue preventing the list update 