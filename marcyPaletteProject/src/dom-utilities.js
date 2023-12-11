import { getPalettes } from './local-storage'
import paletteSetup from './palettes.json'

const renderSinglePalette = (x, data) => {
    
}

const renderAllPalettes = () => {
    const palettes = getPalettes();
    const ul = document.querySelector('#palettes-list');
    ul.innerHTML = '';
}