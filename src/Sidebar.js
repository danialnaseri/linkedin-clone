import { Avatar } from "@material-ui/core"
import React from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import avatarIMG from "./images/rsz_personal-photo-removebg-preview.png"
import './Sidebar.css'

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )
  
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
        {/* If there isn't a photoUrl then use the first charactor of email [0] */}
        <Avatar className="sidebar__avatar" src={user.photoUrl}> {user.email[0]} </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,456</p>
        </div>
        <div className="sidebar__stat">
          <p>Viewes on post</p>
          <p className="sidebar__statNumber">2,306</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
