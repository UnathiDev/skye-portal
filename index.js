document.addEventListener("DOMContentLoaded", function () {
    // Articles with titles and publication dates
    const articles = [
        { title: "The Future of Sustainable Tech: How AI is Shaping the Next Generation of Eco-Friendly Devices", date: "Mar XX, 2025" }
    ];

    const articlesPerPage = 3;
    let currentPage = 1;

    function renderArticles() {
        const start = (currentPage - 1) * articlesPerPage;
        const end = start + articlesPerPage;
        const articlesContainer = document.getElementById("articles-container");
        articlesContainer.innerHTML = ""; // Clear existing content

        // Render articles
        articles.slice(start, end).forEach(article => {
            const articleDiv = document.createElement("div");
            articleDiv.classList.add("article-item");
            articleDiv.innerHTML = `
                <h3>${article.title}</h3>
                <p><strong>Published on:</strong> ${article.date}</p>
            `;
            articlesContainer.appendChild(articleDiv);

            // Intersection Observer for animation
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible"); // Trigger fade-in animation
                    }
                });
            }, { threshold: 0.5 });

            // Observe the newly created article item
            observer.observe(articleDiv);
        });

        // Handle pagination buttons
        document.getElementById("pageNumber").textContent = currentPage;
        document.getElementById("prevPage").disabled = currentPage === 1;
        document.getElementById("nextPage").disabled = end >= articles.length;
    }

    // Pagination button events
    document.getElementById("prevPage").addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderArticles();
        }
    });

    document.getElementById("nextPage").addEventListener("click", () => {
        if (currentPage * articlesPerPage < articles.length) {
            currentPage++;
            renderArticles();
        }
    });

    // Initially render articles
    renderArticles();
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Function to add the 'visible' class when an element is in the viewport
function checkVisibility() {
    const elements = document.querySelectorAll('.fade-in-up');

    elements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Check on page load
window.addEventListener('load', checkVisibility);

// Check on scroll
window.addEventListener('scroll', checkVisibility);

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}
