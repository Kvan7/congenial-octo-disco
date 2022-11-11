import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/AboutPage';
import FourZeroFour from './pages/FourZeroFour';
import GitPage from './pages/GitPage';
import Home from './pages/HomePage';
import Layout from './pages/Layout';

// type Props = {};

// type State = {};

export default function NavBarComponent() {
	// const { pathname, hash, key } = useLocation();

	// useEffect(() => {
	// 	// if not a hash link, scroll to top
	// 	if (hash === '') {
	// 		window.scrollTo(0, 0);
	// 	}
	// 	// else scroll to id
	// 	else {
	// 		setTimeout(() => {
	// 			const id = hash.replace('#', '');
	// 			const element = document.getElementById(id);
	// 			if (element) {
	// 				element.scrollIntoView();
	// 			}
	// 		}, 0);
	// 	}
	// }, [pathname, hash, key]); // do this on route change

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
