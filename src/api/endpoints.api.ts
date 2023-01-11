const BaseUrl = 'https://apipoc20221227200802.azurewebsites.net'

export const GET_PRODUCTS = `${BaseUrl}/api/product`
export const GET_PRODUCT = (id: string) => `${BaseUrl}/api/product/${id}`

export const POST_PRODUCT = `${BaseUrl}/api/product`

export const LOGIN = `${BaseUrl}/api/account`
export const REGISTER = `${BaseUrl}/api/account/register`

