import { ReactNode } from "react";
import CommitComponent from "./CommitComponent";

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
	className?: string;
	about: string | undefined;
	name: string;
	url: string;
	lang?: string[];
	commitCount?: number;
	clone: string;
	license?: string;
	lastCommit?: Commit;
	imgName?: string;
	children?: ReactNode | undefined;
};

const defaultCommit: Commit = {
	desc: "",
	branch: "",
	contributer: "",
	date: new Date(0),
	files: 0,
	add: 0,
	del: 0,
	verified: false
};

const defaultProps: PropsWithChildren = {
	about: undefined,
	name: "",
	url: "",
	lang: [""],
	commitCount: 0,
	clone: "",
	license: "",
	lastCommit: defaultCommit,
	imgName: "",
}


const RepoFull = (props: PropsWithChildren) => {
	return (
		<div className="my-4 p-4 border-green-300 border-4 flex ">
			<div className="w-7/12">
				<div className="border-b-4 w-full">
					<a className="text-3xl font-bold tracking-wider font-mono" href={props.url} target="_blank" rel="noreferrer">
						{props.name}
					</a>
				</div>
				<div className="mt-4">
					{props.about}
				</div>
				<div className="py-4">
					<code className="bg-slate-600 py-1 px-2 ml-4 ">
						{'git clone ' + props.clone}
					</code>
				</div>
				{
					props.lastCommit !== undefined &&
					<CommitComponent commit={props.lastCommit} />
				}
			</div>
			<div className="grid place-items-center w-5/12">
				<img className="" src={require("../img/" + props.imgName + ".png")} alt="icon" />
				<div className="text-center">
					<a className="underline" href={props.url} target="_blank" rel="noreferrer">
						{props.url}
					</a>
				</div>
			</div>
		</div>
	);
};

const RepoShort = (props: PropsWithChildren) => {
	return (
		<div className={props.className}>
			<div className="border-green-600 py-4 px-2 flex border">
				<div className="w-1/2 px-2">
					<img className="" src={require("../img/" + props.imgName + ".png")} alt="icon" />
				</div>
				<div className="w-1/2 px-2">
					<div className="text-4xl font-bold underline">
						{props.name}
					</div>
					<div className="text-lg">
						{props.about}
					</div>
				</div>
			</div>
		</div>
	);
};

RepoFull.defaultProps = defaultProps;

export { RepoFull, RepoShort };