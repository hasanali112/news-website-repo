console.log("hello console");
//a222e2c96633465082bb3764c4d2276a-news api-https://newsapi.org/v2/top-headlines/sources?apiKey=a222e2c96633465082bb3764c4d2276a
let source = "bbc-news";
let apiKey = "a222e2c96633465082bb3764c4d2276a";
//call the html id
let newsAccordion = document.getElementById("newsAccordion");
//instantiat the xhr object.
let xhr = new XMLHttpRequest();

// open the object
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
  true
);

// on load function running
xhr.onload = function () {
  if (this.status == 200) {
    let json = JSON.parse(this.responseText);
    console.log(json);
    let articles = json.articles;
    console.log(articles);
    let newsHtml="";
    articles.forEach(function (element, index) {
      let news = ` <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index}">
                        <button class="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                        <b>Breaking news ${index +1}</b>: ${element["title"]}
                        </button>
                    </h2>
                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
                        <div class="accordion-body">${element["content"]}. <a href="${element["url"]}" target="_blank">read more..<a/></div>
                    </div>
                    </div>`;
            newsHtml += news;
    });
    newsAccordion.innerHTML=newsHtml;
  }
};

xhr.send();

