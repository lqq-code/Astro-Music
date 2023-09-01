import music from './music.json';

const musics = music.musicList;
const musicMap = new Map(musics.map((musicList) => [musicList.id, musicList]));

export { musics, musicMap };
