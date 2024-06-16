const userPostRow = document.querySelector(".user-post-row");

const query = new URLSearchParams(location.search);

const userId = query.get("userId");

userPostRow.innerHTML = `<div class="loader loadingio-spinner-magnify-3l5v4i2w3az"><div class="ldio-djvbccvlp2d">
<div><div><div></div><div></div></div></div>
</div></div>`;

getData(
  `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
  (posts) => {
    userPostRow.innerHTML = "";
    posts.map((album) => {
      userPostRow.innerHTML += `<div class="user">
      <h3 class="post-title">${album.title}</h3>
      <p  class="post-body">${album.body}</p>
      <a href="../pages/comment.html?postId=${album.id}">
      <button class="user-button">
         Comment
      </button>
      </a>
   </div>`;
    });
  }
);

getPost(
   `https://jsonplaceholder.typicode.com/posts`,
   (posts) => {
     userPostRow.innerHTML = "";
     posts.map((album) => {
       userPostRow.innerHTML += `<div class="user">
       <h3 class="post-title">${album.title}</h3>
       <p  class="post-body">${album.body}</p>
       <a href="../pages/comment.html?postId=${album.id}">
       <button class="user-button">
          Comment
       </button>
       </a>
    </div>`;
     });
   }
 );
