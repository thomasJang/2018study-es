import Box from './Box';

function main(){
    const box = new Box();
    box.width = 100;
    box.height = 100;
    let element = document.createElement('div');
    element.innerHTML = `box area is : ${box.area}`;

    return element;
}

document.body.appendChild(main());