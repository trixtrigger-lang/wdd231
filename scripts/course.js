const courses = [
    { code: "WDD131", name: "Dynamic Web Fundamentals", credits: 2, completed: true },
    { code: "WDD231", name: "Web Frontend Development I", credits: 2, completed: false },
    { code: "CSE121", name: "Introduction to Programming", credits: 2, completed: true }
];

const container = document.getElementById("coursesContainer");
const totalCredits = document.getElementById("totalCredits");

function displayCourses(courseList) {
    container.innerHTML = "";

    courseList.forEach(course => {
        const card = document.createElement("div");
        card.textContent = `${course.code} - ${course.name}`;

        if (course.completed) {
            card.style.backgroundColor = "#4CAF50";
        }

        container.appendChild(card);
    });

    const total = courseList.reduce((sum, course) => sum + course.credits, 0);
    totalCredits.textContent = `Total Credits: ${total}`;
}

document.getElementById("allBtn").addEventListener("click", () => {
    displayCourses(courses);
});

document.getElementById("wddBtn").addEventListener("click", () => {
    displayCourses(courses.filter(c => c.code.includes("WDD")));
});

document.getElementById("cseBtn").addEventListener("click", () => {
    displayCourses(courses.filter(c => c.code.includes("CSE")));
});

displayCourses(courses);