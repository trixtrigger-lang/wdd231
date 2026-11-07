// ==========================================
// WEB AND COMPUTER PROGRAMMING CERTIFICATE
// ==========================================

// COURSE INFORMATION

const courses = [

    {
        subject: "CSE",
        number: 110,
        title: "Programming Building Blocks",
        credits: 2,
        completed: false
    },

    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        completed: false
    },

    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        completed: false
    },

    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        completed: false
    },

    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        completed: false
    },

    {
        subject: "WDD",
        number: 231,
        title: "Web Frontend Development I",
        credits: 2,
        completed: false
    }

];


// ==========================================
// SELECT HTML ELEMENTS
// ==========================================

const courseContainer =
    document.querySelector("#course-list");

const creditTotal =
    document.querySelector("#credit-total");

const filterButtons =
    document.querySelectorAll(".filter-button");


// ==========================================
// DISPLAY COURSES
// ==========================================

function displayCourses(courseData) {

    if (!courseContainer || !creditTotal) {
        return;
    }

    // Clear existing course cards
    courseContainer.replaceChildren();


    // Check if courses are available
    if (courseData.length === 0) {

        const message = document.createElement("p");

        message.textContent =
            "No courses match this filter.";

        courseContainer.append(message);

    }


    // Create individual course cards
    courseData.forEach((course) => {

        const card = document.createElement("article");

        // Apply completed styling
        card.className = "course-card";

        if (course.completed) {

            card.classList.add("completed");

        }


        // Course details container
        const details = document.createElement("div");


        // Course code
        const name = document.createElement("strong");

        name.textContent =
            `${course.subject} ${course.number}`;


        // Course title
        const title = document.createElement("small");

        title.textContent = course.title;


        // Course credits
        const credits = document.createElement("small");

        credits.textContent =
            `${course.credits} credits`;


        // Add information to details
        details.append(
            name,
            title,
            credits
        );


        // Course completion status
        const status = document.createElement("span");

        status.className = "course-status";


        if (course.completed) {

            status.textContent = "✓ Completed";

        } else {

            status.textContent = "In Progress";

        }


        // Add everything to the course card
        card.append(
            details,
            status
        );


        // Add card to the page
        courseContainer.append(card);

    });


    // ======================================
    // CALCULATE TOTAL CREDITS USING REDUCE
    // ======================================

    const totalCredits = courseData.reduce(
        (total, course) => {

            return total + course.credits;

        },
        0
    );


    // Display total credits
    creditTotal.textContent = totalCredits;

}


// ==========================================
// FILTER COURSES
// ==========================================

function filterCourses(filter) {

    let filteredCourses;


    if (filter === "all") {

        filteredCourses = courses;

    } else {

        filteredCourses = courses.filter(
            (course) => course.subject === filter
        );

    }


    // Display filtered courses
    displayCourses(filteredCourses);

}


// ==========================================
// FILTER BUTTON EVENTS
// ==========================================

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedFilter = button.dataset.filter;


        // Update active button appearance
        filterButtons.forEach((item) => {

            const selected = item === button;

            item.classList.toggle(
                "active",
                selected
            );

            item.setAttribute(
                "aria-pressed",
                String(selected)
            );

        });


        // Display selected courses
        filterCourses(selectedFilter);

    });

});


// ==========================================
// INITIAL PAGE DISPLAY
// ==========================================

displayCourses(courses);