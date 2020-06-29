$(document).ready(function(){
 
/*gnb*/
 
$('.header .menu').on('click',function(e){
 e.preventDefault();
 $(this).toggleClass('on')
 
 if($(this).hasClass('on')){
  $('html').css('overflow','hidden')
  $('.gnb').show()
 }else{
  $('html').css('overflow-y','scroll')
  $('.gnb').hide()
 }
})
 
$('.tabTitle > a').on('click',function(e){
 e.preventDefault();
 $('.tabTitle a.on').removeClass('on');
 $('.tabTitle .depth1.on').removeClass('on');
 $(this).addClass('on')
 $(this).next().addClass('on')
 $('.depth1 > li > a.on').removeClass('on');
 $('.depth2').hide()
})
 
 $('.depth2').hide()
 
 $('.depth1 > li > a').on('click',function(e){
 e.preventDefault();
  if($(this).hasClass('on')==false){
   $('.depth1 > li > a.on').next().slideUp();
   $('.depth1 > li > a.on').removeClass('on');
   $(this).addClass('on')
   $(this).next().slideDown()
  }else{
   $(this).removeClass('on');
   $(this).next().slideUp()
  }
 })
 
 /*search*/
 
 $('.search').on('click',function(e){
 e.preventDefault();
  if($('.search_frm').hasClass('on')){
   $('.search_frm').animate({
   left:'75%'
  },0,function(){
    $('.search_frm').css({left:'75%',width:0}).removeClass('on')
   })
  }else{
  $('.search_frm').animate({
   left:'0',
   width:'75%'
  },0).addClass('on')
  $('.search_frm .search_bar').focus()
  }
 })
 
 /*visual*/
 
 var visualNum=0
 var visualLength=$('.visual_list li').length
 var visualWidth=$('.visual_list').width()
 var visualSid=setInterval(function(){$('.visual_btn .next_btn').trigger('click')},5000)
 
 $('.visual_list li:not(:eq(0))').hide()
 
 $(window).resize(function(){
 visualWidth=$('.visual_list').width()
 })
 
 $('.visual_btn .stop_btn').on('click',function(e){
 e.preventDefault();
  if($(this).hasClass('play_btn')==false){
   $(this).addClass('play_btn').removeClass('stop_btn')
   clearInterval(visualSid)
  }else{
   $(this).addClass('stop_btn').removeClass('play_btn')
   clearInterval(visualSid)
   visualSid=setInterval(function(){$('.visual_btn .next_btn').trigger('click')},5000)
  }
 })
 
 
 $('.visual_btn .next_btn').on('click',function(e){
 e.preventDefault();
  if($('.visual_list li').is(':animated')==false){
  if(++visualNum>=visualLength){
   visualNum=0
  }
  $('.visual_list li.on').animate({
   left:-visualWidth
  },1000,function(){
   $(this).removeClass('on').hide()
  })
  $('.visual_list li:eq('+visualNum+')').css('left',visualWidth).show().addClass('on').animate({
   left:0
  },1000)
   
 }
 })
 
 $('.visual_btn .prev_btn').on('click',function(e){
 e.preventDefault();
  
  if($('.visual_list li').is(':animated')==false){
   if(--visualNum<0){
   visualNum=visualLength-1
  }
  
  $('.visual_list li.on').animate({
   left:visualWidth
  },1000,function(){
   $(this).removeClass('on').hide()
  })
  $('.visual_list li:eq('+visualNum+')').css('left',-visualWidth).show().addClass('on').animate({
   left:0
  },1000)
  }
 })
 
 /*change*/
 
 $('.change').on('click',function(e){
 e.preventDefault();
  if($(this).hasClass('change2')){
   $(this).removeClass('change2').css('backgroundColor','#002e9c').text('출발')
  }else{
   $(this).addClass('change2').css('backgroundColor','#930707').text('도착')
  }
 })
 
 /*manual*/
 
  $('.manual_contents:not(:eq(0))').hide()
 $('.manual_title > a').on('click',function(e){
 e.preventDefault();
  
  $('.manual_contents').hide()
  $('.manual_title > a.on').removeClass('on')
  $(this).addClass('on').next().show()
 })
 
 
 /*info*/
 
  $('.info_list:not(:eq(0))').hide()
 $('.tab_title > a').on('click',function(e){
 e.preventDefault();
  
  $('.info_list').hide()
  $('.tab_title > a.on').removeClass('on')
  $(this).addClass('on').next().show()
 })
 
 
 /*banner*/
 
 var bannerNum=0
 var bannerLength=$('.banner_list li').length
 var bannerSid=setInterval(function(){$('.banner_btn .next_btn').trigger('click')},3000)
 
 $('.banner_list li:not(:eq(0))').hide()
 function bannerAuto(num){
  $('.banner_list li').hide()
  $('.banner_list li:eq('+num+')').show()
  $('.banner_btn .num strong').text('0'+(num+1))
 }
 
 
 $('.banner_btn .stop_btn').on('click',function(e){
 e.preventDefault();
  if($(this).hasClass('play_btn')==false){
   $(this).addClass('play_btn').removeClass('stop_btn')
   clearInterval(bannerSid)
  }else{
   $(this).addClass('stop_btn').removeClass('play_btn')
   clearInterval(bannerSid)
   visualSid=setInterval(function(){$('.banner_btn .next_btn').trigger('click')},5000)
  }
 })
 
 
 $('.banner_btn .next_btn').on('click',function(e){
   e.preventDefault();
  if(++bannerNum>=bannerLength){
   bannerNum=0
  }
  bannerAuto(bannerNum)
 })
 
 $('.banner_btn .prev_btn').on('click',function(e){
   e.preventDefault();
   if(--bannerNum<0){
   bannerNum=bannerLength-1
  }
  bannerAuto(bannerNum)
 })
 
 
	
})
