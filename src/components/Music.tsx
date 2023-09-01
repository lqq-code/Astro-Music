import { useState } from 'react';
import './Music.css';

export default function Music({ musics }: any){

	return (
		<>
			<div  className="music">
			<ul>
					{
						musics.map((post) => (
							<li key={post.id} >
								<a href={`/music/${post.id}/`}>
									<img width={230} height={230} src={post.heroImage} alt="" />
									<div className="musicTitle">{post.title}</div>
									<div className="musicDes">{post.description}</div>
								</a>
							</li>
						))
					}
				</ul>
			</div>
		</>
	);
}