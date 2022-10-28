import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

type Props = {}

type State = {}

const link_winds = 'px-10 inline-block max-w-xs w-1/12 text-center '

export default class Layout extends Component<Props, State> {
	state = {}


	render() {
		return (
			<div>
				<nav className='bg-green-600 text-lg text-black font-semibold rounded-lg sticky top-0 my-4 mx-5'>
					<NavLink to="/" end className={(navigationData) => link_winds + 'rounded-l-lg ' + (navigationData.isActive ? "bg-green-800" : "bg-green-600 hover:bg-green-700")}>Home</NavLink>
					<NavLink to="/git" className={(navigationData) => link_winds + '' + (navigationData.isActive ? "bg-green-800" : "bg-green-600  hover:bg-green-700")}>Git</NavLink>
					<NavLink to="/about" className={(navigationData) => link_winds + '' + (navigationData.isActive ? "bg-green-800" : "bg-green-600  hover:bg-green-700")}>About</NavLink>
				</nav>
				<Outlet />
			</div>
		)
	}
}