// Constant variables inputted by the form
const nameInput = document.getElementById('name');
const blogTitleInput = document.getElementById('blogTitle');
const blogPostInput = document.getElementById('bPost');
const submitButton = document.getElementById('submitButton')
const errorMsg = document.getElementById('errorMsg');

// Create an Array of Arrays
let blogPosts = new Array();

// Init Function
function init() {

    // On page startup, grab saved posts
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts'));

    if(storedPosts !== null){
        blogPosts = storedPosts;
    }

}

submitButton.addEventListener('click', function (event) {
    // Do not reload the page
    event.preventDefault();

    // When clicked, run save Post to save the post to local
    savePost();
});

function savePost() {
    
    // If the data input is null, return an error
    if(nameInput.value === "" || blogTitleInput.value === "" || blogPostInput.value === ""){
        errorMsg.textContent = "⚝ All fields must contain information ⚝";
        return;
    }

    // Organize the data into a blog object
    const blogObj = {
        name: nameInput.value,
        blogTitle: blogTitleInput.value,
        blogPost: blogPostInput.value.trim()
    };

    // Push the blog object onto the Blog Posts Array
    blogPosts.unshift(blogObj);

    // Put the blog posts into local storage
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts))

    // Once the information has been submitted, re-direct to the Blog Page
    location.href = "blog.html"
}

init();