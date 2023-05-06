//import data from "../data";
//import characters from "../data";
import style from '../card/card.module.css'
import { NavLink } from 'react-router-dom';
export default function Card(props) {
   return (
      <div className={style.card}>
         {
            <>
            <div className={style.conteiner}>

               <button className={style.onClose} onClick={() => props.onClose(props.id)} >Close!</button>
               <NavLink to={`/detail/${props.id}`}>
                  <h2>{props.name}</h2>
               </NavLink>
               <h2>{props.status}</h2>
               <h2>{props.species}</h2>
               <h2>{props.gender}</h2>
               <h2>{props.origin}</h2>
               <img className={style.image} src={props.image} alt='' />
               </div>
            </>
    }
      </div>
   );
}
