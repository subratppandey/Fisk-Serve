const realContainer = document.querySelector("#resultant");
const button = document.querySelector("#button");


fetch("https://raw.githubusercontent.com/ArunGiri392/FiskServe/dev/data.json")
.then(response => response.json())
.then((data) => {
    updatedata(data);
    
});

//function to get a variable from the html page.
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

//function to filter the Breakfast, Launch and Dinner feature.
function updatedata(data) {
    let allCardsDom = '';
    data.forEach((value)=>{
       if (value.Type.includes(params.type)){
       const cardTemplate = 
      
            `<div class="col">
                <div class="card"  data-foodname="${value}" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <a href="fooddetail.html?type=${value.foodName}"><img src="${value.image} "
                        class="card-img-top" alt="..."></a>
                    <div class="card-body">
                        <h5 class="card-title">${value.foodName}</h5>
                        <p class="card-text">${value.description}</p>
                    </div>
                </div>
            </div>`;
         allCardsDom +=cardTemplate;
        
        };
    });
    realContainer.innerHTML = allCardsDom;
}
