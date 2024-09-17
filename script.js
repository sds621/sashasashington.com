// script.js
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeBtn = document.querySelector('.close');
    const loginForm = document.getElementById('loginForm');
    const familyContent = document.getElementById('familyContent');

    // Show login modal
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    // Close login modal
    closeBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target == loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Handle login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simple client-side authentication (replace with server-side auth in production)
        if (username === 'family' && password === 'password123') {
            alert('Login successful!');
            loginModal.style.display = 'none';
            loginBtn.textContent = 'Logout';
            loginBtn.href = '#';
            showFamilyContent();
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });

    // Function to show family content (replace with actual content in production)
    function showFamilyContent() {
        if (!familyContent) {
            familyContent = document.createElement('section');
            familyContent.id = 'familyContent';
            familyContent.innerHTML = `
                <div class="container">
                    <h2>Welcome, <span class="highlight">Doe Family</span>!</h2>
                    <div class="family-grid">
                        <div class="family-card">
                            <h3>Upcoming Events</h3>
                            <ul>
                                <li>Annual Family Reunion - July 15, 2024</li>
                                <li>Thanksgiving Dinner - November 28, 2024</li>
                            </ul>
                        </div>
                        <div class="family-card">
                            <h3>Photo Gallery</h3>
                            <p>Check out our latest family photos!</p>
                            <a href="#" class="cta-button">View Gallery</a>
                        </div>
                        <div class="family-card">
                            <h3>Family Tree</h3>
                            <p>Explore our interactive family tree</p>
                            <a href="#" class="cta-button">View Tree</a>
                        </div>
                    </div>
                </div>
            `;
            document.querySelector('main').appendChild(familyContent);
        }
        familyContent.style.display = 'block';
    }

    // Handle logout
    loginBtn.addEventListener('click', (e) => {
        if (loginBtn.textContent === 'Logout') {
            e.preventDefault();
            loginBtn.textContent = 'Family Login';
            loginBtn.href = '#login';
            if (familyContent) {
                familyContent.style.display = 'none';
            }
            alert('You have been logged out.');
        }
    });
});