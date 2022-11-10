import React, { Component } from 'react';

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
					<div className='flex'>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Blanditiis, libero praesentium. Enim, ex animi aspernatur nostrum
							est quae corporis qui quasi, aliquam cupiditate magnam eveniet,
							soluta modi recusandae impedit deserunt.
						</div>
						<div className='flex'>
							<div>
								<div className='bg-green-800 border h-48 w-48' />
								<div className='bg-green-800 border h-48 w-48' />
								<div className='bg-green-800 border h-48 w-48' />
								<div className='bg-green-800 border h-48 w-48' />
							</div>
							<div>
								<div className='bg-green-800 border h-48 w-48' />
								<div className='bg-green-800 border h-48 w-48' />
								<div className='bg-green-800 border h-48 w-48' />
								<div className='bg-green-800 border h-48 w-48' />
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
