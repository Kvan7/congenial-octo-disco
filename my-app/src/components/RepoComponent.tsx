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
	about: string | undefined;
	name: string;
	url: string;
	lang?: [string];
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
		<div className="my-4 p-2 border-green-300 border-4 flex ">
			<div>
				<div>
					<a className="text-xl font-bold tracking-wider underline" href={props.url} target="_blank" rel="noreferrer">
						{props.name}
					</a>
				</div>
				<div className="">
					{props.about}
				</div>
				<div className="py-4">
					<code className="bg-slate-600 py-1 px-2 ">
						{props.clone}
					</code>
				</div>
				{
					props.lastCommit !== undefined &&
					<CommitComponent commit={props.lastCommit} />
				}
			</div>
			<div className="mr-0 ml-auto">
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

const RepoShort = () => {
	return (
		<div>
			repo shrt
		</div>
	);
};

RepoFull.defaultProps = defaultProps;

export { RepoFull, RepoShort };