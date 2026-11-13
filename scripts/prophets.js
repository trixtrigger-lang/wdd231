
// JSON data source
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

// Select the cards container
const cards = document.querySelector('#cards');

// Get prophet data using the Fetch API
async function getProphetData() {
    try {
        // Request data from the JSON resource
        const response = await fetch(url);

        // Check whether the request was successful
        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }

        // Convert the response into JavaScript data
        const data = await response.json();

        // Display the data in the console for testing
        console.table(data.prophets);

        // Send the prophets array to the display function
        displayProphets(data.prophets);

    } catch (error) {
        console.error('Error retrieving prophet data:', error);
        cards.textContent = 'Sorry, prophet information could not be loaded.';
    }
}

// Create and display prophet cards
const displayProphets = (prophets) => {

    prophets.forEach((prophet) => {

        // Create the card elements
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');
        const birthDate = document.createElement('p');
        const birthPlace = document.createElement('p');

        // Add the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Add the prophet's image
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute(
            'alt',
            `Portrait of ${prophet.name} ${prophet.lastname}`
        );
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Add birth information
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Add elements to the card
        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);

        // Add the completed card to the HTML page
        cards.appendChild(card);
    });
};

// Run the function
getProphetData();
