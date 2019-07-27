    
// $() 搜尋物件
// document 網頁文件
// . 執行某件事
// ready() 準備完成
// function () {} 匿名函式

$(document).ready(function () {
    
    alert("網頁文件準備完成了~");

    $("h1").hide();                             // 選取 h1 並隱藏
    $("h2").hide();                             // 選取 h2 並隱藏

    $("#box1").addClass("gold");                // 選取 #box1 並添加類別 gold

    $("#box2").slideUp(2000).slideDown(3000);   // 選取 #box2 並添加滑上與滑下效果

    $("#box3").mouseenter(function () { 
        
        $(this).animate({width: "200px", height: "200px"}, 2000);
    });

    $("#box3").mouseout(function () { 
        
        $(this).animate({width: "100px", height: "100px"}, 2000);
    });

});

// 函式、方法
function A () {

}