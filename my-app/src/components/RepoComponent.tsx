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
	imgName?: string;
	children?: ReactNode | undefined;
};


const RepoFull = (props: PropsWithChildren) => {
	return (
		<div className="my-4 p-2 border-green-300 border-4 flex">
			<div>
				<div>
					<a className="text-xl font-bold tracking-wider underline" href={props.url} target="_blank" rel="noreferrer">
						{props.name}
					</a>
				</div>
				<div className="">
					{props.about}
				</div>
				<code className="">
					{props.clone}
				</code>
				<div className="">
					{props.url}
				</div>
			</div>
			<div>
				<img src={require("../img/roadrisk.png")} alt="icon" />
			</div>
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