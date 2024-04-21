document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupContent = document.getElementById("popup-content");

    // Function to show the popup with the specified title and content
    function showPopup(dietType) {
        let title, content;

        switch (dietType) {
            case "fat-burner":
                title = "Fat Burner Diet";
                content = `
                    <ul>
                        <li>Grilled chicken breast</li>
                        <li>Steamed broccoli</li>
                        <li>Protein shakes</li>
                        <li>Salads with lean meats</li>
                        <li>Egg whites</li>
                    </ul>`;
                break;
            case "get-fitter":
                title = "Get Fitter Diet";
                content = `
                    <ul>
                        <li>Quinoa salad</li>
                        <li>Oatmeal with fruits</li>
                        <li>Grilled fish</li>
                        <li>Brown rice with vegetables</li>
                        <li>Chicken and avocado wraps</li>
                    </ul>`;
                break;
            case "stress-buster":
                title = "Stress Buster Diet";
                content = `
                    <ul>
                        <li>Whole grain toast with honey</li>
                        <li>Blueberry smoothie</li>
                        <li>Green tea</li>
                        <li>Bananas and almonds</li>
                        <li>Dark chocolate</li>
                    </ul>`;
                break;
            default:
                title = "Unknown Diet";
                content = "No content available.";
        }

        popupTitle.textContent = title;
        popupContent.innerHTML = content;
        overlay.classList.add("visible");
        popup.classList.add("visible");
    }

    // Function to hide the popup
    function hidePopup() {
        overlay.classList.remove("visible");
        popup.classList.remove("visible");
    }

    // Attach event listeners to the overlay and close button
    overlay.addEventListener("click", hidePopup);
    document.querySelector(".popup button").addEventListener("click", hidePopup);

    // Attach event listeners to the diet sections
    const diets = document.querySelectorAll(".diet");
    diets.forEach((diet) => {
        diet.addEventListener("click", (e) => {
            const classList = Array.from(diet.classList);
            const dietType = classList.find((cls) => cls !== "diet");
            showPopup(dietType);
        });
    });
});
