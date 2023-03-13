import React, { Component } from 'react';
import GitCarousel from '../GitCarousel';

type Props = {};

type State = {};

export default class Home extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {};
	}

	render() {
		const iconPath = './img/icons/';
		return (
			<>
				<div className='w-full h-1/3 bg-blue-400' />
				<div className='px-5'>
					{/* Header Element */}
					<div className='text-right text-4xl font-extrabold tracking-wider'>
						Hello Fellow Internet Travelers!
					</div>
					<div className='p-2 text-lg'>
						This is my website, currently under development but will be updated
						soon(hopefully)
					</div>
					<div className='w-full flex justify-center'>
						<GitCarousel className='md:w-6/12 sm:w-10/12 w-full p-1 shrink' />
					</div>
					<div className='text-lg w-full border-b'> This site uses: </div>
					<div className='flex flex-wrap justify-around'>
						<img
							src={`${iconPath}react.png`}
							alt='react-logo'
							className=' h-24 w-24'
						/>
						{/* <img src='./logo192.png' alt='react-logo' className=' h-24 w-24' />
						<img src='./logo192.png' alt='react-logo' className=' h-24 w-24' />
						<img src='./logo192.png' alt='react-logo' className=' h-24 w-24' />
						<img src='./logo192.png' alt='react-logo' className=' h-24 w-24' />
						<img src='./logo192.png' alt='react-logo' className=' h-24 w-24' />
						<img src='./logo192.png' alt='react-logo' className=' h-24 w-24' />
						<img src='./logo192.png' alt='react-logo' className=' h-24 w-24' /> */}
					</div>
					<div className=''>
						<div className='text-lg w-full border-b'> Contact Info: </div>
					</div>
				</div>
			</>
		);
	}
}
