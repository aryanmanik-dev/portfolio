document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");
  const queryForm = document.getElementById("queryForm");

  function openPopup() {
    popup.style.display = "block";
  }

  function closePopupFunction() {
    console.log("Close button clicked"); // Debug log
    popup.style.display = "none";
    queryForm.reset(); // Reset form fields on close
  }

  closePopup.addEventListener("click", closePopupFunction);

  window.addEventListener("click", (event) => {
    if (event.target === popup) {
      closePopupFunction();
    }
  });

  queryForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    closePopupFunction(); // Close the popup after submission
  });

  // Open the popup every 1 minute
  setInterval(openPopup, 60000); // Ensure this is called every 60 seconds
});
