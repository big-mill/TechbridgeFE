// // const people= [
// //     {
// //         name:"chikanma",
// //         image:"./img.jpg",
// //         occupation:"Sailor"
// //     },
// //     {
// //         name:"chikanma",
// //         image:"./img.jpg",
// //         occupation:"Sailor"
// //     },
// //     {
// //         name:"chikanma",
// //         image:"./img.jpg",
// //         occupation:"Sailor"
// //     },
// //     {
// //         name:"chikanma",
// //         image:"./img.jpg",nn
// //         occupation:"Sailor"
// //     },
// //     {
// //         name:"chikanma",
// //         image:"./img.jpg",
// //         occupation:"Sailor"
// //     },
// //     {
// //         name:"chikanma",
// //         image:"./img.jpg",
// //         occupation:"Sailor"
// //     },
// //     {
// //         name:"chikanma",
// //         image:"./img.jpg",
// //         occupation:"Sailor"
// //     },
// //     {
// //         name:"chikanma",
// //         image:"./img.jpg",
// //         occupation:"Sailor"
// //     },
// //     {
// //         name:"chikanma",
// //         image:"./img.jpg",
// //         occupation:"Sailor"
// //     },
// //     {
// //         name:"chikanma",
// //         image:"/img.jpg",
// //         occupation:"Sailor"
// //     },
   
// // ];
// // let body = document.getElementById("body");
// // console.log("hello");

// // people.forEach(person => {
// //     let card = document.createElement("div");
// //     card.classList.add("card");
// //     body.appendChild(card);

// //     let image = document.createElement("img")
// //     image.src = person.image;
// //     card.appendChild(image);

// //     let name = document.createElement("h2")
// //     name.textContent = person.name;
// //     card.appendChild(name);


// //     let occupation = document.createElement("p");
// //     name.textContent = person.occupation;
// //     card.appendChild(occupation);

// // })

// // console.log("body");

// // const req = new XMLHttpRequest()
// // req.open("GET", "https://catfact.ninja/fact")
// // req.send()
// // console.log(req.response);
// // req.responseType ="json"
// // req.onload = () => console.log(req.response.fact);


// Select the button and create a container for the facts
const button = document.getElementById("get-btn");
const btnSection = document.getElementById("btn-section");

// Create a container to display the fact
const factContainer = document.createElement("p");
factContainer.id = "fact-container";
btnSection.appendChild(factContainer);

button.addEventListener("click", () => {
  //  button text "Loading..."
  button.textContent = "Loading...";

  
  fetch("https://catfact.ninja/fact")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // If a paragraph doesn't exist, create it
      let factContainer = document.getElementById("fact-container");
      if (!factContainer) {
        factContainer = document.createElement("p");
        factContainer.id = "fact-container";
        btnSection.appendChild(factContainer); 
      }

     
      factContainer.textContent = data.fact;
    })
    .catch((error) => {
      // Handle errors
      alert("Failed to load a cat fact. Please try again.");
      console.error("Fetch error:", error);
    })
    .finally(() => {
     
      button.textContent = "More cat facts";
    });
});

