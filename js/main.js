let carousel_inner =$(".carousel-inner");
let carousel_newitem={};




let article1_img = $("#article-1 img");
let article1_h3 = $("#article-1 h3");
let article1_p = $("#article-1 p");

let article2_img = $("#article-2 img");
let article2_h3 = $("#article-2 h3");
let article2_p = $("#article-2 p");

let article3_img = $("#article-3 img");
let article3_h3 = $("#article-3 h3");
let article3_p = $("#article-3 p");

let docname;
let docimg;
function hexToBase64(str) {
    return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
}
let update_article = (data)=>{
 let imgsrc=  'data:image/jpeg;base64,' +  hexToBase64(data[0].image);

    article1_img.attr('src',imgsrc);
    article1_h3.text(data[0].title);
    article1_p.text(data[0].description.substr(0,140))

    article2_img.attr('src','');
    article2_h3.text(data[1].title);
    article2_p.text(data[1].description.substr(0,100));

    article3_img.attr('src','');
    article3_h3.text(data[1].title);
    article3_p.text(data[2].description.substr(0,100));
}
let update_carousel=()=>{
    jQuery('<div>', {
        class: 'carousel-item ',
        id:'1',
     
    }).appendTo('.carousel-inner');

    jQuery('<div>', {
        class: 'casrousel-items-flex ',
     
    }).appendTo('#1');
    
   for (let i= 0; i <2 ; i++) {
    j=' .card.'+i
 
    jQuery('<div>', {
        class: 'card '+i,
    }).appendTo('#1 .casrousel-items-flex');

    jQuery('<div>', {
        class: 'imgWraper',
    }).appendTo('#1 '+j);

    jQuery('<img>', {
        class: 'card-img-top ',
        src:''
    }).appendTo('#1 .imgWraper'+j);

    jQuery('<div>', {
        class: 'card-body ',
    }).appendTo('#1 '+j);

    jQuery('<h4>', {
        class: 'card-title ',
    }).appendTo('#1'+j+' .card-body');

    jQuery('<p>', {
        class: 'card-text cardTxt',
        text:'طبيب نفسية'
    }).appendTo('#1'+j+' .card-body');

    jQuery('<p>', {
        class: 'card-text stars',
    }).appendTo('#1'+j+' .card-body');

    for (let index = 0; index < 6; index++) {
        jQuery('<i>', {
            class: 'fa fa-star ',
            id: index,
        }).appendTo('#1 '+j+' .card-body .stars');
        
    }
    jQuery('<button>', {
        class: ' ',
        text:' حجز موعد  '
    }).appendTo('#1'+j+' .card-body');
    
   }
}

$.get('https://mut-project.onrender.com/showArticles',(data,status)=>{
    
    update_article(data)
})

update_carousel()
