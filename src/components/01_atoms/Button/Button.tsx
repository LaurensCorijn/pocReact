import { FC, MouseEvent } from 'react'

import { useTranslation } from 'react-i18next'

export enum IButtonStyle {
    SUCCESS = 'Success',
    DANGER = 'Danger',
    DEFAULT = 'Default'
}

export interface IButtonProperties {
    label: string
    className?: string
    type: 'submit' | 'button'
    disabled?: boolean
    onClick?: (event: MouseEvent) => void
}

const Button: FC<IButtonProperties> = ({
    label,
    className,
    type= 'button',
    disabled= false,
    onClick
}) => {
    const { t } = useTranslation()

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={className}>
            {t(`${label}`)}
        </button>
    )
}

export default Button
