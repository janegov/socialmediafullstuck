import DeckIcon from '@mui/icons-material/Deck';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import {Link} from "react-router-dom"
import "./navBar.scss"
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const NavBar = () => {

  const {currentUser} = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{textDecoration: "none"}}>
         <span>TravelShare</span>
        </Link>
        <DeckIcon/>
        <MenuIcon />
        <div className="search">
          <SearchIcon/>
          <input type="text" placeholder='Search ...' />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img 
            src={"/upload" + currentUser.profilePic} alt=""/>
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar;