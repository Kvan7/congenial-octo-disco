import React, { ReactNode, useEffect, useState, } from 'react'

type PropsWithChildren = {
	"height": string,
	children?: ReactNode | undefined;
}

type State = {}

const arrow_css = 'z-10 absolute top-3/4 w-12 h-32 rounded bg-slate-500 border border-solid border-gray-300';

const Carousel = (props: PropsWithChildren) => {
	const { children } = props;
	const [currentIndex, setCurrentIndex] = useState(0);
	const [length, setLength] = useState(React.Children.toArray(children).length);

	useEffect(() => {
		setLength(React.Children.toArray(children).length)
	}, [children]);

	const next = () => {
		if (currentIndex < (length - 1)) {
			setCurrentIndex(prevState => prevState + 1)
		}
	}

	const prev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(prevState => prevState - 1)
		}
	}

	var pageStatus = [];

	return (
		// <>
		// 	<div className={this.props.height + ' bg-slate-700 px-64 flex'}>
		// 		<div className={this.props.height + ' bg-red-300 w-1/12'}>1</div>
		// 		<div className={this.props.height + ' bg-red-500 w-10/12'}>2</div>
		// 		<div className={this.props.height + ' bg-red-300 w-1/12'}>3</div>
		// 	</div>
		// 	<div className='bg-slate-400 flex'>
		// 		<div></div>
		// 	</div>
		// </>
		<div className={props.height + ' w-full grid place-items-center bg-green-300'}>
			<div className="w-full flex flex-col max-w-3xl ">            {/* carousel-container*/}
				{
					currentIndex > 0 &&
					<button className={arrow_css + ' left-6'} onClick={prev} style={{ transform: `translateY(-50 %)` }}>
						&lt;
					</button>
				}
				<div className="w-full flex relative ">            {/* carousel-wrapper*/}
					<div className="overflow-hidden w-full h-full">{/* carousel-content-wrapper*/}
						<div className="flex scrollbar-hide transition-all duration-200 " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>    {/* carousel-content*/}
							{children}
						</div>
					</div>
				</div>
				{
					currentIndex < (length - 1) &&
					<button className={arrow_css + ' right-6'} onClick={next} style={{ transform: `translateY(-50 %)` }}>
						&gt;
					</button>
				}
			</div>
			<div>
				{currentIndex}
			</div>
		</div>
	)

}

export default Carousel;