<?php
  //1、加载公共php程序
  require("init.php");
  //2、获取参数uname/upwd
  $uname=$_REQUEST["uname"];
  $upwd=$_REQUEST["upwd"];
  //3、创建SQL语句并且发送sql语句
  $sql="SELECT * FROM xz_user WHERE uname='$uname' AND upwd='$upwd'";
  $result=mysqli_query($conn,$sql);
  //4、获取返回结果，并且抓取结果
  $row = mysqli_fetch_assoc($result);
  //5、判断输出
  if($row==null){
     echo '{"code":-1,"msg":"用户名或密码不正确"}';
  }else{
     $uid=$row["uid"];

     echo '{"code":1,"msg":"登录成功","uid":'.$uid.'}';
  }

?>