import { FC } from 'react'
import { NavLink } from 'react-router-dom'

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
                className=''
                >
                //Label object toevoegen
            </NavLink>
        </div>
    )
}
