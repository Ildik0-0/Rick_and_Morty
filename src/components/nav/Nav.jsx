import SearchBar from "../searchbar/SearchBar";
import {Link, NavLink, useNavigate} from 'react-router-dom'

const Nav = ({onSearch, setAccess}) => {

    //const navigate = useNavigate();

    const handleLogOut = () => {
        setAccess(false);
       // navigate('/')
    }

    return(
        <nav>
            <SearchBar onSearch={onSearch}/>
            <button>
                <NavLink to='/about'>About</NavLink>
            </button>
            <button>
                <NavLink to='/home'>Home</NavLink>
            </button>

            <button>
            <NavLink to='/favorite'>Favorite</NavLink>
            </button>

            <button onClick={handleLogOut}>Log Out</button>
                <SearchBar onSearch={onSearch}/>

        </nav>
    )
}

export default Nav;