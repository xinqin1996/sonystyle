// 第二个轮播图
(function(){

var marMove=1210;
var duration=1000;
var $carUl=$("#activeCar .car_main .car_ul");
var $spans=$("#activeCar .car_icons .car_icon")
//            console.log($carUl)
var count=3;
var i=0;

function moveTo(n) {
//                console.log(1);
    if(n==undefined){
        n=i+1;
    }
    //��i����marginֵ
    i = n;
    //���blueֵ
    $spans.parent().children(".blue").removeClass("blue")
    //�ڵ��ʱ�ж�i��ֵ��Ϊ0ʱ���ͼ���tra
	//从count调到0位置时，tra被拿掉，
	//此时，不能再调到0位置
	//让i==1时，自动取回tra
    if(i==1){
        $carUl.addClass("tra");
    }
    //console.log(i);

    //  ��仰Ҫ������ǰ�棬������i�����жϣ�������margin��
    //��ʱ֮�󣬴�tra�����������������ڿ�ʼ������������
    //�����ڶ�ʱ���У����¶��壻
    if(i==-1){
        i=count-1; //��i��Ϊ2��
        $carUl.removeClass("tra");
        $carUl.css("margin-left",`${-marMove*count}px`);
        setTimeout(function(){
            $carUl.addClass("tra");
            $carUl.css("margin-left", `${-marMove*(count-1)}px`);
            $($spans[i]).addClass("blue");
        },100);
        //��������Ϊ������Ĵ�������
        return;
    }
    //��������仰
    //console.log(i);
    $carUl.css("margin-left",`${-marMove*i}px`);

    //��iΪ3��ʱ�򣬰�i��ֵ���0����marginֵ��0��
    //��仰Ҫ���ڵ������棬��Ϊ�Ƕ�ʱ����Ҫ�ȵ�λ�ƽ���������
    if (i==count) {
        i=0; //��Ϊ3ʱ���Ȱ�icon��С���Ϊ3��
        setTimeout(function(){
            $carUl.removeClass("tra");
            $carUl.css("margin-left","0px");
        }, duration);
    };
    //������class
    $($spans[i]).addClass("blue");
}
//move ����  ��һ����ʱ��
var canClick=true;
function move(n){
    if(canClick){
        moveTo(i+n);
        canClick=false;
        setTimeout(function(){
            canClick=true;
        },duration+100)
    }
}
//���ú���
var $carLeft=$("#activeCar .car_left")
$carLeft.click(function(e){
    e.stopPropagation();
    move(-1);
})
var $carRight=$("#activeCar .car_right")
$carRight.click(function(e){
    e.stopPropagation();
    move(1);
})
//icon ����
var canClick1=true;
var $spans=$("#activeCar .car_icons .car_icon");
var $carIcons=$("#activeCar .car_icons");
$carIcons.on("click",".car_icon",function(){
    var $span=$(this);
    // console.log(1);
    if(!$span.hasClass("blue")){
        if(canClick1==true){
            canClick1=false;
            //class����
            // console.log(2);
            $span.addClass("blue").siblings().removeClass("blue");
            // console.log(3);
            for(var j=0;j<count;j++){
                if ($($spans[j]).is("#activeCar .car_icon.blue")){
                    break;
                }
            }
            // console.log(4);
            moveTo(j);
            //��duration��������Ч��
            setTimeout(function(){
                canClick1=true;
            },duration);
        }
    }
});


var interval1=8000;
var timer1=setInterval(function(){
    moveTo();
},interval1);


$carUl.on("mouseenter",function(){
    clearInterval(timer1);
})


$carUl.on("mouseleave",function(){
    timer1=setInterval(function(){
    moveTo()
},interval1);
});
})();
// console.log($("#activeCar .car_icons"))
// console.log($carIcons.hasClass("car_icons"))
// console.log($carIcons.is("#activeCar .car_icons"))
(function(){
    //$("#kvArea .kvArea_main").prop("width");

    //var marMove=$("#kvArea .kvArea_main").prop("width");
    var marMove=$(window).width();
    //var style=$("#kvArea .kvArea_main").getComputedStyle();
    //console.log($("#kvArea .kvArea_main"))
    var duration=1000;
    var $carUl=$("#kvArea .kvArea_main .kvArea_ul");
    var $spans=$("#kvArea .kvArea_tabs .tabs_ul .tabs_li")
//            console.log($carUl)
    var count=3;
    var i=0;

    function moveTo(n) {
//                console.log(1);
        if(n==undefined){
            n=i+1;
        }
        //��i����marginֵ
        i = n;
        //���blueֵ
        //$spans.parent().children(".blue").removeClass("blue")
        var num=$spans.index($("li.tabs_li.blue"));
        //console.log($spans);
        //console.log(num);
        //console.log(num);
        //console.log($($spans[num]));
        $($spans[num]).removeClass("blue");
        //console.log($($spans[num]));
        //console.log($spans[num]);
        //�ڵ��ʱ�ж�i��ֵ��Ϊ0ʱ���ͼ���tra
        if(i!==0){
            $carUl.addClass("tra");
        }
        //console.log(i);

        //  ��仰Ҫ������ǰ�棬������i�����жϣ�������margin��
        //��ʱ֮�󣬴�tra�����������������ڿ�ʼ������������
        //�����ڶ�ʱ���У����¶��壻
        if(i==-1){
            i=count-1; //��i��Ϊ2��
            $carUl.removeClass("tra");
            $carUl.css("margin-left",`${-marMove*count}px`);
            setTimeout(function(){
                $carUl.addClass("tra");
                $carUl.css("margin-left", `${-marMove*(count-1)}px`);
                $($spans[i]).addClass("blue");
            },100);
            //��������Ϊ������Ĵ�������
            return;
        }
        //��������仰
        //console.log(i);
        $carUl.css("margin-left",`${-marMove*i}px`);

        //��iΪ3��ʱ�򣬰�i��ֵ���0����marginֵ��0��
        //��仰Ҫ���ڵ������棬��Ϊ�Ƕ�ʱ����Ҫ�ȵ�λ�ƽ���������
        if (i==count) {
            i=0; //��Ϊ3ʱ���Ȱ�icon��С���Ϊ3��
            setTimeout(function(){
                $carUl.removeClass("tra");
                $carUl.css("margin-left","0px");
            }, duration);
        };
        //������class
        $($spans[i]).addClass("blue");
    }
//move ����  ��һ����ʱ��
    var canClick=true;
    function move(n){
        if(canClick){
            moveTo(i+n);
            canClick=false;
            setTimeout(function(){
                canClick=true;
            },duration+100)
        }
    }
//���ú���
    var $carLeft=$("#kvArea .kvArea_main .kvArea_left")
    $carLeft.click(function(e){
        e.stopPropagation();
        move(-1);
    })
    var $carRight=$("#kvArea .kvArea_main .kvArea_right")
    $carRight.click(function(e){
        e.stopPropagation();
        move(1);
    })
//icon ����
    var canClick1=true;
    //var $spans=$("#kvArea .kvArea_tabs .tabs_li")
    var $carIcons=$("#kvArea .kvArea_tabs .tabs_ul");
    $carIcons.on("click",".tabs_li",function(){
        var $span=$(this);
        // console.log(1);
        if(!$span.hasClass("blue")){
            if(canClick1==true){
                canClick1=false;
                //class����
                // console.log(2);
                $span.addClass("blue").siblings().removeClass("blue");
                // console.log(3);
                //for(var j=0;j<count;j++){
                //    if ($($spans[j]).is("#activeCar .car_icon.blue")){
                //        break;
                //    }
                //}
                var j=$spans.index($span);
                // console.log(4);
                moveTo(j);
                //��duration��������Ч��
                setTimeout(function(){
                    canClick1=true;
                },duration);
            }
        }
    });


    var interval1=6500;
    var timer1=setInterval(function(){
        moveTo();
    },interval1);


    $carUl.on("mouseenter",function(){
        clearInterval(timer1);
    })


    $carUl.on("mouseleave",function(){
        timer1=setInterval(function(){
            moveTo()
        },interval1);
    });
})();