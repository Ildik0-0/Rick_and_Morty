//import data from "../data";
//import characters from "../data";
import style from '../card/card.module.css'
import { NavLink } from 'react-router-dom';
import {addFav, removeFav} from '../../redux/action'
import {connect} from 'react-redux'
import { useState, useEffect } from 'react';


function Card({ id, name, species, gender, image, status, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({id, name, species, gender, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (

      <div className={style.card}>

      
         {
            <>
            <div className={style.conteiner}>

            <button className={style.onClose} onClick={() => onClose(id)} >Close!</button>
               <NavLink to={`/detail/${id}`}>
                  <h2>{name}</h2>
               </NavLink>
               <h2>{status}</h2>
               <h2>{species}</h2>
               <h2>{gender}</h2>
               
               <img className={style.image} src={image} alt={name} />
               <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
            </div>
              
             
            </>
    }
    
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)