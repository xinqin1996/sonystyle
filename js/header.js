$(function(){
    $.ajax({
        url:"../sonystyle/header.html",
        type:"get",
        success:function(result){
            //����htmlƬ��
            //console.log(result);
            // �滻<header id="header"></header>
            $(result).replaceAll("#header");
            //��ӵ�headerc.css����ҳ
            $(`<link rel="stylesheet" href="../css/header.css"/>`).appendTo("head");
        }
    })
})