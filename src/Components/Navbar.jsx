import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Login from './Login';
import { useState } from 'react';
import Signup from './signup';
import { useContext } from 'react';
import { DemoContext } from '../context/DemoContext';
import { UserContext } from '../context/UserContext';
import { Link } from '@mui/material';
function Navbar() {
    const [open, setOpen] = useState(false)
    const { loginuser, setloginuser } = useContext(UserContext)

    function openLogin() {
        setOpen(true)
    }
    const [signopen, setSignopen] = useState(false)
    function openSignup() {
        setSignopen(true)
    }

    function logout() {
        setloginuser(null)
    }


    // function changedemo() {
    //     setdemo('valuechanges')
    // }
    return (
        <>
            <div className="nav">
                <div className="logo">

                    <img className='flip-main' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" />
                    <p className='explore'>Explore <span className='plus'>Plus</span>
                        <img className='star' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="" />
                    </p>
                </div>
                <div className="search">
                    <input className='search-input' type="text" placeholder="serach for, products brands and more" />
                    <SearchIcon />
                </div>
                {


                    loginuser ? <p className='navbarname'>{loginuser.username}</p> :
                        <>
                            <button onClick={openLogin} className='login'>login</button>
                            <button onClick={openSignup} className='navbarsignup'>sign up</button>

                        </>
                }
                <Login open={open} setOpen={setOpen} />
                <Signup signopen={signopen} setSignopen={setSignopen} />

                {/* <div className="icon"></div> */}
                <p className='text'>More
                    <ArrowDropDownIcon />
                </p>
                <p className='text'>
                    <ShoppingCartIcon />
                    Cart</p>
                <Link to="/buynowproduct"> view orders</Link>

                {loginuser && <button onClick={logout}>logout</button>}
            </div>

        </>
    )
}
export default Navbar;
