var i = 1;
setInterval(function(){ i++;$('html').scrollTop(250*i); },1000);
setInterval(function(){ 


    $('.mn-pymk-list__card').each(function(index, value) {
    var text = $(this).find('.mn-person-info__occupation')[0].innerHTML.toLowerCase();
         if(text.indexOf('developer')>0 || text.indexOf('software')>0)  // job ?
		 {
            setTimeout(function() {
             $(value).find('.button-secondary-small')[0].click();
            console.log("eklendi " + index);
            }, index * 100);
         }
        
     });
}, 7000);
//https://www.linkedin.com/mynetwork/