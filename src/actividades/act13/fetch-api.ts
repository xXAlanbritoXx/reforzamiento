import type { GiphyRandomResponse } from "./giphy-response"; ''

const API_KEY = 'w6SL3XQ7xH9vwukG9sTDma5fD2fNnVD0';


const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.appendChild(imgElement);
}

const getRandomGif = async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

    const {data} = await response.json() as GiphyRandomResponse;

    return data.images.original.url;
}

getRandomGif().then(createImageInsideDOM);
