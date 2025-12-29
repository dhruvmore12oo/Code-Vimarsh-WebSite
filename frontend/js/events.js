// JavaScript for Events page (events.js)

document.addEventListener('DOMContentLoaded', () => {
    const eventsList = document.getElementById('eventsList');

    const fetchEvents = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/events');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const events = await response.json();
            displayEvents(events);
        } catch (error) {
            console.error('Error fetching events:', error);
            eventsList.innerHTML = '<p>Failed to load events. Please try again later.</p>';
        }
    };

    const displayEvents = (events) => {
        eventsList.innerHTML = ''; // Clear existing content
        if (events.length === 0) {
            eventsList.innerHTML = '<p>No upcoming events at the moment. Stay tuned!</p>';
            return;
        }

        events.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.classList.add('card');
            eventCard.innerHTML = `
                <h3>${event.title}</h3>
                <p><strong>Date:</strong> ${event.eventDate}</p>
                <p><strong>Venue:</strong> ${event.venue}</p>
                <p>${event.description}</p>
            `;
            eventsList.appendChild(eventCard);
        });
    };

    fetchEvents();
});


