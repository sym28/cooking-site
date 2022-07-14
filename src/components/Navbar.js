import Searchbar from './Searchbar'

import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

// styles
import './Navbar.css'

export default function Navbar() {

    const {color} = useTheme()


    return (
        <div className='navbar' style={{backgroundColor: color}}>
            <nav>
            <Link to='/' className='brand'>
                <h1>Cooking Recipes</h1>
            </Link>
            {/* <Searchbar></Searchbar> */}
            <Link to='/create'>Create Recipe</Link>
            </nav>
        </div>
    )
}
