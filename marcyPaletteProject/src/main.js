import './style.css'
import { v4 as uuidv4 } from 'uuid';
import { addPalette, removePalette} from './local-storage';
import { renderAllPalettes } from './dom-utilities';
import palettes from './palettes.json'
// console.log(palettes); 



//helper functions

const handleDeletePalette = (e) => {
  if (!e.target.matches('.delete-palette')) return;
  const uuid = e.target.parentElement.dataset.uuid;
  deletePalette(uuid);
  renderPalettes();
}

const handleColorCopy = async (e) => {
  if (!navigator.clipboard) return;
  if (!e.target.matches('.color-copy')) return;
  try {
    const { dataset, textContent } = e.target;
    await navigator.clipboard.writeText(dataset.color);
    e.target.textContent = 'Copied to clipboard!';
    setTimeout(() => { e.target.textContent = textContent }, 1000)
  } catch (err) {
    console.error('Failed to copy!', err);
  }
}

const handleFormSubmit = (e) => {
  e.preventDefault(); 

  const form = e.target;
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);

  const newPalette = {
    uuid:uuidv4(),
    title: formObj.title,
    colors: [formObj.color1, formObj.color2, formObj.color3],
    temperature: formObj.temperature,
  };

  addPalette(newPalette);
  renderAllPalettes();

  form.reset();
};

//runner function
const main = () => {
  renderPalettes();
  
  const form = document.querySelector("#new-palette-form");
  form.addEventListener('submit', handleSubmit);

  const ul = document.querySelector('#palettes-list');
  ul.addEventListener('click', handleUlClick);
}

main();