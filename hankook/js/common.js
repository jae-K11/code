let device_status // pc인지 모바일인지 구분하는 값 
let scrolling // 브라우저가 스크롤 된 값
let scroll_prev //이전에 스크롤 된값
let window_w // 브라우저의 넓이 값
let mobile_size = 1024 //모바일로 변경되는 사이트
let menu_open //모바일에서 사용할 메뉴가 열렸는지 여부를 저장 

$(document).ready(function(){
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
    });
});