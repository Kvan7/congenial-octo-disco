import React, { Component } from 'react';
import Carousel from '../Carousel';
import { RepoFull } from '../RepoComponent';
import repos from './git.json';

type Props = {};

type State = {};

const carousel_child_css = 'w-full shrink-0 flex-grow';

const sayss = ['hello', 'imsecond', 'last', 'nopeimhere', 'imthereallast', 'banana']

export default class GitPage extends Component<Props, State> {
	state = {}

	render() {

		var elms = [];
		var count = Math.ceil(Math.random() * 4) + 2;
		for (var i = 0; i < count; i++) {
			elms.push(
				<img src={"https://cataas.com/cat/says/" + sayss[i]} alt={i.toString()} className={carousel_child_css} />
			);
		}

		var all_elms = [];
		for (let i = 0; i < 10; i++) {
			all_elms.push(
				<img src={"https://cataas.com/cat/says/hello " + i.toString()} alt={i.toString()} />
			)

		}

		var repoElements = [];
		for (let i = 0; i < repos.length; i++) {
			const element = repos[i];
			repoElements.push(
				<RepoFull
					about={element["about"]}
					name={element["repo-name"]}
					url={element["url"]}
					clone={element["clone"]}
					imgName={element["img"]}
					lastCommit={{
						desc: element["last-commit"]["desc"],
						contributer: element["last-commit"]["contributer"]
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