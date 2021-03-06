import React from "react"
import cn from "classnames"
import randomGradient from "../../../helpers/randomGradient"
import styles from "./avatar.module.css"

function Avatar({ src = null, alt = null, size = 47, className }) {
	let img = [];

	if (!src) {
		img = <div className={cn(styles.fakePhoto, className)}
			style={{ background: randomGradient() }}>
		</div>
	} else {
		img = <img src={src} alt={alt} className={cn(styles.img, className)} />
	}

	return <div className={cn(styles.avatar)}
		style={{ width: size, height: size }}>
		{img}
	</div>
}

export default Avatar