const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    displayProphets(data.prophets);
} 

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        //create the card section
        const card = document.createElement('section');

        //create the heading
        const fullName = document.createElement('h2');

        //create the image
        const portrait = document.createElement('img');

        //Build the prophet's full name
        fullName.textContent = '${prophet.name} ${prophet.lastname}';

        //Set image attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', 'Potrait of ${prophet.name} ${prophet.lastname}');
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '300');
        portrait.setAttribute('height', '400');

        // Add additional information
        const birthDate = document.createElement('p');
        birthDate.textContent = 'Date of Birth: ${prophet.birthdate}';

        const birthPlace = document.createElement('p');
        birthPlace.textContent = 'Place of Birth: ${prophet.birthplace}';

        // Add elementsto the card
        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);

        //Add the card to the cards container
        cards.appendChild(card);

    });
};

getProphetData();