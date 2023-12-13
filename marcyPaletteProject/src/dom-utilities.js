import { getPalettes } from './local-storage'

const colorDisplay = (colorCode) => {
    const colorBox = document.createElement('body');
    const colorName = document.createElement('p');

    colorName.innerHTML = '<span style="color: white;">'+colorCode+'</span>';
    colorName.classList.add('color-name');
    colorName.style.background = colorCode;

    colorBox.classList.add('color-container');
    colorBox.append(colorName);
    return colorBox;
}

const temperatureColor = (temperatureData) => {
    const colorBox = document.createElement('body');
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

    colorBox.classList.add('color-container');
    colorBox.style.background = colorCode;
    colorBox.append(colorCode);
    
    return colorBox;
} 


const renderSinglePalette = (parent, data) => {
    const { title, colors, temperature, uuid } = data;
    const li = document.createElement('li');
    li.dataset.uuid = uuid;
    const h2 = document.createElement('h2');
    h2.innerText = title;
    const div = document.createElement('div')
    div.dataset.uuid = temperature;

    //temps
    const tempText = document.createElement('p');
    tempText.innerText = temperature;
    tempText.classList.add('temperature')
    tempText.classList.add(temperature)
    div.append(tempText);
    parent.append(li);
    
    
    //colors
    li.append(h2);
    colors.forEach((color) => li.append(colorDisplay(color)));
    
    //temps
    li.append(temperatureColor(temperature));

}

export const renderAllPalettes = () => {
    const palettes = getPalettes();
    const ul = document.querySelector('#palettes-list');
    ul.innerHTML = '';
    palettes.forEach((palette) => renderSinglePalette(ul, palette));
}