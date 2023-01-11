import {FC, ReactNode, useState} from 'react'
import { useNavigate } from 'react-router-dom'

import createGenericContext from '../utils/genericContext.utils'
import RoutePaths from '../structures/enums/Routes.enum'

interface IUserContext {
    //handle logout?
    handleLogin: (token: string) => void
    isLoggedIn: boolean
    bearer: string
}

const [useUserContext, UserContextProvider] = createGenericContext<IUserContext>()

interface IUserProviderProperties {
    children: ReactNode
}

const UserProvider: FC<IUserProviderProperties> = ({ children }) => {
    const navigate = useNavigate()
    const [bearer, setBearer] = useState('')


    const handleLogin = (token: string) => {
        setBearer(token)
        navigate(RoutePaths.LIST, {replace:true})
    }

    const userContextValue = {
        handleLogin,
        isLoggedIn: bearer !== '',
        bearer
    }

    return <UserContextProvider value={userContextValue}>{children}</UserContextProvider>
}

export { UserProvider, useUserContext }
