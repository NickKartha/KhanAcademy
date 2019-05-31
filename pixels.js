background(0, 0, 0);

noStroke();

var screen_max = 36;

var fill_coeff = 25;

var spacing_factor = 11;

var cell_size = 10;

var k = 5;

for(var i = 0; i < screen_max; i++){
    for(var j = 0; j < screen_max; j++){
        fill(fill_coeff * i, fill_coeff * j, fill_coeff * k);
        rect(3 + spacing_factor * i, 3 + spacing_factor * j, cell_size, cell_size, 0);
    }
}

