$(document).ready(function() {
	const distanceToNextImage = -800;
	let currentImageNumber = 0;
	$("#lightbox").hide();

	$(".grid-photo").click(function(){
		var id = $(this).attr('id');
		currentImageNumber=parseInt(id,10);
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage);
		$("#lightbox").show();
	})

	$('#right').click(function(){
    currentImageNumber = (currentImageNumber+1)%9;
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage);
	})

	$('#left').click(function(){
    if (currentImageNumber==0){
      currentImageNumber=8;
    }
    else{
      currentImageNumber = (currentImageNumber-1)%9;
    }
    $("#carousel-strip").css("left", currentImageNumber * distanceToNextImage);
	})
	
	
	// OTHER CODE
	// This closes the lightbox when you click on the overlay or the x.
	$("#overlay, #close").click(function() {
		$("#lightbox").hide();
	})
});



    /*$(document).ready(function() {
        
        $("#page-title").fadeIn();

        $(document).on("scroll", function () {
            var pageTop = $(document).scrollTop()
            var pageBottom = pageTop + $(window).height()
            var tags = $("scroller")
          
            for (var i = 0; i < tags.length; i++) {
              var tag = tags[i]
          
              if ($(tag).position().top < pageBottom) {
                $(tag).addClass("visible")
              } else {
                $(tag).removeClass("visible")
              }
            }
          })

          
        })*/

          /*var myElement = $(.writing);

$(window).on('scroll', function() {
    var st = $(this).scrollTop();
    myElement.css({
        'opacity' : 1 - st/600
    });
});
        
        })*/
        



/*
$(document).ready(function() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
    });
    */