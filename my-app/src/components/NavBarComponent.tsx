import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/AboutPage'
import FourZeroFour from './pages/FourZeroFour'
import Git from './pages/Git'
import Home from './pages/HomePage'
import Layout from './pages/Layout'

type Props = {}

type State = {}

export default class NavBarComponent extends Component<Props, State> {
	state = {}

	render() {
		return (
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="git" element={<Git />} />
					<Route path="about" element={<About />} />
					<Route path="*" element={<FourZeroFour />} />
				</Route>
			</Routes>
		)
	}
}