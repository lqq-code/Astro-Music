export interface Music {
	id: number;
	title: string;
	description: string;
	pubDate: string;
	heroImage: string;
}


function getOrigin(request: Request): string {
	return new URL(request.url).origin.replace('localhost', 'localhost');
}

async function get<T>(
	incomingReq: Request,
	endpoint: string,
	cb: (response: Response) => Promise<T>
): Promise<T> {
	const response = await fetch(`${getOrigin(incomingReq)}${endpoint}`, {
		credentials: 'same-origin',
		headers: incomingReq.headers,
	});
	if (!response.ok) {
		// TODO make this better...
		return null;
	}
	return cb(response);
}

export async function getMusics(incomingReq: Request): Promise<Music[]> {
	debugger
	return get<Music[]>(incomingReq, '/api/musics', async (response) => {
		const musics: Music[] = await response.json();
		return musics;
	});
}

export async function getMusic(incomingReq: Request, id: number): Promise<Music> {
	return get<Music>(incomingReq, `/api/musics/${id}`, async (response) => {
		const music: Music = await response.json();
		return music;
	});
}



