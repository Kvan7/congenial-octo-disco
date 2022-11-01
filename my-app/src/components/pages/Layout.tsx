import React, { useEffect, useRef, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

type Props = {}

type State = {}

const link_winds = 'px-10 inline-block max-w-xs w-1/12 text-center '

const Layout = (props: Props) => {
	const [isSticky, setIsSticky] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);
	// mount 
	useEffect(() => {
		const cachedRef = ref.current;
		const observer = new IntersectionObserver(
			([e]) => {
				// console.log(e);
				setIsSticky(!e.isIntersecting);
			},
			{
				threshold: [0],
				rootMargin: "16px 0px 0px 0px",
			}
		);
		if (cachedRef) {
			observer.observe(cachedRef);
			// unmount
			return () => observer.unobserve(cachedRef);
		}

	}, [isSticky, ref])
	const whenSticky = "";
	const whenNotSticky = "rounded-lg top-0 my-4 mx-5";
	return (
		<div>
			<div ref={ref} id="NavBarDivComponent" className="-top-px pt-px" />
			<nav className={(isSticky ? whenSticky : whenNotSticky) + ' bg-green-600 text-lg text-black font-semibold top-0 my-4 sticky z-50'}>
				<NavLink to="/" end className={(navigationData) => link_winds + (isSticky ? " " : 'rounded-l-lg ') + (navigationData.isActive ? "bg-green-800" : "bg-green-600 hover:bg-green-700")}>Home</NavLink>
				<NavLink to="/git" className={(navigationData) => link_winds + '' + (navigationData.isActive ? "bg-green-800" : "bg-green-600  hover:bg-green-700")}>Git</NavLink>
				<NavLink to="/about" className={(navigationData) => link_winds + '' + (navigationData.isActive ? "bg-green-800" : "bg-green-600  hover:bg-green-700")}>About</NavLink>
			</nav>
			<Outlet />
		</div>
	);
}

export default Layout;