import { FC, ReactNode } from 'react'

import { UserProvider } from './UserContext'

interface IApplicationContextProperties {
    children: ReactNode
}

const ApplicationContext: FC<IApplicationContextProperties> = ({ children }) => (
    <UserProvider>
        {children}
    </UserProvider>
)

export default ApplicationContext
