import React, { Component } from 'react';
import Carousel from '../Carousel';
import { RepoFull, RepoShort } from '../RepoComponent';
import repos from './git.json';

type Props = {};

type State = {};

const carousel_child_css = 'w-full shrink-0 flex-grow';

const sayss = ['hello', 'imsecond', 'last', 'nopeimhere', 'imthereallast', 'banana']

export default class GitPage extends Component<Props, State> {
	state = {}

	render() {

		var elms = [];
		var all_elms = [];
		for (let i = 0; i < 10; i++) {
			all_elms.push(
				<img src={"https://cataas.com/cat/says/hello " + i.toString()} alt={i.toString()} />
			)

		}

		var repoElements = [];
		for (let i = 0; i < repos.length; i++) {
			const element = repos[i];
			const com = element["last-commit"];
			if (i < 5) {
				elms.push(
					<RepoShort
						about={element["about"]}
						name={element["repo-name"]}
						imgName={element["img"]}
						url={element["url"]}
						clone={element["clone"]}
						className={carousel_child_css}
					/>
				);
			}
			repoElements.push(
				<RepoFull
					about={element["about"]}
					name={element["repo-name"]}
					lang={element["lang"]}
					commitCount={element["commit-count"]}
					license={element["license"]}
					url={element["url"]}
					clone={element["clone"]}
					imgName={element["img"]}
					lastCommit={{
						desc: com["desc"],
						contributer: com["contributer"],
						branch: com["branch"],
						date: new Date(com["date"]),
						files: com["files"],
						add: com["add"],
						del: com["del"],
						verified: com["verified"]
					}}
				/>
			);
		}

		return (
			<div className='px-5'>
				<div className='text-3xl'>
					Git
				</div>
				<Carousel height="h-fit">
					{elms}
				</Carousel>
				<hr />
				<div className='grid place-items-center py-4'>
					<div className="text-3xl font-bold underline"> Commit Calendar </div>
					<img className='w-full px-12 py-8' src='https://ghchart.rshah.org/Kvan7' alt='commit chart' />
				</div>
				<hr />
				{repoElements}
				<hr />
				{all_elms}

			</div>
		)
	}
}