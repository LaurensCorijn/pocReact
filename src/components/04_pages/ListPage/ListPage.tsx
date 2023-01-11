import { FC } from 'react'
import Card  from '../../02_molecules/Card/Card'
import IProduct from '../../../structures/IProduct.interface'
import { getProducts } from '../../../api/api'
import { useQuery } from 'react-query'
import Banner from '../../03_organisms/Banner/Banner'

 const ListPage: FC<Record<string,never>> = () => {
    //Hier reactQuery toevoegen
     //const products: Array<IProduct> = [] //Dit vullen met producten uit api
     const queryProducts = useQuery(['queryProducts'], async () => getProducts(), {refetchInterval: 10_000})
     const products = queryProducts.data

     const products2: Array<IProduct> = [
         {
             id: '1',
             name: 'test',
             image: 'test',
             price: 1.4,
             description: 'test'
         },
         {
             id: '2',
             name: 'test',
             image: 'test',
             price: 1.4,
             description: 'test'
         },
         {
             id: '3',
             name: 'test',
             image: 'test',
             price: 1.4,
             description: 'test'
         },
         {
             id: '4',
             name: 'test',
             image: 'test',
             price: 1.4,
             description: 'test'
         },
         {
             id: '5',
             name: 'test',
             image: 'test',
             price: 1.5,
             description: 'test'
         }

     ]

     //search balk toevoegen?
    return (
        <div className='bg-light'>
        <Banner />
        <main className='container pt-5 bg-white'>
            { products !== undefined ? (
                <div>
                    <div>
                        Searchbalk hier
                    </div>
                    <div className='row justify-content-start'>
                        {products2.map((product) => (
                            <div className='col-md-3'>
                                <Card
                                    key={product.id}
                                    product={product}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            ) : (
                <div><p>Geen producten beschikbaar</p></div>
            )}
        </main>
        </div>
    )
 }

export default ListPage
