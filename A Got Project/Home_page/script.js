const url = "https://thronesapi.com/api/v2/Characters"
let images = "";
const imageBody = document.querySelector('.images_sec')

window.addEventListener('load', () => apiReq());

async function apiReq(){
    const response = await fetch(url)
    const data = await response.json();
    showImage(data);
    console.log(data);
}
function showImage(data){
    for (let i = 0; i < 10 ; i++) {
        images += `<div class="image">
                 <img src="${data[i].imageUrl}" alt="${data[i].fullName}">
                 <h3>${data[i].fullName}</h3></div>`
        imageBody.innerHTML = images
    }
}