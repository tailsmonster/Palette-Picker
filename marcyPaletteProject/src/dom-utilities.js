import { getPalettes, removePalette } from './local-storage'

const colorDisplay = (colorCode) => {
    // Outer color box
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-container');
    colorBox.style.background = colorCode;

    // Inner gray box
    const colorLabel = document.createElement('div');
    colorLabel.classList.add('color-label');
    colorLabel.innerText = colorCode;
    colorLabel.addEventListener('click', () => {
        navigator.clipboard.writeText(colorCode).then(() => {
            colorLabel.innerText = "Copied!";
            setTimeout(() => {
                colorLabel.innerText = colorCode; // Revert after 1 sec
            }, 1000);
        }).catch(err => console.error('Failed to copy:', err));
    });

    // Append inner box to outer box
    colorBox.append(colorLabel);

    return colorBox;
};

const temperatureColor = (temperatureData) => {
    // const colorBox = document.createElement('body');
    let colorCode;
    if (temperatureData === 'cool') {
        colorCode = '#151E41';
    }
    if (temperatureData === 'neutral') {
        colorCode = '#555555';
    }
    if (temperatureData === 'warm') {
        colorCode = '#3D1514';
    }

    return colorCode;
} 


const renderSinglePalette = (parent, data) => {
    const { title, colors, temperature, uuid } = data;

    // Palette container
    const paletteDiv = document.createElement('div');
    paletteDiv.classList.add('palette');
    paletteDiv.dataset.uuid = uuid;

    // Title & Button TitleBar
    const titlebarDiv = document.createElement('div');
    titlebarDiv.classList.add('titlebar');
    titlebarDiv.style.background = temperatureColor(temperature);

    const h2 = document.createElement('h2');
    h2.innerText = title;
    h2.classList.add('palette-title');
    
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = '✖';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => removePalette(uuid);
    titlebarDiv.append(h2, deleteBtn);
    
    // Colors container
    const colorsDiv = document.createElement('div');
    colorsDiv.classList.add('colors');
    colors.forEach((color) => colorsDiv.append(colorDisplay(color)));

    // Append elements
    paletteDiv.append(titlebarDiv, colorsDiv);
    
    parent.append(paletteDiv);
};

export const renderAllPalettes = () => {
    const palettes = getPalettes();
    const ul = document.querySelector('#palettes-list');
    ul.innerHTML = '';
    palettes.forEach((palette) => renderSinglePalette(ul, palette));
}

export const getEl = (htmlEl) => document.querySelector(htmlEl);