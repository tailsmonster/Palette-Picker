import { getPalettes } from './local-storage'

const colorDisplay = (colorCode) => {
    const colorBox = document.createElement('body');
    const colorName = document.createElement('p');

    colorName.innerHTML = '<span style="color: white;">'+colorCode+'</span>';
    colorName.classList.add('color-text');
    colorName.style.background = colorCode;

    colorBox.classList.add('color-container');
    colorBox.append(colorName);
    return colorBox;
}

const renderSinglePalette = (parent, data) => {
    const { title, colors, temperature, uuid } = data
    //palette title
    const li = document.createElement('li');
    li.dataset.uuid = uuid;
    const h4 = document.createElement('h4');
    h4.innerText = title;

    //colors
    li.append(h4);
    colors.forEach((color) => li.append(colorDisplay(color)));

    //temps
    const tempText = document.createElement('p');
    tempText.innerText = temperature;
    tempText.classList.add('temperature')
    tempText.classList.add(temperature)
    li.append(tempText);
    parent.append(li);
}

export const renderAllPalettes = () => {
    const palettes = getPalettes();
    const ul = document.querySelector('#palettes-list');
    ul.innerHTML = '';
    palettes.forEach((palette) => renderSinglePalette(ul, palette));
}