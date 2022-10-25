const container = document.querySelector(".info-article");

const handleData = async () => {
    const res = await fetch("http://localhost:1337/api/info?populate=section");
    const data = await res.json();
    insertDataIntoDOM(data.data.attributes.section);
};

const insertDataIntoDOM = (dataArray) => {
    //   redundant because the proper amount of objects (as well as the general structure of the payload) is enforced in the backend
    //   const arr = new Array();
    //   arr = dataArray;
    //   if(arr.length != 3) {
    //     console.log("oops");
    //     return;
    //   }

    // delete default contents of container
    container.innerHTML = null;

    // populate container with new elements
    for (let i = 0; i < 3; i++) {
        const title = dataArray[i].title;
        const text = dataArray[i].text;
        const template = `<div class="info-article-section">
        <div class="info-article-section-title text-medium">${title}</div>
        <p class="info-article-paragraph text-small">${text}</p>
        </div>`;

        container.innerHTML += template;
    }
};

handleData();
