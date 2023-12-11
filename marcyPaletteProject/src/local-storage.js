const setLocalStorageKey = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }
  
const getLocalStorageKey = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  
export const getPalettes = () => getLocalStorageKey('palettes');
export const setPalettes = (palettes) => setLocalStorageKey('palettes', palettes);
  
// export const initializeNames = () => setNames(['ben', 'gonzalo', 'motun']);
  
export const addPalette = (palette) => {
    const palette = getPalettes();
    palettes.push(palette)
    setNames(palettes);
}
  
export const removePalette = (uuid) => {
    setPalettes(getPalettes().filter((palette) => palette.uuid !== uuid));
}