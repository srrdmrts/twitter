import * as React from "react";

function SvgRetweetFill(props) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			fill="none"
			{...props}
		>
			<path d="M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4a3.955 3.955 0 00-3.95-3.95h-5.2a1.2 1.2 0 000 2.4h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326a1.2 1.2 0 00-1.697 1.697l3.374 3.375a1.202 1.202 0 001.698 0l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326a1.202 1.202 0 001.698-1.697L5.46 3.8a1.201 1.201 0 00-1.697 0L.388 7.177a1.2 1.2 0 001.697 1.697L3.41 7.547v9.403a3.955 3.955 0 003.95 3.95h5.2a1.2 1.2 0 00.002-2.4z"
				fill="currentColor" />
		</svg>
	);
}

export default SvgRetweetFill;
