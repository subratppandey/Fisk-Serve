const realContainer = document.querySelector(".container");
 console.log(realContainer);
fetch("https://raw.githubusercontent.com/ArunGiri392/FiskServe/dev/data.json")
.then(response => response.json())
.then((data) => {
    updatedata(data);
    
});

//code to get the value passed from link passed from HTML.
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());



function updatedata(data) {
    
    
    data.forEach((value)=>{
       if (value.foodName === params.type){
       const cardTemplate = 
        ` 
        <div class = "see">
        <div class = "img">
        <img src="${value.image}">
        </div>

    <div class = "facts">
        <div class = "contain">
            <h4>${value.foodName}</h4>
        </div>
        <div class = "contain">
            <h6>${value.description}</h6>
        </div>
    

        <div class = "try>

            <div class = "contains">
                <h4>Nutritional values</h4>
            </div>


        <div class = "table">
          
            <table style="width:100%">
                <tr>
                  <td>Protein</td>
                  <td>${value.nutritionalValue.calories}</td>
                </tr>

                <tr>
                    <td>Carbohydrates</td>
                    <td>${value.nutritionalValue.carbohydrate}</td>
                </tr>

                <tr>
                    <td>Fat</td>
                    <td>${value.nutritionalValue.totalFat}</td>
                </tr>

                <tr>
                    <td>Calories</td>
                    <td>${value.nutritionalValue.calories}</td>
                </tr>

                <tr>

                    <td>Sodium</td>
                    <td>${value.nutritionalValue.sodium}</td>
                </tr>
              </table>
          
        </div>

        </div>
            
        </div>
    </div>`
    realContainer.innerHTML = cardTemplate;
       
        };
    });
   
}
