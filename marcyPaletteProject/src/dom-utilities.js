import { getPalettes } from './local-storage'

const colorDisplay = (colorCode) => {
    const colorBox = document.createElement('body');
    const colorHex = document.createElement('p');
    colorHex.innerHTML = '<span style="color: black;">peepee</span> poopoo';
    colorHex.classList.add('color')
    colorHex.style.background=colorCode

    const colorCopy = document.createElement('p');
    colorCopy.innerText = `Copy \n${colorCode}`;
    colorCopy.classList.add('color-copy');
    colorCopy.dataset.color = colorCode;

    colorContainer.classList.add('color-container');
    colorContainer.append(colorText, colorCopy);
    return colorContainer;
}

const renderSinglePalette = (x, data) => {
    const { title, color1, color2, color3, temperature, uuid } = data
    //palette title
    const li = document.createElement('li');
    li.dataset.uuid = uuid;
    const h2 = document.createElement('h2');
    h2.innerText = title;

    //colors
    li.append(h3);
    colors.forEach((color) => li.append(createColorDiv(color)))

    //temps
    const temperatureText = document.createElement('h5');
    temperatureText.innerText = temperature;
    temperatureText.classList.add('temperature')
    temperatureText.classList.add(temperature)
}

const renderAllPalettes = () => {
    const palettes = getPalettes();
    const ul = document.querySelector('#palettes-list');
    ul.innerHTML = '';
}