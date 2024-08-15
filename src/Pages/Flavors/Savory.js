import './Savory.css'

function Products({selectedProduct, setSelectedProduct}) {

    const value = 32.00

    const products = [
        {
            id: 0,
            image: 'Images/Frango.jpg',
            description: 'Recheio sabor frango',
            value: value
        },
        {
            id: 1,
            image: 'Images/Requeijão.jpg',
            description: 'Recheio sabor requeijão',
            value: value
        },
        {
            id: 2,
            image: 'Images/Pizza.jpg',
            description: 'Recheio sabor pizza',
            value: value
        },
        {
            id: 3,
            image: 'Images/Lombo.jpg',
            description: 'Recheio sabor lombo',
            value: value
        },
        {
            id: 4,
            image: 'Images/Calabresa.jpg',
            description: 'Recheio sabor calabresa',
            value: value
        },
        {
            id: 5,
            image: 'Images/Bacon.jpg',
            description: 'Recheio sabor bacon',
            value: value
        },
        {
            id: 6,
            image: 'Images/Cheddar.jpg',
            description: 'Recheio sabor cheddar',
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

export default Products