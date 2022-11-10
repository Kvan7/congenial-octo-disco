import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/AboutPage';
import FourZeroFour from './pages/FourZeroFour';
import GitPage from './pages/GitPage';
import Home from './pages/HomePage';
import Layout from './pages/Layout';

type Props = {};

type State = {};

export default class NavBarComponent extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='git' element={<GitPage />} />
					<Route path='about' element={<About />} />
					<Route path='*' element={<FourZeroFour />} />
				</Route>
			</Routes>
		);
	}
}
