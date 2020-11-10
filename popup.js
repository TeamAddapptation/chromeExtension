'use strict';
document.addEventListener('DOMContentLoaded', function() {
	//let apps = document.getElementById('apps');
	//chrome.storage.local.get("apps", function(results){
	//	var i = 0;
	//	for (i = 0; i < results.apps.length; i++) {
	//		apps.innerHTML += "<a href='" + results.apps[i].url + "' target='_blank' id='" + results.apps[i].id + "'><button>" + results.apps[i].name + "</button></a>";
	//	}
	//});
	let button = document.getElementById("new_addapptation_tab");
	button.addEventListener("click", handler);
});

function handler() {
	console.log('clicked');
	chrome.tabs.create({});
}
/*---------------------------------------------
Themes and Mode
---------------------------------------------*/
let jsonTheme = {
    "primary": "#df0284",
    "secondary": "#3fd0d4",
    "mode": "midnight"
}
/*---------------------------------------------
Micro Data Here
---------------------------------------------*/
let tilesBlock = {
    "id": "granite-tiles",
    "feature": "tiles",
    "class": "a_custom",
      "options": {
        //"title": "Header",
        //"description": "Etiam dapibus semper nisi, sit amet commodo quam elementum vitae. In hac habitasse platea dictumst. Curabitur sed erat quis nisi imperdiet molestie a ut massa. Phasellus lacinia ante eu risus rhoncus, at accumsan nisl viverra. Nam convallis magna sed lobortis auctor. Phasellus et nisl purus. Duis hendrerit justo eu sapien eleifend, quis maximus massa sodales. Vivamus a fringilla nisl, vel laoreet mauris. In a lacinia leo. Praesent sit amet massa dapibus, dictum lorem eu, elementum tortor.",
        "description_hover": false,
        "customOverlay": false,
        "container_top_padding": "",
        "container_bottom_padding": "",
        "body_content_top_padding": "30px",
        "layout": "center", //picklist: left, center, right
        "theme": "custom",
        "header_color": "",
        "header_size": "1.5rem", //small, medium, large
        "description_color": "",
        "description_size": ".7rem", //small, medium, large
        "icon_color": "",
        "columns": "5",
        "fillRow": true,
        "full_width": true,
        "icon_size": "",
        "height": "150px",
        "no_overlay": true,
        "filter_one": "",
        "filter_one_opacity": "0",
        "filter_two": "",
        "filter_two_opacity": "0",
        "search": false,
        "classes": "tabs-class",
        "hover_color": "#ffffff",
        "padding": "5px",
        "border_radius": "",
        "border": "",
        "border_color": "",
        "filter_label": "",
        "filter_tag_options": ["All", "Atlantic Ocean", "Pacific Ocean", "No Coastline"],
        "action_header_size": "50px",
        "action_header_color": "red",
        "action_header_bottom_margin": "50px",
        "action_description_size": "16px",
        "action_description_color": "orange",
        "action_description_bottom_margin": "50px",
        "action_description_line_height": "18px",
      },
      "records": [
        {
          "title":"APP 1",
          "font_size":"",
          "title_color":"#d5d5d5",
          "background_color":"#101010",
          "background_image": "",
          "border":"2px solid #fff",
          "height":"150px",
          "description":"This is description text",
          "text_color":"#101010",
          "icon":"",
          "icon_size":"",
          "icon_color":"",
          "link_name":"",
          "href":"#",
          "target":"",
          "tags": ["Atlantic Ocean"],
          "hover_color":"light",
          "classes":"",
          "addapptation_component":"true",
          "addapptation_name":"Tile",
          "addapptation_type":"tile",
          "addapptation_code_id":"a0R1I000004BjOfUAK",
          "addapptation_id":"03091813838320976",
          "addapptation_navigation":"",
          "hover":"false",
          "center":"false",
          "side_pane":"false",
          "action":"hash_builder"
        },
        {
            "title":"APP 2",
            "font_size":"",
            "title_color":"#d5d5d5",
            "background_color":"#101010",
            "background_image": "",
            "border":"2px solid #fff",
            "height":"150px",
            "description":"This is description text",
            "text_color":"#101010",
            "icon":"",
            "icon_size":"",
            "icon_color":"",
            "link_name":"",
            "href":"#",
            "target":"",
            "tags": ["Atlantic Ocean"],
            "hover_color":"light",
            "classes":"",
            "addapptation_component":"true",
            "addapptation_name":"Tile",
            "addapptation_type":"tile",
            "addapptation_code_id":"a0R1I000004BjOfUAK",
            "addapptation_id":"03091813838320976",
            "addapptation_navigation":"",
            "hover":"false",
            "center":"false",
            "side_pane":"false",
            "action":"hash_builder"
          },
          {
            "title":"APP 3",
            "font_size":"",
            "title_color":"#d5d5d5",
            "background_color":"#101010",
            "background_image": "",
            "border":"2px solid #fff",
            "height":"150px",
            "description":"This is description text",
            "text_color":"#101010",
            "icon":"",
            "icon_size":"",
            "icon_color":"",
            "link_name":"",
            "href":"#",
            "target":"",
            "tags": ["Atlantic Ocean"],
            "hover_color":"light",
            "classes":"",
            "addapptation_component":"true",
            "addapptation_name":"Tile",
            "addapptation_type":"tile",
            "addapptation_code_id":"a0R1I000004BjOfUAK",
            "addapptation_id":"03091813838320976",
            "addapptation_navigation":"",
            "hover":"false",
            "center":"false",
            "side_pane":"false",
            "action":"hash_builder"
          },
          {
            "title":"APP 4",
            "font_size":"",
            "title_color":"#d5d5d5",
            "background_color":"#101010",
            "background_image": "",
            "border":"2px solid #fff",
            "height":"150px",
            "description":"This is description text",
            "text_color":"#101010",
            "icon":"",
            "icon_size":"",
            "icon_color":"",
            "link_name":"",
            "href":"#",
            "target":"",
            "tags": ["Atlantic Ocean"],
            "hover_color":"light",
            "classes":"",
            "addapptation_component":"true",
            "addapptation_name":"Tile",
            "addapptation_type":"tile",
            "addapptation_code_id":"a0R1I000004BjOfUAK",
            "addapptation_id":"03091813838320976",
            "addapptation_navigation":"",
            "hover":"false",
            "center":"false",
            "side_pane":"false",
            "action":"hash_builder"
          }
      ]
};
let navigationBlock = {
"id": "granite-navigation",
"feature": "navigation",
"records": [],
"options": {
    "type": "topbar",
    "background": "#101010",
    "background_opacity": "",
    "mobile_menu": "topbar",
    "font_color": "#ffffff",
    "mobile_breakpoint": "550px",
    "font_size": "18px",
    "topbar_padding_right": "",
    "topbar_padding_left": "",
    "dropdown_font_size": "12px",
    "highlight": "",
    "no_break_link_item": true,
    "topbar_position": "right",
    "topbar_over_content": false,
    "topbar_font_size": "10px",
    "button_style": "transparentWhite",
    "cta_button_padding": "",
    "single_submenu": true,
    "hide_mobile_nav": false,
    "header_label": "<span id='addapptation'>addapptation</span>",
    "header_image": "https://addapptation.blob.core.windows.net/logo/logo.png",
    "header_link": "#test",
    "wrap_logo": false,
    "footer": "&copy; 2020 addapptation<br><a href='sign-out'>Sign Out</a>",
    "gradient": "",
    "topbar_gradient": "",
    "searching": false,
    "link_label": "Sign In",
    "link_url": "#",
    "link_target": false,
    "cta_link_left_margin": "50px",
    "cta_label": "Edit App",
    "cta_font_size": "Edit App",
    "cta_url": "#",
    "cta_target": false,
    "hide_on": [],
    "item_height": "65px",
    "menu": false,
    "use_recent_items": true,
    "search_url": "search"
}
};
let tabsBlock = {
    "id": "granite-tabs",
    "options": {
      "style": "tabs",
      "align": "center",
      "font_size": "medium",
      "padding": "large",
      "full_width":  false,
      "noLoad": false,
      "action_header_size": "50px",
      "action_header_color": "",
      "action_header_bottom_margin": "5px",
      "action_align_text": "",
      "action_description_size": "10px",
      "action_description_color": "",
      "action_description_bottom_margin": "5px",
      "action_align_text": "left",
      "action_bottom_margin": "50px",
      "action_border": false
    },
    "records": [
      {
        "name": "Tools",
        "icon": "",
        "dropdown": false,
        "completed": false,
        "href": "?app_id=234452342&tab=2"
      },
      {
          "name": "Templates",
          "icon": "",
          "completed": false,
          "href": "",
      }
    ]
  };
granite_tiles(tilesBlock, jsonTheme);



//function button_clicked(url) {
	//chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	//  chrome.tabs.executeScript(
	//	  tabs[0].id,
	//	  {code: 'document.body.style.backgroundColor = "' + color + '";'});
	//});
//};
