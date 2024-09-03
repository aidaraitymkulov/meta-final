import { NavLink } from 'react-router-dom'
import './Header.scss'
export const Header = () => {
    return (
        <header className='header' id='header'>
            <nav className='header__nav'>
                <NavLink className='header__link' to='/'>TaskList</NavLink>
                <NavLink className='header__link' to='/add'>AddTask</NavLink>
            </nav>
        </header>
    )
}