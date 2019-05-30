var mini = 0;
var maxi = 400;
var spacing = 21;
var number = 20;

var x = 0;
var y = 0;

var movex, movey;

var drawLineGrid = function(){
    stroke(255, 0, 145);
    //background(255, 255, 255);
    strokeWeight(1);
    /*horizontal*/
    for(var i = 0; i< number; i++){ 
        if(i === floor(y/spacing) || i-1 === floor(y/spacing)){stroke(13, 255, 0);}
        else{stroke(0, 64, 255);}
        line(mini, mini+i*spacing, maxi, mini+i*spacing); 
    }
    /*vertical*/
    for(var j = 0; j< number; j++){
        if(j === floor(x/spacing) || j-1 === floor(x/spacing)){stroke(13, 255, 0);}
        else{stroke(0, 64, 255);}
        line(mini+j*spacing, mini, mini+j*spacing, maxi); 
    }
};

var drawPointGrid = function(){
    stroke(0, 0, 0);
    strokeWeight(3);
      for(var m = 0; m < number; m++){
        for(var n = 0; n < number; n++){
            point(mini+m*spacing, mini+n*spacing);
        }
    }
};

var drawBoxGrid = function(){
    strokeWeight(1);
    fill(235, 235, 255);
    for(var p = 0; p < number-1; p++){
        for(var q = 0; q < number-1; q++){
            if(p === floor(x/spacing) && q === floor(y/spacing)){fill(13, 255, 0);}
            else{fill(255, 0, 0);}
            rect(mini+p*spacing, mini+q*spacing, spacing,spacing);
        }
    }
};

var pointer = function(){
    movex = random(7,14);
    movey = random(7,14);

    strokeWeight(1);
    fill(0, 0, 255);
    text(floor(x)+","+floor(y), x,y);
    fill(255, 255, 255);
    ellipse(floor(x),floor(y),6,6);
    if(keyIsPressed){
        if(keyCode === RIGHT){ x+=movex; }
        if(keyCode === LEFT){ x-=movex; }
        if(keyCode === UP){ y-=movey; }
        if(keyCode === DOWN){ y+=movey; }
    }
    
    if(x>maxi){
        x = 0;
        y+=movey;
    }
    else if(x<mini){
        x = maxi;
        y-=movey;
    }
    
    if(y>maxi){
        y = 0;
        x+=movex;
    }
    else if(y<mini){
        y=maxi;
        x-=movex;
    }
};

var draw = function(){
    background(0, 0, 255);
    scale(0.98);
    translate(4,4);

    //for(var a = 0; a < number; a++){ point(mini+a*spacing, mini); }
    
    //for(var b = 0; b < number; b++){ point(mini, mini+b*spacing); }

    drawBoxGrid();
    
    drawLineGrid();
    
    drawPointGrid();
    
    pointer();

    
};
