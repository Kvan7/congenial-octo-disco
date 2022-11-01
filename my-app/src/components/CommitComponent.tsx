import React from 'react'

type Commit = {
	desc: string,
	branch?: string,
	contributer: string,
	date?: Date,
	files?: number,
	add?: number,
	del?: number,
	verified?: boolean
};

type Props = {
	commit: Commit,
};

const CommitComponent = (props: Props) => {

	return (
		<div className='m-4 border p-2'>
			<div className='text-xl font-semibold'>
				{props.commit.desc}
			</div>
			<div className="italic">
				{props.commit.contributer}
			</div>
		</div>
	);
}


export default CommitComponent;
