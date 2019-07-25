$(document).ready(function () {
    // console.log(123);
    $(".box img").draggable({ snap: ".box", snapMode: "inter" });



    $(".setting_btn").click(function(){
        $(".setting_box").show();
    })

    $(".close_icon").click(function(){
        $(".setting_box").hide();
    })
});


