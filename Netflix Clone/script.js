document.querySelector('.dropdown-button').addEventListener('click', () => {
  document.querySelector('.dropdown-content').classList.toggle('d-block');
})       
// Get the header
var header = document.querySelector('.menu');

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function functionSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.classList.remove('full-opacity')
  } else {
    header.classList.remove("sticky");
    header.classList.add('full-opacity')
  }
};
function consoleScrollTop() {
  console.log(header.offsetTop);
}
window.onscroll = function() {functionSticky()};
var searchIcon = document.querySelector('.searchTab');
var searchBox = document.querySelector('.search');
searchIcon.addEventListener("click", activateSearch);
function activateSearch() {  
  searchBox.classList.toggle("active-search");
  searchIcon.classList.toggle('active-searchTab');
}
