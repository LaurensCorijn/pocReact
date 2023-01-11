import {FC, FormEventHandler, useMemo, useState} from 'react'
import Card  from '../../02_molecules/Card/Card'
import IProduct from '../../../structures/IProduct.interface'
import { getProducts } from '../../../api/api'
import { useQuery } from 'react-query'
import Banner from '../../03_organisms/Banner/Banner'
import {useTranslation} from 'react-i18next'

 const ListPage: FC<Record<string,never>> = () => {
     const { t } = useTranslation()
     const queryProducts = useQuery(['queryProducts'], async () => getProducts(), {refetchInterval: 10_000})
     const products = queryProducts.data
     const searchPlaceholder = t('search')


     let products2: Array<IProduct> = [
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
     const [search, setSearch] = useState('')

     const filteredProducts = useMemo(
         () => products?.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())),
         [search, products]
     )
    return (
        <div className='bg-light'>
        <Banner />
        <main className='container pt-5 bg-white'>
            { filteredProducts !== undefined ? (
                <div>
                    <div>
                        <input
                            type="search"
                            onChange={(e)=>setSearch(e.target.value)}
                            placeholder={searchPlaceholder}
                            className='form-control'
                            style={{width: '50%'}}
                        />
                    </div>
                    <div className='row justify-content-start'>
                        {filteredProducts.map((product) => (
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
