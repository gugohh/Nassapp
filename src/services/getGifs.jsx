export default function getGifs() {

    const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=8uRbFbAAqxrHC7GkNZ40NkoidcCCjD9r&q=1&limit=10&offset=0&rating=g&lang=en'

    fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data } = response;
            const gifs = data.map(image => image.images.downsized_medium.url)
            setGif(gifs)
        })
    
}
