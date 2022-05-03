var car, wall;

function setup() {
    createCanvas(1200, 400);


    wall = createSprite(600, 200, 10, 400);

    car = createSprite(15, 200, 30, 30);




    speed = random(10, 45);
    weight = random(40, 210);
}

function draw() {
    background(0);

    car.velocityX = speed;



    if (wall.x - car.x < (car.width - wall.width) / 2) {
        car.velocityX = 0;
        var deformation = 0.5 * weight * speed * speed / 2250;
        if (deformation > 18) {
            car.shapeColor = color(225, 0, 0);
        }
        if (deformation < 18 && deformation > 10) {
            car.shapeColor = color(230, 230, 0);

        }
        if (deformation < 10) {
            car.shapeColor = color(0, 255, 0);

        }
    }



    drawSprites();
}