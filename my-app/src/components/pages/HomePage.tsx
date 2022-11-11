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
		return (
			<>
				<div className='w-full h-64 bg-blue-400' />
				<div className='px-5'>
					<div className='text-right text-4xl font-extrabold tracking-wider'>
						Welcom Text
					</div>
					<div className='p-2 text-lg'>
						This is my website and i do coding and cool stuffs. I go to school
						still and i am internemt student. I ddo agmes too play games
					</div>
					<GitCarousel />
					<div className='text-lg w-full border-b'> This site uses: </div>
					<div className='flex flex-wrap justify-around'>
						<img src='./logo192.png' alt='react-logo' className=' h-24 w-24' />
						<img src='./logo192.png' alt='react-logo' className=' h-24 w-24' />
						<img src='./logo192.png' alt='react-logo' className=' h-24 w-24' />
						<img src='./logo192.png' alt='react-logo' className=' h-24 w-24' />
						<img src='./logo192.png' alt='react-logo' className=' h-24 w-24' />
						<img src='./logo192.png' alt='react-logo' className=' h-24 w-24' />
						<img src='./logo192.png' alt='react-logo' className=' h-24 w-24' />
						<img src='./logo192.png' alt='react-logo' className=' h-24 w-24' />
					</div>
				</div>
			</>
		);
	}
}
