//ASYNC AWAIT FETCH

const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

async function getProphets(requestURL) 
{
    const response = await fetch(requestURL); 
    console.log(response)
    if (response.ok) 
    {
        const jsObject = await response.json();
        console.log(jsObject)
        const prophets = jsObject['prophets'];
        console.log(prophets[0].name)
        prophets.forEach(displayProphets);
    }
};



function displayProphets(item) 
{
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let h3 = document.createElement('h3');

    h2.textContent = item.name + " " + item.lastname;
    h3.textContent = item.birthdate + " " + item.birthplace;
    img.setAttribute('src', item.imageurl);
    // img.altAttribute('src', h2.textContent + " - " + item.order)

    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(img);
    document.querySelector('.cards').appendChild(card);
}

getProphets(requestURL);