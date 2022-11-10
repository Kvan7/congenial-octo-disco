import React, { Component } from 'react';

type Props = {};

type State = {};

export default class About extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {};
	}

	render() {
		return <div className='px-5'>About</div>;
	}
}
