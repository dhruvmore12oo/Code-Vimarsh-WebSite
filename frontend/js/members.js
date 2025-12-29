// JavaScript for Members page (members.js)

document.addEventListener('DOMContentLoaded', () => {
    const membersList = document.getElementById('membersList');

    const fetchMembers = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/members');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error('Error fetching members:', error);
            membersList.innerHTML = '<p>Failed to load members. Please try again later.</p>';
        }
    };

    const displayMembers = (members) => {
        membersList.innerHTML = ''; // Clear existing content
        if (members.length === 0) {
            membersList.innerHTML = '<p>No members found at the moment.</p>';
            return;
        }

        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('card');
            memberCard.innerHTML = `
                ${member.photoUrl ? `<img src="images/${member.photoUrl}" alt="${member.name}">` : ''}
                <h3>${member.name}</h3>
                <p><strong>Role:</strong> ${member.role}</p>
                <p>${member.bio}</p>
            `;
            membersList.appendChild(memberCard);
        });
    };

    fetchMembers();
});


