
// // function timer1() {
// //     var today = new Date();
// //     var h = today.getHours();
// //     var m = today.getMinutes();
// //     var s = today.getSeconds();
// //     m = checkTime(m);
// //     s = checkTime(s);
// //     document.getElementById('te').innerHTML =h + ":" + m + ":" + s;
// //     var t = setTimeout(timer, 500);
// //     }
// // function checkTime(i) {
// //       if (i < 10) {
// //         i = "0" + i
// //       };  // add zero in front of numbers < 10
// //       return i;
// //       }
      $(' a').on('click', function(e) {
         e.preventDefault();
         var url = this.href;
         $(' a.current').removeClass('current');
         $(this).addClass('current');
         //console.log(url);
         $('#container').remove();
         $('#content').load(url + ' #container').hide().fadeIn('slow');
       });


