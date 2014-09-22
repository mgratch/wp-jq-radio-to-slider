jQuery(document).ready(function($) {
	//alert('Johny Five is alive!');
    var $ = jQuery;

    $(".lw-slider").each(function () {
        var radios = $(this).find("li").find(":radio").hide();

        $("<div class=" + "ui-slider" + "></div>").slider({

            range: "min",
            min: parseInt(radios.first().val()),
            max: parseInt(radios.last().val()),
            value: 0,

            slide: function (event, ui) {
                radios.filter("[value=" + ui.value + "]").click();
                var value = $(".ui-slider").slider('value');
                $("#amount").val(ui.value);
                $(this).find('.ui-slider-handle').text(ui.value);
            },
            create: function (event, ui) {
                var v = $(this).slider('value');
                $(this).find('.ui-slider-handle').text(v);
            }

        }).appendTo(this);

        $(".ginput_container").hide();
    });
    //$('.ui-slider').draggable();
});