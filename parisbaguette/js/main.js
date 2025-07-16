$(document).ready(function(){

    /*************visual 의 swiper 연결 : 시작 ************/

    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 25000,
            disableOnInteraction: true,
        },
    
        //effect: "fade", /* fade 효과 */
    
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            observer: true,
            observeParents: true,
            resizeObserver: true,
            // type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            // renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
            //     return '<span class="' + className + '">' + (index + 1) + "</span>";
            // },
        },
    
        });
        // swiper.autoplay.stop();  /* 일시정지 기능 */
        // swiper.autoplay.start();  /* 재생 기능 */

    /*************visual 의 swiper 연결 : 끝 ************/

    /*************menu 의 tap 연결 : 시작 ************/
    let menu_content 
    $('.menu .list .tap_list ul > li').on('click', function(){
        if($(this).hasClass('active') == false){
            console.log('선택안된메뉴')
            menu_content = $(this).attr('data-content')
            console.log(menu_content)

            $('.menu .list .tab_content .tab_item').removeClass('active')
            $('.menu .list .tab_content').find('#'+menu_content).addClass('active')

            $('.menu .list .tap_list ul > li').removeClass('active')
            $(this).addClass('active')
            
            $('.menu .list .tap_list ul > li button span').text('')
            $(this).find('span').text('선택됨')

            $('.menu .list .tap_list ul > li').attr('aria-selected', 'false')
            $(this).attr('aria-selected', 'true')
        }
        
        
    })
    /*************menu 의 tap 연결 : 끝 ************/

    /*************promotion 의 swiper 연결 : 시작 ************/

    $('.promotion .list .list_wrap').slick({
        autoplay: true, //팝업 자동 실행
        autoplaySpeed: 1000, //팝업이 머무는 시간
        speed: 0, //팝업 전환 속도
        dots: true, //하단 페이지 버튼 (true, false)
        arrows: true,  //다음, 이전팝업 (true, false)
        //pauseOnHover: true, //마우스호버시 일시정지
        infinite: true, //무한반복
        variableWidth: true, //넓이를 자유롭게 설정
        slidesToShow: 6, //한번에 보일 팝업 수
        //slidesToScroll: 1, //한번 드래그에 움직이는 슬라이드 제한
        swipeToSlide: true, //드래그한만큼 슬라이드 움직이기
        //centerMode: true, //가운데정렬(가운데가 1번)
        responsive: [
            {
                breakpoint: 1920, //1300px 이하
                settings: {
                  slidesToShow: 6
                }
              },
            {
              breakpoint: 1300, //1300px 이하
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 375,
              settings: {
                slidesToShow: 1
              }
            },
        ]
    });

    /*************promotion 의 swiper 연결 : 끝 ************/
	
});