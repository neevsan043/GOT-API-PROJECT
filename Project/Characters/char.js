const url = "https://thronesapi.com/api/v2/Characters";
let container = document.querySelector('.container');
let images = '';

window.addEventListener('load', () => apiReq());

async function apiReq() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(response);
    console.log(data);
    showImage(data);
}

function showImage(data) {
    for (let i = 0; i < data.length; i++) {
        images += `
            <div class="image" id="character-${i}">
                <img src="${data[i].imageUrl}" alt="${data[i].fullName}">
                <h3>Name : ${data[i].fullName}</h3>
                <p>House : ${data[i].family}</p>
                <p>Title : ${data[i].title}</p>
            </div>
        `;
    }
    container.innerHTML = images;

    // Add click event listener to each character
    data.forEach((character, index) => {
        let characterDiv = document.getElementById(`character-${index}`);
        characterDiv.addEventListener('click', () => {
            alert(`You clicked on ${character.fullName}`);
            

        });
    });
}
