  


// Get the button that opens the popup
const openPopup = document.getElementById('openPopup');
// Get the popup
const popup = document.getElementById('popup');
// Get the <span> element that closes the popup
const closePopup = document.getElementById('closePopup');

// When the user clicks the button, open the popup 
openPopup.onclick = function() {
    popup.style.display = 'block';
}

// When the user clicks on <span> (x), close the popup
closePopup.onclick = function() {
    popup.style.display = 'none';
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}
document.getElementById('pollForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('pollTitle').value;
    const options = document.getElementById('pollOptions').value.split(',');

    // Here you would typically send the data to a server or process it
    console.log('Poll Title:', title);
    console.log('Poll Options:', options);

    alert('Poll created successfully!');
    // Reset the form
    this.reset();
});


//tell chat gpt to explain every line of this code
