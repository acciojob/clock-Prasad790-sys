//your JS code here. If required.
function updateTimer() {
    const timerElement = document.getElementById('timer');
    const now = new Date();
    
    // Format the date and time
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
    };
    
    const formattedDate = now.toLocaleDateString(undefined, options);
    const formattedTime = now.toLocaleTimeString(undefined, options);
    
    // Update the timer element
    timerElement.textContent = `${formattedDate} ${formattedTime}`;
}

// Initial call to display the time immediately
updateTimer();
// Update the timer every second
//setInterval(updateTimer, 1000);