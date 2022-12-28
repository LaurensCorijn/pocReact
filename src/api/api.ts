import axios from 'axios'

import IProduct from '../structures/IProduct.interface'

import { GET_PRODUCTS, GET_PRODUCT, POST_PRODUCT } from './endpoints.api'
import { GET, POST } from './methods.api'

export const getProducts = async () => GET<Array<IProduct>>(GET_PRODUCTS)
export const getProduct = async (id: string) => GET<IProduct>(GET_PRODUCT(id))


