const realContainer = document.querySelector(".container");
 console.log(realContainer);
fetch("https://raw.githubusercontent.com/subratppandey/JSON-data-file/master/data.json")
.then(response => response.json())
.then((data) => {
    updatedata(data);
    // foodfinder(data);
});

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
// console.log({params});\
console.log(params);
console.log(params.type);


function updatedata(data) {
    
    
    data.forEach((value)=>{
        // console.log(params.type);
        console.log(value.foodName);
        console.log(value.nutritionalValue.calories);
        // console.log(value.Type.includes(params.type));

        if (value.foodName === params.type){
        // console.log(value.Type);
        const cardTemplate = 
        ` <div class = "img">
        <img src="${value.image}">
        </div>

    <div class = "facts">
        <div class = "contain">
            <h4>${value.foodName}</h4>
        </div>
        <div class = "contain">
            <h4>${value.description}</h4>
        </div>

        <div class = "contain">
            <h4>Nutritional values:</h4>

            <table style="width:100%">
                <tr>
                  <td>Protein</td>
                  <td>Carbohydrates</td>
                  <td>Fat</td>
                  <td>Calories</td>
                  <td>Sodium</td>
                </tr>

                <tr>
                  <td>${value.nutritionalValue.calories}</td>
                  <td>${value.nutritionalValue.carbohydrate}</td>
                  <td>${value.nutritionalValue.totalFat}</td>
                  <td>${value.nutritionalValue.calories}</td>
                  <td>${value.nutritionalValue.sodium}</td>
                </tr>
              </table>
            
        </div>
    </div>`
    realContainer.innerHTML = cardTemplate;
        // const cardTemplate = 
        // // console.log(value.Type);
        //     `<div class="col">
        //         <div class="card"  data-foodname="${value}" data-bs-toggle="modal" data-bs-target="#exampleModal">
        //             <a href="fooddetail.html?type=${value.foodName}"><img src="${value.image} "
        //                 class="card-img-top" alt="..."></a>
        //             <div class="card-body">
        //                 <h5 class="card-title">${value.foodName}</h5>
        //                 <p class="card-text">${value.description}</p>
        //             </div>
        //             input
        //         </div>
        //     </div>`;
        //  allCardsDom +=cardTemplate;
        //  console.log(66);
        };
    });
    // realContainer.innerHTML = cardTemplate;
}
