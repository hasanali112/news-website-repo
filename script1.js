console.log("we console")

let source = "bbc-news";
let apiKey = "a222e2c96633465082bb3764c4d2276a";

const req = new Request(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`);

fetch(req).then(response=>{
    return response.json();
}).then(objectData=>{
    console.log(objectData);
    let newsHtml="";
    let articles= objectData["articles"];
    articles.forEach(function(element,index){
        newsHtml+=`<div class="accordion-item">
        <h2 class="accordion-header" id="heading${index}">
            <button class="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
            <b>Breaking news ${index +1}</b>: ${element["title"]}
            </button>
        </h2>
        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
            <div class="accordion-body">${element["content"]}. <a href="${element["url"]}" target="_blank">read more..<a/></div>
        </div>
        </div>`
    })
    let newsAccordion= document.getElementById("newsAccordion");
    newsAccordion.innerHTML=newsHtml
})



