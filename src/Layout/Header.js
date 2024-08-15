import './Header.css'

function Header() {

    return (
        <div className="header">
            <div className='div_phones'>
                <div>Telefones:</div>
                <a className='phone_link' href="https://wa.me/5516997899080?text=Ol%C3%A1!">
                    (16)997899080
                 </a>
                 <a className='phone_link' href="https://wa.me/5535992257565?text=Ol%C3%A1!">
                    (35)992257565
                 </a>
            </div>
            <img src='Images/HeaderImg.PNG' className='img'></img>
        </div>
    )
}

export default Header