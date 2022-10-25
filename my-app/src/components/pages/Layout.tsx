import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

type Props = {}

type State = {}

export default class Layout extends Component<Props, State> {
	state = {}

	render() {
		return (
			<div>
				<nav className='bg-green-600 text-lg text-black font-semibold rounded sticky top-0 my-4'>
					<NavLink to="/" end className={(navigationData) => 'px-10 inline-block rounded-l ' + (navigationData.isActive ? "bg-green-800" : "bg-green-600")}>Home</NavLink>
					<NavLink to="/about" className={(navigationData) => 'px-10 inline-block ' + (navigationData.isActive ? "bg-green-800" : "bg-green-600")}>About</NavLink>
				</nav>
				<Outlet />
			</div>
		)
	}
}