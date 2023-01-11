import { FC } from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'react-i18next'

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import TextInput from '../../01_atoms/TextInput/TextInput'
import Button from '../../01_atoms/Button/Button'
import IRegister from '../../../structures/IRegister.interface'
import {useUserContext} from '../../../context/UserContext'
import { register } from '../../../api/api'


const RegisterForm: FC<Record<string, never>> = () => {
    const { t } = useTranslation()
    const { handleLogin } = useUserContext()

    const defaultValues = {
        email: '',
        password: '',
        passwordRepeat: '',
    }

    type RegisterFormValues = typeof defaultValues

    const registerFormValidationSchema = Yup.object().shape({
        email: Yup.string().required('email required').email('invalidEmail'),
        password: Yup.string().required('required'),
        passwordRepeat: Yup.string().required('required')
    })

    const formMethods = useForm<RegisterFormValues>({defaultValues, resolver: yupResolver(registerFormValidationSchema)})

    const submitRegisterForm: SubmitHandler<RegisterFormValues> = (data) => {
        const body: IRegister = {
            email: data.email,
            password: data.password,
            userName: data.email,
            passwordConfirmation: data.passwordRepeat
        }

        register(body).then(() => handleLogin('reg'))
    }

    return (
        <FormProvider {...formMethods}>
            <form
                onSubmit={formMethods.handleSubmit(submitRegisterForm, (fieldErrors) => {
                    console.log(fieldErrors)
                })}>
                <div className=''>
                    <p className='fontTitle'>{t('registerTitle')}</p>
                    <TextInput<RegisterFormValues>
                        name='email'
                        type='email'
                        required
                        placeholder={'emailPlaceholder'}
                        label={'emailLabel'}
                    />
                    <TextInput<RegisterFormValues>
                        name='password'
                        type='password'
                        required
                        placeholder={'passwordPlaceholder'}
                        label={'passwordLabel'}
                    />
                    <TextInput<RegisterFormValues>
                        name='passwordRepeat'
                        type='password'
                        required
                        placeholder={'passwordConfirmPlaceholder'}
                        label={'passwordConfirmLabel'}
                    />
                    <div>
                        <Button
                            type='submit'
                            label={'registerButton'}
                            disabled={!formMethods.formState.isValid}
                        />
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}

export default RegisterForm
