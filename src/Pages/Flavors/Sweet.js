import './Sweet.css'

function Sweet({selectedProduct, setSelectedProduct}) {

    const value = '32,00'

    const products = [
        {
            id : 0,
            image: 'Images/Goiabada.jpg',
            description: 'Recheio sabor goiabada',
            value: value
        },
        {
            id : 1,
            image: 'Images/Doce de leite.jpg',
            description: 'Recheio sabor doce de leite',
            value: value
        }
    ]

    return (
        <div className='products'>

            {
                products.map((product) => {
                    return (
                        <div key={product.id} className='div_card'>
                            <div className="card">
                                <img src={product.image} className='images'></img>
                            </div>
                            <div className='description_and_value'>{product.description}</div>
                            <div className='description_and_value'>R$ {product.value} o kg</div>
                            <button className='button' onClick={()=>{setSelectedProduct(product)}}>Comprar</button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Sweet