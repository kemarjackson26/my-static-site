/**
 * Javascript variables
 */
 
//RTL support
var rtl = false;                                //Set to true if your website is RTL. Otherwise, keep it false.

//ONE-PAGE NAVIGATION HIGHLIGHT
var onepage_nav = true;                         //If true, each menu item will highlight when scrolling to each respective section.

//MOBILE MENU TITLE
var mobile_menu_title = "Menu";                 //The title of the mobile menu.

//HERO FULLSCREEN VARIABLE
var hero_full_screen = true;                    //If true, the hero section will fit to screen size. If false, hero height will be the height of its content.

//HERO BACKGROUND SLIDESHOW IMAGES
var slidehow_images = [
    "./images/proposal/header_img.png",
    "./images/proposal/header_img2.png",
    "./images/proposal/header_img3.png"
];

//TIMELINE PARALLAX
var timeline_parallax = true;                   //If false, the timeline items will not move on mousemove.


//CONTACT FORM VARIABLES
var contact_form_success_msg = "Form successfully submitted! :)";
var contact_form_error_msg = "Error sending message :(";
var contact_form_recaptcha_error_msg = "Error verifying reCaptcha!";


//COUNTDOWN VARIABLES
var c_days = "DAYS";                            //Countdown "Days" label
var c_hours = "HOURS";                          //Countdown "Hours" label
var c_minutes = "MIN.";                         //Countdown "Minutes" label
var c_seconds = "SEC.";                         //Countdown "Seconds" label
var countdown_end_msg = "Event Started!";       //Message to display when the countdown reaches the end


//GOOGLE MAP VARIABLES
var map_canvas_id = "map_canvas";               //The HTML "id" of the map canvas
var map_color = "#8eaeba";                      //Google map color
var map_initial_zoom = 15;                      //The initial zoom when Google map loads
var map_initial_latitude = 18.0063;           //Google map initial Latitude. If "null", the latitude of the first marked will be used
var map_initial_longitude = -76.7790;        //Google map initial Longitude. If "null", the longitude of the first marked will be used
var use_default_map_style = false;              //If true, default map style will be used

//List of map markers
var map_markers = [
    {
        "title": "Reception",
        "latitude": 18.002949677804294,
        "longitude": -76.78774666996654,
        "icon": "fas fa-glass-cheers", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "The Jamaica Pegasus Hotel <br> 81 Knutsford Blvd, Kingston 5, JA"
    },
    {
        "title": "Accommodation 1",
        "latitude": 33.777929,
        "longitude": -118.076891,
        "icon": "fas fa-bed", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Accommodation 1 <br> Rossmoor, CA 90720"
    },
    {
        "title": "Accommodation 2",
        "latitude": 33.780428,
        "longitude": -118.084075,
        "icon": "fas fa-bed", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Accommodation 2 <br> 38-42 Lady Musgrave Rd, Kingston, JA"
    },
    {
        "title": "Accommodation 3",
        "latitude": 33.777551,
        "longitude": -118.050468,
        "icon": "fas fa-bed", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Accommodation 3 <br> Seal Beach, CA 90740"
    },
    {
        "title": "Transportation",
        "latitude": 17.9362,
        "longitude": -76.7789,
        "icon": "fas fa-plane", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Norman Manley International Airport NMIA <br>  Palisadoes, Kingston, JA"
    },
    {
        "title": "Ceremony",
        "latitude": 18.004327,
        "longitude": -76.746228,
        "icon": "fas fa-bell", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "University Chapel <br> The University of the West Indies, Mona, Kingston 7, JA"
    }
];