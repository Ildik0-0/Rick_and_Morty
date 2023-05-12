const validation = (userData) => {
    const errors = {}

    if(!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(userData.email)){
        errors.email = 'malo tu email'
    }
    if(!userData.email){
        errors.email = 'vacio mija '
    }
    if(userData.email.length > 35){
        errors.email = 'muchs dijitos mija, maximo 35'
    }

    if(!/.\*d+.*/.test(userData.password)){
        errors.password = 'la password debe contener al menos un nemero'
    }

    if(userData.password.length < 6 || userData.password.length > 10 ){
        errors.password = 'error mijo, tiene que ser entre 6 y 10'
    }

    return errors
}

export default validation