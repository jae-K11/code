/* header, footer 공통요소에 들어가는 javascript/jquery */

$(document).ready(function(){
    let scrolling

    scroll_chk()

    $(window).scroll(function(){
        scroll_chk()
    })
    function scroll_chk(){
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }
})