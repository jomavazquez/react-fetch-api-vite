export const getGifs = async( category ) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=fTnz2X7pOMy4HP6Une2FYNC288sLg00n&q=${ category }&limit=10`;
	const resp = await fetch( url );
	const { data } = await resp.json();

	const gifs = data.map( img => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url
	}));

	return gifs;
}