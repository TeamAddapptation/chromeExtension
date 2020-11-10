// Inject the time in the UI
var time = new Date();
a__ce_time.textContent = time.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
a__ce_date.textContent = time.toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
const numItemsToGenerate = 1;
/*---------------------------------------------
Background
---------------------------------------------*/
// fetch(`https://picsum.photos/1200/1200?grayscale`).then((response)=> {
//     let a__wrapper = document.getElementById('a__ce_wrapper')
//     a__wrapper.setAttribute('style', `background-image: url(${response.url}); background-size: cover;`);
// })

/*---------------------------------------------
Micro Data Here
---------------------------------------------*/
let jsonTheme = {
   "primary": "#df0284",
   "secondary": "#3fd0d4",
   "mode": "midnight"
}
let tilesBlock = {
   "id":"a0R1I00000J5OuOUAV-granite",
   "options":{
      "columns":"4",
      "description_hover":true,
      "height":"150px",
      "layout":"center",
      "header_size":"24px",
      "header_color":"",
      "description_size":"16px",
      "description_color":"",
      "icon_size":"75px",
      "icon_color":"",
      "container_top_padding":"0px",
      "container_bottom_padding":"0px",
      "padding":"5px",
      "filter_one":"",
      "filter_one_opacity":".5",
      "filter_two":"",
      "filter_two_opacity":".5",
      "hover_color":"",
      "title":"",
      "action_header_size":"28px",
      "action_header_color":"#202020",
      "action_header_bottom_margin":"25px",
      "description":"",
      "action_description_color":"#202020",
      "action_description_size":"18px",
      "action_description_bottom_margin":"20px",
      "action_description_line_height":"18px",
      "action_border":true,
      "filter_label":"",
      "filter_tag_options":"",
      "body_content_top_padding":"25px",
      "classes":"",
      "visibility_settings":"",
      "fillRow":false,
      "no_overlay":false,
      "loader":false,
      "search":false,
      "action":"hash_builder"
   },
   "records":[
      {
         "title":"Customer Journey",
         "description":"\u003ca class='btn btn-outline-primary app_button' href='https://customer-journey.addapptation.com/customers'\u003eView App\u003c/a\u003e\u003ca class='btn btn-outline-primary app_button' href='https://customer-journey.addapptation.com/'\u003eLearn More\u003c/a\u003e",
         "background_image":"https://cdn.addapptation.com/addapptation-asset-library/account_penetration_heatmap_allscreens.png",
         "background_color":"#505050",
         "link_name":"View App",
         "href":"https://customer-journey.addapptation.com/customers",
         "target":"",
         "icon":"",
         "classes":"",
         "id":"a__70df7d3f3b7a426b8f62",
         "addapptation_component":true,
         "addapptation_name":"Tile",
         "addapptation_type":"tile",
         "addapptation_code_id":"a0R1I00000J5OuOUAV",
         "addapptation_id":"06841619807077652",
         "addapptation_navigation":"",
         "side_pane":false,
         "action":"hash_builder"
      },
      {
         "title":"Field Usage Analyzer",
         "description":"\u003ca class='btn btn-outline-primary app_button' href='https://field-usage-analyzer.addapptation.com/'\u003eView App\u003c/a\u003e\u003ca class='btn btn-outline-primary app_button' href='https://field-usage-analyzer.addapptation.com/analyzer'\u003eLearn More\u003c/a\u003e",
         "background_image":"https://cdn.addapptation.com/addapptation-asset-library/admissions_portal_allscreens.png",
         "background_color":"#505050",
         "link_name":"View App",
         "href":"https://field-usage-analyzer.addapptation.com/",
         "target":"",
         "icon":"",
         "classes":"",
         "id":"a__70df7d3f3b7a426b8f62",
         "addapptation_component":true,
         "addapptation_name":"Tile",
         "addapptation_type":"tile",
         "addapptation_code_id":"a0R1I00000J5OuOUAV",
         "addapptation_id":"06841619807077652",
         "addapptation_navigation":"",
         "side_pane":false,
         "action":"hash_builder"
      },
      {
         "title":"Security Visualizer",
         "description":"\u003ca class='btn btn-outline-primary app_button' href='https://security-visualizer.addapptation.com/'\u003eView App\u003c/a\u003e\u003ca class='btn btn-outline-primary app_button' href='https://security-visualizer.addapptation.com/analyzer'\u003eLearn More\u003c/a\u003e",
         "background_image":"https://cdn.addapptation.com/addapptation-asset-library/innovation_matchmaking_allscreens.png",
         "background_color":"#505050",
         "link_name":"View App",
         "href":"https://security-visualizer.addapptation.com/",
         "target":"",
         "icon":"",
         "classes":"",
         "id":"a__70df7d3f3b7a426b8f62",
         "addapptation_component":true,
         "addapptation_name":"Tile",
         "addapptation_type":"tile",
         "addapptation_code_id":"a0R1I00000J5OuOUAV",
         "addapptation_id":"06841619807077652",
         "addapptation_navigation":"",
         "side_pane":false,
         "action":"hash_builder"
      },
      {
         "title":"User Analytics",
         "description":"\u003ca class='btn btn-outline-primary app_button' href='https://behavioral-analytics.addapptation.com/history'\u003eView App\u003c/a\u003e\u003ca class='btn btn-outline-primary app_button' href='https://behavioral-analytics.addapptation.com/'\u003eLearn More\u003c/a\u003e",
         "background_image":"https://cdn.addapptation.com/addapptation-asset-library/territory_manager_allscreens.png",
         "background_color":"#505050",
         "link_name":"View App",
         "href":"https://behavioral-analytics.addapptation.com/history",
         "target":"",
         "icon":"",
         "classes":"",
         "id":"a__70df7d3f3b7a426b8f62",
         "addapptation_component":true,
         "addapptation_name":"Tile",
         "addapptation_type":"tile",
         "addapptation_code_id":"a0R1I00000J5OuOUAV",
         "addapptation_id":"06841619807077652",
         "addapptation_navigation":"",
         "side_pane":false,
         "action":"hash_builder"
      }
   ]
 };

 let tabsBlock = {
   "id":"a0R1I00000J5KftUAF-granite",
   "options":{
      "style":"tabs",
      "font_size":"18px",
      "highlight_color":"",
      "align":"left",
      "padding":"medium",
      "cursor_disabled":"",
      "full_width":true,
      "action_header":"",
      "action_header_size":"28px",
      "action_header_color":"#5d5d5d",
      "action_header_bottom_margin":"20px",
      "action_description":"",
      "action_description_size":"18px",
      "action_description_color":"#5d5d5d",
      "action_description_bottom_margin":"20px",
      "action_align_text":"left",
      "micro_top_margin":"25px",
      "action_bottom_margin":"25px",
      "action_border":true,
      "classes":"",
      "visibility_settings":""
   },
   "records":[
      {
         "name":"Salesforce.com Tools",
         "icon":"",
         "href":"",
         "dropdown_item":"",
         "addapptation_component":true,
         "addapptation_name":"Tab",
         "addapptation_type":"step",
         "addapptation_code_id":"a0R1I00000J5KftUAF",
         "addapptation_id":"05615424412203538",
         "addapptation_navigation":"",
         "dropdown":false,
         "action":"hash_builder"
      },
      {
         "name":"Hubspot Tools",
         "icon":"",
         "href":"",
         "dropdown_item":"",
         "addapptation_component":true,
         "addapptation_name":"Tab",
         "addapptation_type":"step",
         "addapptation_code_id":"a0R1I00000J5KftUAF",
         "addapptation_id":"047494056009683083",
         "addapptation_navigation":"",
         "dropdown":false,
         "action":"hash_builder"
      },
      {
         "name":"Templates",
         "icon":"",
         "href":"",
         "dropdown_item":"",
         "addapptation_component":true,
         "addapptation_name":"Tab",
         "addapptation_type":"step",
         "addapptation_code_id":"a0R1I00000J5KftUAF",
         "addapptation_id":"07541241571966373",
         "addapptation_navigation":"",
         "dropdown":false,
         "action":"hash_builder"
      }
   ]
 };

 granite_tiles(tilesBlock, jsonTheme);
function getWeather() {
    let temperature = document.getElementById("a__ce_temp");

    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "1f6363efa8e0aaf6d8d875f7d743b24b";

    location.innerHTML = "Locating...";

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

      let url =
        api +
        "?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&appid=" +
        apiKey +
        "&units=imperial";

      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          let temp = data.main.temp;
          temperature.innerHTML = temp + "F";
        });
    }

    function error() {
      location.innerHTML = "Unable to retrieve your location";
    }
  }
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




