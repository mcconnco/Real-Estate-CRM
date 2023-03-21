const API_URL = 'https://localhost:44334/api/';

const myHttpPost = async function(controller, input) {
    const header = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(input)
    };
    const response = await fetch(API_URL + controller, header);
    const data = await response.json();
    return data;
}


const myHttpGet = async function(controller) {
    const header = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', }
    };
    const response = await fetch(API_URL + controller, header);
    const data = await response.json();
    return data;
}

const myHttpGetVal = async function(controller, params) {
    const header = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', }
    };
    var params = "?" + new URLSearchParams(params);
    const response = await fetch(API_URL + controller + params, header);
    const data = await response.json();
    return data;
}
export default {myHttpGet, myHttpPost, myHttpGetVal};