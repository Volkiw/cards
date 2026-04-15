'use strict';

const fr = new FileReader();
const fileField = document.querySelector('.js_profile-upload-btn');
const profileImage = document.querySelector('.js_profile-image');
const MAX_BYTES = 10 * 1024;

function getImage(e) {
    const myFile = e.currentTarget.files[0];
    if (!myFile) {
        return;
    }
    fr.onload = () => writeImage(myFile, fr.result);
    fr.readAsDataURL(myFile);
}

async function writeImage(file, dataURL) {
    if (file.size <= MAX_BYTES) {
        profileImage.style.backgroundImage = `url(${dataURL})`;
        return;
    }

    const compressedDataURL = await compressImage(dataURL, MAX_BYTES);
    profileImage.style.backgroundImage = `url(${compressedDataURL})`;
}

async function compressImage(dataURL, maxBytes) {
    const img = await loadImage(dataURL);
    let width = img.width;
    let height = img.height;
    let quality = 0.8;
    let compressedDataURL = renderToDataURL(img, width, height, quality);

    while (getDataURLSize(compressedDataURL) > maxBytes && quality > 0.1) {
        quality = Math.max(0.1, quality - 0.1);
        compressedDataURL = renderToDataURL(img, width, height, quality);
    }

    while (getDataURLSize(compressedDataURL) > maxBytes && width > 50 && height > 50) {
        width = Math.round(width * 0.9);
        height = Math.round(height * 0.9);
        compressedDataURL = renderToDataURL(img, width, height, quality);
    }

    return compressedDataURL;
}

function loadImage(dataURL) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = dataURL;
    });
}

function renderToDataURL(img, width, height, quality) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(img, 0, 0, width, height);
    return canvas.toDataURL('image/jpeg', quality);
}

function getDataURLSize(dataURL) {
    const base64 = dataURL.split(',')[1] || '';
    const padding = base64.endsWith('==') ? 2 : base64.endsWith('=') ? 1 : 0;
    return Math.round((base64.length * 3) / 4 - padding);
}

fileField.addEventListener('change', getImage);
