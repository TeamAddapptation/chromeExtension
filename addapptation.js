// Inject the time in the UI
function time(){
   var time = new Date();
   a__ce_time.textContent = time.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
   a__ce_date.textContent = time.toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
   const numItemsToGenerate = 1;
};
time();
setInterval(time,1000);
/*---------------------------------------------
Background Image
---------------------------------------------*/
const numItemsToGenerate = 20; //how many gallery items you want on the screen
const numImagesAvailable = 242; //how many total images are in the collection you are pulling from
const imageWidth = 1200; //your desired image width in pixels
const imageHeight = 1200; //desired image height in pixels
const collectionID = 162468; //the collection ID from the original url

function renderGalleryItem(randomNumber){
  fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`)
    .then((response)=> {
      let tabWrapper = document.getElementById('a__ce_wrapper')
      tabWrapper.style.backgroundImage = `url('${response.url}')`;
    })
}

let randomImageIndex = Math.floor(Math.random());
renderGalleryItem(randomImageIndex);
/*---------------------------------------------
Quote
---------------------------------------------*/
const url = "https://api.quotable.io/random";
(function generateQuote(){
   fetch(url)
  .then(function(data) {
         return data.json();
    })
    .then(function(data){
    document.getElementById("a__ce_quote").innerHTML = data.content;
   })
 .catch(function(err) {
    console.log(err);
    });
 })();

 /*---------------------------------------------
Show All
---------------------------------------------*/
// let showAll = document.getElementById('a__ce_view_all');
// let tiles = document.getElementsByClassName('g__tile_container');
// showAll.addEventListener("click", function(){
//    console.log(showAll.checked);
//    if(showAll.checked){
//       for(var i = 0; i < tiles.length; i++){
//          tiles[i].style.display = 'block';
//       }
//    }else{
//       for(var i = 0; i < 2; i++){
//          tiles[i].style.display = 'none';
//       }
//    };
//  });

/*---------------------------------------------
Share Modal
---------------------------------------------*/
document.getElementById('a__ce_share_btn').addEventListener('click', function() {
  document.getElementById('a__ce_share').style.display = "flex";
});
document.getElementById('a__ce_close_btn').addEventListener('click', function() {
  document.getElementById('a__ce_share').style.display = "none";
});
/*---------------------------------------------
Tab Grid Menu
---------------------------------------------*/
let grid = document.getElementById('a__ce_grid_icon');
let grid_menu = document.getElementById('a__ce_grid_tab_menu');

grid.onclick = function() {
   grid_menu.classList.toggle('active');
}




