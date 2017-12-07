<!-- 主题：仿网易云音乐html
作者：陈昭雨
更新时间：20171206 -->
<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
		<title>陈昭雨的网易云音乐</title>
		<link rel="stylesheet" href="music.css">
		<link rel="shortcut icon" href="favicon.ico">

	</head>
	<body>
		<div class="cover"></div>
		<div class="play-board">
			<div class="bg"></div>
			<img class="citou" src="./music_img/needle.png" alt="磁头" draggable="false">

			<div class="disc music">
				<img class="fengmian" src="http://p1.music.126.net/pERhjARCIrZwNd0UFfHpWg==/5749346301711508.jpg" alt="">
				<img class="cipan" src="./music_img/disc.png" alt="磁盘" draggable="false">
			</div>
			<div class="musci_intro"><span class="intro_name">歌曲</span>——<span class="intro_artist">演唱者</span></div>
			<div class="progress">
				<span class="bar"></span>
				<div class="point"></div>
			</div>
			<div class="musci_time"><span>00:00</span>/<span>00:00</span></div>
			<div class="control">
				<img class="control_pre" src="./music_img/pre.png" alt="上一首">
				<img class="control_play" src="./music_img/play.png" alt="播放">
				<img class="control_pause" src="./music_img/pause.png" alt="暂停" style="display: none;">
				<img class="control_next" src="./music_img/next.png" alt="下一首">
			</div>
		</div>	
		<audio id="player" src="http://music.163.com/song/media/outer/url?id=521749251.mp3"></audio>
		<script src="music.js"></script>
	</body>
		
		
	</html>	