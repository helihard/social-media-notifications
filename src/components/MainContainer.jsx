import avatarAngelaGray from "../assets/images/avatar-angela-gray.webp";
import avatarAnnaKim from "../assets/images/avatar-anna-kim.webp";
import avatarJacobThompson from "../assets/images/avatar-jacob-thompson.webp";
import avatarKimberlySmith from "../assets/images/avatar-kimberly-smith.webp";
import avatarMarkWebber from "../assets/images/avatar-mark-webber.webp";
import avatarNathanPeterson from "../assets/images/avatar-nathan-peterson.webp";
import avatarRizkyHasanuddin from "../assets/images/avatar-rizky-hasanuddin.webp";
import chess from "../assets/images/image-chess.webp";

const notifications = [{
    avatar: avatarMarkWebber,
    name: "Mark Webber",
    action: "reacted to your recent post",
    linkedContent: { type: "post", title: "My first tournament today!" },
    message: null,
    isUnread: true,
    timeSinceAction: "1m ago"
  },
  {
    avatar: avatarAngelaGray,
    name: "Angela Gray",
    action: "followed you",
    linkedContent: null,
    message: null,
    isUnread: true,
    timeSinceAction: "5m ago"
  },
  {
    avatar: avatarJacobThompson,
    name: "Jacob Thompson",
    action: "has joined your group",
    linkedContent: { type: "group", title: "Chess Club" },
    message: null,
    isUnread: true,
    timeSinceAction: "1 day ago"
  },
  {
    avatar: avatarRizkyHasanuddin,
    name: "Rizky Hasanuddin",
    action: "sent you a private message",
    linkedContent: null,
    message: "Hello, thanks for setting up the Chess Club. I&apos;ve been a member for a few weeks now and I&apos;m already having lots of fun and improving my game.",
    isUnread: false,
    timeSinceAction: "5 days ago"
  },
  {
    avatar: avatarKimberlySmith,
    name: "Kimberly Smith",
    action: "commented on your picture",
    linkedContent: { type: "image", src: chess, alt: "A game of chess" },
    message: null,
    isUnread: false,
    timeSinceAction: "1 week ago"
  },
  {
    avatar: avatarNathanPeterson,
    name: "Nathan Peterson",
    action: "reacted to your recent post",
    linkedContent: { type: "post", title: "5 end-game strategies to increase your win rate" },
    message: null,
    isUnread: false,
    timeSinceAction: "2 weeks ago"
  },
  {
    avatar: avatarAnnaKim,
    name: "Anna Kim",
    action: "left the group",
    linkedContent: { type: "group", title: "Chess Club" },
    message: null,
    isUnread: false,
    timeSinceAction: "2 weeks ago"
  }
  ]

function MainContainer() {

  function renderLinkedContent(linkedContent) {
    if (!linkedContent) {
      return null;
    } else if (linkedContent.type === "post" || linkedContent.type === "group") {
      return <a href="#">{linkedContent.title}</a>;
    } else if (linkedContent.type === "image") {
      return <img src={linkedContent.src} alt={linkedContent.alt} />;
    }
    return null;
  }

  return (
    <>
      <div id="container">
        <header>
          Notifications 3
          <button>Mark all as read</button>
        </header>
        <div>
          {notifications.map((notification) => (
            <div key={notification.index}>
              <img src={notification.avatar} alt={notification.name}/>
              <div>
                <div>
                <div>{notification.name}{notification.action} {renderLinkedContent(notification.linkedContent)}</div>
                <div>{notification.timeSinceAction}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MainContainer;
