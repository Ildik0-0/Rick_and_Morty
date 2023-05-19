import SearchBar from "../searchbar/SearchBar";
import {Link, NavLink, useNavigate} from 'react-router-dom'
import style from "./nav.module.css"

const Nav = ({onSearch, setAccess}) => {

    //const navigate = useNavigate();

    const handleLogOut = () => {
        setAccess(false);
       // navigate('/')
    }

    return(
        <nav className={style.nav}>
            <SearchBar onSearch={onSearch}/>
            
            <div className={style.btns}>
                <Link to='/about'> ABOUT </Link>
                <Link to='/home'> HOME </Link>
                <Link to='/favorite'> Favorites </Link>
            </div>

            <div className={style.logout}>
                <button  onClick={handleLogOut}>Log Out</button>
            </div>
            
                {/* <SearchBar onSearch={onSearch}/> */}

        </nav>
    )
}

export default Nav;