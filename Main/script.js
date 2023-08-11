// An array of image objects
var images = [
  {
    imageUrl: '/images/MicrosoftTeams-image (1).png',
    price: '$10',
    size: 'Large',
    type: 'Nature',
    icon: 'fa-heart'
  },
  {
    imageUrl: '/images/MicrosoftTeams-image (2).png',
    price: '$15',
    size: 'Medium',
    type: 'City',
    icon: 'fa-heart'
  },
  {
    imageUrl: '/images/MicrosoftTeams-image (3).png',
    price: '$20',
    size: 'Small',
    type: 'Abstract',
    icon: 'fa-heart'
  },
  {
    imageUrl: '/images/MicrosoftTeams-image (4).png',
    price: '$40',
    size: 'Small',
    type: 'Abstract',
    icon: 'fa-heart'
  }
  // Add more image objects here
];

// Array to store the wishlist items
var wishlistItems = [];

// Function to create image elements with additional information and append them to the container
function displayImages() {
  var container = document.querySelector('.image-container');

  // Loop through the images array
  for (var i = 0; i < images.length; i++) {
    var image = images[i];

    // Create a container for each image with additional information
    var imageCard = document.createElement('div');
    imageCard.classList.add('image-card');

    // Create an image element
    var imageElement = document.createElement('img');
    imageElement.src = image.imageUrl;

    imageCard.appendChild(imageElement);

    // Create elements for additional information (price, size, type)
    var priceElement = document.createElement('p');
    priceElement.textContent = 'Price: ' + image.price;
    imageCard.appendChild(priceElement);

    var sizeElement = document.createElement('p');
    sizeElement.textContent = 'Size: ' + image.size;
    imageCard.appendChild(sizeElement);

    var typeElement = document.createElement('p');
    typeElement.textContent = 'Type: ' + image.type;
    imageCard.appendChild(typeElement);

    // Create an icon element
    var iconElement = document.createElement('i');
    // iconElement.className = image.icon; 
    iconElement.classList.add('fa');
    iconElement.classList.add('fa-heart-o');

    // Using IIFE(Immediately Invoked Function Expression) to capture the correct 'image' for each click
    (function (image) {
      iconElement.addEventListener('click', function () {
        this.classList.toggle('red'); // Toggle the 'red' class on the heart icon to change the color
        image.icon="fa fa-heart-o red";
        toggleWishlist(image); // Call the toggleWishlist function passing the correct image object
      });
    })(image);

    imageCard.appendChild(iconElement);
    container.appendChild(imageCard);
  }
}

// Function to handle adding and removing products to the wishlist
function toggleWishlist(image) {

  // Get the selected product from the images array
  // var selectedProduct = images[image];

  // Check if the wishlist array exists in local storage
  wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];

  const index = wishlistItems.findIndex(item => item.imageUrl === image.imageUrl);

  if (index === -1) {
    // The product is not in the wishlist, add it
    wishlistItems.push(image);
    console.log("Added to wishlist:", image);
     const heartIcon = document.getElementsByClassName('fa-heart-o red');
     console.log("Icon wishlist"+heartIcon[0].id)
  } else {
    // The product is already in the wishlist, remove it
    wishlistItems.splice(index, 1);
    console.log("Removed from wishlist:", image);
  }
   // Save the updated wishlist array back to local storage
  localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
}


// function displayImagesList(){
//   if(localStorage.getItem("wishlist")){
// const storage = localStorage.getItem("wishlist");
//     console.log(" wishlist:", storage);

//   }
//   else{
// Call the displayImages function
displayImages();

//   }

// }




