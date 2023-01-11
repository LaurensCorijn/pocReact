import { FC } from 'react'
import './navigationLink.css'
import { NavLink } from 'react-router-dom'
import NavigationLinkLabel from '../NavigationLinkLabel/NavigationLinkLabel'

interface INavLinkProperties {
    linkPath: string
    label: string
}

const NavigationLink: FC<INavLinkProperties> = ({linkPath, label}) => {
    return (
        <div>
            <NavLink
                end
                to={linkPath}
                className='fontNav'
                >
                 <NavigationLinkLabel label={label} />
            </NavLink>
        </div>
    )
}

export default NavigationLink
