import {FC, useEffect} from 'react'
import {useUserContext} from '../../../context/UserContext'
import {useNavigate} from 'react-router-dom'
import RoutePaths from '../../../structures/enums/Routes.enum'
import LoginForm from '../../03_organisms/LoginForm/LoginForm'

const Login: FC<Record<string, never>> = () => {
    const { isLoggedIn } = useUserContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn) {
            navigate(RoutePaths.LIST, {replace: true})
        }
    }, [isLoggedIn, navigate])
    return (
        <div>
            <main className='container bg-white'>
                <div className='d-flex justify-content-center'>
                    <div className='flex-1 flex-column'>
                        <div className='d-flex justify-content-center border border-dark p-5 rounded'>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login
