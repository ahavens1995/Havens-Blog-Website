// On the blog page, take what is in local storage and post it to the page
const blogList = document.querySelector('#blogs');
const backHome = document.getElementById('submit');

let storedPosts = [];

backHome.addEventListener('click', function (event) {
    // Do not reload the page
    location.href = "index.html";
});

function renderPosts(){
    blogList.innerHTML = '';
    
    for(let i = 0; i < storedPosts.length; i++){
        const post = storedPosts[i];
        const ul = document.createElement('ul');
        const li1 = document.createElement('li');
        const li2 = document.createElement('li');
        const li3 = document.createElement('li');

        li1.textContent = "Name : " + post.name;
        li2.textContent = "Blog Title : " + post.blogTitle;
        li3.textContent = post.blogPost;

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.setAttribute("class", "card");

        blogList.appendChild(ul);
    }
}

function init() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));

    if(blogPosts !== null){
        storedPosts = blogPosts;
    }

    renderPosts();
}

init();