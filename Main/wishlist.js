// wishlist.js

// Function to get wishlist items from local storage and display them
function displayWishlist() {
    var wishlistItems = JSON.parse(localStorage.getItem('wishlist'));
  
    // Check if there are any wishlist items
    if (wishlistItems && wishlistItems.length > 0) {
      var wishlistContainer = document.querySelector('.wishlist-container');
  
      wishlistItems.forEach(function (item) {
        var wishlistCard = document.createElement('div');
        wishlistCard.classList.add('wishlist-item');
  
        var imgElement = document.createElement('img');
        imgElement.src = item.imageUrl;
        wishlistCard.appendChild(imgElement);
  
        var priceElement = document.createElement('p');
        priceElement.textContent = 'Price: ' + item.price;
        wishlistCard.appendChild(priceElement);
  
        var sizeElement = document.createElement('p');
        sizeElement.textContent = 'Size: ' + item.size;
        wishlistCard.appendChild(sizeElement);
  
        var typeElement = document.createElement('p');
        typeElement.textContent = 'Type: ' + item.type;
        wishlistCard.appendChild(typeElement);
  
        wishlistContainer.appendChild(wishlistCard);
      });
    } else {
      // Display a message if the wishlist is empty
      var wishlistContainer = document.querySelector('.wishlist-container');
      wishlistContainer.innerHTML = '<h3>Your wishlist is empty...</h3>';
    }
  }
  
  // Call the displayWishlist function to show the wishlist items
  displayWishlist();

  function goBack(){
    
    // displayImages(storage);
  
  }
  