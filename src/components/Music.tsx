import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

import './Music.css';



export default function Music({ musics }: any) {
	const circle = useRef();

	function animateOnScroll() {
		const elements = document.querySelectorAll(".music-item");

		elements.forEach((element) => {
			const animation = gsap.from(element, {
				opacity: 0,
				y: 100,
				duration: 0.8,
				paused: true,
			});

			window.addEventListener("scroll", () => {
				const scrollPosition = window.scrollY;
				const elementPosition = (element as HTMLElement).offsetTop;
				if (scrollPosition > elementPosition - window.innerHeight / 2) {
					animation.play();
				} else {
					animation.reverse();
				}
			});
		});
	}
	const onEnterImg = ({ currentTarget }) => {
		gsap.to(currentTarget, { scale: 0.8, duration: 0.5 });
		gsap.to(currentTarget.querySelector('img'), { scale: 1.2, duration: 0.5 });
		gsap.to(currentTarget.querySelector('.musicTitle'), { scale: 1.2, duration: 0.5 });
		gsap.to(currentTarget.querySelector('.musicDes'), { scale: 1.2, duration: 0.5 });
	};

	const onLeaveImg = ({ currentTarget }) => {
		gsap.to(currentTarget, { scale: 1, duration: 0.5 });
		gsap.to(currentTarget.querySelector('img'), { scale: 1, duration: 0.5 });
		gsap.to(currentTarget.querySelector('.musicTitle'), { scale: 1, duration: 0.5 });
		gsap.to(currentTarget.querySelector('.musicDes'), { scale: 1, duration: 0.5 });
	};


	useEffect(() => {
		animateOnScroll();
	}, []);

	return (
		<>
			<div className="music">
				<ul>
					{musics.map((post) => (
						<li key={post.id} className="music-item" onMouseEnter={onEnterImg} onMouseLeave={onLeaveImg} >
							<a href={`/${post.id}/`} >
								<img width={400} height={400} src={post.heroImage} alt="" />
								<div className="musicTitle">{post.title}</div>
								<div className="musicDes">{post.description}</div>
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
