import { FC } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import TextInput from '../../01_atoms/TextInput/TextInput'
import Button from '../../01_atoms/Button/Button'
import {useTranslation} from 'react-i18next'
import IProduct from '../../../structures/IProduct.interface'
import {addProduct} from '../../../api/api'

const AddForm: FC<Record<string, never>> = () => {
    const { t } = useTranslation()

    const defaultValues = {
        name: '',
        image: '',
        price: '',
        description: '',
    }

    type AddFormValues = typeof defaultValues

    const addFormValidationSchema = Yup.object().shape({
        name: Yup.string().required('required'),
        image: Yup.string().required('required'),
        price: Yup.string().required('required'),
        description: Yup.string().required('required'),
    })

    const formMethods = useForm<AddFormValues>({defaultValues, resolver: yupResolver(addFormValidationSchema)})

    const submitAddForm: SubmitHandler<AddFormValues> = (data) => {
        const body: IProduct = {
            id: 0,
            name: data.name,
            image: data.image,
            price: Number.parseFloat(data.price),
            description: data.description
        }

        addProduct(body).then(r => console.log('toegevoegd')) //redirecten naar list pagina)
    }

    return (
        <FormProvider {...formMethods}>
            <form
                onSubmit={formMethods.handleSubmit(submitAddForm,(fieldErrors) => {
                    console.log(fieldErrors)
                })}>
                <div className=''>
                    <p>{t('addProductTitle')}</p>
                    <TextInput<AddFormValues>
                        name='name'
                        type='text'
                        required
                        placeholder={'productNamePlaceholder'}
                        label={'productNameLabel'}
                    />
                    <TextInput<AddFormValues>
                        name='image'
                        type='text'
                        required
                        placeholder={'productImagePlaceholder'}
                        label={'productImageLabel'}
                    />
                    <TextInput<AddFormValues>
                        name='price'
                        type='text'
                        required
                        placeholder={'productPricePlaceholder'}
                        label={'productPriceLabel'}
                    />
                    <TextInput<AddFormValues>
                        name='description'
                        type='text'
                        required
                        placeholder={'productDescriptionPlaceholder'}
                        label={'productDescriptionLabel'}
                    />
                    <div>
                        <Button
                            type='submit'
                            label={'addButton'}
                            disabled={!formMethods.formState.isValid}
                        />
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}

export default AddForm
