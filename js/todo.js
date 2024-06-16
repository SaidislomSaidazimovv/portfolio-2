const userToDoRow = document.querySelector(".user-todo-row");

const query = new URLSearchParams(location.search);

const userId = query.get("userId");

userToDoRow.innerHTML = `<div class="loader loadingio-spinner-magnify-3l5v4i2w3az"><div class="ldio-djvbccvlp2d">
<div><div><div></div><div></div></div></div>
</div></div>`;

getData(
  `https://jsonplaceholder.typicode.com/todos?userId=${userId}`,
  (posts) => {
    userToDoRow.innerHTML = "";
    posts.map((album) => {
      userToDoRow.innerHTML += `<div class="user">
      <h3 class="post-title">${album.title}</h3>
      <div class="todo-complated">${album.completed ? "✅" : "❌"}</div>
      </a>
   </div>`;
    });
  }
);


