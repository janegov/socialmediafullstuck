import "./leftBar.scss"
import Friends from "../../assets/1.png"
import Gallery from "../../assets/2.png"
import Videos from '../../assets/3.png'
import Messages from '../../assets/4.png'
import Groups from '../../assets/6.png'
import Location from '../../assets/5.png'
import { AuthContext } from "../../context/authContext"
import { useContext } from "react"

const LeftBar = () => {
  const {currentUser} = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menue">
          <div className="user">
          <img src={currentUser.profilePic} alt=""/>
          <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groupds</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Location} alt="" />
            <span>Location</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar