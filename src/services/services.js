import axios from "axios";

export const BASE_URL = "https://yetti-backend.herokuapp.com/api/v1/";

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5MTk5NjQwLCJpYXQiOjE2NjkxMTMyNDAsImp0aSI6ImUwMDlkZGZjNTJlNTRlN2M4NDJkZGU4ZDU0NGYxNDczIiwidXNlcl9pZCI6M30.3W338HjgUo7gD-v9e_8HClTtKPSY2YzVdMfRCVeV7fU'


// Load ALL countries from countries endpoint
let countries = [];
axios.get("https://restcountries.com/v3.1/all").then(function (response) {
  const countryInfo = response.data;
  for (const value of countryInfo.values()) {
    let country = value.name.common;
    countries.push(country);
  }

  // Sort in alphabetical order
  countries.sort();
});

const config = {
    headers: { Authorization: `Bearer ${token}` },
    "Content-Type": "application/json"
}

// Register endpoint
const postUser = (user) => axios.post(`${BASE_URL}auth/register/seller`, user, config);

// Store endpoint
const postStore = (store) => axios.post(`${BASE_URL}store/create_store`, store);

// Login endpoint
const userLogin = (user) => axios.post(`${BASE_URL}auth/login`, user);

const userLogout = () => axios.post(`${BASE_URL}auth/logout`, config) 

const resendActivationEmail = (email) => axios.get(`${BASE_URL}auth/resend_activation_link/${email}`, config);

const activateAccount = (user_id, token) => axios.get(`${BASE_URL}auth/confirm-email/${user_id}/${token}`, config);

const resetPasword = (email) => axios.post(`${BASE_URL}auth/reset_password/${email}`, config);

const resetPasswordConfirm = (user_id, token) => axios.post(`${BASE_URL}auth/reset_password_confirm/${user_id}/${token}`, config);


// add product
const addProduct = (product) => axios.post(`${BASE_URL}product/`, product, config);

const deleteProduct = (id) => axios.delete(`${BASE_URL}product/delete/${id}`, config);

const updateProduct = (id, product) => axios.put(`${BASE_URL}product/update/${id}`, product, config);

const addCollection = (collection) => axios.post(`${BASE_URL}product/collection/`, collection, config);

const deleteCollection = (id) => axios.delete(`${BASE_URL}product/collection/delete/${id}`, config);

const updateCollection = (id, collection) => axios.put(`${BASE_URL}product/collection/update/${id}`, collection, config);

const getCollection = (id) => axios.get(`${BASE_URL}product/collection/${id}`, config);

const getCollectionList = () => axios.get(`${BASE_URL}product/collection/`, config);

const getProductItemUnit = () => axios.get(`${BASE_URL}product/itemunit/`, config);

const deleteItemUnit = (id) => axios.delete(`${BASE_URL}product/itemunit/delete/${id}`, config);

const updateItemUnit = (id, itemunit) => axios.put(`${BASE_URL}product/itemunit/update/${id}`, itemunit, config);

const getProductItemUnitById = (id) => axios.get(`${BASE_URL}product/itemunits/${id}`, config);

const getProductList = () => axios.get(`${BASE_URL}product/list`, config);


export { countries, postUser, postStore, userLogin, addProduct, addCollection, deleteCollection, updateCollection, getCollection, getCollectionList, getProductItemUnit, deleteItemUnit, updateItemUnit, getProductItemUnitById, getProductList, deleteProduct, updateProduct };
``