import './style.css'
import { v4 as uuidv4 } from 'uuid';
import { addPalette, removePalette} from './local-storage';
import { renderPalettes } from './dom-utilities';
// console.log(palettes); 



//helper functions


const handleFormSubmit = (e) => {
  e.preventDefault(); 

  const form = e.target;
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);

  const newPalette = {
    uuid:uuidv4(),
    title: formObj.title,
    colors: [formObj.color1, formObj.color2, formObj.color3],
    temperature: formObj.temperature
  };

  addPalette(newPalette)
  renderPalettes();

  form.reset();
}

//runner function
const main = () => {
    const form = document.querySelector("#new-palette-form")
    form.addEventListener('submit', handleSubmit)
}

main();