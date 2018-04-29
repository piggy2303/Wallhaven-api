const Wallhaven = require("wallhaven-api");

const api = new Wallhaven();

api.search("", {
    categories: ["general"],
    //['general', 'anime', 'people']
    page: 1,
    sorting: "relevance",
    //relevance random date_added views favorites
    nsfw: true,
    sketchy: false
  })
  .then(result => {
    console.log(result);
  });

// api.details(646809).then(result => {
//   console.log(result);
// });
