/**
 * Created by lucy on 2017/11/2.
 */

//视频播放
$(function(){
    //获取元素
    var videoPlay=$(".play");
    var video=$(".video");
    var ctrl=$(".ctrl");
    var ctrlImg=$(".ctrl img");
    var err=$(".err");
    ctrl.hover(function(){
        ctrlImg.attr("src",["../img/video_btn_hover.png"]);
    })
    ctrl.click(function(e){
        e.preventDefault();
        videoPlay.css("display","block");
        if(video.paused){
            video.play();
        }
    })
    err.click(function(e){
        e.preventDefault();
        videoPlay.css("display","none");
    })
});

//back to top
$(function () {
    var scroll=$(".scroll");
    showScroll();
    function showScroll() {
        $(window).scroll(function () {
            var scrollValue = $(window).scrollTop();
            scrollValue > 400 ? scroll.slideDown() : scroll.slideUp();
        });
        $('.scroll').click(function () {
            $("#ad").animate({ scrollTop: 0 }, 200);
        });
    }
});
//图片的显示隐藏
$(function(){
    var check=$(".check a");
    var hiddenImg=$(".hiddenImg");
    check.click(function(e){
        e.preventDefault();
        check.parent().css("display","none");
        hiddenImg.css("display","block");
    })
});

//登录页面验证

//登录页面
$(function(){
		//为登录按钮完成绑定事件
        var btn=$("#btn");
        btn.click(function(e){
			//阻止默认行为
            e.preventDefault();
			//获取用户输入名和密码
            var uname=$('#uname').val();
            var upwd=$('#upwd').val();
            console.log("1");
			//发送ajax请求
            $.ajax({
                type:"GET",
                url:"../data/login.php",
                data:{uname:uname,upwd:upwd},
                success:function(data){
					if(data.code==1){
						sessionStorage.setItem("uname",uname);
						alert("登录成功! 3s后将自动跳转到首页...");
						setTimeout(function(){
							location.href = "http://localhost/personalBog/page/index.html";
						},3000);
					}else{
						alert(data.code+":"+data.msg);
					}
                },
                error:function(){
                    console.log("您的网络出现故障，请检查");
                }
            })
        })
    });

//注册页面
$(function(){
    //为注册按钮完成绑定事件
    var register=$("#register");
    register.click(function(e){
        e.preventDefault();
        var uname=$("#uname").val();
        var upwd=$("#upwd").val();
        var phone=$("#phone").val();
        var email=$("#email").val();
        var user_name=$("#user_name").val();
        var gender=$("#gender").val();
        $.ajax({
            type:"POST",
		    dataType:'text',
            url:"../data/register.php",
            data:{uname:uname,upwd:upwd,phone:phone,email:email,user_name:user_name,gender:gender},
            success:function(result){
                console.log(result);
				if(result=="注册成功"){
					window.location.href="http://localhost/personalBog/page/login.html";
				}else{
					alert("输入错误，请重新注册");
				}
            },
            error:function(){
                console.log("您的网络出现故障，请检查");
            }
        })

    })
});
//header加载
//$(function(){
//    $("#header").load("../page/header.html");
//});

//登录之后修改注册登录按钮
 $(function(){
      var uname = sessionStorage.getItem("uname");
      if(uname){
		  console.log(uname);
		  $("#welcome").children("a").remove();
          $("#welcome").html( `欢迎回来 ：${uname}`) ;
		  $("#welcome").append("<a href='http://localhost/personalBog/page/logout.html'>退出</a>");
          $("#welcome a").css("color","black");
          $("#welcome a").css("border","none");
      }
 });

//搜索框
$(function(){
    var search=$("#search");
    var input=$("#search p");
    search.click(function(e){
        e.preventDefault();
        input.slideToggle(200);
    })
})

