var i = 1;
var personelCount = 0;
setInterval(function () { i++;  $('html').scrollTop(10);$('html').scrollTop(100000);}, 300);
setInterval(function () {

    var count = $('.mn-pymk-list__card').length;
    if (count > 100) {

        $('.mn-pymk-list__card').each(function (index, value) {
            count--;
            if (count > 20) {
                $(value).find(".pymk-card__close-btn")[0].click();
            }

        });

    }


    $('.mn-pymk-list__card').each(function (index, value) {
        var text = $(this).find('.pymk-card__occupation')[0].innerHTML.toLowerCase();

        if (text.indexOf('insan') > 0 || text.indexOf('kaynak') > 0 || text.indexOf('uzman') > 0 || text.indexOf('Mühendi') > 0  || text.indexOf('sorum') > 0 || text.indexOf('bilge') > 0 || text.indexOf('müdür') > 0|| text.indexOf('öğrenci') > 0|| text.indexOf('irket') > 0|| text.indexOf('üniversite') > 0|| text.indexOf('bilişim') > 0)  // job ?
        {
            setTimeout(function () {
                $(value).find('.button-secondary-small')[0].click();
                console.log("eklendi " + personelCount++ + " -- "+text);
            }, index * 100);
        }

    });
}, 7000);
