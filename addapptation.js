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




