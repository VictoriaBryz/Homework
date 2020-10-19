//task1
$("a[href^= 'https://']").attr('target', '_blank');


//task2
$("h2.head").css("background-color", "green");
$("h2.head").find("span.inner").css("font-size", "35px");


//task3
$("div").each(function(){
    const $el = $(this);
    $el.prev().before($el);
});


//task4
$(".group input").on("click", function(){
    if($(".group input:checked").length >= 3){
        $(".group input:not(:checked)").attr("disabled", true);
    }else{
        $(".group input:disabled").attr("disabled", false);
    }
})
