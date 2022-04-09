const realContainer = document.querySelector("#resultant");
// console.log(realContainer);
fetch("https://raw.githubusercontent.com/subratppandey/JSON-data-file/master/data.json")
.then(response => response.json())
.then((data) => {
    updatedata(data);
    // foodfinder(data);
});

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
console.log({params});

function updatedata(data) {
    
    let allCardsDom = '';
    data.forEach((value)=>{
        console.log(value.Type);
        const cardTemplate = 
        // console.log(value.Type);
            `<div class="col">
                <div class="card"  data-foodname="${value}" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <a href=""><img src="${value.image} "
                        class="card-img-top" alt="..."></a>
                    <div class="card-body">
                        <h5 class="card-title">${value.foodName}</h5>
                        <p class="card-text">${value.description}</p>
                    </div>
                    input
                </div>
            </div>`;
         allCardsDom +=cardTemplate;
    });
    realContainer.innerHTML = allCardsDom;
}






// if (evalue.titl === "fries"){
    //         const cardTemplate = 
    //         `<div class="col">
    //             <div class="card">
    //                 <a href=""><img src="${value.image}"
    //                     class="card-img-top" alt="..."></a>
    //                 <div class="card-body">
    //                     <h5 class="card-title">${value.title}</h5>
    //                     <p class="card-text">${value.description}</p>
    //                 </div>
    //             </div>
    //         </div>`;
    //      allCardsDom +=cardTemplate;
    //     }
    // realContainer.innerHTML = allCardsDom;

    //     });