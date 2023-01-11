
import {FieldValues, Path, useFormContext} from 'react-hook-form'

import { useTranslation } from 'react-i18next'


interface ITextInputProperties<T extends FieldValues> {
    label?: string
    name: Path<T>
    placeholder?: string
    required?: boolean
    type: 'text' | 'email' | 'password'
}

const TextInput = <T extends FieldValues>({
    label,
    name,
    placeholder,
    type
}: ITextInputProperties<T>): JSX.Element => {
    const { t } = useTranslation()

    const {
        register,
        formState: {errors},
    } = useFormContext<T>()

    const placeholderTranslated = t(`${placeholder}`)
    const isPasswordInput = type === 'password'
    //aria-invalid={errors[name] === undefined ? 'false' : 'true'}


    const InputHtml = (
        <input
            id={`${label}-${type}`}
            className='form-control'
            type={type}
            placeholder={placeholderTranslated}
            style={{width:'300px'}}
            // @ts-ignore
            {...register(name)}
        />
    )

    return (
        <div>
            <label className='my-2'>
                {t(`${label}`)}
            </label>
            <div className='mb-4'>
                {InputHtml}
            </div>
        </div>
    )
}

export default TextInput
