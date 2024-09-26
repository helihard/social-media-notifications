import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import avatarAngelaGray from "../assets/images/avatar-angela-gray.webp";
import avatarAnnaKim from "../assets/images/avatar-anna-kim.webp";
import avatarJacobThompson from "../assets/images/avatar-jacob-thompson.webp";
import avatarKimberlySmith from "../assets/images/avatar-kimberly-smith.webp";
import avatarMarkWebber from "../assets/images/avatar-mark-webber.webp";
import avatarNathanPeterson from "../assets/images/avatar-nathan-peterson.webp";
import avatarRizkyHasanuddin from "../assets/images/avatar-rizky-hasanuddin.webp";
import chess from "../assets/images/image-chess.webp";

function MainContainer() {
  const [notifications, setNotifications] = useState([
  {
    avatar: avatarMarkWebber,
    name: "Mark Webber",
    action: "reacted to your recent post",
    linkedContent: { type: "post", title: "My first tournament today!" },
    image: null,
    message: null,
    isUnread: true,
    timeSinceAction: "1m ago"
  },
  {
    avatar: avatarAngelaGray,
    name: "Angela Gray",
    action: "followed you",
    linkedContent: null,
    image: null,
    message: null,
    isUnread: true,
    timeSinceAction: "5m ago"
  },
  {
    avatar: avatarJacobThompson,
    name: "Jacob Thompson",
    action: "has joined your group",
    linkedContent: { type: "group", title: "Chess Club" },
    image: null,
    message: null,
    isUnread: true,
    timeSinceAction: "1 day ago"
  },
  {
    avatar: avatarRizkyHasanuddin,
    name: "Rizky Hasanuddin",
    action: "sent you a private message",
    linkedContent: null,
    image: null,
    message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    isUnread: false,
    timeSinceAction: "5 days ago"
  },
  {
    avatar: avatarKimberlySmith,
    name: "Kimberly Smith",
    action: "commented on your picture",
    linkedContent: null,
    image: { src: chess, alt: "A game of chess" },
    message: null,
    isUnread: false,
    timeSinceAction: "1 week ago"
  },
  {
    avatar: avatarNathanPeterson,
    name: "Nathan Peterson",
    action: "reacted to your recent post",
    linkedContent: { type: "post", title: "5 end-game strategies to increase your win rate" },
    image: null,
    message: null,
    isUnread: false,
    timeSinceAction: "2 weeks ago"
  },
  {
    avatar: avatarAnnaKim,
    name: "Anna Kim",
    action: "left the group",
    linkedContent: { type: "group", title: "Chess Club" },
    image: null,
    message: null,
    isUnread: false,
    timeSinceAction: "2 weeks ago"
  }
  ]);

  const [openNotificationIndexes, setOpenNotificationIndexes] = useState([]);

  const markAllAsRead = () => {
    const readNotifications = notifications.map((notification) => ({...notification, isUnread: false}));
    setNotifications(readNotifications);
  }

  const markAllAsUnread = () => {
    const unreadNotifications = notifications.map((notification) => 
      notification.isUnread ? notification : ({...notification, isUnread: true}));
    setNotifications(unreadNotifications);
    setOpenNotificationIndexes([]);
  }

  function toggleNotification(index) {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification, i) =>
        i === index ? { ...notification, isUnread: false } : notification
      )
    );

    setOpenNotificationIndexes((prevOpen) =>
      prevOpen.includes(index)
        ? prevOpen.filter((i) => i !== index) 
        : [...prevOpen, index]
    );
  }

  function renderLinkedContent(linkedContent) {
    if (!linkedContent) {
      return null;
    } else if (linkedContent.type === "post" || linkedContent.type === "group") {
      return <a href="#" className={linkedContent.type === "group" ? "group-link" : "post-link"}>{linkedContent.title}</a>;
    } 
    return null;
  }

  function getNumberOfUnreadNotifications() {
    const unreadNotifications = notifications.filter((notification) => notification.isUnread);
    if (unreadNotifications.length > 0) {
      return unreadNotifications.length;
    }
      return null;
  }

  return (
    <>
      <div id="main-container">
        <header>
          <div id="headline"><b>Notifications</b> {getNumberOfUnreadNotifications() && (<span id="number-of-unread">{getNumberOfUnreadNotifications()}</span>)}</div>
          {!getNumberOfUnreadNotifications() ? (<button onClick={markAllAsUnread}>Mark all as unread</button>) : (<button onClick={markAllAsRead}>Mark all as read</button>)}
        </header>
          {notifications.map((notification, index) => (
            <div key={index}>
              <div className={`${notification.image ? "notification-image-div" : "notification-link-div"} ${notification.isUnread ? "unread" : ""}`} onClick={() => toggleNotification(index)}>
              <img src={notification.avatar} alt={notification.name} className="avatar" />
                <div>
                  <span className="name">{notification.name}</span>
                  <span className="action">{notification.action}</span>
                  {notification.linkedContent && (<span className="linked-content">{renderLinkedContent(notification.linkedContent)}</span>)}
                  {notification.isUnread && (<span className="unread-dot"><FontAwesomeIcon icon={faCircle} /></span>)}
                </div>
                <div className="time-since-action">{notification.timeSinceAction}</div>
                {notification.image && (<img src={notification.image.src} alt={notification.image.alt} className="thumbnail" />)}
                </div>
                <div>{notification.message && openNotificationIndexes.includes(index) && (<div className="message-div">{notification.message}</div>)}</div>
            </div>
          ))}
      </div>
    </>
  )
}

export default MainContainer;
