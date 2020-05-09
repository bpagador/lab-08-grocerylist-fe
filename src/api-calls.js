import request from 'superagent';

const URL = 'http://localhost:3000';

export const getGroceryDetail = async (id) => {
    const data = await request.get(`${URL}/detail_page/${id}`)
    return data.body
}