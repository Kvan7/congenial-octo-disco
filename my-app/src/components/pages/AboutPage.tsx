import React, { Component } from 'react';

type Props = {};

type State = {};

export default class About extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className='px-5'>
				<div>About</div>
				<div>
					<p>
						Hi there! My name is Garrett Parker and I am a Junior at the
						University of Nebraska-Lincoln, where I am studying Software
						Engineering with minors in Math and Physics. I have always been
						fascinated by being able to create applications on computers and
						just seeing the things I make run. I am excited to continue learning
						and growing in various tech stacks and machine learning systems.
					</p>
					<p>
						In my current role as a Software Engineering Intern at Garmin, I
						have been working on a variety of projects that have allowed me to
						develop my skills in frontend development along with overall
						knowledge of software systems. I am passionate about working of
						projects for both fun and to see systems I&#39;m working on grow
						with time, and I am always looking for new challenges and
						opportunities to learn and grow. I am excited to share some of my
						work with you on my portfolio site, and I welcome the opportunity to
						discuss potential projects or collaborations. Please feel free to
						contact me via email or social media if you would like to learn
						more.
					</p>
				</div>
			</div>
		);
	}
}
