import React from 'react';
import TitleBar from './components/HeaderComponent';
import NavBarComponent from './components/NavBarComponent';

function App() {
	return (
		<div className='App bg-gray-800 min-h-screen dark text-gray-200'>
			<div className=''>
				<TitleBar />
				<NavBarComponent />
			</div>
			<div className='overflow-y-scroll hidden' />
		</div>
	);
}

export default App;
