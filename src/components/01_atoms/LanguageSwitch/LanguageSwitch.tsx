import { FC } from 'react'
import { useTranslation} from 'react-i18next'


const LanguageSwitch: FC<Record<string, never>> = () => {
    const {i18n} = useTranslation()

    function changeLanguage(e: any) {
        i18n.changeLanguage(e.target.value)
    }

    return (
        <div>
            <select
                className='form-select'
                onChange={changeLanguage}>
                <option value='nl'>{i18n.t('nlLabel')}</option>
                <option value='en'>{i18n.t('enLabel')}</option>
            </select>
        </div>
    )
}

export default LanguageSwitch
