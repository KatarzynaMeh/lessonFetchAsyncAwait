const root = document.createElement("div");
document.body.append(root);
let corentUserId = Number(localStorage.getItem("userId")) || 1;

const userFetch = async (id, callback) => {
  try {
    const [responceUser, responcePost] = await Promise.all([
      fetch(`https://dummyjson.com/users/${id}`),
      fetch(`https://dummyjson.com/posts/user/${id}`),
    ]);
    if (!responceUser.ok && !responcePost.ok) {
      throw new Error("Пользователя с таким id нет");
    }

    localStorage.setItem("userId", id);

    const userData = await responceUser.json();
    const postData = await responcePost.json();

    callback(userData, postData);
  } catch (error) {
    console.log(error);
    const err = document.createElement("h3");
    err.innerText = error.message;
    document.body.append(err);
  }
};

const showData = (userData, postData) => {
  // const [firstName, email, posts] = array;
  const { firstName, email } = userData;
  const { posts } = postData;

  const fName = document.createElement("h2");
  fName.innerText = firstName;

  const emailUser = document.createElement("p");
  emailUser.innerText = email;

  const container = document.createElement("div");

  posts.forEach((element) => {
    const comment = document.createElement("p");
    comment.innerText = element.title;
    container.append(comment);
  });

  root.append(fName, emailUser, container);
};

userFetch(corentUserId, showData);

const createButton = (id) => {
  const prev = document.createElement("button");
  prev.innerText = "Prev";
  prev.addEventListener("click", () => {
    if (id > 1) {
      id--;
      root.innerText = "";
      userFetch(`${id}`, showData);
    }
  });

  const next = document.createElement("button");
  next.innerText = "Next";
  next.addEventListener("click", () => {
    id++;
    root.innerText = "";
    userFetch(`${id}`, showData);
  });

  document.body.prepend(prev, next);
};

createButton(corentUserId);
