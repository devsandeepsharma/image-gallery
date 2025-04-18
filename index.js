const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
const apiMessage = document.getElementById("api-message");

const accessKey = "UwiARbx3SzND9-ZendBBOqLxxj0oGtNLYAGIpf-H7Ws";

const dummyImages = [
    {
        id: 1,
        alt_description: "dummy image",
        urls: {
            regular: "https://plus.unsplash.com/premium_photo-1744754825046-71455f020060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        }
    },
    {
        id: 2,
        alt_description: "dummy image",
        urls: {
            regular: "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"
        }
    },
    {
        id: 3,
        alt_description: "dummy image",
        urls: {
            regular: "https://images.unsplash.com/photo-1601134991665-a020399422e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhvdG98ZW58MHx8MHx8fDA%3D"
        }
    },
    {
        id: 4,
        alt_description: "dummy image",
        urls: {
            regular: "https://images.unsplash.com/photo-1495231916356-a86217efff12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG98ZW58MHx8MHx8fDA%3D"
        }
    },
    {
        id: 5,
        alt_description: "dummy image",
        urls: {
            regular: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
        }
    },
    {
        id: 6,
        alt_description: "dummy image",
        urls: {
            regular: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
        }
    },
]

const fetchImages = async (count) => {
    try {
        const res = await fetch(`https://api.unsplash.com/photos/random?count=${count}&client_id=${accessKey}`)
        
        if(!res.ok) {
            throw new Error("Something went wrong");
        }

        const data = await res.json();

        return data;
    } catch (error) {
        return null;
    }
}

const generateHTML = (data) => {
    const html = data.map(img => (
        `
            <li class="img__card">
                <img 
                    src=${img.urls.regular} 
                    alt=${img.alt_description} 
                    data-id=${img.id}
                    loading="lazy"
                />
            </li>
        `
    )).join("");

    return html;
}

const showImages = async () => {
    loader.style.display = "block";
    const images = await fetchImages(20);
    let html = `<h1>Unsplash API's limit </h1>`

    if(images) {
        apiMessage.style.display = "none";
        html = generateHTML(images);
    } else {
        apiMessage.style.display = "block";
        html = generateHTML(dummyImages);
    }

    imageContainer.innerHTML = html;
    loader.style.display = "none";
}

showImages();