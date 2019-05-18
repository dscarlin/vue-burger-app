import axios from 'axios';

export function getBurgers() {
    return axios.get("/api/burgers/").then(burgers => burgers)
}

export function createBurger(burgerName) {
    return axios.post("/api/burgers/",{burger_name: burgerName}).then(function(data) {return data})
}

export function devourBurger(burger_id, customer){
    return axios.post('/api/customers/',{customer_name: customer}).then(function(response)  {
        console.log(response.data.id);
        return axios.put(`/api/burgers/${burger_id}`,{Customer: response.data.id}).then(function(data) {console.log(data);return data})
    })
}