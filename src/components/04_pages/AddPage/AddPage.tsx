import { FC, useEffect } from 'react'
import {useUserContext} from '../../../context/UserContext'
import {useNavigate} from 'react-router-dom'
import RoutePaths from '../../../structures/enums/Routes.enum'
import Banner from '../../03_organisms/Banner/Banner'
import AddForm from '../../03_organisms/AddForm/AddForm'

const AddPage: FC<Record<string, never>> = () => {
    const { isLoggedIn } = useUserContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoggedIn) {
            navigate(RoutePaths.LOGIN, {replace: true})
        }
    }, [isLoggedIn, navigate])

    return (
        <div className='bg-light'>
            <Banner />
            <main className='container bg-white vh-100'>
                <div className='d-flex justify-content-center'>
                    <div className='mt-5 border BorderColor p-5 rounded'>
                        <AddForm />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AddPage
