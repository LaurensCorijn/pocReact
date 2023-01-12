import {FC, useMemo, useState} from 'react'
import Card  from '../../02_molecules/Card/Card'
import { getProducts } from '../../../api/api'
import { useQuery } from 'react-query'
import Banner from '../../03_organisms/Banner/Banner'
import {useTranslation} from 'react-i18next'

 const ListPage: FC<Record<string,never>> = () => {
     const { t } = useTranslation()
     const queryProducts = useQuery(['queryProducts'], async () => getProducts(), {refetchInterval: 10_000})
     const products = queryProducts.data
     const searchPlaceholder = t('search')

     const [search, setSearch] = useState('')

     const filteredProducts = useMemo(
         () => products?.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())),
         [search, products]
     )
    return (
        <div className='bg-light'>
        <Banner />
        <main className='container pt-5 bg-white vh-100'>
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
                <div><p>{t('noProductsMessage')}</p></div>
            )}
        </main>
        </div>
    )
 }

export default ListPage
