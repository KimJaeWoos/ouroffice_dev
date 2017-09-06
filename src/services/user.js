/**
 * Created by Jaewoos on 2017-08-28.
 */
import axios from 'axios';

export function login(userInfo) {
    return axios.post(`http://fack14.cafe24.com/mvc/Api/login`, {
        'test' : 'test',
        })
        .then (function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}