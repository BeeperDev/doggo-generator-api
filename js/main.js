const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector('.breeds')

fetch(BREEDS_URL)
    .then(res => {
        return res.json();
    })
    .then(data => {
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject)
        for(let i=0; i < breedsArray.length; i++){
            const option = document.createElement('option') //create a new <option> with each iteration of the loop
            option.value = breedsArray[i]                   //put a new breed into each new option element
            option.innerText = breedsArray[i]               //put new breed into
            select.appendChild(option)                      //put new <option> into selection list
        }
    })