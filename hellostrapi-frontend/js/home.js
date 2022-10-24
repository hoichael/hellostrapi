const articleDiv = document.querySelector(".home-article");

fetch("http://localhost:1337/api/home")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data.data.attributes.article);
    articleDiv.innerHTML = data.data.attributes.article;
  })
  .catch((err) => {
    console.log(err);
  });
