function getQueryVariable(variable) {
   var query = window.location.search.substring(1);
   var vars = query.split("&");
   for (var i=0;i<vars.length;i++) {
           var pair = vars[i].split("=");
           if(pair[0] == variable){return pair[1];}
   }
   return(false);
};

var url_language = getQueryVariable("language");
//english,french

var url_brand = getQueryVariable("brand");
//blackrock,aladdin,ishares

//title updates
//if (url_language=="chile") { document.title = "chile." }
var title;

switch(url_language)
{
    case    "colombia" :
    case    "spanish" :
    case    "chile" :
    case    "mexico" :
            document.title = "¡Felices Fiestas!";
            break;

    case "pt_portuguese":
        document.title = "Bom Natal!";
        break;

    case "br_portuguese":
        document.title = "Boas Festas!";
        break;

    case "polish":
        document.title = "Wesołych Świąt";
        break;

    case "french":
       document.title = "Joyeuses fêtes";
       break;

    case "italian":
       document.title = "Buone feste";
       break;

    case "dutch":
       document.title = "Fijne feestdagen";
       break; 
       
    case "german":
       document.title = "Frohe Festtage";
       break;        

    default:
        document.title = "Happy Holidays!";
}

var white_bg;
var black_bg;

if (url_brand) {
    white_bg = 'url(repo/universal/logo_white_' + url_brand + '.png)';
    black_bg = 'url(repo/universal/logo_black_' + url_brand + '.png)';
} else {
    white_bg = 'url(repo/universal/logo_white_blackrock.png)';
    black_bg = 'url(repo/universal/logo_black_blackrock.png)';
}

var greeting_line_1;
var greeting_line_2;
var happy_holidays;

if (url_language) {
    greeting_line_1 = 'repo/' + url_language + '/greeting_line_1.png';
    greeting_line_2 = 'repo/' + url_language + '/greeting_line_2.png';
    happy_holidays = 'repo/' + url_language + '/title.png';
} else {
    greeting_line_1 = 'repo/english/greeting_line_1.png';
    greeting_line_2 = 'repo/english/greeting_line_2.png';
    happy_holidays = 'repo/english/title.png';
}

$('.logo.white').css('background-image', white_bg);
$('.logo.black').css('background-image', black_bg);

$('#text_line_1 img').attr("src",greeting_line_1);
$('#text_line_2 img').attr("src",greeting_line_2);

$('#happy_holidays img').attr("src",happy_holidays);

$('#replay').click(function(){
    $('#replay').fadeOut(0);
    $('#replay img').css('pointer-events','none');
    $('#replay img').css('cursor','default');
})

var timeline = anime.timeline({
    autoplay: true,

    begin: function(anim) {     
    },

    complete: function(anim) {
        $('#replay').animate({opacity:'.75'}, 3000);
        $('#replay img').css('pointer-events','auto');
        $('#replay img').css('cursor','pointer');
    },

    update: function(anim) {}
});


timeline
.add({
    targets: '#text_line_1',
    opacity: [
        { value: 1 }
    ],
    duration: 2250,
    easing: 'easeInOutSine'
})
.add({
    targets: '#tree_abyss',
    translateY: [
        { value: '-690' }
    ],
    opacity: [
        { value: 1 }
    ],
    duration: 2950,
    offset: '-=950',
    delay: 100,
    elasticity: 30,
    easing: 'easeOutElastic'
})
.add({
    targets: '#text_line_2',
    opacity: [
        { value: 1 }
    ],
    duration: 1500,
    offset: '-=1875',
    easing: 'easeOutSine'
})
.add({
    targets: '.logo.white',
    opacity: [
        { value: 1, duration: 2000 }
    ],
    offset: '-=300',
    easing: 'easeInOutSine',
    delay: 250
})
.add({
    targets: '#tree_abyss',
    top: [
        { value: '-=400' }
    ],
    opacity: [
        { value: 0 }
    ],
    duration: 2250,
    offset: '-=300',
    easing: 'easeInOutSine',
    delay: 2500
})
.add({
    targets: '#text',
    opacity: [
        { value: 0 }
    ],
    duration: 1000,
    offset: '-=2000',
    easing: 'easeInOutSine'
})
.add({
    targets: 'body',
    backgroundColor: [
        { value: '#EAEFF2' }
    ],
    duration: 1500,
    offset: '-=1500',
    easing: 'easeInOutSine'
})
.add({
    targets: '.logo.white',
    opacity: [
        { value: 0 }
    ],
    duration: 1500,
    offset: '-=1000',
    easing: 'easeInOutSine'
})
.add({
    targets: '.logo.black',
    opacity: [
        { value: 1 }
    ],
    duration: 1500,
    offset: '-=2000',
    easing: 'easeInOutSine'
})
.add({
    targets: '.tree_entity',
    opacity: [
        { value: 1, duration: function() {return anime.random(1600, 2750)} }
    ],
    translateY: [
        { value: "-=930" }
    ],
    duration: function() { return anime.random(2250, 2750); },
    offset: '-=1750',
    elasticity: function() { return anime.random(50, 100); }
})
.add({
    targets: '#card_container',
    backgroundColor: [
        { value: 'rgba(255,255,255,1)' }
    ],
    duration: 2500,
    offset: '-=2000',
    easing: 'easeOutSine'
})
.add({
    targets: '#happy_holidays',
    opacity: [
        { value: 1 }
    ],
    delay: 2000,
    duration: 2500,
    offset: '-=2500',
    easing: 'easeOutSine'
});

document.querySelector('#replay').onclick = timeline.restart;