

//The first three url's each return arrays of all digimon of the specified level (e.g all rookie digimon). I put them in an array of url's so that I can then pass them all through the function seperately.
const url = ['https://digimon-api.vercel.app/api/digimon/level/rookie', 'https://digimon-api.vercel.app/api/digimon/level/champion', 'https://digimon-api.vercel.app/api/digimon/level/ultimate', 'https://digimon-api.vercel.app/api/digimon/name/Andromon'];
let i = 0;
let data;
//I use this changing ID and pass it to the getDigimonData function as a parameter so that I can append each of the URL Datas to its respective div using getElemendByID, giving me three different rows of digimon
let id = ['Rookies','Champions','Ultimates', 'Name_Endpoint_Example']
while (i < 4)
{
        //I use the identifier variable to write a h1 element at the start of each row of digimon specifying their level
        let identifier = document.getElementById(id[i])
        let heading = document.createElement('h1')
        heading.textContent = id[i];
        identifier.appendChild(heading)

        //this is where I call the function within the loop, changing the url and id each time
        getDigimonData(url[i], id[i]);
        i++;
}

//This is my asynchronous function, which I use to fetch the data from the API and turn it into a JSON array. I put the JSON array into a forEach loop, calling the createCard function each time, which seperates out the data from each element of the array (e.g Name, Image, Level) and appends them all to a div which I then apend to the div relating to the current ID.
async function getDigimonData(url, id) {
    

//I added a tryCatch block here to make it easier to see when something isn't working in my request without breaking the code completely.
   try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                
            }
        });
        data = await response.json()
    }
            
        catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }

       

       
       
        //This forEach loop puts each piece of data received into the createCard function. 
        data.forEach(singleData => {
            createCard(singleData, id)
        });
        
        //This logs all the data recieved from the API into the Console, which can be seen in the Chrome Dev Tools
        console.log(data);
    } 





// This function seperates out the data from each element of the array (e.g Name, Image, Level) and appends them all to a div which I then apend to the div relating to the current ID.
    function createCard(data, id) {
    let div1 = document.getElementById(id);
    let card = document.createElement(id);

    // I create an h2 element and change the source to be the text for the name received from the API, which I then append to the card
    h2 = document.createElement('h2');
    h2.textContent = data.name;
    card.appendChild(h2);

// I create an img element and change the source to be the image received from the API, which I then append to the card
    image = document.createElement('img');
    image.src = data.img;
    card.appendChild(image);

 // I create an h3 element and change the source to be the text for the level received from the API, which I then append to the card
    h3 = document.createElement('h3');
    h3.textContent = `Level: ${data.level}`;
    card.appendChild(h3);
 

  //I then append the completed card to the created div
    div1.appendChild(card);

}
