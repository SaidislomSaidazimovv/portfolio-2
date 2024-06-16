const usersRow = document.querySelector(".users-row");
const reklama = document.querySelector(".reklama");

usersRow.innerHTML = `<div class="loader loadingio-spinner-magnify-3l5v4i2w3az"><div class="ldio-djvbccvlp2d">
<div><div><div></div><div></div></div></div>
</div></div>`;

getData("https://jsonplaceholder.typicode.com/users", (res, status) => {
  usersRow.innerHTML = "";
console.log(res);
  if (status === 200) {
    res.map((user) => {
      usersRow.innerHTML += `
      <div class="user">
      <h3 class="user-name">${user.name}</h3>
      <h5 class="user-username">@${user.username}</h5>
      <div class="user-address">
      <div class="user-names">
         <p>Email:</p>
         <p>Address:</p>
         <p>Website:</p>
         <p>Phone:</p>
         </div>
      <div class="user-link">
         <a class="link-add" href="${user.email}">${user.email}</a>
         <a class="link-add" href="${user.address.geo.lat}">${user.address.street}, ${user.address.city} </a>
         <a class="link-add" href="${user.website}">${user.website}</a>
         <a class="link-add" href="${user.phone}">${user.phone}</a>
      </div>
      </div>
      <div class="user-btn">
         <a href="../pages/albom.html?userId=${user.id}">
            <button class="user-button">
            <img src="../images/photo.png">
            Photo
            </button>
         </a>
         <a href="../pages/post.html?userId=${user.id}">
            <button class="user-button">
            <img src="../images/post.png">
            Post</button>
         </a>
         <a href="../pages/todo.html?userId=${user.id}">
         <button class="user-button">
         <img src="../images/to-do-list.png">
            ToDo</button>
         </a>
      </div>
   </div>
      `    });
  } else {
    usersRow.innerHTML = res;
  }
});


function reklamaClose(){
   reklama.style.display = 'none';
}