import scrape from 'website-scraper';

const config = {
    WEBSITE_URL: 'https://maxamation.com/',
    PATH_TO_SAVE_FILE: './maxamation-website'
}

const websiteUrl = config.WEBSITE_URL;

console.time('processScript');
console.log("Downloading full website. Please be patient.........");

const myInterval = setInterval(displayProgressText, 1000);

function displayProgressText() {
    const date = new Date();
    console.log(`≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ Download in progress (Time: ${date.toLocaleTimeString()}) ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈`);
}

scrape({
    urls: [websiteUrl],
    urlFilter: function (url) {
        return url.indexOf(websiteUrl) === 0;
    },
    recursive: true,
    maxDepth: 50,
    prettifyUrls: true,
    filenameGenerator: 'bySiteStructure',
    directory: config.PATH_TO_SAVE_FILE
}).then((data) => {
    console.log("Entire website has been downloaded succesfully! √√√√√√√");
    console.timeEnd('processScript')
    clearInterval(myInterval);
}).catch((err) => {
    console.log("Error Message =", err.message);
    clearInterval(myInterval);
});