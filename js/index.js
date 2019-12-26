$(function () {
    // 项目选项卡
    var xmBgul = document.querySelector(".xm_bgul");
    var xmA = document.querySelectorAll(".xm_a");
// var xmBglist=document.querySelectorAll(".xm_bglist");
// var xmBglistWid=xmBglist[0].offsetWidth;
    for (var i = 0; i < xmA.length; i++) {
        xmA[i].index = i;
        xmA[i].onclick = function () {
            xmBgul.style.transform = "translate3d(" + this.index * -50 + "%,0,0)";
            for (var j = 0; j < xmA.length; j++) {
                xmA[j].classList.remove('xm_active');
            }
            xmA[this.index].classList.add('xm_active');
        }
    }


// App遮罩 mask
    var mask = document.querySelector(".mask");
    var xmAA = document.querySelectorAll(".xm_aa");
    var rwmbox = document.querySelectorAll(".rwmbox");
    /*var Llqh=document.documentElement.clientHeight;
     mask.height=Llqh;*/   // 遮罩高度=浏览器高度

    for (var i = 0; i < xmAA.length; i++) {
        xmAA[i].index = i;
        xmAA[i].onclick = function () {
            mask.style.left = 0;
            rwmbox[this.index].style.opacity = 1;
        }

    }

    mask.onclick = function () {
        mask.style.left = "-100%";
        for (var j = 0; j < rwmbox.length; j++) {
            rwmbox[j].style.opacity = 0;
        }
    }


// 微信遮罩 wxMask
    var wxMask = document.querySelector(".wxMask");
    var wxBtn = document.querySelector(".footer_wx");
    var wxBox = document.querySelector(".wxBox");
    /*var Llqh=document.documentElement.clientHeight;
     wxMask.height=Llqh;*/   // 遮罩高度=浏览器高度

    wxBtn.onclick = function () {
        wxMask.style.left = 0;
        wxBox.style.opacity = 1;
    }
    wxMask.onclick = function () {
        wxMask.style.left = "-100%";
        wxBox.style.opacity = 0;

    }


// 返回顶部
    $(".top").click(function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: 0}, 500);
    });


// 楼层跳转
    $(".navbar-nav> .navitem").click(function () {
        var index = $(this).index();
        $("html,body").animate({scrollTop: $(".floor").eq(index).offset().top}, 300, "linear");
    })

// 座右铭
    

});

