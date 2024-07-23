fetch('https://api.gameofthronesquotes.xyz/v1/houses')
    .then((data)=>{return data.json(); 
    }).then((objectdata)=>{console.log(objectdata[0].slug);
        let tabledata="";
        objectdata.map((values)=>{
            tabledata+=`<tr>
            
            <td>${values
              .slug}</td>
              <td>${values
              .name}</td>
              <td>${values
              .member}</td>
              <td> img src="${values
              .imgage}</td>
            }`;
        });
        document.getElementById("buttonid").innerHTML=tabledata;
    })
   
    // console.log(data
