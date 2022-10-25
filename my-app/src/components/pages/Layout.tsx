import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

type Props = {}

type State = {}

export default class Layout extends Component<Props, State> {
	state = {}

	render() {
		return (
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</nav>

				<hr />

				<Outlet />
			</div>
		)
	}
}