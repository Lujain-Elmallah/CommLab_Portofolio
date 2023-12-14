document.addEventListener('DOMContentLoaded', function() {
    const projectContainers = document.querySelectorAll('.project-image-container'); 

    projectContainers.forEach(container => {
        const projectDescription = container.querySelector('.project-description');
        const projectName = container.querySelector('h3');

        container.addEventListener('mouseover', () => {
            projectDescription.style.opacity = '1';
            projectName.style.opacity = '0'; 
        });

        container.addEventListener('mouseout', () => {
            projectDescription.style.opacity = '0';
            projectName.style.opacity = '1'; 
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const interests = {
        "interest": "I have experience with coding in languages such as python and c++. But for the projects below they were mainly developed using html, css and javascript.",
        "another-interest": "I enjoy exploring ways in which web design could be more interactive and user friendly which I have done thorugh researching design, more specifucally web design.",
        "third-interest": "To tie all this together I'd say I enjoy creating things and exploring different and creative ways of creation."
    };

    const highlights = document.querySelectorAll('.highlight');

    highlights.forEach((highlight) => {
        highlight.addEventListener('mouseover', function () {
            const interestId = this.id;
            if (interests.hasOwnProperty(interestId)) {
                showInterestDescription(interestId, interests[interestId]);
            }
        });

        highlight.addEventListener('mouseout', function () {
            hideInterestDescription();
        });
    });

    function showInterestDescription(interestId, description) {
        const existingDescription = document.querySelector('.interest-description');
        if (existingDescription) {
            existingDescription.remove();
        }

        const descriptionElement = document.createElement('div');
        descriptionElement.className = 'interest-description';
        descriptionElement.innerHTML = `<p>${description}</p>`;
        document.querySelector('.interactive-about').appendChild(descriptionElement);
    }

    function hideInterestDescription() {
        const existingDescription = document.querySelector('.interest-description');
        if (existingDescription) {
            existingDescription.remove();
        }
    }
});

