$(document).ready(function(){

    /********visual의 swiper 연결: 시작 ***********/
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 2500,
		disableOnInteraction: true,
	},

	//effect: "fade", /* fade 효과 */

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.visual .swiper-pagination', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		// type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		// renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
		//     return '<span class="' + className + '">' + (index + 1) + "</span>";
		// },
	},

    });
    /********visual의 swiper 연결: 끝 ***********/


	/********medical_center의 swiper 연결: 시작 ***********/
	
	const medical_center_swiper = new Swiper('.medical_center .swiper', { 

	slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		640: {    /* 640px 이상일때 적용 */
			slidesPerView: 5,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 24,
		},
	},
	//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
	loop: false,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
	autoplay: {  /* 팝업 자동 실행 */
		delay: 5000,
		disableOnInteraction: true,
	},
	navigation: {
		nextEl: '.medical_center .ctrl_wrap button.btn_next',
		prevEl: '.medical_center .ctrl_wrap button.btn_prev',
	},
	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.swiper-pagination', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
	},
	scrollbar: {
        el: '.medical_center .ctrl_wrap .swiper-scrollbar',
        hide: false,
		draggable: true,
		dragSize: 50,
    },

});


/********medical_center의 swiper 연결: 끝 ***********/

})