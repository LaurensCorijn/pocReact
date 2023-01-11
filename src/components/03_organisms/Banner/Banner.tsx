import { FC } from 'react'
import NavigationLink from '../../01_atoms/NavigationLink/NavigationLink'
import LanguageSwitch from '../../01_atoms/LanguageSwitch/LanguageSwitch'
import {useUserContext} from '../../../context/UserContext'

const Banner: FC<Record<string, never>> = () => {
    const { isLoggedIn } = useUserContext()

    return (
        <nav className='navbar navbar-expand-lg bg-secondary py-5'>
            <div className='container-fluid px-5'>
                <div className='container d-flex justify-content-between'>
                    <ul className='navbar-nav'>
                        <li className='mx-3'>
                            <NavigationLink
                                linkPath='/product/list'
                                label='homeNav' />
                        </li>
                        <li className='mx-3'>
                            <NavigationLink
                                linkPath='/product/add'
                                label='addNav' />
                        </li>
                    </ul>
                        { isLoggedIn ? (
                            <ul className='navbar-nav'>
                            <li className='mx-3'>
                                <NavigationLink

                                    linkPath='/'
                                    label='Logout' />
                            </li>
                                <li className='mx-3'>
                                    <LanguageSwitch />
                                </li>
                            </ul>
                        ) : (<ul className='navbar-nav'>

                            <li className='mx-3'>
                                <NavigationLink
                                    linkPath='/login'
                                    label='loginNav' />
                            </li>
                            <li className='mx-3'>
                                <NavigationLink
                                    linkPath='/register'
                                    label='registerNav' />
                            </li>
                                <li className='mx-3'>
                                    <LanguageSwitch />
                                </li>
                            </ul>
                        )}

                </div>
            </div>

        </nav>
    )
}

export default Banner
