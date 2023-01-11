import { FC } from 'react'
import Banner from '../../03_organisms/Banner/Banner'
import {useQuery} from 'react-query'
import {getProduct} from '../../../api/api'
import {useTranslation} from 'react-i18next'

interface IDetailPageProperties {
    id: string
}

const DetailPage: FC<IDetailPageProperties> = ({ id}) => {
    const { t } = useTranslation()
    const queryProduct = useQuery(['queryProduct'], async () => getProduct(id))
    const product = queryProduct.data !== undefined ? queryProduct.data : null
    //style={{ height: '50%', width: '50%'}}
    //image src vervangen door string image
    return (
        <div>
            <Banner />
            <main className='container pt-5 bg-white'>
                { product !== null ? (
                    <div className='row'>
                        <div className='col-6' style={{height: '512px'}}>
                            <img src='https://www.veggipedia.nl/assets/Uploads/Products/790c27918e/Jonagold-appel-fruit-veggipedia.jpg' className='object-fit-contain' alt={product.name}/>
                        </div>
                        <div className='col-6'>
                            <p>{product.name}</p>
                            <p>{product.description}</p>
                            <p>{t('priceLabel')}: € {product.price}</p>
                            <button className='btn btn-success' type='button'>
                                {t('detailButton')}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        {t('noProductInfo')}
                    </div>
                )}
            </main>
        </div>
    )
}

export default DetailPage
