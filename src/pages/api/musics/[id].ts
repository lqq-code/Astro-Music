import { musicMap } from '../../../models/music';
import type { APIContext } from 'astro';

export function get({ params }: APIContext) {
	const id = Number(params.id);
	if (musicMap.has(id)) {
		const music = musicMap.get(id);

		return {
			body: JSON.stringify(music),
		};
	} else {
		return new Response(null, {
			status: 400,
			statusText: 'Not found',
		});
	}
}
