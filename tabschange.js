document.addEventListener("DOMContentLoaded", function () {
    let aboutTab = document.getElementById("aboutTab");
    let timeToVisitTab = document.getElementById("timeToVisitTab");
    let attractionsTab = document.getElementById("attractionsTab");
    let aboutButton = document.getElementById("aboutButton");
    let timeToVisitButton = document.getElementById("timeToVisitButton");
    let attractionsButton = document.getElementById("attractionsButton");
    
    if (aboutTab && timeToVisitTab && attractionsTab && aboutButton && timeToVisitButton && attractionsButton) {
        timeToVisitTab.classList.add("d-none");
        attractionsTab.classList.add("d-none");

        function aboutButton1() {
            aboutTab.classList.remove("d-none");
            timeToVisitTab.classList.add("d-none");
            attractionsTab.classList.add("d-none");
            aboutButton.classList.add("selected-button");
            timeToVisitButton.classList.remove("selected-button");
            attractionsButton.classList.remove("selected-button");
        }

        function timeToVisitButton1() {
            aboutTab.classList.add("d-none");
            timeToVisitTab.classList.remove("d-none");
            attractionsTab.classList.add("d-none");
            aboutButton.classList.remove("selected-button");
            timeToVisitButton.classList.add("selected-button");
            attractionsButton.classList.remove("selected-button");
        }

        function attractionsButton1() {
            aboutTab.classList.add("d-none");
            timeToVisitTab.classList.add("d-none");
            attractionsTab.classList.remove("d-none");
            aboutButton.classList.remove("selected-button");
            timeToVisitButton.classList.remove("selected-button");
            attractionsButton.classList.add("selected-button");
        }

        // Attach click event listeners to the buttons
        aboutButton.addEventListener("click", aboutButton1);
        timeToVisitButton.addEventListener("click", timeToVisitButton1);
        attractionsButton.addEventListener("click", attractionsButton1);

        // Initial call to one of the functions to set the initial state.
        aboutButton1();
    }
});
