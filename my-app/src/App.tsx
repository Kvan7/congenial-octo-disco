import React from 'react';
import TitleBar from './components/HeaderComponent';
import NavBarComponent from './components/NavBarComponent';


function App() {
	return (
		<div className="App bg-gray-400 min-h-screen">
			<div className='bg-gray-400'>
				<NavBarComponent />
				<TitleBar />
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
		</div>
	);
}

export default App;
