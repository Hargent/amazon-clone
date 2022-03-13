import React,{useState} from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom';
import {useStateValue} from '../Reducers/StateProvider';
import {auth} from '../Login/firebase';
import Login from '../Login/Login';
import Delivery from '../Deliver/Deliver';
import All from '../All/All';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';




function Header() {

    const [openLogin, setOpenLogin] = useState(false);
    const [openDelivery, setOpenDelivery] = useState(false);
    const [openAll, setOpenAll] = useState(false)
    const [{basket,user},dispatch] = useStateValue();
    const name = user?.displayName;
    const handleAuth = () =>{
        if(user){
            auth.signOut();
        }
    }


    return (
        <div className="header">
            <Link to='/'>
            {/* logo */}
            <img 
            className="header__logo" 
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt="Amazon"
            />
            </Link>
            {/* Delivery location */}
            <button className="delivery__btn" onClick={()=>{setOpenDelivery(true)}}>
                <LocationOnOutlinedIcon className='delivery__icon'/>
                <div>
                    <span>Deliver to</span><br/>
                    <span>Nigeria</span>
                </div>
            </button>
            {openDelivery && <Delivery closeDelivery={setOpenDelivery} />}
            {/* search  bar */}
            <div className="header__search">
                <button className="all__btn" onClick={()=>{setOpenAll(true)}}>
                    <div className="all__btn__content">
                        All
                        <ArrowDropDownOutlinedIcon/>
                    </div>
                    </button>
                {openAll && <All closeAll={setOpenAll} />}
                <input
                className="header__searchInput"
                />
                <SearchIcon 
                className="header__searchIcon"
                />
            </div>
            {/* nav items */}
            <div className="header__nav">
                <div className="header__option" onClick={handleAuth}>
                    <span className="header__optionLineOne">Hello {user?`${name}`:'Guest'}</span>
                    <button className="header__optionLineTwo header__sigIin__button" onClick={()=>{setOpenLogin(true)}}>{user? 'Sign Out': 'Sign In'} </button>
                    {openLogin && !user && <Login closeLogin={setOpenLogin} />}
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div> 
                <Link to='/checkout'>
                    <div className="header__optionBasket">
                        <ShoppingCartOutlinedIcon/>
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}<h4>cart</h4></span>
                    </div>  
                </Link>      
            </div>
        </div>
    )    
}

export default Header;
