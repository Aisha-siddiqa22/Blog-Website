
<script>
    const form = document.getElementById('blogForm');
    const postsContainer = document.getElementById('postsContainer');

    form.addEventListener('submit', e => {
        e.preventDefault();

    const title = form.title.value.trim();
    const author = form.author.value.trim();
    const description = form.description.value.trim();
    const content = form.content.value.trim();

    if (!title || !author || !description || !content) {
        alert('Please fill in all fields before submitting.');
    return;
        }

    // Create post element
    const postDiv = document.createElement('article');
    postDiv.classList.add('post');

    // Header: Title and Author aligned horizontally
    const headerDiv = document.createElement('div');
    headerDiv.className = 'post-header';

    const postTitle = document.createElement('h2');
    postTitle.textContent = title;

    const postAuthor = document.createElement('span');
    postAuthor.className = 'author';
    postAuthor.textContent = `By: ${author}`;

    headerDiv.appendChild(postTitle);
    headerDiv.appendChild(postAuthor);

    // Description paragraph
    const postDesc = document.createElement('p');
    postDesc.className = 'description';
    postDesc.textContent = description;

    // Content paragraph
    const postContent = document.createElement('p');
    postContent.className = 'content';
    postContent.textContent = content;

    // Append all parts
    postDiv.appendChild(headerDiv);
    postDiv.appendChild(postDesc);
    postDiv.appendChild(postContent);

    // Add new post on top
    postsContainer.prepend(postDiv);

    // Reset form
    form.reset();

    // Scroll to new post smoothly
    postDiv.scrollIntoView({behavior: 'smooth' });
    });
</script>