import { FC } from 'react'
import IProduct from '../../../structures/IProduct.interface'
import {Link} from 'react-router-dom'

import './card.css'
import {useTranslation} from 'react-i18next'

interface ICardProperties {
    product: IProduct
}

const Card: FC<ICardProperties> = ({product}) => {
    const { t } = useTranslation()

    return (
        <div className='card my-3'>
            <img src={product.image} className='card-img-top' alt={product.name}/>
            <div className='card-body'>
                <div className='d-flex justify-content-between'>
                    <p>{product.name}</p>
                    <p className=''>€ {product.price}</p>
                </div>
            </div>
            <div className='card-footer'>
                <button className='btn btn-primary' type='button'>
                    <Link
                        to={`/product/detail/${product.id}`}
                        className='fontNav'
                    >
                        {t('moreInfoButton')}
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Card
