export const getImagen = async() => {

    try {
        const apiKey = 'J5V789Po8yw8QT69nU0V2dIKVTkuxj';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        return 'No se encontró la imagen';
    }
}