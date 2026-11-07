// =================================
// RESPONSIVE NAVIGATION
// =================================

const menuButton = document.querySelector(".menu-toggle");

const navigation = document.querySelector("#primary-navigation");

// Check that the elements exist
if (menuButton && navigation) {

    // Open and close the mobile navigation
    menuButton.addEventListener("click", () => {

        const isOpen =
            menuButton.getAttribute("aria-expanded") === "true";

        // Update accessibility state
        menuButton.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

        // Update button label
        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Open navigation menu"
                : "Close navigation menu"
        );

        // Show or hide navigation
        navigation.classList.toggle("open", !isOpen);

    });


    // Close menu after clicking a navigation link
    navigation.addEventListener("click", (event) => {

        if (
            event.target.closest("a") &&
            window.matchMedia("(max-width: 699px)").matches
        ) {

            navigation.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });


    // Reset navigation when resizing to desktop
    window.addEventListener("resize", () => {

        if (window.matchMedia("(min-width: 700px)").matches) {

            navigation.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

}