import {FC, useEffect} from 'react'
import {useUserContext} from '../../../context/UserContext'
import {useNavigate} from 'react-router-dom'
import RegisterForm from '../../03_organisms/RegisterForm/RegisterForm'
import RoutePaths from '../../../structures/enums/Routes.enum'
import Banner from '../../03_organisms/Banner/Banner'

const Register: FC<Record<string, never>> = () => {
    const { isLoggedIn } = useUserContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn) {
            navigate(RoutePaths.LIST, {replace: true})
        }
    }, [isLoggedIn, navigate])

    return (
        <div className='bg-light'>
            <Banner />
            <main className='container bg-white vh-100'>
                <div className='d-flex justify-content-center'>
                    <div className='mt-5 border BorderColor p-5 rounded'>
                        <RegisterForm />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Register
