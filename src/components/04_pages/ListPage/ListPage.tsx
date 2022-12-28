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
    return (
        <div>
        <Banner />
        <main className='container'>
            // SEARCH BALK HIER
            { products !== undefined ? (
                <div className='row justify-content-around'>
                    {products.map((product) => (
                        <div className='col-md-3'>
                            <Card
                                key={product.id}
                                product={product}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div><p>Geen producten beschikbaar</p></div>
            )}
        </main>
        </div>
    )
 }

export default ListPage
