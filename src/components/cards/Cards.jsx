
//import characters from '../data';
import Card from '../card/Card';
import style from '../cards/cards.module.css'



export default function Cards({characters, onClose}) {
   return( 
   <div className={style.cards}>
    {
      characters.map(({id, name, status, species, gender, origin, image}) =>{
         return (
               <Card
                  key={id}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  image={image}
                  origin={origin.name}
                  onClose={onClose}
               />
         )
      })
    }
   </div>

 
   
   )
}
