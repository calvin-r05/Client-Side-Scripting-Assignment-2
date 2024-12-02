//const fetch = require('node-fetch');

//const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkOTkxNTk5MC05MmNjLTAxM2QtZjY1OC0wMmQ1ZjFjNWQ0YzEiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNzMzMTM4MjEwLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImNsaWVudC1zaWRlLXNjIn0.1jrkIfKXQNcjLYRe9QLzrKK3cWMkfsp_qqgKqmaNjK4';
// PLAYER_NAME = 'MIER119';
let jpeg1 = document.getElementById("Images")

async function getPlayerData() {
    const url = `https://digimon-api.vercel.app/api/digimon/name/Tsunomon`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                
            }
        });


       

        const data = await response.json();
       
        
        
        //document.jpeg1.appendChild(imageData);
        console.log(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
    let jpeg1 = document.getElementById("Images")
  
}


getPlayerData();
//document.appendChild([0].img)
