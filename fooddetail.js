const realContainer = document.querySelector(".container");
 console.log(realContainer);
fetch("https://raw.githubusercontent.com/subratppandey/JSON-data-file/master/data.json")
.then(response => response.json())
.then((data) => {
    updatedata(data);
    
});

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());



function updatedata(data) {
    
    
    data.forEach((value)=>{
        // console.log(params.type);
        // console.log(value.foodName);
        // console.log(value.nutritionalValue.calories);
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
            <h6>${value.description}</h6>
        </div>

        <div class = "contains">
            <h4>Nutritional values</h4>
        </div>

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
       
        };
    });
   
}
