/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
function checkForm() {
  var firstName = document.forms["mailingListForm"]["first_name"].value
  var lastName = document.forms["mailingListForm"]["last_name"].value
  var email = document.forms["mailingListForm"]["email_data"].value
  if ((!firstName) || (!lastName) || (!email)) {
    alert("Please complete all the necessary fields!");
    return false;
  }
  else {
    alert("You have successfully registered for our mailing list!")
  }
}