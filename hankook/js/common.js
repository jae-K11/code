let device_status // pc인지 모바일인지 구분하는 값 
let scrolling // 브라우저가 스크롤 된 값
let scroll_prev //이전에 스크롤 된값
let window_w // 브라우저의 넓이 값
let mobile_size = 1024 //모바일로 변경되는 사이트
let menu_open //모바일에서 사용할 메뉴가 열렸는지 여부를 저장 

$(window).scroll(function(){
    //console.log('브라우저스크롤')
})
$(window).resize(function(){
    //console.log('브라우저크기 변함')
    resize_chk()
})


$(document).ready(function(){
    resize_chk()

    $("header .gnb .gnb_wrap ul.depth1 > li > .depth2").hide();

    // 1차 메뉴 클릭 시 동작
    $("header .gnb .gnb_wrap ul.depth1 > li > a").on("click", function(e) {
        e.preventDefault(); // 링크 이동 방지

        let $depth2 = $(this).siblings(".depth2");

        // 이미 열려있으면 닫기
        if ($depth2.is(":visible")) {
            $depth2.stop(true, true).slideUp(200);
        } else {
            // 다른 메뉴 닫기
            $("header .gnb .gnb_wrap ul.depth1 > li > .depth2").slideUp(200);
            // 클릭한 메뉴 열기
            $depth2.stop(true, true).slideDown(200);
        }
    })

    /*************모바일 메뉴 열고 닫기 ****************/
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })


    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
       if(device_status == 'mobile'){ //== 비교연산자 이거맞아?
            //console.log ('눌린당눌린당')
            e.preventDefault()
            menu_open = $(this).parents('li').hasClass('open')
        if(menu_open == true){ //메뉴가 열려있으면
                $(this).parents('li').removeClass('open')
                $(this).next().slideUp()
        }else{ //닫혀있으면
                $('header .gnb .gnb_wrap ul.depth1 > li.open').removeClass('open')
                $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
                $(this).parents('li').addClass('open')
                $(this).next().slideDown()
        }
       }    
    })

})


function resize_chk(){
    window_w = $(window).width()
    //console.log(window_w)
    if(window_w > mobile_size){ //1024보다 크면
        device_status = 'pc'
    }else{ //같거나 작으면
        device_status = 'mobile'
    }
   //console.log(device_status)
}
