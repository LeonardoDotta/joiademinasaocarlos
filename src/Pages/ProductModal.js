import { useState } from 'react'

import './ProductModal.css'

function ProductModal({ selectedProduct, setSelectedProduct }) {

    var [num, setNum] = useState(1)

    var [method, setMethod] = useState('')

    // var [value, setValue] = useState(selectedProduct)

    return (
        <div>

            {
                selectedProduct != null ?
                    <div className="pop_up">
                        <div className="selected_product">
                            <button className='close_button' onClick={() => setSelectedProduct(null)}>X</button>
                            <img className='pop_up_img' src={selectedProduct.image}></img>
                            <div className='pop_up_adjust1'>{selectedProduct.description}</div>
                            <div className='pop_up_layout'>
                                <button className='pop_up_buttons' onClick={() => {

                                    if (num != 1) {
                                        setNum(num - 1)
                                    }

                                }}>-1</button>
                                <div className='pop_up_number'>{num}</div>
                                <button className='pop_up_buttons' onClick={() => { setNum(num + 1) 
                                    }}>+1</button>
                            </div>
                            <div className='pop_up_font'>Quantidade</div>
                            <div className='pop_up_adjust2'>Total: {(selectedProduct.value*num).toFixed(2)}</div>
                            <div className='pop_up_adjust2'>Forma de pagamento</div>
                            <div className='pop_up_payments'>
                                <button onClick={() => { setMethod('credit-card') }}>Credit Card</button>
                                <button onClick={() => { setMethod('debit-card') }}>Debit Card</button>
                                <button onClick={() => { setMethod('pix') }}>Pix</button>
                                <button onClick={() => { setMethod('cash-on-delivery') }}>Cash on Delivery</button>

                                {
                                    method == 'credit-card' ?
                                    'Credit Card'
                                    : method == 'debit-card' ?
                                    'Debit Card'
                                    : method == 'pix' ?
                                    'Pix'
                                    :
                                    'Cash on Delivery'
                                }

                            </div>
                            <button className='pop_up_buttons' onClick={() => setSelectedProduct(null)}>Voltar</button>
                        </div>
                    </div>
                    :
                    ''
            }

        </div>
    )

}

export default ProductModal