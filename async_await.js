const fetchUser = (id) => {
  fetch(`https://dummyjson.com/comments/${id}`)
    .then((response) => response.json())
    .then((data) => fetch(`https://dummyjson.com/users/${data.user.id}`))
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const fetchUserByComment = async (id) => {
  const responce = await fetch(`https://dummyjson.com/comments/${id}`);
  const commentData = await responce.json();
  const userId = commentData.user.id;

  const responceUser = await fetch(`https://dummyjson.com/users/${userId}`);
  const userData = await responceUser.json();
  console.log(userData);
};

const showPostAndComments = (title, body, comments) => {
  const postContainer = document.createElement("div");
  document.body.append(postContainer);
  const titleContainer = document.createElement("h1");
  titleContainer.innerText = title;
  const bodyContainer = document.createElement("p");
  bodyContainer.innerText = body;
  postContainer.append(titleContainer, bodyContainer);

  console.log(comments);
    comments.forEach((value) => {
        console.log(value.body);
        console.log(value.user.username);
        console.log(value)

        const commentBody = document.createElement('p');
        commentBody.innerText = value.body;
        const userName = document.createElement('h3');
        userName.innerText = value.user.username;
        postContainer.append(userName, commentBody);
    });
};

const fetchPostAndComments = async (id, callback) => {
  const [postResponse, commentResponse] = await Promise.all([
    fetch(`https://dummyjson.com/posts/${id}`),
    fetch(`https://dummyjson.com/comments/post/${id}`),
  ]);
  const { title, body } = await postResponse.json();
  const { comments } = await commentResponse.json();
  // console.log('Title:  ' + title);
  // console.log('Body: ' + body);
  // console.log('Comments: ' + comments);
  callback(title, body, comments);
};
fetchPostAndComments(1, (title, body, comments) =>
  showPostAndComments(title, body, comments)
);

// const postData = {
//   id: 1,
//   title: "His mother had always taught him",
//   body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
// };

// const title1 = postData.title;
// const body1 = postData.body;

// // Деструктуризация объекта
// const { body, title } = postData;
