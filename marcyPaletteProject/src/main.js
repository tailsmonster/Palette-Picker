import './style.css'
import palettes from './palettes.json'
import { v4 as uuidv4 } from 'uuid';

console.log(palettes); 

//helper functions
const handleSubmit = (e) => {
  e.preventDefault(); 

  // the FormData API makes it SUPER easy to get an object with all form data with 2 steps:
  const form = e.target;
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);

  console.log('here is your data:', formObj);
  // do something with formObj data...

  newPalette.isComplete = false;
  newPalette.uuid = uuidv4();

  form.reset();
}

//runner function
const main = () => {
    const form = document.querySelector("#new-palette-form")
    form.addEventListener('submit', handleSubmit)
}

/* I need to create an object to store data:

Object: 

  paletteName

  color1

  color2

  color3

  temperature


*/