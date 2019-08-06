$(function(){
    $.ajax({
        url:"../sonystyle/header.html",
        type:"get",
        success:function(result){
            //返回html片段
            //console.log(result);
            // 替换<header id="header"></header>
            $(result).replaceAll("#header");
            //添加到headerc.css到首页
            $(`<link rel="stylesheet" href="../css/header.css"/>`).appendTo("head");
        }
    })
})