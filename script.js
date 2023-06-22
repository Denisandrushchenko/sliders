'use strict'

$(document).ready(function(){
      $('.slider li').first('li').show().siblings('li').hide()
      $('.slider li').first('li').addClass('active')
            

      function slider (){
         
          $('.active').removeClass('active').next('li').addClass('active').show(1500).siblings('li').hide(1500)
         if ($('.active').next().length == 0 ){
          $('.slider li').first('li').addClass('active')
         }
          setTimeout(slider , 3000)
      }

      slider()
})