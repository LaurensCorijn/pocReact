import { FC } from 'react'
import IProduct from '../../../structures/IProduct.interface'

interface ICardProperties {
    product: IProduct
}

const Card: FC<ICardProperties> = ({product}) => (
    <div className='card'>
        <img src='' className='card-img-top' alt={product.name}/>
        <div className='card-body'>
            <h4><b>{product.name}</b></h4>
            <p className='fw-bold'>{product.price}</p>
        </div>
        <div className='card-footer'>
            <button className='btn'>
                //LINK Naar detailpage
            </button>
        </div>
    </div>
)

export default Card
