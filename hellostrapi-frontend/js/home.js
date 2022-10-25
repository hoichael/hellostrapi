const articleDiv = document.querySelector(".home-article");

const handleData = async () => {
    const res = await fetch("http://localhost:1337/api/home");
    const data = await res.json();
    articleDiv.innerHTML = data.data.attributes.article;
};

handleData();
