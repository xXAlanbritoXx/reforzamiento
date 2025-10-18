import type { GiphyRandomResponse } from "./giphy-response"; ''

const API_KEY = 'w6SL3XQ7xH9vwukG9sTDma5fD2fNnVD0';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.appendChild(imgElement);
}

myRequest
    .then((response) => response.json())
    .then((data: GiphyRandomResponse) => {
        const { images } = data.data;
        const url = images.fixed_height.url;
        createImageInsideDOM(url);
    })
    .catch((error) => {
        console.error('Error fetching the GIF:', error);
    });
