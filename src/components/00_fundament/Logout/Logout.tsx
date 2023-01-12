import {FC, useEffect} from 'react'
import { useUserContext} from '../../../context/UserContext'

const Logout: FC<Record<string, never>> = () => {
    const { handleLogout } = useUserContext()
    useEffect(() => handleLogout())
    return (<div></div>)
}

export default Logout
