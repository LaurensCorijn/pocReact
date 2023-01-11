import { FC, ReactNode } from 'react'
import {Navigate, Outlet} from 'react-router-dom'

import RoutePaths from '../../structures/enums/Routes.enum'

import { useUserContext } from '../../context/UserContext'

interface IProtectedUserRouteProperties {
    children?: ReactNode
}

const ProtectedUserRoute: FC<IProtectedUserRouteProperties> = ({children}) => {
    const { isLoggedIn } = useUserContext()

    if (!isLoggedIn) {
        return ( <Navigate
                    to={RoutePaths.LOGIN}
                    replace
                />
    )
    }

    return children !== undefined ? <>children</> : <Outlet />
}

export default ProtectedUserRoute
