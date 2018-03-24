$(".sqr").mouseenter(function() {
 	$(".row").css("visibility", "visible");
}
);

$(".sqr2").mouseenter( function () {
	$(".row").animate({
	    left: '0'
	}, 1000);
}
);
$(".sqr").mouseenter(function() {
  $(".sqr2").addClass("loader");
}
);
