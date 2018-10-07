$(document).ready(function(){
	var canvas = $("#table")[0];
	if (canvas.getContext){
		canvas.width = 400;
		canvas.height = 400; 
		var ctx = canvas.getContext('2d');
		const unit = 10;
		const snakeHead = new Image();
		snakeHead.src = "https://www.thegreatapps.com/application/upload/Apps/2016/04/spinning-snake-							139.png";
		const ground = new Image();
		ground.src = "http://mirror2.cze.cz/texturesLarge/grass-texture-2.jpg";
		var direction;
		var play = true;
		//snake array
		var speed=100;
		var level=1;
		var snake = [];
		var score = 0;
		
		//starting snake
		snake[0] = {
			x:100,
			y:100
		}
		
		//fruit coordinates
		var fruit = {
			x: Math.floor(Math.random()*10)*40,
			y: Math.floor(Math.random()*10)*40
		}
		
		//Direction event listener
		//screen click directions
		$("#up").click(function(){
			direction = "up";
		});
		$("#down").click(function(){
			direction = "down";
		});
		$("#left").click(function(){
			direction = "left";
		});
		$("#right").click(function(){
			direction = "right";
		});
	
		//keyboard directions
		document.addEventListener("keydown",function(event){
			let key = event.keyCode;
			if (key == 37 && direction != "right"){
				direction = "left";
			}else if (key == 38 && direction != "down"){
				direction = "up";
			}else if (key == 39 && direction != "left"){
				direction = "right";
			}else if (key == 40 && direction != "up"){
				direction = "down";
			}
		});

		//Game logic
		function game(){
			ctx.clearRect(0,0,canvas.width,canvas.height);
			for (let i=0;i<snake.length;i++){
				ctx.fillStyle = (i==0) ? "#311B92" : "#388E3C";
				ctx.fillRect(snake[i].x,snake[i].y,unit,unit);
			}
			
			ctx.fillStyle = "#E53935";
			ctx.fillRect(fruit.x,fruit.y,unit,unit);
			
			let snakeX = snake[0].x
			let snakeY = snake[0].y
			//Move condition
			if (direction == 'left') snakeX -=unit;
			if (direction == 'right') snakeX +=unit;
			if (direction == 'up') snakeY -=unit;
			if (direction == 'down') snakeY +=unit;
			
			//Fruit condition
			if (snakeX == fruit.x && snakeY==fruit.y){
				score++;
				$("#bar").val(score);
				if (score == 10){
					level++;
					speed -=10;
					$("#lvl").html("<div id=\"lvl\">Level "+level+"</div>");
					score = 0;
					$("#bar").val(score);
				}
				fruit = {
						x: Math.floor(Math.random()*10)*40,
						y: Math.floor(Math.random()*10)*40
						}
				for (let i=0; i<snake.length;i++){
					if (snake[i].x==fruit.x && snake[i].y==fruit.y){
						fruit = {
							x: Math.floor(Math.random()*10)*40,
							y: Math.floor(Math.random()*10)*40
							}
					}
				}
			}else{
			snake.pop();
			}
			//new head to be added
			let newHead = {
				x:snakeX,
				y:snakeY
			}
			
			snake.unshift (newHead);
			
			if (newHead.x<0 || newHead.x==canvas.width || newHead.y<0 || newHead.y==canvas.height){
				play = false;
			}
			for (let i=1;i<snake.length;i++){
				if (newHead.x==snake[i].x && newHead.y==snake[i].y){
					play = false;
				}
			}
				if (play) {
				setTimeout(game,speed);
			}
		}	
	
		game();
		collision(snake[0].x,snake[0].y);
	}	
})