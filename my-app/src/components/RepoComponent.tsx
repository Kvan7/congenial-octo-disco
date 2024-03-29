import React from 'react';
import CommitComponent from './CommitComponent';

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

type PropsWithChildren = {
	className?: string;
	about: string | undefined;
	name: string;
	url: string;
	// lang?: string[];
	// commitCount?: number;
	clone: string;
	// license?: string;
	lastCommit?: Commit;
	imgName?: string;
	// children?: ReactNode | undefined;
};

type PropsWithChildrenShort = {
	name: string;
	// url: string;
	about: string | undefined;
	imgName?: string;
	className?: string;
};

const defaultCommit: Commit = {
	desc: '',
	branch: '',
	contributer: '',
	date: new Date(0),
	files: 0,
	add: 0,
	del: 0,
	verified: false,
};

function RepoFull(props: PropsWithChildren) {
	const { name, about, imgName, className, url, clone, lastCommit } = props;

	return (
		<div className={className}>
			<div className='my-4 p-4 border-green-300 border-4 flex ' id={name}>
				<div className='w-7/12'>
					<div className='border-b-4 w-full'>
						<a
							className='text-3xl font-bold tracking-wider font-mono'
							href={url}
							target='_blank'
							rel='noreferrer'
						>
							{name}
						</a>
					</div>
					<div className='mt-4'>{about}</div>
					<div className='py-4'>
						<code className='bg-slate-600 py-1 px-2 ml-4 '>
							{`git clone ${clone}`}
						</code>
					</div>
					{lastCommit !== undefined && <CommitComponent commit={lastCommit} />}
				</div>
				<div className='grid place-items-center w-5/12'>
					<img className='' src={`./img/${imgName}.png`} alt='icon' />
					<div className='text-center'>
						<a
							className='underline'
							href={url}
							target='_blank'
							rel='noreferrer'
						>
							{url}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

function RepoShort(props: PropsWithChildrenShort) {
	const { name, about, imgName, className } = props;

	return (
		<div className={className}>
			<div className='border-green-600 py-4 px-2 flex border'>
				<div className='w-1/2 px-2'>
					<img className='' src={`./img/${imgName}.png`} alt='icon' />
				</div>
				<div className='w-1/2 px-2'>
					<a href={`#${name}`} className='text-4xl font-bold underline'>
						{name}
					</a>
					<div className='text-lg'>{about}</div>
				</div>
			</div>
		</div>
	);
}

RepoFull.defaultProps = {
	// lang: [''],
	// commitCount: 0,
	// license: '',
	className: '',
	lastCommit: defaultCommit,
	imgName: '',
	// children: <div />,
};
RepoShort.defaultProps = {
	imgName: '',
	className: '',
};

export { RepoFull, RepoShort };
