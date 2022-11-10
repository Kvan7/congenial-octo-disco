import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

// type Props = {};

// type State = {}

const linkWinds = 'inline-block max-w-xs w-1/12 text-center ';

function Layout() {
	const [isSticky, setIsSticky] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);
	// mount
	useEffect(() => {
		const cachedRef = ref.current;
		const observer = new IntersectionObserver(
			([e]) => {
				setIsSticky(!e.isIntersecting);
			},
			{
				threshold: [0],
				rootMargin: '16px 0px 0px 0px',
			}
		);
		if (cachedRef) {
			observer.observe(cachedRef);
			// unmount
			return () => observer.unobserve(cachedRef);
		}
		return () => {};
	}, [isSticky, ref]);
	const whenSticky = '';
	const whenNotSticky = 'rounded-lg mx-5';
	return (
		<div>
			<div
				ref={ref}
				id='LiterallyJustHereToCheckForTopOfPageIntersection'
				className='-top-px pt-px'
			/>
			<nav
				className={`${
					isSticky ? whenSticky : whenNotSticky
				} bg-green-600 text-lg text-black font-semibold top-0 my-4 sticky z-50`}
			>
				<NavLink
					to='/'
					end
					className={(navigationData) =>
						linkWinds +
						(isSticky ? ' pl-16 pr-10 ' : 'px-10 rounded-l-lg ') +
						(navigationData.isActive
							? 'bg-green-800'
							: 'bg-green-600 hover:bg-green-700')
					}
				>
					Home
				</NavLink>
				<NavLink
					to='/git'
					className={(navigationData) =>
						`${linkWinds}px-10 ${
							navigationData.isActive
								? 'bg-green-800'
								: 'bg-green-600  hover:bg-green-700'
						}`
					}
				>
					Git
				</NavLink>
				<NavLink
					to='/about'
					className={(navigationData) =>
						`${linkWinds}px-10 ${
							navigationData.isActive
								? 'bg-green-800'
								: 'bg-green-600  hover:bg-green-700'
						}`
					}
				>
					About
				</NavLink>
				<a
					href='https://search.kvan.dev'
					className={`${linkWinds}px-10 bg-green-600  hover:bg-green-700`}
				>
					{' '}
					Search{' '}
				</a>
			</nav>
			<Outlet />
		</div>
	);
}

export default Layout;
