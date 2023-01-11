import { FC } from 'react'
import './loginform.css'
import { useTranslation } from 'react-i18next'

import { FormProvider, SubmitHandler, useForm} from 'react-hook-form'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import {useUserContext} from '../../../context/UserContext'
import TextInput from '../../01_atoms/TextInput/TextInput'
import Button from '../../01_atoms/Button/Button'
import RoutePaths from '../../../structures/enums/Routes.enum'
import ILogin from '../../../structures/ILogin.interface'
import { login } from '../../../api/api'

const LoginForm: FC<Record<string, never>> = () => {
    const { t } = useTranslation()
    const { handleLogin } = useUserContext()

    const defaultValues = {
        email: '',
        password: '',
    }

    type LoginFormValues = typeof defaultValues

    const loginFormValidationSchema = Yup.object().shape({
        email: Yup.string().required('Email required').email('InvalidEmail'),
        password: Yup.string().required('Required'),
    })

    const formMethods = useForm<LoginFormValues>({defaultValues, resolver: yupResolver(loginFormValidationSchema) })

    const submitLoginForm: SubmitHandler<LoginFormValues> = (data) => {
        const body: ILogin = {
            email: data.email,
            password: data.password
        }
        login(body).then(() => handleLogin('log'))
    }
    //border toevoegen
    return (
        <FormProvider {...formMethods}>
            <form
                onSubmit={formMethods.handleSubmit(submitLoginForm, (fieldErrors) => {
                    console.log(fieldErrors)
                })}>
                <div className=''>
                    <p className='fontTitle'>{t('loginTitle')}</p>
                    <TextInput<LoginFormValues>
                        name='email'
                        type='email'
                        required
                        placeholder={'emailPlaceholder'}
                        label={'emailLabel'}
                    />
                    <TextInput<LoginFormValues>
                        name='password'
                        type='password'
                        required
                        placeholder={'passwordPlaceholder'}
                        label={'passwordLabel'}
                    />
                </div>
                <div className=''>
                    <div>
                        <Link
                            to={RoutePaths.REGISTER}
                        >
                            {t("registerLink")}
                        </Link>
                    </div>
                    <Button
                        type='submit'
                        label={'loginButton'}
                        disabled={!formMethods.formState.isValid}
                    />
                </div>
            </form>
        </FormProvider>
    )
}

export default LoginForm
