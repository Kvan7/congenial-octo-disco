import { ReactNode } from "react";

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

type PropsWithChildren = {
	about: string | undefined;
	name: string;
	url: string;
	lang?: [string];
	commitCount?: number;
	clone?: string;
	license?: string;
	lastCommit?: Commit;
	children?: ReactNode | undefined;
};


const RepoFull = (props: PropsWithChildren) => {
	return (
		<div>
			repoFull
		</div>
	);
};

const RepoShort = () => {
	return (
		<div>
			repo shrt
		</div>
	);
};


export { RepoFull, RepoShort };