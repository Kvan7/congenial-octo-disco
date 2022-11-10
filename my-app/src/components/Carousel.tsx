import React, { ReactNode, useEffect, useState } from 'react';

type PropsWithChildren = {
	children?: ReactNode | undefined;
};

const defaultProps: PropsWithChildren = {
	children: <div />,
};

// type State = {}

const arrowCSS =
	'z-10 w-12 mx-2 rounded bg-slate-600 text-black font-bold text-xl'; // border border-solid border-gray-300';

function Carousel(props: PropsWithChildren) {
	const { children } = props;
	const [currentIndex, setCurrentIndex] = useState(0);
	const [length, setLength] = useState(React.Children.toArray(children).length);

	useEffect(() => {
		setLength(React.Children.toArray(children).length);
	}, [children]);

	const next = () => {
		if (currentIndex < length - 1) {
			setCurrentIndex((prevState) => prevState + 1);
		} else {
			setCurrentIndex(() => 0);
		}
	};

	const prev = () => {
		if (currentIndex > 0) {
			setCurrentIndex((prevState) => prevState - 1);
		} else {
			setCurrentIndex(() => length - 1);
		}
	};

	const pageStatus = [];

	for (let i = 0; i < length; i++) {
		pageStatus.push(
			<div
				className={`w-12 h-4 my-2 mx-2 rounded-sm ${
					currentIndex === i ? 'bg-neutral-300' : 'bg-neutral-600 '
				}`}
				role='button'
				tabIndex={0}
				aria-label={`Page ${i.toString()}`}
				onClick={() => setCurrentIndex(i)}
				onKeyPress={() => setCurrentIndex(i)}
			/>
		);
	}

	return (
		<div className='w-full grid place-items-center '>
			{/* carousel-container */}
			<div className='w-full flex  max-w-3xl '>
				<button
					className={`${arrowCSS} left-6`}
					onClick={prev}
					onKeyPress={prev}
					type='button'
					style={{ transform: `translateY(-50 %)` }}
				>
					&lt;
				</button>
				{/* carousel-wrapper */}
				<div className='w-full flex relative '>
					{/* carousel-content-wrapper */}
					<div className='overflow-hidden w-full h-full'>
						{/* carousel-content */}
						<div
							className='flex scrollbar-hide transition-all duration-200 '
							style={{ transform: `translateX(-${currentIndex * 100}%)` }}
						>
							{children}
						</div>
					</div>
				</div>
				<button
					className={`${arrowCSS} right-6`}
					onClick={next}
					onKeyPress={next}
					type='button'
					style={{ transform: `translateY(-50 %)` }}
				>
					&gt;
				</button>
			</div>
			<div className='flex'>{pageStatus}</div>
		</div>
	);
}

Carousel.defaultProps = defaultProps;

export default Carousel;
