import React, { Component } from 'react';

type Props = {};

type State = {};

export default class FourZeroFour extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className='px-5'>
				<div className='text-xl font-extrabold tracking-wider'>404</div>
				you got haked
			</div>
		);
	}
}
