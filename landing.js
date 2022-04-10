const realContainer = document.querySelector("#resultant");
// console.log(realContainer);
fetch("https://raw.githubusercontent.com/subratppandey/JSON-data-file/master/data.json")
.then(response => response.json())
.then((data) => {
    
    updatedata(data);
   
});




function updatedata(data) {
    console.log(data);
    console.log(data.length)
    var newData = []
    for(let i=0; i <6;i++){
    randomNumber = Math.floor(Math.random() * data.length);
    newData.push(data[randomNumber]);
    }
    console.log(newData);
    
    let allCardsDom = '';
    newData.forEach((value)=>{
       const cardTemplate = 
        // console.log(value.Type);
            `<div class="col">
                <div class="card"  data-foodname="${value}" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <a href="fooddetail.html?type=${value.foodName}"><img src="${value.image} "
                        class="card-img-top" alt="..."></a>
                   
                   
                </div>
            </div>`;
         allCardsDom +=cardTemplate;
        
    });
    realContainer.innerHTML = allCardsDom;

}


 // <div class="card-body">
                    //     <h5 class="card-title">${value.foodName}</h5>
                    //     <p class="card-text">${value.description}</p>
                    // </div>

