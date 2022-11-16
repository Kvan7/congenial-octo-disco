import React from 'react';
// import Carousel from './Carousel';
import { Carousel } from 'react-responsive-carousel';
import repos from './pages/git.json';
import { RepoShort } from './RepoComponent';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type Props = {
	className?: string;
};

const defaultProps: Props = {
	className: '',
};

function GitCarousel(props: Props) {
	const { className } = props;

	const elements = [];

	for (let i = 0; i < repos.length; i++) {
		const element = repos[i];
		if (i < 5) {
			elements.push(
				<RepoShort
					about={element.about}
					name={element['repo-name']}
					imgName={element.img}
					// url={element.url}
					// clone={element.clone}
					className='w-full shrink  md:flex-grow'
				/>
			);
		}
	}
	return (
		<div className={className}>
			<Carousel
				infiniteLoop
				autoPlay
				interval={10000}
				className='min-w-0'
				showThumbs={false}
			>
				{elements}
			</Carousel>
		</div>
	);
}

GitCarousel.defaultProps = defaultProps;

export default GitCarousel;
