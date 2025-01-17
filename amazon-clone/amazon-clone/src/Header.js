import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
export default function Header() {
    return (
        <nav className="header">
            {/* Logo */}
            <Link to="/">
                <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo"/>
            </Link>

            {/* Search box */}
            <div className="header_search">
                <input  type="text" className='header_searchInput'/> 
                <SearchIcon className="header_searchIcon"/>
            </div>

            {/* 3links */}
            {/*link1*/}
            <div className="header_nav">
            <Link to="/login"className="header_link">
                <div className="header_option">
                    <span className="header_optionLineOne">Hello,Deeptej</span>
                    <span className="header_optionLineTwo">Sign In</span>
                </div>
            </Link>
            {/*link2*/}
            <Link to="/"className="header_link">
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
            </Link>
            {/*link3*/}
            <Link to="/"className="header_link">
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
            </Link>
            {/*link4*/}
            <Link to="/checkout"className="header_link">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header_optionLineTwo header_basketCount">0</span>
                </div>
            </Link>
            </div>
            {/**/}

        </nav>
    )
}
