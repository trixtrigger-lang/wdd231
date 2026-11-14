
// ========================================
// KLA CONNECT CHAMBER
// BUSINESS DIRECTORY JAVASCRIPT
// ========================================

// JSON data location
const url = 'data/members.json';

// Select HTML elements
const membersContainer = document.querySelector('#members-container');
const gridButton = document.querySelector('#grid-view');
const listButton = document.querySelector('#list-view');
const memberCount = document.querySelector('#member-count');

// Membership level names
const membershipNames = {
    1: 'Member',
    2: 'Silver Member',
    3: 'Gold Member'
};

// ========================================
// FETCH BUSINESS DATA
// ========================================

async function getMembers() {
    try {
        const response = await fetch(url);

        // Check if request was successful
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        // Convert JSON into JavaScript object
        const data = await response.json();

        // Check the returned array
        console.table(data.members);

        // Display business members
        displayMembers(data.members);

    } catch (error) {
        console.error('Unable to load members:', error);

        membersContainer.innerHTML = '';

        const errorMessage = document.createElement('p');
        errorMessage.className = 'error-message';
        errorMessage.textContent =
            'Business information could not be loaded. Please try again later.';

        membersContainer.appendChild(errorMessage);

        memberCount.textContent = 'Unable to load business members.';
    }
}

// ========================================
// DISPLAY BUSINESS MEMBERS
// ========================================

function displayMembers(members) {

    // Clear existing content
    membersContainer.innerHTML = '';

    // Update member count
    memberCount.textContent =
        `Showing ${members.length} business members`;

    // Create one card for each company
    members.forEach((member) => {

        const card = document.createElement('article');
        card.classList.add('member-card');

        // Company image
        const image = document.createElement('img');
        image.src = member.image;
        image.alt = `${member.name} company logo`;
        image.width = 110;
        image.height = 110;
        image.loading = 'lazy';

        // Company name
        const name = document.createElement('h3');
        name.textContent = member.name;

        // Company address
        const address = document.createElement('p');
        address.classList.add('member-address');
        address.textContent = member.address;

        // Phone number
        const phone = document.createElement('p');
        phone.textContent = `Phone: ${member.phone}`;

        // Website link
        const website = document.createElement('p');
        const websiteLink = document.createElement('a');

        websiteLink.href = member.website;
        websiteLink.textContent = 'Visit Website';
        websiteLink.target = '_blank';
        websiteLink.rel = 'noopener noreferrer';

        website.appendChild(websiteLink);

        // Business description
        const description = document.createElement('p');
        description.classList.add('member-description');
        description.textContent = member.description;

        // Membership badge
        const membership = document.createElement('span');
        membership.classList.add(
            'membership-badge',
            `level-${member.membership}`
        );

        membership.textContent =
            membershipNames[member.membership] || 'Member';

        // Add elements to the card
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(description);
        card.appendChild(membership);

        // Add card to the directory
        membersContainer.appendChild(card);
    });
}

// ========================================
// GRID AND LIST VIEW
// ========================================

gridButton.addEventListener('click', () => {

    membersContainer.classList.remove('members-list');
    membersContainer.classList.add('members-grid');

    gridButton.classList.add('active');
    listButton.classList.remove('active');

    gridButton.setAttribute('aria-pressed', 'true');
    listButton.setAttribute('aria-pressed', 'false');
});

listButton.addEventListener('click', () => {

    membersContainer.classList.remove('members-grid');
    membersContainer.classList.add('members-list');

    listButton.classList.add('active');
    gridButton.classList.remove('active');

    listButton.setAttribute('aria-pressed', 'true');
    gridButton.setAttribute('aria-pressed', 'false');
});

// ========================================
// FOOTER DATES
// ========================================

// Display current year
document.querySelector('#current-year').textContent =
    new Date().getFullYear();

// Display last modification date
const lastModified = new Date(document.lastModified);

document.querySelector('#last-modified').textContent =
    lastModified.toLocaleString('en-UG', {
        dateStyle: 'medium',
        timeStyle: 'short'
    });

// ========================================
// RUN THE APPLICATION
// ========================================

getMembers();
