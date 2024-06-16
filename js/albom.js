const userPostsRow = document.querySelector(".user-album-row");

const query = new URLSearchParams(location.search);

const userId = query.get("userId");

userPostsRow.innerHTML = `<div class="loader loadingio-spinner-magnify-3l5v4i2w3az"><div class="ldio-djvbccvlp2d">
<div><div><div></div><div></div></div></div>
</div></div>`;

getData(
  `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
  (posts) => {
    userPostsRow.innerHTML = "";
    posts.map((album) => {
      userPostsRow.innerHTML += `<div class="user">
      <h3 class="album-title">${album.title}</h3>
      <a href="../pages/photo.html?albumId=${album.id}">
      <button class="user-button">
         Photo
      </button>
      </a>
   </div>`;
    });
  }
);


