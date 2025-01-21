export function getImgUrl(name:string) {
  return new URL(`../assets/movie-covers/${name}`, import.meta.url).href;
}


