import React from "react"
import { useRouter } from 'next/router'
import NavButton from "./nav-button.js"
import { 
	Twitter, Home, Explore, 
	Notification, Messages, Bookmark, 
	Lists, More, Profile, 
	HomeFill, ExplorerFill, 
	NotificationFill, MessagesFill, 
	BookmarkFill, ListsFill, ProfileFill 
} from "../components/icons"
import styles from "./navigation.module.css"
import TextTitle from "./text-title"

function Navigation({ flat = false, selectedKey }) {
	const MENU = [
		{icon: <Twitter style={{fontSize: 30}}/>},
		{key: "home", path: "/", title: "Home", icon: <Home/>, iconSelected: <HomeFill/>},
		{key: "explore", path: "/explore", title: "Explore", icon: <Explore/>, iconSelected: <ExplorerFill/>},
		{key: "notification", path: "/notification", title: "Notifications", icon: <Notification/>, notify: 22, iconSelected: <NotificationFill/>},
		{key: "messages", path: "/messages", title: "Messages", icon: <Messages/>, notify: 38, iconSelected: <MessagesFill/>},
		{key: "bookmarks", path: "/bookmarks", title: "Bookmarks", icon: <Bookmark/>, iconSelected: <BookmarkFill/>},
		{key: "lists", path: "/lists", title: "Lists", icon: <Lists/>, iconSelected: <ListsFill/>},
		{key: "profile", path: "/profile", title: "Profile", icon: <Profile/>, iconSelected: <ProfileFill/>},
		{key: "more", title: "More", icon: <More/>}
	]

	const router = useRouter()
	return <nav className={styles.nav}>
		{MENU.map(menu => (
			<NavButton Selected = {String(router.pathname == menu.path)}
			href = {menu.path}
			notify = {menu.notify}
			className = {styles.navButton}>
				{router.pathname === menu.path ? menu.iconSelected : menu.icon}
				{(menu.title && !flat) && <TextTitle>{menu.title}</TextTitle>}
			</NavButton>
		))}
	</nav>
}

export default Navigation