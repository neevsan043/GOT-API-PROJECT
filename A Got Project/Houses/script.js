// fetch('https://www.anapioficeandfire.com/api/houses')
//   .then((response) => {
//     // console.log(response);
// // })
//     // if (!response.ok) {
//     //   throw new Error('Network response was not ok');
// //     }
//     return response.json();
//   }).then((data) => {
//     console.log(data); 
//     let alldata="";
//     data.map((values)=>{
//         alldata+=`${values.url}
//         ${values.name}
//         ${values.region}`;
//     });
//     document.getElementById("body").innerHTML=alldata
//     // Handle the data from the API
//   })
// //   .catch(error => {
// //     console.error('There was a problem with your fetch operation:', error);
// //   });
fetch('https://www.anapioficeandfire.com/api/houses/1')
  .then(response => response.json())
  .then(data => {
    console.log('House Name:', data.name);
    console.log('Region:', data.region);
    console.log('Coat of Arms:', data.coatOfArms);
  })
  .catch(error => console.error('Error fetching data:', error));
  
