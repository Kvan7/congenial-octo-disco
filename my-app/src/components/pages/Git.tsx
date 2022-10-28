import React, { Component } from 'react'
import Carousel from '../Carousel'

type Props = {}

type State = {}

const carousel_child_css = 'w-full shrink-0 flex-grow';

export default class Git extends Component<Props, State> {
	state = {}

	render() {
		return (
			<div className='px-5'>
				<div className='text-3xl'>
					Git
				</div>
				<Carousel height="h-fit">
					<img src="https://cataas.com/cat/says/hello" alt='1' className={carousel_child_css} />
					<img src="https://cataas.com/cat/says/imNumer2" alt='2' className={carousel_child_css} />
					{/* <h1 className={carousel_child_css}>bottom_text</h1> */}
					<img src="https://cataas.com/cat/says/Last" alt='3' className={carousel_child_css} />
				</Carousel>
			</div>
		)
	}
}