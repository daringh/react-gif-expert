export const getGifs = async (category) => {
    const apiKey = 'quEwgN1RgvZEL1Wato5m9IvwaT9rc3uE';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`;

    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifData = data.map(img => (
            {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        )
    );

    return gifData;
}