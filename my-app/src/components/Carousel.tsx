import React, { ReactNode, useEffect, useState, } from 'react'

type PropsWithChildren = {
	"height": string,
	children?: ReactNode | undefined;
}

type State = {}

const arrow_css = 'absolute z-10 top-1/2 w-12 h-12 rounded-3xl bg-slate-500 border border-solid border-black';

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
		<div className='w-full grid place-items-center'>
			<div className="w-full flex flex-col max-w-xl">            {/* carousel-container*/}
				<button className={arrow_css + ' left-6'} onClick={prev} style={{ transform: `translateY(-50 %)` }}>
					&lt;
				</button>
				<div className="w-full flex relative">            {/* carousel-wrapper*/}
					<div className="overflow-hidden w-full h-full">{/* carousel-content-wrapper*/}
						<div className="flex scrollbar-hide transition-all duration-200 " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>    {/* carousel-content*/}
							{children}
						</div>
					</div>
				</div>
				<button className={arrow_css + ' right-6'} onClick={next} style={{ transform: `translateY(-50 %)` }}>
					&gt;
				</button>
			</div>
		</div>
	)

}

export default Carousel;