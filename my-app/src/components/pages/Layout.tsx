import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

type Props = {}

type State = {}

export default class Layout extends Component<Props, State> {
	state = {}

	render() {
		return (
			<div>
				<nav className='bg-green-600 text-lg text-black font-semibold rounded'>
					<NavLink to="/" className={(navigationData) => (navigationData.isActive ? "bg-green-800" : "bg-green-600") + ' px-10 inline-block rounded-l'}>Home</NavLink>
					<NavLink to="/about" className={(navigationData) => (navigationData.isActive ? "bg-green-800" : "bg-green-600") + ' px-10 inline-block'}>About</NavLink>
				</nav>
				<Outlet />
			</div>
		)
	}
}