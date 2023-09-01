import { musics } from '../../models/music';

export function get() {
	return {
		body: JSON.stringify(musics),
	};
}
