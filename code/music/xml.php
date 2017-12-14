<?php
    header("Content-type: text/html; charset = utf-8");
    //获取输入的内容
    $name = $_GET["name"];
     //设置时区  
     date_default_timezone_set('Asia/Shanghai');  
     //按指定格式输出日期  
     $date=date('Y-m-d H:i');  
     //输出字符串拼接
     $message = $date.":".$name."\r\n";
     
     @$fp = fopen("https://github.com/chen978000/chenzhaoyu.github.io/edit/master/code/music/music.txt", "ab");
     flock($fp,LOCK_EX);
     fwrite($fp,$message);
     flock($fp,LOCK_UN);
     fclose($fp);
?>
