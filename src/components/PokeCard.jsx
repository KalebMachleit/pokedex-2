import './PokeCard.css'

const PokeCard = (props) => {
    return (
        <div className='container'>
            <img src={props.image} alt='Input a name'></img>
            <p>This pokemon is {props.info['name']}</p>
            <p>Its id is {props.info['id']}</p>
            <p>It has a weight of {props.info['weight']}</p>
        </div>
    )
}

export default PokeCard