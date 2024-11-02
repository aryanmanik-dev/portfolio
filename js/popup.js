document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
    const queryForm = document.getElementById('queryForm');

    function openPopup() {
        popup.style.display = 'block';
    }

    function closePopupFunction() {
        console.log("Close button clicked"); // Debug log
        popup.style.display = 'none';
        queryForm.reset(); // Reset form fields on close
    }

    closePopup.addEventListener('click', closePopupFunction);

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            closePopupFunction();
        }
    });

    queryForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const business = document.getElementById('business').value;
        const requirements = document.getElementById('requirements').value;

        // Add your form submission logic here
        alert(`Query submitted:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nBusiness: ${business}\nRequirements: ${requirements}`);
        
        closePopupFunction(); // Close the popup after submission
    });

    // Open the popup every 1 minute
    setInterval(openPopup,60000 ); // Ensure this is called every 60 seconds
});
