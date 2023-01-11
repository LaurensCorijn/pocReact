import axios from 'axios'

import IProduct from '../structures/IProduct.interface'
import ILogin from '../structures/ILogin.interface'
import IRegister from '../structures/IRegister.interface'

import { GET_PRODUCTS, GET_PRODUCT, POST_PRODUCT, LOGIN, REGISTER } from './endpoints.api'
import { GET, POST } from './methods.api'


export const getProducts = async () => GET<Array<IProduct>>(GET_PRODUCTS)
export const getProduct = async (id: string) => GET<IProduct>(GET_PRODUCT(id))

export const addProduct = async (product: IProduct) => POST<IProduct, IProduct>(POST_PRODUCT, product).then((response) => {
    console.log('gelukt')
})

export const login = async (user: ILogin) => POST<string, ILogin>(LOGIN, user).then((response) => {
    axios.defaults.headers.common.Authorization = `Bearer ${response}`
})

export const register = async (user: IRegister) => POST<string, IRegister>(REGISTER, user).then((response) => {
    axios.defaults.headers.common.Authorization = `Bearer ${response}`
})
