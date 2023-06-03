const cardContainer = document.querySelector("#card-container") ; 

const API_URL = "https://fakestoreapi.com/products" ;

let cardsData = [] ; 


async function fetchAPI () {

    const data = await fetch(API_URL) ; 
    const data_json = await data.json() ; 
    console.log(data_json) ;
    cardsData = data_json ;
    InsertCards() ;   
}

function InsertCards(){

    if(cardsData.length > 0) {

        
        cardsData.map((card)=>{
            const rating = Math.floor(card.rating.rate) ; 
            const ele = document.createElement("div") ;
            ele.classList.add("single-card") ; 

            ele.innerHTML = `
            <div class = "card-image">
                <img src = ${card.image} height = "180px" width = "150px"/>
            </div>
            <div class = "card-title">${card.title}</div>
            <div>${card.category}</div>

            <div class = "star-rating" data-value = ${rating}>

                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                
            </div>
            <div>R ating Count: ${card.rating.count}</div>

            <button class = "card-button">
                Buy Now
            </button>
            `
            cardContainer.appendChild(ele) ; 

        })

        StarRatings() ; 

    }

}

function StarRatings() {

    const starContainer = Array.from(document.getElementsByClassName("star-rating")); 

    starContainer.forEach(element => {
        const stars = element.dataset.value ; 
        const children = element.children ;  
        for(let i=0 ; i<stars ; i++) {
            children[i].style.color = "gold" ; 
        }
    });

}


fetchAPI() ;