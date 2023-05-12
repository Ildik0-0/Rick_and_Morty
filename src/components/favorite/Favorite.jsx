import Card from "../card/Card"
import { connect, useDispatch } from "react-redux"
import { filterCards, orderCards } from "../../redux/action"
import { useState } from "react";

const Favotite = ({myFavotites}) =>{

    const dispatch = useDispatch()
    const [aux, setAux] = useState(false);

    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value))
        setAux(true);
    }

    const handleFilter= (event) =>{
        dispatch(filterCards(event.target.value)) 
    }


    return(
     <>
     <select onChange={handleOrder}>
        <option value='A'>Ascendente </option>
        <option value='D'>Descendente </option>
     </select>

        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Femele">Femele</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>

     
     {
        myFavotites?.map(fav=>{
            return(
                <Card
                
                key={fav.id}
                id={fav.id}
                name={fav.name}
                species={fav.species}
                gender={fav.gender}
                image={fav.image}
                onClose={fav.onClose}

                
                />
            )
        })
     }
     
     </>
    )
}

const mapStateToProps = (state) => {
    return{
    myFavotites: state.myFavotites
    }
}


export default connect(
    mapStateToProps,
    null,
)(Favotite)