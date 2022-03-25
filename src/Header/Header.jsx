import './Header.css'

import React,{useEffect, useState} from 'react';

import All from '../All/All';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Delivery from '../Deliver/Deliver';
import { IconFlagUS } from 'material-ui-flags';
import LanguageChange from '../LanguageChange/languageChange'
import {Link} from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Login from '../Login/Login';
import Popover from '@mui/material/Popover';
import SearchIcon from '@mui/icons-material/Search';
import SecondHeader from './Header__2'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Typography from '@mui/material/Typography';
import {auth} from '../Login/firebase';
import {useStateValue} from '../Reducers/StateProvider';

function Header() {

    const [openLogin, setOpenLogin] = useState(false);
    const [openDelivery, setOpenDelivery] = useState(false);
    const [openAll, setOpenAll] = useState(false)
    const [{basket,user,country},dispatch] = useStateValue();
    const [name, setName] = useState(null) ;
    
    useEffect(()=>{
        setName(user?.displayName);
    },[user?.displayName])
    const handleAuth = () =>{
        if(user){
            auth.signOut();
        }
    }
    let state = (country===null)?'Nigeria':country

    function GuestLogin() {
        const [anchorEl, setAnchorEl] = useState(null);

        const handlePopoverOpen = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handlePopoverClose = () => {
            setAnchorEl(null);
        };

        const open = Boolean(anchorEl);

        return (
            <div>
            <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                
            >
                <div className="header__option" onClick={handleAuth}>
                        <span className="header__optionLineOne">Hello {user?`${name}`:'Guest'}</span>
                        <button className="header__optionLineTwo header__sigIin__button" onClick={()=>{setOpenLogin(true)}}>{user? 'Sign Out': 'Sign In'} </button>
                        {openLogin && !user && <Login closeLogin={setOpenLogin} />}
                </div>
            </Typography>
            <Popover
                id="mouse-over-popover"
                sx={{
                pointerEvents: 'mouse',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography
                sx={{ p: 1 }}
                // onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                >
                    <button onclick={handleAuth} onClick={()=>{setOpenLogin(true)}}>
                        <p>{user? 'Sign Out': 'Sign In'}</p>
                    </button>
                </Typography>
            </Popover>
            </div>
        );
    }


    return (
        <div className="header__container">
            <div id="home"></div>
            <div className="header">
                <Link to='/'>
                {/* logo */}
                <img 
                className="header__logo" 
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt="Amazon"
                ></img>
                </Link>
                {/* Delivery location */}
                <button className="delivery__btn" onClick={()=>{setOpenDelivery(true)}}>
                    <LocationOnOutlinedIcon className='delivery__icon'/>
                    <div>
                        <span>Deliver to</span><br/>
                        <span id="user__location">{(country===null)?'Nigeria':country}</span>
                    </div>
                </button>
                {openDelivery && <Delivery closeDelivery={setOpenDelivery} />}
                {/* search  bar */}
                <div className="header__search">
                    <div className="header__search__all">
                        <All />
                    </div>
                    <input
                    className="header__searchInput"
                    />
                    <SearchIcon 
                    className="header__searchIcon"
                    />
                </div>
                <div className="header__language__change">
                    <LanguageChange/>
                </div>
                {/* nav items */}
                <div className="header__nav">
                    {GuestLogin()}
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                    <Link to='/checkout'>
                        <div className="header__optionBasket">
                            <ShoppingCartOutlinedIcon/>
                            <span className="header__optionLineTwo header__basketCount">{basket?.length}<h4>cart</h4></span>
                        </div>  
                    </Link>      
                </div>
            </div>
            <div className="header__2">
                <SecondHeader/>
            </div>
        </div>
    )    
}

export default Header;
