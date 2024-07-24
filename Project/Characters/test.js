// Define the API request URL
const apiURL = 'https://thronesapi.com/api/v1/Characters';

// const characterTittle = [];
let char_name = document.getElementById("name");
let char_title = document.getElementById("char_title")



const extract_char_data = async () => {
  try {
    let character1 = await fetch('https://thronesapi.com/api/v2/Characters/2');
    
    let character_1_data = await character1.json();
    const character_1_data_name = character_1_data.fullName;
    char_name.innerHTML = character_1_data_name
  } catch (error) {
    console.log("error"+error);
  }

  try {
    let character_title_1 = await fetch('https://thronesapi.com/api/v2/Characters/2');
    
    let character_1_data = await character_title_1.json();
    const character_1_data_title = character_1_data.title;
    char_title.innerHTML = character_1_data_title
  } catch (error) {
    console.log("error"+error);
  }

}
extract_char_data()





