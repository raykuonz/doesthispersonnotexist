import API from './api';

// Async file reader helper
export function convertBlobToBase64(blob) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = _ => resolve(reader.result);
        reader.onerror = reject;
    });
}

// Fetch image from remote url and convert to base64
export async function fetchImageToBase64(url) {
    console.log(url);
    const response = await fetch(url);
    const blob = await response.blob();
    const base64data = await convertBlobToBase64(blob);
    return base64data;
}

// Random avatar generator
export function randomAvatar() {
    const payload = Math.random() >= 0.5 ?
        {
            avatar: API.PROXY + API.REAL,
            isReal: true
        } :
        {
            avatar: API.PROXY + API.FAKE,
            isReal: false
        };
    return payload;
}

// Render image on canvas
export async function drawCanvas(canvas, url, callback) {
    const ctx = canvas.getContext('2d');
    const targetImgSize = 400;
    canvas.width = targetImgSize;
    canvas.height = targetImgSize;
    const image = new Image();
    image.onload = function () {
        ctx.drawImage(image, 0, 0, targetImgSize, targetImgSize)
    };
    image.src = await fetchImageToBase64(url);

    if (callback) callback();
}
