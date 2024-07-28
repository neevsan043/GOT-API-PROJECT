let char_name = document.getElementById("name");
let char_title = document.getElementById("char_title");
let body = document.querySelector("body");

let charUrl = ["./components/johnsnow.jpg", "./components/arya.jpeg", "./components/niya.jpg", "./components/tyrion.jpg", "components/rob.jpg"]
let charName = ["Jon Snow", "Arya Stark", "Daenerys Targaryen", "Tyrion Lannister", "Rob Stark"]
let charTittle = ["King In The North", "No One", "Mother Of Dragons", "Hand Of The Queen", "Lord Of Winterfell"]
let counter = 0;
const nxtBtn = document.querySelector("#nextBtn")
nxtBtn.addEventListener('click', function () {
  if (counter==4) {
    counter=-1
  }
  body.style.backgroundImage = `url(${charUrl[counter+1]})`
  char_title.innerHTML = `${charTittle[counter+1]}`
  char_name.innerHTML = `${charName[counter+1]}`
  console.log(counter);
  counter++;
  if (counter > 3) {
    counter = -1;
  }
})
const previous = document.querySelector("#prevBtn")
previous.addEventListener('click', function () {
  if (counter<=0) {
    counter=5;
  }
  body.style.backgroundImage = `url(${charUrl[counter-1]})`
  char_title.innerHTML = `${charTittle[counter-1]}`
  char_name.innerHTML = `${charName[counter-1]}`
  counter--;
})



