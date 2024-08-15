import './Flavors/Sweet'

function Purchases() {

    var number = 0 

    return (
        <div>
            <button onClick={number = number + 1}>+</button>
            <div>{number}</div>
        </div>
    )

}

export default Purchases