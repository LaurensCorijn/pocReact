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
        <div>
            <Banner />
            <main className='container bg-white'>
                <div className='d-flex justify-content-center'>
                    <div className='flex-1 flex-column'>
                        <div className='d-flex justify-content-center border border-dark p-5 rounded'>
                            <AddForm />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AddPage
