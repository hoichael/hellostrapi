const container = document.querySelector(".gallery-outer-container");
const baseURL = "http://localhost:1337";

const handleData = async () => {
    const res = await fetch(
        "http://localhost:1337/api/gallery?populate[section][populate]=*"
    );
    const data = await res.json();
    insertDataIntoDOM(data.data.attributes.section);
};

const insertDataIntoDOM = (dataArray) => {
    // delete default contents of container
    container.innerHTML = null;

    // populate container with new elements
    for (let i = 0; i < dataArray.length; i++) {
        const title = dataArray[i].title;
        let imageDivs = "";

        let imgArr = dataArray[i].images.data;

        // reverse arr because unintuitive ('reversed') order from strapi dashboard uplaod
        imgArr = imgArr.reverse();

        // for each element in imgArr, add new html img element to imageDivs string
        for (let i = 0; i < imgArr.length; i++) {
            const src = baseURL + imgArr[i].attributes.formats.small.url;
            imageDivs += `<img src=${src} class="gallery-entry"></img>\n`;
        }

        const fullSection = `<div class="gallery-section-title text-medium">${title}</div>
        <div class="gallery-section-inner-container">
            ${imageDivs}
        </div>`;

        container.innerHTML += fullSection;
    }
};

handleData();
