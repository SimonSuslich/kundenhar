// Get a NodeList of elements with the class "account-buttons"
let accountButtons = document.querySelectorAll('.account-buttons');

// Loop through each element in the NodeList and add the event listener
accountButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    alert("In order to use this feature, you should have an account.")
  });
});

let likeButton = document.querySelectorAll('.like-button');

likeButton.forEach(function (button) {
  button.addEventListener('click', function () {
    let heartIcon = button.querySelector('i');

    if (heartIcon.classList.contains("bx-heart")) {
      heartIcon.classList.remove('bx-heart');
      heartIcon.classList.add('bxs-heart');
    } else {
      heartIcon.classList.remove('bxs-heart');
      heartIcon.classList.add('bx-heart');
    }
  })
});


ScrollReveal({
  distance: '40px',
  duration: 1500,
  delay: 500
});

ScrollReveal().reveal('.art-box', { origin: 'bottom' });