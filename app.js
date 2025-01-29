document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("uploadForm");
    const pinTitleInput = document.getElementById("pinTitle");
    const pinImageInput = document.getElementById("pinImage");
    const pinsContainer = document.querySelector(".pins-container");

    // Simulated pins for demonstration
    let pins = [
        { title: "Beach Sunset", imageUrl: "https://via.placeholder.com/400x600" },
        { title: "Mountain Adventure", imageUrl: "https://via.placeholder.com/400x600" }
    ];

    // Display existing pins
    function displayPins() {
        pinsContainer.innerHTML = '';
        pins.forEach(pin => {
            const pinElement = document.createElement("div");
            pinElement.classList.add("pin");
            pinElement.innerHTML = `
                <img src="${pin.imageUrl}" alt="${pin.title}">
                <h3>${pin.title}</h3>
            `;
            pinsContainer.appendChild(pinElement);
        });
    }

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = pinTitleInput.value;
        const file = pinImageInput.files[0];
        
        if (title && file) {
            // For demonstration, we're not uploading the image but using a placeholder.
            const newPin = {
                title: title,
                imageUrl: "https://via.placeholder.com/400x600" // Simulate image URL
            };

            pins.push(newPin);
            displayPins();
            form.reset();
        } else {
            alert("Please provide both title and image.");
        }
    });

    // Initially display pins
    displayPins();
});
