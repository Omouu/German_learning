btns.click(function(){
  $(this).toggleClass('btnActive');
})
//search 
$('#searchBtn').click(function(){
  eList.empty();
  eList.toggle();
  qInput.val('');
  inputSlide(qInput);
})
//share
//mail
$('#mailBtn').click(function(){
  inputSlide(mInput);
  $('#mailSubmit').fadeToggle();
})
$('#mailSubmit').click(function(){
  if(validateEmail(mInput.val())){
    var arr = Array.from(mistakes);
    alert(arr.toString())
  }else {
    $(this).hide();
    $('#mailErr').show();
  }
})
//timer
//settings
//sound
//list
$('#listBtn').click(function(){
  mistakeList.empty();
  var arr = Array.from(mistakes);
  arr.forEach(function(el){
      var li = $('<li/>').text(el).appendTo(mistakeList);
  })
  mistakeList.fadeToggle();
})
mistakeList.on('click','li',function(){
  loadWord($(this).text());
})
  //query input
qInput.keyup(function(){
  var result = getEntry(qInput.val());
  if(result.length>0){
    eList.empty();
    if(result.length>5) result = result.slice(0,5);
    result.forEach(function(el){
      $('<li/>').text(el).appendTo(eList);
    })
  }else qInput.addClass('redBorder');
})

eList.on('mousedown','li',function(){
  loadWord($(this).text());
  eList.toggle();
})
eList.on('mouseenter','li',function(){
  switch(vocabulary[$(this).text()]){
    case 'der': $(this).addClass('mBg'); break;
    case 'das': $(this).addClass('nBg'); break;
    case 'die': $(this).addClass('fBg'); break;
    default: break;
  }
})
eList.on('mouseleave','li',function(){
  switch(vocabulary[$(this).text()]){
    case 'der': $(this).removeClass('mBg'); break;
    case 'das': $(this).removeClass('nBg'); break;
    case 'die': $(this).removeClass('fBg'); break;
    default: break;
  }
})
//PONS
// $('#expBtn').click(function(){
// })

//night mode
var brighten = function(){
	jQuery("body").animate({
		backgroundColor: jQuery.Color('white')
  }, 500);
}
var darken = function(){
  jQuery("body").animate({
    backgroundColor:'#2C3E50'
  }, 500);
}
var fnArr = [brighten,darken];
jQuery("#nightModeBtn").click(function(){
  fnArr[0]();
  gInput.toggleClass('white-caret')
  fnArr = fnArr.reverse();
});
//collapse header and footer
$('#collapseBtn').click(function(){
  $('.hdnft').slideToggle();
})




