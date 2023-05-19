import style from './form.module.css'
import { useState } from 'react'
import validation from '../validation/validation'

const Forms = ({login})=>{

    const [userData, setUserData]  = useState({
        email:'',
        password:''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event)=>{
        console.log(event);
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }

    return(
        <div className={style.formDiv}>

            <form onSubmit={handleSubmit} className={style.form}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="Ingrese Email..." value={userData.email} onChange={handleChange}/>
                {errors.email && <p style={{color: "white"}}>{errors.email}</p>}
                <br />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" placeholder="Ingrese Password..." value={userData.password} onChange={handleChange} />
                {errors.password && <p style={{color: "white"}}>{errors.password}</p>}
                <br />
                <button>Submit</button>

            </form>

        </div>
    )
}

export default Forms;

//htmlFor => referencia al input 