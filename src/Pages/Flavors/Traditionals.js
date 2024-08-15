import './Traditionals.css'

function Traditionals({selectedProduct, setSelectedProduct}) {

    const value = '23,00'

    const products = [
        {
            id: 0,
            image: 'Images/15g.jpg',
            description: 'Tradicional de 15g',
            value: value
        },
        {
            id: 1,
            image: 'Images/25g.jpg',
            description: 'Tradicional de 25g',
            value: value
        },
        {
            id: 2,
            image: 'Images/60g.jpg',
            description: 'Tradicional de 60g',
            value: value
        },
        {
            id: 3,
            image: 'Images/90g.jpg',
            description: 'Tradicional de 90g',
            value: value
        },
        {
            id: 4,
            image: 'Images/110g.jpg',
            description: 'Tradicional de 110g',
            value: value
        },
        {
            id: 5,
            image: 'Images/Chipa.jpg',
            description: 'Chipa',
            value: value
        },
        {
            id: 6,
            image: 'Images/Integral.jpg',
            description: 'Integral',
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

export default Traditionals