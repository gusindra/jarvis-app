import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import CryptoES from "crypto-es";
import base64 from 'react-native-base64';

const baseUrl = 'https://jarvis-store.com';

export const getProductData = async (page) => {
    try{
        const {data:{data}} = await axios.get("https://example.jstore.co/produk/create",
            {
                params:{
                    page:page
                }
            }
        );

        return data;
    }catch (error){
        return error;
    }
}

export const deleteGcm = async () => {
    try{
        const authHeader = 'Basic' + base64.encode(`${data.email}:${data.password}`);
        console.log("auth header order:", authHeader);
        const config = {
            method: 'get',
            url: 'https://jarvis-store.com/api/v1/order',
            headers: { 
                'Authorization': authHeader,
                'Content-Type': 'application/json',
            }, 
            params:{
                page:inputs.page,
                keyword:inputs.keyword,
            } 
        };

        const result = await axios(config).then(function (result) {
            console.log("success load order from server");
            return result;
        })
        .catch(function (error) {
            console.log(error.message);
        });
        console.log(result);
        return result;

    }catch (error){
        return error;
    }
}

export const postLogin = async (inputs) => {

    let data = JSON.stringify({
        email: inputs.email,
        password:  inputs.password
    });

    const URL = 'https://jarvis-store.com/login-member';
    const headers = {
        headers: { 
          Accept: '*/*',
          "Content-Type" : "application/json" 
        },
    };
    let auth = base64.encode(`${inputs.email}:${inputs.password}`);
    const authHeader = 'Basic ' + auth;
    console.log("auth header from login:", auth);
    AsyncStorage.setItem("authHeader", auth);

    const config = {
        method: 'get',
        url: 'https://jarvis-store.com/api/v1/akun',
        headers: { 
            'Authorization': authHeader,
            'Content-Type': 'application/json',
        }
    };

    try{
        console.log("init get to server for akun");
        const result = await axios(config).then(function (result) {
            console.log("success log from server");
            return result;
        })
        .catch(function (error) {
            console.log(error.message);
        });
        // console.log(result);
        return result;
    }catch (error){
        return error.response;
    }
}

export const createGcm = async () => {
    try{
        const authHeader = 'Basic' + base64.encode(`${data.email}:${data.password}`);
        console.log("auth header order:", authHeader);
        const config = {
            method: 'get',
            url: 'https://jarvis-store.com/api/v1/order',
            headers: { 
                'Authorization': authHeader,
                'Content-Type': 'application/json',
            }, 
            params:{
                page:inputs.page,
                keyword:inputs.keyword,
            } 
        };

        const result = await axios(config).then(function (result) {
            console.log("success load order from server");
            return result;
        })
        .catch(function (error) {
            console.log(error.message);
        });
        console.log(result);
        return result;

    }catch (error){
        return error;
    }
}

export const loadOrder = async (inputs, auth) => {
    try{
        const authHeader = 'Basic '+ auth;
        const config = {
            method: 'get',
            url: 'https://jarvis-store.com/api/v1/order',
            headers: { 
                'Authorization': authHeader,
                'Content-Type': 'application/json',
            }, 
            params:{
                page:inputs.page,
                keyword:inputs.keyword,
            } 
        };

        const result = await axios(config).then(function (result) {
            console.log("success load order from server");
            return result.data;
        })
        .catch(function (error) {
            console.log(error.message);
        });
        // console.log(result);
        return result;
    }catch (error){
        return error;
    }
}

export const loadPage = async (inputs, auth) => {
    try{
        const authHeader = 'Basic '+ auth;
        const config = {
            method: 'get',
            url: 'https://jarvis-store.com/api/v2/page',
            headers: { 
                'Authorization': authHeader,
                'Content-Type': 'application/json',
            },
            params:{
                page:inputs.page,
                keyword:inputs.keyword,
            }
        };

        const result = await axios(config).then(function (result) {
            console.log("success load page from server");
            return result.data;
        })
        .catch(function (error) {
            console.log(error.message);
        });
        // console.log(result);
        return result;
    }catch (error){
        return error;
    }
}

export const loadBlog = async (inputs, auth) => {
    try{
        const authHeader = 'Basic '+ auth;
        const config = {
            method: 'get',
            url: 'https://jarvis-store.com/api/v2/blog',
            headers: { 
                'Authorization': authHeader,
                'Content-Type': 'application/json',
            }, 
            params:{
                page:inputs.page,
                keyword:inputs.keyword,
            } 
        };

        const result = await axios(config).then(function (result) {
            console.log("success load blog from server");
            return result.data;
        })
        .catch(function (error) {
            console.log(error.message);
        });
        // console.log(result);
        return result;
    }catch (error){
        return error;
    }
}