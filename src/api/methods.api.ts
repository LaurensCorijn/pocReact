import axios from 'axios'

export const GET = async <ResponseType>(endpoint: string) =>
    new Promise((resolve: (value: ResponseType) => void, reject: (error: unknown) => void) => {
        void (async () => {
            try {
                const { data: responseData } = await axios.get<ResponseType>(endpoint)
                resolve(responseData)
            } catch (error: unknown) {
                reject (error)
            }
        }) ()
    })

export const POST = async <ResponseType, BodyType>(endpoint: string, data: BodyType) =>
    new Promise((resolve: (value: ResponseType) => void, reject: (error: unknown) => void) => {
        void (async () => {
            try {
                const {data: responseData} = await axios.post<ResponseType>(endpoint, data)
                resolve(responseData)
            } catch (error: unknown) {
                reject(error)
            }
        }) ()
    })
