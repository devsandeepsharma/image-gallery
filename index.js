const imageContainer = document.getElementById("image-container");

const accessKey = "UwiARbx3SzND9-ZendBBOqLxxj0oGtNLYAGIpf-H7Ws";

const fetchImages = async (count) => {
    const res = await fetch(`https://api.unsplash.com/photos/random?count=${count}&client_id=${accessKey}`)
    const data = await res.json();

    return data;
}

const randomClass = () => {
    const clases = ["small", "medium", "large"];
    const size = clases[Math.floor(Math.random() * 2)];

    return size;
}

const generateHTML = (data) => {
    const html = data.map(img => (
        `
            <li class="img__card ${randomClass()}">
                <img 
                    src=${img.urls.regular} 
                    alt=${img.alt_description} 
                    data-id=${img.id}
                />
            </li>
        `
    )).join("");

    return html;
}

const showImages = async () => {
    const images = await fetchImages(10);
    const html = generateHTML(images);

    imageContainer.innerHTML = html;
}

showImages();