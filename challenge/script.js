let cars = [
  {name: 'Car 1', year: '2015', image: 'url_to_image_1', price: '10000'},
  {name: 'Car 2', year: '2018', image: 'url_to_image_2', price: '20000'},
  {name: 'Car 3', year: '2020', image: 'url_to_image_3', price: '30000'},
  // add more car objects...
];

// Display the cars
let carListDiv = document.getElementById('carList');

for(let i = 0; i < cars.length; i++) {
  let car = cars[i];
  carListDiv.innerHTML += `<div class="carItem">
      <h2 onclick="showDetails(${i})">${car.name}</h2>
      <img src="${car.image}" alt="${car.name}">
      <p>${car.year}</p>
      <p>${car.price}</p>
  </div>`;
}

// Function to show car details
function showDetails(i) {
  document.getElementById('carDetails').style.display = 'block';
  document.getElementById('detailName').innerText = cars[i].name;
  document.getElementById('detailImage').src = cars[i].image;
  document.getElementById('detailYear').innerText = 'Year: ' + cars[i].year;
  document.getElementById('detailPrice').innerText = 'Price: ' + cars[i].price;
}

// Function to hide car details
function hideDetails() {
  document.getElementById('carDetails').style.display = 'none';
}
