import { FC } from 'react'
import './navigationLinkLabel.css'
import {useTranslation} from 'react-i18next'

interface INavigationLabelProperties {
    active?: boolean
    label: string
}

const NavigationLinkLabel: FC<INavigationLabelProperties> = ({active, label}) => {
    const { t } = useTranslation()

    return (
        <div>
            <span className='fontNav'>
                {t(`${label}`)}
            </span>
        </div>
    )
}

export default NavigationLinkLabel
