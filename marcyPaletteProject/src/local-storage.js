import startingPalettes from './palettes.json'

const setLocalStorageKey = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
const getLocalStorageKey = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  //focused helper functons
export const getPalettes = () => getLocalStorageKey('palettes') || [];
export const setPalettes = (palettes) => setLocalStorageKey('palettes', palettes);
  
export const addPalette = (palette) => {
    const palettes = getPalettes();
    palettes.push(palette)
    setPalettes(palettes);
}
export const removePalette = (uuid) => {
    setPalettes(getPalettes().filter((palette) => palette.uuid !== uuid));
    // Remove from the DOM
    const paletteElement = document.querySelector(`[data-uuid="${uuid}"]`);
    if (paletteElement) {
        paletteElement.remove();
    }
};

export const resetPalettes = () => {
  setLocalStorageKey('palettes', startingPalettes);
  setPalettes(getPalettes());
}
export const ifEmpty = () => { if (getPalettes().length < 1) resetPalettes();}

ifEmpty();
