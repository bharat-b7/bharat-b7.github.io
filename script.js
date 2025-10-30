document.addEventListener('DOMContentLoaded', function() {
    loadNews();
    loadPublications();
    updateLastModified();
});

function loadNews() {
    fetch('news.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('news-container');

            if (data.news && data.news.length > 0) {
                data.news.forEach(item => {
                    const newsElement = createNewsElement(item);
                    container.appendChild(newsElement);
                });
            } else {
                container.innerHTML = '<p>No news yet.</p>';
            }
        })
        .catch(error => {
            console.error('Error loading news:', error);
            document.getElementById('news-container').innerHTML = '<p>No news yet.</p>';
        });
}

function createNewsElement(item) {
    const newsDiv = document.createElement('div');
    newsDiv.className = 'news-item';

    let html = '';
    html += `<span class="news-date">${item.date}</span>`;
    html += `<span class="news-content">${item.content}</span>`;

    newsDiv.innerHTML = html;
    return newsDiv;
}

function loadPublications() {
    fetch('publications.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('papers-container');

            if (data.papers && data.papers.length > 0) {
                data.papers.forEach(paper => {
                    const paperElement = createPaperElement(paper);
                    container.appendChild(paperElement);
                });
            } else {
                container.innerHTML = '<p>No publications yet.</p>';
            }
        })
        .catch(error => {
            console.error('Error loading publications:', error);
            document.getElementById('papers-container').innerHTML = '<p>Error loading publications.</p>';
        });
}

function createPaperElement(paper) {
    const paperDiv = document.createElement('div');
    paperDiv.className = 'paper';

    let html = '';

    if (paper.image) {
        html += `<img src="${paper.image}" alt="${paper.title}" class="paper-image">`;
    }

    html += '<div class="paper-details">';
    html += `<div class="paper-title">${paper.title}</div>`;

    if (paper.authors && paper.authors.length > 0) {
        html += `<div class="paper-authors">${paper.authors.join(', ')}</div>`;
    }

    if (paper.venue) {
        html += `<div class="paper-venue">${paper.venue}${paper.year ? ', ' + paper.year : ''}</div>`;
    }

    if (paper.links) {
        html += '<div class="paper-links">';
        if (paper.links.paper) {
            html += `<a href="${paper.links.paper}" target="_blank">Paper</a>`;
        }
        if (paper.links.project) {
            html += `<a href="${paper.links.project}" target="_blank">Project</a>`;
        }
        if (paper.links.code) {
            html += `<a href="${paper.links.code}" target="_blank">Code</a>`;
        }
        if (paper.links.video) {
            html += `<a href="${paper.links.video}" target="_blank">Video</a>`;
        }
        html += '</div>';
    }

    html += '</div>';
    paperDiv.innerHTML = html;

    return paperDiv;
}

function updateLastModified() {
    const lastUpdated = document.getElementById('last-updated');
    if (lastUpdated) {
        const date = new Date();
        lastUpdated.textContent = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}
