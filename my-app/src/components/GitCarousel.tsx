import React from 'react';
import Carousel from './Carousel';
import repos from './pages/git.json';
import { RepoShort } from './RepoComponent';

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
					className='w-full shrink-0 flex-grow'
				/>
			);
		}
	}
	return (
		<div className={className}>
			<Carousel>{elements}</Carousel>
		</div>
	);
}

GitCarousel.defaultProps = defaultProps;

export default GitCarousel;
