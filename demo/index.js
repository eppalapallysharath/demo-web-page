document.getElementById('changeColorBtn').addEventListener('click', function() {
    // Array of colors
    const colors = ['#ff6347', '#4caf50', '#f39c12', '#8e44ad', '#2ecc71'];
    // Get a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // Change the background color of the page
    document.body.style.backgroundColor = randomColor;
});
