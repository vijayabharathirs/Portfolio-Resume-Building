// Function to show the selected page
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });
}

// Show the resume page by default on page load
document.addEventListener('DOMContentLoaded', () => {
    showPage('resume-page'); // Show the resume page on initial load
});

// Function to handle resume generation and save to MongoDB
document.getElementById('resume-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Retrieve input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;

    // Generate resume content
    const resumeContent = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h4>Education</h4>
        <p>${education}</p>
        <h4>Experience</h4>
        <p>${experience}</p>
    `;

    // Display the generated resume
    document.getElementById('resume-content').innerHTML = resumeContent;
    document.getElementById('resume').style.display = 'block'; // Show the resume section

    // Prepare data to be sent to MongoDB
    const resumeData = {
        name,
        email,
        phone,
        education,
        experience
    };

    // Send data to the backend using fetch
    try {
        const response = await fetch('http://localhost:5000/api/resume', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(resumeData)
        });

        if (response.ok) {
            alert('Resume saved successfully!');
        } else {
            throw new Error('Failed to save resume');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error saving resume: ' + error.message);
    }
});

// Function to save projects to MongoDB
document.getElementById('save-projects').addEventListener('click', async () => {
    const projects = document.getElementById('projects').value;

    // Prepare data to be sent to MongoDB
    const projectsData = { projects };

    // Send data to the backend using fetch
    try {
        const response = await fetch('http://localhost:5000/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectsData)
        });

        if (response.ok) {
            alert('Projects saved successfully!');
        } else {
            throw new Error('Failed to save projects');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error saving projects: ' + error.message);
    }
});

// Function to save skills to MongoDB
document.getElementById('save-skills').addEventListener('click', async () => {
    const skills = document.getElementById('skills').value;

    // Prepare data to be sent to MongoDB
    const skillsData = { skills };

    // Send data to the backend using fetch
    try {
        const response = await fetch('http://localhost:5000/api/skills', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(skillsData)
        });

        if (response.ok) {
            alert('Skills saved successfully!');
        } else {
            throw new Error('Failed to save skills');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error saving skills: ' + error.message);
    }
});

// Function to save contact information to MongoDB
document.getElementById('save-contact').addEventListener('click', async () => {
    const contactInfo = document.getElementById('contact-info').value;

    // Prepare data to be sent to MongoDB
    const contactData = { contactInfo };

    // Send data to the backend using fetch
    try {
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactData)
        });

        if (response.ok) {
            alert('Contact information saved successfully!');
        } else {
            throw new Error('Failed to save contact information');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error saving contact information: ' + error.message);
    }
});
