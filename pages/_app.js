import { useState, useEffect } from "react"
import AppContext from "../store/AppContext"
import "../styles/app.css"

export default function TwitterCloneApp({ Component, pageProps }) {
	const [theme, themeSet] = useState(null)

	useEffect(() => {
		const theme = localStorage.getItem("THEME") || "light";
		themeSet(theme);
	}, [])

	const changeTheme = theme => {
		themeSet(theme)
		localStorage.setItem("THEME", theme)
	}

	useEffect(() => {
		document.querySelector("html").setAttribute("theme", theme)
	}, [theme])

	return <AppContext.Provider value={{ theme, changeTheme }}>
		<Component {...pageProps} />
	</AppContext.Provider>
}