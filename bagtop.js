$(document).ready(function () {
    $("#btnTop").click(function (e) { 
        //alert("點了一下")
        $("html,body").animate({scrollTop: 0}, 1000);
    });
});

//函數會有小括號
//$("#a1").click(function (e) { 

//        var top= $("#section1").position().top;
    
//        $("html,body").animate({scroll:top},500)
//    });

//API
//自訂函數(參數){內容}

function scrollToPosition (btn,pos,dur){
    $(btn).click(function (e) { 

        var top= $(pos).position().top
            
        $("html,body").animate({scrollTop:top},dur)
            });
}

scrollToPosition("#a1","#section1",500)
scrollToPosition("#a2","#section2",1000)
scrollToPosition("#a3","#section3",1000)
scrollToPosition("#a4","#section4",1000)
scrollToPosition("#a5","#section5",1000)



    // alert($(window).scrollTop());
    
    $("#btnTop").fadeOut(0);                // 按鈕隱藏 - 也可設定在 CSS 內

    // 元素 捲動 (匿名函式() {  });
    $(window).scroll(function() {
        
        if ($(window).scrollTop() > 200) {  // 如果 螢幕頂端 > 200

            $("#btnTop").fadeIn(500);       // 顯示按鈕

        } else {                            // 否則

            $("#btnTop").fadeOut(500);      // 隱藏按鈕
            
        }
    });

