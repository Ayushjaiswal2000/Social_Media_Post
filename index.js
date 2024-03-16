//Create the event Listener for the buttons.
let postsData = [
    { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' },
    { id: 2, author: 'Jane', content: 'This is a great post!', likes: 15, comments: [], image: 'https://files.codingninjas.in/oip-28704.jpg' },
    { id: 3, author: 'Alice', content: 'Another post', likes: 8, comments: [], image: 'https://files.codingninjas.in/th-2-28706.jpg' },
    { id: 4, author: 'Bob', content: 'Check out this photo!', likes: 20, comments: [], image: 'https://files.codingninjas.in/image1-28708.jpg' },
  ];
  
  function renderPosts(posts) {
  const postsContainer = document.getElementById('posts');
  postsContainer.innerHTML = '';  
  
  
  posts.forEach((post1) => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
  
    const authorElement = document.createElement('h3');
    authorElement.textContent = post1.author;
  
    const contentElement = document.createElement('p');
    contentElement.textContent = post1.content;
  
    const imageElement = document.createElement('img');
    imageElement.src = post1.image;
    imageElement.alt = 'Post Image';
  
    const likeButton = document.createElement('button');
    likeButton.textContent = `Like`;
    likeButton.classList.add('like-button');
    //Add eventListerner here to update the likes.
  
    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'Write a comment...';
  
    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comment';
    commentButton.classList.add('comment-button')
    //Create eventListener here for the comment button
  
  
    const postFooter = document.createElement('div');
    postFooter.classList.add('post-footer');
    postFooter.textContent = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;
  
    const commentsContainer = document.createElement('div');
    commentsContainer.classList.add('comments-container');
    commentsContainer.style.display = 'none';
  
    post1.comments.forEach((comment) => {
      const commentElement = document.createElement('p');
      commentElement.textContent = comment;
      commentsContainer.appendChild(commentElement);
    });
  
    postElement.appendChild(authorElement);
  
    postElement.appendChild(imageElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(likeButton);
    postElement.appendChild(commentInput);
    postElement.appendChild(commentButton);
    postElement.appendChild(postFooter);
    postElement.appendChild(commentsContainer);
  
    postFooter.addEventListener('click', () => {
      if (commentsContainer.style.display === 'none') {
        commentsContainer.style.display = 'block';
      } else {
        commentsContainer.style.display = 'none';
      }
    });
  
    postsContainer.appendChild(postElement);
  
    let isButtonClicked = false;
    likeButton.addEventListener("click",()=>{
      if (!isButtonClicked) {
        post1.likes = post1.likes + 1;
        likeButton.style.backgroundColor = "red";
        postFooter.textContent = `Likes: ${post1.likes} Comments: ${post1.comments.length}`;
        
        
        isButtonClicked = true;
    }
      
      
    });
  
  
    commentButton.addEventListener('click',()=>{
      const inputValue = commentInput.value; 
  
    if (inputValue !== '') {  
      post1.comments.push(inputValue);
      postFooter.textContent = `Likes: ${post1.likes} Comments: ${post1.comments.length}`;
  
  
      commentInput.value = '';
      const commentElement = document.createElement('p');
      commentElement.textContent = inputValue;
      commentsContainer.appendChild(commentElement);
      likeButton.style.backgroundColor="";
    }
  });
  });
  }
  
  document.getElementById('postForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Get values from form inputs
    const caption = document.getElementById('postInput').value;
    const fileInput = document.getElementById('imageInput');
    const image = fileInput.files.length > 0 ? URL.createObjectURL(fileInput.files[0]) : null;
  
   
    const newPost = {
      id: postsData.length + 1,
      author: 'YourUsername', 
      content: caption,
      likes: 0,
      comments: [],
      image: image,
    };
  
    
    postsData.push(newPost);
    renderPosts(postsData); 
    document.getElementById('postInput').value = '';
    fileInput.value = ''; 
  });
  
  
  renderPosts(postsData); 