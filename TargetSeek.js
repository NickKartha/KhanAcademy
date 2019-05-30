/* not the most accurate kinematics */

var posx = floor(random(10, 390)), posy = floor(random(10, 390)), velx = 0, vely = 0, target_x = floor(random(10, 390)), target_y = floor(random(10, 390)), dir="";

var spawn_seeker = function(){
    //posx = floor(random(10, 390));
    //posy = floor(random(10, 390));
    fill(0, 255, 255);
    rect(posx, posy, 10, 10);
};

var update_seeker_position = function(){
    posx += velx;
    posy += vely;
};

var update_seeker_direction = function(){
    if(target_x > posx){ velx = 0.5; }
    else if(target_x < posx){ velx = -0.5; }
    else{ velx = 0; }

    if(target_y > posy){ vely = 0.5; }
    else if(target_y < posx){ vely = -0.5; }
    else{ vely = 0; }

    if(velx === 0 && vely === 0){ //posx === target_x && posy === target_y){
        fill(0, 0, 0);
        text("YUM!", posx + 10, posy + 10);
    }
};

var init_target = function(){
    //target_x = floor(random(10, 390));
    //target_y = floor(random(10, 390));
    fill(255, 0, 0);
    rect(target_x, target_y, 10, 10);
};

var infobox = function(){
    fill(255, 255, 255);
    rect(250,299,149,100);
    fill(0, 0, 0);
    text("(x1, y1) = " + "(" + posx + "," + posy + ")", 278, 316);
    text("(x2, y2) = " + "(" + target_x + "," + target_y + ")", 278, 334);
    text("(vx, vy) = " + "(" + velx + "," + vely + ")", 278, 353);
    if(velx > 0 && vely === 0){ dir = "RIGHT"; }
    else if(velx < 0 && vely === 0){ dir = "LEFT"; }
    else if(vely > 0 && velx === 0){ dir = "DOWN"; }
    else if(velx < 0 && velx === 0){ dir = "UP"; }
    else if(velx > 0 && vely > 0){ dir = "BOTTOM-RIGHT";}
    else if(velx < 0 && vely < 0){ dir = "TOP-LEFT";}
    else if(velx > 0 && vely < 0){ dir = "TOP-RIGHT"; }
    else if(velx < 0 && vely > 0){ dir = "BOTTOM-LEFT"; }
    else{ dir = "NONE"; }
    text("Direction: " + dir, 259, 380);
};

var life = function() {
    background(255, 255, 255);
    infobox();
    spawn_seeker();
    init_target();
    update_seeker_position();
    update_seeker_direction();
};

draw = function(){life();};

/* goal: https://www.youtube.com/watch?v=flxOkx0yLrY */

