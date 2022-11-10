import React from 'react';

type Commit = {
	desc: string;
	branch?: string;
	contributer: string;
	date?: Date;
	files?: number;
	add?: number;
	del?: number;
	verified?: boolean;
};

type Props = {
	commit: Commit;
};

function CommitComponent(props: Props) {
	const { commit } = props;
	return (
		<div className='m-4 w-5/6 border-2 bg-gray-700 p-2 border-green-800 flex'>
			<div className='w-5/6'>
				<div className='text-xl font-semibold'>{commit.desc}</div>
				<div className='italic text-left px-12'>
					<a
						href={`https://www.github.com/${commit.contributer}`}
						target='_blank'
						rel='noreferrer'
					>
						{`@${commit.contributer}`}
					</a>
				</div>
			</div>
			<div className='w-1/6 text-center font-bold text-xl'>
				<div className='text-green-600 bg-colbalt-500 '>{`+${commit.add}`}</div>
				<div className='text-red-600 bg-black'>{`-${commit.del}`}</div>
			</div>
		</div>
	);
}

export default CommitComponent;
