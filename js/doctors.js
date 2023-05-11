let update_doctors=()=>{


    
    
   for (let i= 0; i <3 ; i++) {
    j=' .card.'+i
    console.log('#1 '+j)
    jQuery('<div>', {
        class: 'card '+i,
    }).appendTo(' .casrousel-items-flex');

    jQuery('<div>', {
        class: 'imgWraper',
    }).appendTo('.casrousel-items-flex'+j);

    jQuery('<img>', {
        class: 'card-img-top ',
        src:''
    }).appendTo('.casrousel-items-flex .imgWraper'+j);

    jQuery('<div>', {
        class: 'card-body ',
    }).appendTo('.casrousel-items-flex '+j);

    jQuery('<h4>', {
        class: 'card-title ',
    }).appendTo('.casrousel-items-flex'+j+' .card-body');

    jQuery('<p>', {
        class: 'card-text cardTxt',
        text:'طبيب نفسية'
    }).appendTo('.casrousel-items-flex'+j+' .card-body');

    jQuery('<p>', {
        class: 'card-text stars',
    }).appendTo('.casrousel-items-flex'+j+' .card-body');

    for (let index = 0; index < 6; index++) {
        jQuery('<i>', {
            class: 'fa fa-star ',
            id: index,
        }).appendTo('.casrousel-items-flex '+j+' .card-body .stars');
        
    }
    jQuery('<button>', {
        class: ' ',
        text:' حجز موعد  '
    }).appendTo('.casrousel-items-flex'+j+' .card-body');
    
   }
}
update_doctors()