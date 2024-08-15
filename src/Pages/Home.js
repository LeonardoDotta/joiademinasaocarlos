import './Home.css'
import '../Layout/Container.css'
import Traditionals from './Flavors/Traditionals'
import Savory from './Flavors/Savory'
import Sweet from './Flavors/Sweet'
import { useState } from 'react'
import ProductModal from './ProductModal'

function Home() {

    const [type, setType] = useState('savory')

    const [selectedProduct, setSelectedProduct] = useState(null)

    return (
        <div className='home'>
            <div className='title'>Seja bem vindo(a) ao site da Jóia de Minas - São Carlos</div>
            <div className='subtitle'>Aqui você encontra os melhores pães de queijo! Experimente! </div>

            <ProductModal selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}></ProductModal>

            <div className='div_buttons'>
                <button className='home_button' onClick={() => setType('traditionals')}>Tradicionais</button>

                <button className='home_button' onClick={() => setType('savory')}>Recheados Salgados</button>

                <button className='home_button' onClick={() => setType('sweet')}>Recheados Doces</button>

                {/* Button Detail */}
                <button className={type == 'traditionals' ? 'home_button_detail1' : type == 'savory' ? 'home_button_detail2' : 'home_button_detail3'}></button>
            </div>

            {
                type == 'savory' ?
                    <Savory selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/>
                    : type == 'traditionals' ?
                        <Traditionals selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/>
                        :
                        <Sweet selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/>
            }

        </div>
    )
}

export default Home