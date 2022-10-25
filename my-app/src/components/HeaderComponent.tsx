import { Component, ReactNode } from "react";

class TitleBar extends Component {


	render(): ReactNode {
		return (
			<div className="h-64 relative">
				<p className="font-mono text-5xl text-green-300 font-black absolute bottom-0 left-16">Tilte text 0</p>
			</div>
		);
	}
}

export default TitleBar;