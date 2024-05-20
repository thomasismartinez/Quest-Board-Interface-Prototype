let feed;

let pageNum;
let pageMax=-1;

let data = [];

const generateFeed = () => {
    for (let i = 1; i < 90; i++) {
        data.push(`item #${i}`);
    }
}

const generateFeedPage = () => {
    for (let i = 0; i < 20; i++) {
        if (!data[(pageNum*20) + i]) {
            pageMax = pageNum;
            break;
        }
        let newFeedItem = document.createElement('div');
        newFeedItem.classList.add("feed-item");
        console.log(data[(pageNum*20) + i]);
        newFeedItem.innerHTML = data[ (pageNum*20) + i ];
        newFeedItem.style.height = `${(Math.random() * 50) + 100}px`;
        feed.appendChild(newFeedItem);
    }
}

const init = () => {
    pageNum = 0;
    feed = document.getElementById("feed");
    generateFeed();
    generateFeedPage();

    console.log(data);

    document.getElementById("page-left").addEventListener("click", () => {
        if (pageNum > 0) {
            pageNum--;
            feed.innerHTML = "";
            generateFeedPage();
        }
    });

    document.getElementById("page-right").addEventListener("click", () => {
        if (pageMax !== pageNum) {
            pageNum++;
            feed.innerHTML = "";
            generateFeedPage();
        }
    });
}

init();