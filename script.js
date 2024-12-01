// Switch between light and dark mode
const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Update progress bars dynamically (you can later fetch this data from a server)
function updateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-bar-fill');
  const progressData = [70, 50, 40, 85, 65, 60]; // Example data (in percentage)
  
  progressBars.forEach((progressBar, index) => {
    progressBar.style.width = ${progressData[index]}%;
  });
}

// Simulate submitting feedback
function submitFeedback() {
  const feedback = document.getElementById('user-feedback').value;
  
  if (feedback.trim() !== "") {
    alert("Thank you for your feedback!");
    document.getElementById('user-feedback').value = ''; // Clear the feedback box
  } else {
    alert("Please enter some feedback before submitting.");
  }
}

// Call the function to set the progress on page load
window.onload = function() {
  updateProgressBars();
}