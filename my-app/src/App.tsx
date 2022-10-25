import React from 'react';
import TitleBar from './components/HeaderComponent';
import NavBarComponent from './components/NavBarComponent';


function App() {
	return (
		<div className="App bg-gray-800 min-h-screen dark text-gray-200">
			<div className='mx-5'>
				<TitleBar />
				<NavBarComponent />
			</div>
		</div>
	);
}

export default App;
