// =================================
// CURRENT YEAR
// =================================

const yearElement = document.querySelector("#currentyear");

if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.textContent = currentYear;

}


// =================================
// LAST MODIFIED DATE
// =================================

const modifiedElement = document.querySelector("#lastModified");

if (modifiedElement) {

    modifiedElement.textContent = document.lastModified;

}