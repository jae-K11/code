
$(document).ready(function(){
        /*************visual 의 swiper 연결 : 시작 ************/

        const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

            //autoplay: {  /* 팝업 자동 실행 */
             //   delay: 2500,
             //   disableOnInteraction: true,
            //},

            //effect: "fade", /* fade 효과 */

            loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
            

            navigation: {  /* 이전, 다음 버튼 */
                nextEl: '.visual .ctrl_wrap .button.btn_next',  /* 다음 버튼의 클래스명 */
                prevEl: '.visual .ctrl_wrap .button.btn_prev',  
            },

        });
        // swiper.autoplay.stop();  /* 일시정지 기능 */
        // swiper.autoplay.start();  /* 재생 기능 */

        /*************visual 의 swiper 연결 : 끝 ************/
})//$(document).ready