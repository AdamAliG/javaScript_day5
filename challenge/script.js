let cars = [
  {name: 'Ford Mustang', year: '2015', image: 'https://www.cnet.com/a/img/resize/545333abf055de40051f2c843b6578f3311db797/hub/2018/10/16/80c9b57c-1572-43a7-89bc-49a818239c00/2018-ford-mustang-gt-60.jpg?auto=webp&width=1200', price: '10000'},
  {name: 'BMW', year: '2018', image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X7/9462/1673948689052/front-left-side-47.jpg', price: '20000'},
  {name: 'Camaro', year: '2020', image: 'https://www.carchaseheroes.com/uploads/cars/img1/2017-Camaro-zl1-yellow-bumblebee-.jpg', price: '30000'},
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
