var gameState = "begin", score = 0, portal1, portal2, ghostHouse1, b = 0, c = 0;
var ghostHouse2, ghostHouse3, ghostHouse4, touched = 0, ghostHouse5, ghost4Turn5;
var ghostHouseBlock, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall13, a = 0;
var wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24;
var wall25, wall26, wall27, wall30, wall31, wall32, wall8, wall9, wall10, wall11;
var wall12, wall28, wall29, coins = [], cherry, gameOver, pacman, ghost1, ghost2;
var ghost3, ghost4, wall1I, wall2I, wall3I, wall4I, wall5I, wall6I, wall7I, wall8I;
var wall9I, wall10I, wall11I, wall12I, cherryI, gameOverI, coinI, pacmanClosedI;
var pacmanRightA, pacmanLeftA, pacmanUpA, pacmanDownA, ghost1I, ghost2I;
var ghost3I, ghost4I, fakeBlueGhostI, blocker, bigCoin1, bigCoin2, bigCoin3;
var bigCoin4, bigCoin5, touch1 = 0, touch2 = 0, touch3 = 0, touch4 = 0, touch5 = 0;
var count2 = 5, count3 = 10, count = 200, wall14, g2tno, redGhostTurn, g1tw = 0;
var g2tw = 0, ghost2Turn, ghost2Turn2, ghost2Turn3, ghost2Turn4, ghost2Turn5;
var ghost2Turn6, ghost3Turn, ghost4Turn, counter, counter2, counter3, ghost3Turn4;
var counter = setInterval(timer, 1000), counter2 = setInterval(timer2, 1000);
var counter3 = setInterval(timer3, 1000), ghost3Turn2, g3b = 0, ghost3Turn3, g4b;
var ghost3Turn5, ghost3Turn6, ghost4Turn2, ghost4Turn3, ghost4Turn4, ghost4Turn6;
var bbg = 0, blocker2, blocker3, blocker4;

function preload() {
    wall1I = loadImage("../Pack-Man-Game/Images/Wall/Wall.png");
    wall2I = loadImage("../Pack-Man-Game/Images/Wall/Wall2.png");
    wall3I = loadImage("../Pack-Man-Game/Images/Wall/Wall3.png");
    wall4I = loadImage("../Pack-Man-Game/Images/Wall/Wall4.png");
    wall5I = loadImage("../Pack-Man-Game/Images/Wall/Wall5.png");
    wall6I = loadImage("../Pack-Man-Game/Images/Wall/Wall6.png");
    wall7I = loadImage("../Pack-Man-Game/Images/Wall/Wall7.png");
    wall8I = loadImage("../Pack-Man-Game/Images/Wall/Wall8.png");
    wall9I = loadImage("../Pack-Man-Game/Images/Wall/Wall9.png");
    wall10I = loadImage("../Pack-Man-Game/Images/Wall/Wall10.png");
    wall11I = loadImage("../Pack-Man-Game/Images/Wall/Wall11.png");
    wall12I = loadImage("../Pack-Man-Game/Images/Wall/Block.png");

    cherryI = loadImage("../Pack-Man-Game/Images/Cherry.png");
    gameOverI = loadImage("../Pack-Man-Game/Images/GameOver.png");
    coinI = loadImage("../Pack-Man-Game/Images/Coin.png");

    pacmanClosedI = loadImage("../Pack-Man-Game/Images/Pacman/Close.png");
    pacmanRightA = loadImage("../Pack-Man-Game/Images/Pacman/Right2.png");
    pacmanLeftA = loadImage("../Pack-Man-Game/Images/Pacman/PacmanLeft2.png");
    pacmanUpA = loadImage("../Pack-Man-Game/Images/Pacman/PacmanUp2.png");
    pacmanDownA = loadImage("../Pack-Man-Game/Images/Pacman/PacmanDown2.png");

    ghost1I = loadImage("../Pack-Man-Game/Images/Ghost/GhostRed.png");
    ghost2I = loadImage("../Pack-Man-Game/Images/Ghost/GhostOrange.png");
    ghost3I = loadImage("../Pack-Man-Game/Images/Ghost/GhostYellow.png");
    ghost4I = loadImage("../Pack-Man-Game/Images/Ghost/GhostBlue.png");
    fakeBlueGhostI = loadImage("../Pack-Man-Game/Images/Ghost/FakeBlueGhost.png");
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);

    ghost1Turn = createSprite(width / 2 - 45, height / 2, 13, 1);
    ghost1Turn.visible = false;

    ghost2Turn = createSprite(width / 2 - 50, height / 2 - 15, 40, 1);
    ghost2Turn.visible = false;

    ghost2Turn2 = createSprite(width / 2 - 203, height / 2 - 90, 10, 10);
    ghost2Turn2.visible = false;

    ghost2Turn3 = createSprite(width / 2 - 177, height / 2 - 85, 10, 1);
    ghost2Turn3.visible = false;

    ghost2Turn4 = createSprite(width / 2 - 90, height / 2 - 100, 10, 1);
    ghost2Turn4.visible = false;

    ghost2Turn5 = createSprite(width / 2 - 50, height / 2 - 110, 10, 1);
    ghost2Turn5.visible = false;

    ghost2Turn6 = createSprite(width / 2 - 45, height / 2 - 30, 27, 1);
    ghost2Turn6.visible = false;

    ghost3Turn = createSprite(width / 2 + 8, height / 2, 1, 1);
    ghost3Turn.visible = false;

    ghost3Turn2 = createSprite(width / 2 + 190, height / 2 - 175, 20, 1);
    ghost3Turn2.visible = false;

    ghost3Turn3 = createSprite(width / 2 + 80, height / 2 - 150, 1, 15);
    ghost3Turn3.visible = false;

    ghost3Turn4 = createSprite(width / 2 + 80, height / 2 + 160, 15, 1);
    ghost3Turn4.visible = false;

    ghost3Turn5 = createSprite(width / 2 + 77, height / 2 - 10, 3, 1);
    ghost3Turn5.visible = false;

    ghost4Turn = createSprite(width / 2 - 8, height / 2, 1, 1);
    ghost4Turn.visible = false;

    ghost4Turn2 = createSprite(width / 2 - 190, height / 2 - 175, 20, 1);
    ghost4Turn2.visible = false;

    ghost4Turn3 = createSprite(width / 2 - 80, height / 2 - 150, 1, 10);
    ghost4Turn3.visible = false;

    ghost4Turn4 = createSprite(width / 2 - 80, height / 2 + 160, 15, 1);
    ghost4Turn4.visible = false;

    ghost4Turn5 = createSprite(width / 2 - 78, height / 2 - 10, 3, 1);
    ghost4Turn5.visible = false;

    portal1 = createSprite(width / 2 - 200, height / 2, 2, 20);
    portal1.visible = false;

    portal2 = createSprite(width / 2 + 200, height / 2, 2, 20);
    portal2.visible = false;

    ghostHouse1 = createSprite(width / 2, height / 2 + 17);
    ghostHouse1.addImage(wall4I);
    ghostHouse1.scale = 1.2;

    ghostHouse2 = createSprite(width / 2 - 22, height / 2 - 17);
    ghostHouse2.addImage(wall5I);
    ghostHouse2.scale = 1.2;

    ghostHouse3 = createSprite(width / 2 + 22, height / 2 - 17);
    ghostHouse3.addImage(wall6I);
    ghostHouse3.scale = 1.2;

    ghostHouse4 = createSprite(width / 2 - 32, height / 2);
    ghostHouse4.addImage(wall7I);
    ghostHouse4.scale = 1.2;

    ghostHouse5 = createSprite(width / 2 + 32, height / 2);
    ghostHouse5.addImage(wall7I);
    ghostHouse5.scale = 1.2;

    ghostHouseBlock = createSprite(width / 2, height / 2 - 17);
    ghostHouseBlock.addImage(wall12I);
    ghostHouseBlock.scale = 1.2;

    wall1 = createSprite(width / 2, height / 2 + 50);
    wall1.addImage(wall1I);
    wall1.scale = 1.5;

    wall2 = createSprite(width / 2 + 2, height / 2 + 85);
    wall2.addImage(wall2I);
    wall2.scale = 1.5;

    wall3 = createSprite(width / 2, height / 2 + 145);
    wall3.addImage(wall3I);
    wall3.scale = 1.5;

    wall4 = createSprite(width / 2, height / 2 + 175);
    wall4.addImage(wall3I);
    wall4.scale = 1.5;

    wall5 = createSprite(width / 2 - 75, height / 2 + 175);
    wall5.addImage(wall8I);
    wall5.scale = 1.5;

    wall6 = createSprite(width / 2 + 75, height / 2 + 175);
    wall6.addImage(wall8I);
    wall6.scale = 1.5;

    wall7 = createSprite(width / 2 - 75, height / 2 + 55);
    wall7.addImage(wall8I);
    wall7.scale = 1.5;

    wall8 = createSprite(width / 2 + 75, height / 2 + 55);
    wall8.addImage(wall8I);
    wall8.scale = 1.5;

    wall9 = createSprite(width / 2 - 140, height / 2 + 135);
    wall9.addImage(wall3I);
    wall9.scale = 1.5;

    wall10 = createSprite(width / 2 + 140, height / 2 + 135);
    wall10.addImage(wall3I);
    wall10.scale = 1.5;

    wall11 = createSprite(width / 2 - 140, height / 2 + 95);
    wall11.addImage(wall3I);
    wall11.scale = 1.5;

    wall12 = createSprite(width / 2 + 140, height / 2 + 95);
    wall12.addImage(wall3I);
    wall12.scale = 1.5;

    wall13 = createSprite(width / 2 - 138.5, height / 2 + 200);
    wall13.addImage(wall8I);
    wall13.scale = 1.5;

    wall14 = createSprite(width / 2 + 138.5, height / 2 + 200);
    wall14.addImage(wall8I);
    wall14.scale = 1.5;

    wall15 = createSprite(width / 2, height / 2 - 50);
    wall15.addImage(wall9I);
    wall15.scale = 1.5;

    wall16 = createSprite(width / 2, height / 2 - 85);
    wall16.addImage(wall10I);
    wall16.scale = 1.5;

    wall17 = createSprite(width / 2, height / 2 - 155);
    wall17.addImage(wall3I);
    wall17.scale = 1.5;

    wall18 = createSprite(width / 2, height / 2 - 185);
    wall18.addImage(wall3I);
    wall18.scale = 1.5;

    wall19 = createSprite(width / 2 - 75, height / 2 - 185);
    wall19.addImage(wall8I);
    wall19.scale = 1.5;

    wall20 = createSprite(width / 2 + 75, height / 2 - 185);
    wall20.addImage(wall8I);
    wall20.scale = 1.5;

    wall21 = createSprite(width / 2 - 75, height / 2 - 55);
    wall21.addImage(wall8I);
    wall21.scale = 1.5;

    wall22 = createSprite(width / 2 + 75, height / 2 - 55);
    wall22.addImage(wall8I);
    wall22.scale = 1.5;

    wall23 = createSprite(width / 2 - 140, height / 2 - 135);
    wall23.addImage(wall3I);
    wall23.scale = 1.5;

    wall24 = createSprite(width / 2 + 140, height / 2 - 135);
    wall24.addImage(wall3I);
    wall24.scale = 1.5;

    wall25 = createSprite(width / 2 - 140, height / 2 - 95);
    wall25.addImage(wall3I);
    wall25.scale = 1.5;

    wall26 = createSprite(width / 2 + 140, height / 2 - 95);
    wall26.addImage(wall3I);
    wall26.scale = 1.5;

    wall27 = createSprite(width / 2 - 138.5, height / 2 - 200);
    wall27.addImage(wall8I);
    wall27.scale = 1.5;

    wall28 = createSprite(width / 2 + 138.5, height / 2 - 200);
    wall28.addImage(wall8I);
    wall28.scale = 1.5;

    wall29 = createSprite(width / 2 - 183, height / 2 + 15);
    wall29.addImage(wall11I);
    wall29.scale = 1.5;

    wall30 = createSprite(width / 2 - 183, height / 2 - 15);
    wall30.addImage(wall11I);
    wall30.scale = 1.5;

    wall31 = createSprite(width / 2 + 185, height / 2 - 15);
    wall31.addImage(wall11I);
    wall31.scale = 1.5;

    wall32 = createSprite(width / 2 + 185, height / 2 + 15);
    wall32.addImage(wall11I);
    wall32.scale = 1.5;

    cherry = createSprite(width / 2, height / 2 + 35);
    cherry.addImage(cherryI);
    cherry.scale = 0.1;

    //coins
    for (var i = width / 2 - 38; i <= width / 2 + 50; i += 15) {
        drawCoin(i, height / 2 - 193);
    }

    for (var j = height / 2 - 190; j <= height / 2 - 140; j += 15) {
        for (var i = width / 2 - 190; i <= width / 2 - 80; i += 15) {
            drawCoin(i, j);
        }

        for (var i = width / 2 - 65; i <= width / 2 - 50; i += 15) {
            drawCoin(i, j);
        }

        for (var i = width / 2 + 50; i <= width / 2 + 75; i += 15) {
            drawCoin(i, j);
        }

        for (var i = width / 2 + 88; i <= width / 2 + 200; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = height / 2 - 174; j <= height / 2 - 160; j += 10) {
        for (var i = width / 2 - 38; i <= width / 2 + 45; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = height / 2 - 123; j <= height / 2 - 100; j += 15) {
        for (var i = width / 2 - 190; i <= width / 2; i += 15) {
            drawCoin(i, j);
        }

        for (var i = width / 2 + 12; i <= width / 2 + 200; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = height / 2 - 95; j <= height / 2 - 15; j += 15) {
        for (var i = width / 2 - 65; i <= width / 2 - 40; i += 15) {
            drawCoin(i, j);
        }

        for (var i = width / 2 + 47; i <= width / 2 + 70; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = height / 2 - 93; j <= height / 2 - 58; j += 15) {
        for (var i = width / 2 - 38; i <= width / 2 - 8; i += 15) {
            drawCoin(i, j);
        }

        for (var i = width / 2 + 9; i <= width / 2 + 50; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = height / 2 - 85; j <= height / 2 - 15; j += 15) {
        for (var i = width / 2 - 190; i <= width / 2 - 80; i += 15) {
            drawCoin(i, j);
        }

        for (var i = width / 2 + 85; i <= width / 2 + 200; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = height / 2 - 5; j <= height / 2 + 5; j += 10) {
        for (var i = width / 2 - 175; i <= width / 2 - 35; i += 15) {
            drawCoin(i, j);
        }

        for (var i = width / 2 + 40; i <= width / 2 + 175; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = height / 2 + 17; j <= height / 2 + 100; j += 15) {
        for (var i = width / 2 - 65; i <= width / 2 - 40; i += 15) {
            drawCoin(i, j);
        }

        for (var i = width / 2 + 47; i <= width / 2 + 70; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = height / 2 + 25; j <= height / 2 + 85; j += 15) {
        for (var i = width / 2 - 190; i <= width / 2 - 80; i += 15) {
            drawCoin(i, j);
        }

        for (var i = width / 2 + 85; i <= width / 2 + 200; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = height / 2 + 60; j <= height / 2 + 100; j += 15) {
        for (var i = width / 2 - 38; i <= width / 2 - 8; i += 15) {
            drawCoin(i, j);
        }

        for (var i = width / 2 + 9; i <= width / 2 + 50; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = height / 2 + 107; j <= height / 2 + 135; j += 15) {
        for (var i = width / 2 - 190; i <= width / 2; i += 15) {
            drawCoin(i, j);
        }

        for (var i = width / 2 + 12; i <= width / 2 + 200; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = height / 2 + 147; j <= height / 2 + 200; j += 15) {
        for (var i = width / 2 + -190; i <= width / 2 - 80; i += 15) {
            drawCoin(i, j);
        }

        for (var i = width / 2 - 65; i <= width / 2 - 50; i += 15) {
            drawCoin(i, j);
        }

        for (var i = width / 2 + 50; i <= width / 2 + 75; i += 15) {
            drawCoin(i, j);
        }

        for (var i = width / 2 + 87; i <= width / 2 + 200; i += 15) {
            drawCoin(i, j);
        }
    }

    for (var j = height / 2 + 155; j <= height / 2 + 170; j += 10) {
        for (var i = width / 2 - 38; i <= width / 2 + 50; i += 15) {
            drawCoin(i, j);
        }
    }

    bigCoin1 = createSprite(width / 2 + 190, height / 2);
    bigCoin1.addImage(coinI);
    bigCoin1.scale = 0.02;

    bigCoin2 = createSprite(width / 2 - 190, height / 2);
    bigCoin2.addImage(coinI);
    bigCoin2.scale = 0.02;

    bigCoin3 = createSprite(width / 2 - 23, height / 2 + 60);
    bigCoin3.addImage(coinI);
    bigCoin3.scale = 0.02;

    bigCoin4 = createSprite(width / 2 + 117, height / 2 - 147);
    bigCoin4.addImage(coinI);
    bigCoin4.scale = 0.02;

    bigCoin5 = createSprite(width / 2 - 145, height / 2 + 105);
    bigCoin5.addImage(coinI);
    bigCoin5.scale = 0.02;

    pacman = createSprite(width / 2, height / 2 + 190);
    pacman.addImage(pacmanClosedI);
    pacman.scale = 0.025;
    pacman.setCollider("circle", 0, 0, 300);

    ghost1 = createSprite(width / 2, height / 2 - 30);
    ghost1.addImage(ghost1I);
    ghost1.scale = 0.05;

    ghost2 = createSprite(width / 2, height / 2);
    ghost2.addImage(ghost2I);
    ghost2.scale = 0.05;

    ghost3 = createSprite(width / 2 - 20, height / 2);
    ghost3.addImage(ghost3I);
    ghost3.scale = 0.05;

    ghost4 = createSprite(width / 2 + 20, height / 2);
    ghost4.addImage(ghost4I);
    ghost4.scale = 0.05;
    //

    blocker = createSprite(width / 2, height / 2 + 265, width, 130);
    blocker2 = createSprite(width / 2 + 297, height / 2, 200, height);
    blocker3 = createSprite(width / 2 - 297, height / 2, 200, height);
    blocker4 = createSprite(width / 2, height / 2 - 265, width, 130);
    blocker5 = createSprite(width / 2 - 590, height / 2, 400, height);
    blocker6 = createSprite(width / 2 + 590, height / 2, 400, height);

    gameOver = createSprite(width / 2, height / 2 + 35);
    gameOver.addImage(gameOverI);
    gameOver.scale = 0.5;
    gameOver.visible = false;
}

function draw() {
    background("Black");

    drawSprites();

    fill("White");
    noStroke();
    text("Score : " + score, width / 2 - 25, height / 2 + 214);

    if (gameState === "start") {
        pacman.collide(blocker);
        pacman.collide(blocker2);
        pacman.collide(blocker3);
        pacman.collide(blocker4);

        pacman.collide(wall1);
        pacman.collide(wall2);
        pacman.collide(wall3);
        pacman.collide(wall4);
        pacman.collide(wall5);
        pacman.collide(wall6);
        pacman.collide(wall7);
        pacman.collide(wall8);
        pacman.collide(wall9);
        pacman.collide(wall10);
        pacman.collide(wall11);
        pacman.collide(wall12);
        pacman.collide(wall13);
        pacman.collide(wall14);
        pacman.collide(wall15);
        pacman.collide(wall16);
        pacman.collide(wall17);
        pacman.collide(wall18);
        pacman.collide(wall19);
        pacman.collide(wall20);
        pacman.collide(wall21);
        pacman.collide(wall22);
        pacman.collide(wall23);
        pacman.collide(wall24);
        pacman.collide(wall25);
        pacman.collide(wall26);
        pacman.collide(wall27);
        pacman.collide(wall28);
        pacman.collide(wall29);
        pacman.collide(wall30);
        pacman.collide(wall31);
        pacman.collide(wall32);

        pacman.collide(ghostHouse1);
        pacman.collide(ghostHouse2);
        pacman.collide(ghostHouse3);
        pacman.collide(ghostHouse4);
        pacman.collide(ghostHouse5);
        pacman.collide(ghostHouseBlock);

        if (g2tw == 0) {
            ghost2.velocityY = -1;
        }

        if (g1tw == 0) {
            ghost1.velocityX = -4;
        }

        if (ghost1.isTouching(wall21)) {
            g1tw = 1;
            ghost1.velocityX = 0;
            ghost1.velocityY = -4;
        }

        if (ghost1.isTouching(blocker4)) {
            ghost1.velocityX = 4;
            ghost1.velocityY = 0;
        }

        if (ghost1.isTouching(wall20)) {
            ghost1.velocityX = 0;
            ghost1.velocityY = 4;
        }

        if (ghost1.isTouching(wall8)) {
            ghost1.velocityX = 4;
            ghost1.velocityY = 0;
        }

        if (ghost1.isTouching(ghost1Turn)) {
            ghost1.velocityX = 0;
            ghost1.velocityY = -4;
        }

        if (ghost2.isTouching(wall15)) {
            g2tw = 1;
            ghost2.velocityY = 0;
            ghost2.velocityX = 4;

            g2tno = 0;
        }

        if (ghost2.isTouching(wall22)) {
            ghost2.velocityY = 4;
            ghost2.velocityX = 0;
        }

        if (ghost2.isTouching(blocker)) {
            ghost2.velocityY = 0;
            ghost2.velocityX = -4;
        }
        console.log(ghost2.velocityX);

        if (ghost2.isTouching(wall5)) {
            ghost2.velocityY = -4;
            ghost2.velocityX = 0;
        }

        if (ghost2.isTouching(ghost2Turn)) {
            ghost2.velocityY = 0;
            ghost2.velocityX = -4;
        }

        if (ghost2.isTouching(wall30)) {
            ghost2.velocityY = -4;
            ghost2.velocityX = 0;
        }

        if (ghost2.isTouching(wall25)) {
            ghost2.velocityY = 0;
            ghost2.velocityX = -4;
        }

        if (ghost2.isTouching(ghost2Turn2) && g2tno == 0) {
            ghost2.velocityY = 4;
            ghost2.velocityX = 0;

            g2tno = 1;
        }

        if (ghost2.isTouching(ghost2Turn3)) {
            ghost2.x++;
        }

        if (ghost2.isTouching(blocker4)) {
            ghost2.velocityY = 0;
            ghost2.velocityX = 4;
        }

        if (ghost2.isTouching(wall27)) {
            ghost2.velocityY = 4;
            ghost2.velocityX = 0;
        }

        if (ghost2.isTouching(wall23)) {
            ghost2.velocityY = 0;
            ghost2.velocityX = 4;
        }

        if (ghost2.isTouching(wall23)) {
            ghost2.velocityY = 0;
            ghost2.velocityX = 4;
        }

        if (ghost2.isTouching(wall19)) {
            ghost2.velocityY = 4;
            ghost2.velocityX = 0;
        }

        if (ghost2.isTouching(ghost2Turn4)) {
            ghost2.velocityY = 0;
            ghost2.velocityX = 4;
        }

        if (ghost2.isTouching(ghost2Turn5)) {
            ghost2.velocityY = 4;
            ghost2.velocityX = 0;
        }

        if (ghost2.isTouching(ghost2Turn6)) {
            ghost2.velocityY = 0;
            ghost2.velocityX = 4;
        }

        if (ghost3.isTouching(ghost3Turn)) {
            ghost3.velocityX = 0;
            ghost3.velocityY = -1;
        }

        if (ghost3.isTouching(wall15)) {
            ghost3.velocityY = 0;
            ghost3.velocityX = 4;
        }

        if (ghost3.isTouching(wall22)) {
            ghost3.velocityY = 0;
            ghost3.velocityX = 4;
        }

        if (ghost3.isTouching(wall20)) {
            ghost3.velocityY = 0;
            ghost3.velocityX = 4;
        }

        if (ghost3.isTouching(blocker2)) {
            ghost3.velocityY = -4;
            ghost3.velocityX = 0;

            g3b = 1;
        }

        if (ghost3.isTouching(ghost3Turn2)) {
            ghost3.velocityY = 0;
            ghost3.velocityX = -4;
        }

        if (ghost3.isTouching(wall28)) {
            ghost3.velocityY = 4;
            ghost3.velocityX = 0;
        }

        if (ghost3.isTouching(wall24) && g3b == 1) {
            ghost3.velocityY = 0;
            ghost3.velocityX = -4;

            g3b = 0;
        }

        if (ghost3.isTouching(ghost3Turn3)) {
            ghost3.velocityY = 4;
            ghost3.velocityX = 0;
            ghost3.y++;
        }

        if (ghost3.isTouching(ghost3Turn4)) {
            ghost3.velocityY = 0;
            ghost3.velocityX = 4;
        }

        if (ghost3.isTouching(wall32)) {
            ghost3.velocityY = 0;
            ghost3.velocityX = -4;
        }

        if (ghost3.isTouching(wall2)) {
            ghost3.velocityY = -4;
            ghost3.velocityX = 0;
        }

        if (ghost3.isTouching(wall8)) {
            ghost3.velocityY = -4;
            ghost3.velocityX = 0;
        }

        if (ghost3.isTouching(ghost3Turn5)) {
            ghost3.velocityY = 0;
            ghost3.velocityX = -4;
        }

        if (ghost3.isTouching(ghostHouse5)) {
            ghost3.velocityY = -4;
            ghost3.velocityX = 0;
        }

        if (ghost4.isTouching(ghost4Turn)) {
            ghost4.velocityX = 0;
            ghost4.velocityY = -1;
        }

        if (ghost4.isTouching(wall15)) {
            ghost4.velocityY = 0;
            ghost4.velocityX = -4;
        }

        if (ghost4.isTouching(wall21)) {
            ghost4.velocityY = -4;
            ghost4.velocityX = 0;
        }

        if (ghost4.isTouching(wall19)) {
            ghost4.velocityY = 0;
            ghost4.velocityX = -4;
        }

        if (ghost4.isTouching(blocker3)) {
            ghost4.velocityY = -4;
            ghost4.velocityX = 0;

            g4b = 1;
        }

        if (ghost4.isTouching(ghost4Turn2)) {
            ghost4.velocityY = 0;
            ghost4.velocityX = 4;
        }

        if (ghost4.isTouching(wall27)) {
            ghost4.velocityY = 4;
            ghost4.velocityX = 0;
        }

        if (ghost4.isTouching(wall23) && g4b == 1) {
            ghost4.velocityY = 0;
            ghost4.velocityX = 4;

            g4b = 0;
        }

        if (ghost4.isTouching(ghost4Turn3)) {
            ghost4.velocityY = 4;
            ghost4.velocityX = 0;
            ghost4.y++;
        }

        if (ghost4.isTouching(ghost4Turn4)) {
            ghost4.velocityY = 0;
            ghost4.velocityX = -4;
        }

        if (ghost4.isTouching(wall29)) {
            ghost4.velocityY = 0;
            ghost4.velocityX = 4;
        }

        if (ghost4.isTouching(wall16)) {
            ghost4.velocityY = -4;
            ghost4.velocityX = 0;
        }

        if (ghost4.isTouching(wall7)) {
            ghost4.velocityY = -4;
            ghost4.velocityX = 0;
        }

        if (ghost4.isTouching(ghost4Turn5)) {
            ghost4.velocityY = 0;
            ghost4.velocityX = 4;
        }

        if (ghost4.isTouching(ghostHouse4)) {
            ghost4.velocityY = -4;
            ghost4.velocityX = 0;
        }

        if (ghost1.isTouching(pacman) && bbg == 1) {
            score += 10;

            fill("White")
            noStroke();
            text("👎", width / 2 + 150, height / 2 + 209);
        }

        if (ghost2.isTouching(pacman) && bbg == 1) {
            score += 10;

            fill("White")
            noStroke();
            text("👎", width / 2 + 150, height / 2 + 209);
        }

        if (ghost3.isTouching(pacman) && bbg == 1) {
            score += 10;

            fill("White")
            noStroke();
            text("👎", width / 2 + 150, height / 2 + 209);
        }

        if (ghost4.isTouching(pacman) && bbg == 1) {
            score += 10;

            fill("White")
            noStroke();
            text("👎", width / 2 + 150, height / 2 + 209);
        }

        if (ghost1.isTouching(pacman) && bbg == 0) {
            gameState = "end";

            a = 0;
            b = 0;
            c = 0;

            fill("White")
            noStroke();
            text("👎", width / 2 + 150, height / 2 + 209);
        }

        if (ghost2.isTouching(pacman) && bbg == 0) {
            gameState = "end";

            a = 0;
            b = 0;
            c = 0;

            fill("White")
            noStroke();
            text("👎", width / 2 + 150, height / 2 + 209);
        }

        if (ghost3.isTouching(pacman) && bbg == 0) {
            gameState = "end";

            a = 0;
            b = 0;
            c = 0;

            fill("White")
            noStroke();
            text("👎", width / 2 + 150, height / 2 + 209);
        }

        if (ghost4.isTouching(pacman) && bbg == 0) {
            gameState = "end";

            a = 0;
            b = 0;
            c = 0;

            fill("White")
            noStroke();
            text("👎", width / 2 + 150, height / 2 + 209);
        }

        if (pacman.isTouching(cherry)) {
            score += 10;
            cherry.destroy();

            fill("White")
            noStroke();
            text("👍👍", width / 2 + 150, height / 2 + 209);
        }

        if (pacman.isTouching(portal1)) {
            pacman.x = width / 2 + 190;
            pacman.velocityX = -3;
            pacman.velocityY = 0;
        }

        if (pacman.isTouching(portal2)) {
            pacman.x = width / 2 - 190;
            pacman.velocityX = 3;
            pacman.velocityY = 0;
        }

        if (ghost1.isTouching(portal2)) {
            ghost1.x = width / 2 - 190;
            ghost1.velocityX = 4;
            ghost1.velocityY = 0;
        }

        for (var i = 0; i < coins.length; i++) {
            if (pacman.isTouching(coins[i])) {
                coins[i].destroy();
                score++;

                a = 1;
                b = 0;
                c = 0;
            }
        }

        if (a == 1) {
            fill("White")
            noStroke();
            text("👍", width / 2 + 150, height / 2 + 209);
        }

        if (pacman.isTouching(bigCoin1)) {
            count = 200;
            touch1 = 1;
            bigCoin1.destroy();
            score += 2;

            a = 0;
            b = 1;
            c = 0;
        }

        if (touch1 == 1) {
            ghost1.addImage(fakeBlueGhostI);
            ghost2.addImage(fakeBlueGhostI);
            ghost3.addImage(fakeBlueGhostI);
            ghost4.addImage(fakeBlueGhostI);

            bbg = 1;

            timer();
        }

        if (pacman.isTouching(bigCoin2)) {
            count = 200;
            touch2 = 1;
            bigCoin2.destroy();
            score += 2;

            a = 0;
            b = 1;
            c = 0;
        }

        if (touch2 == 1) {
            ghost1.addImage(fakeBlueGhostI);
            ghost2.addImage(fakeBlueGhostI);
            ghost3.addImage(fakeBlueGhostI);
            ghost4.addImage(fakeBlueGhostI);

            timer();
        }

        if (pacman.isTouching(bigCoin3)) {
            count = 200;
            touch3 = 1;
            bigCoin3.destroy();
            score += 2;

            a = 0;
            b = 1;
            c = 0;
        }

        if (touch3 == 1) {
            ghost1.addImage(fakeBlueGhostI);
            ghost2.addImage(fakeBlueGhostI);
            ghost3.addImage(fakeBlueGhostI);
            ghost4.addImage(fakeBlueGhostI);

            timer();
        }

        if (pacman.isTouching(bigCoin4)) {
            count = 200;
            touch4 = 1;
            bigCoin4.destroy();
            score += 2;

            a = 0;
            b = 1;
            c = 0;
        }

        if (touch4 == 1) {
            ghost1.addImage(fakeBlueGhostI);
            ghost2.addImage(fakeBlueGhostI);
            ghost3.addImage(fakeBlueGhostI);
            ghost4.addImage(fakeBlueGhostI);

            timer();
        }

        if (pacman.isTouching(bigCoin5)) {
            count = 200;
            touch5 = 1;
            bigCoin5.destroy();
            score += 2;

            a = 0;
            b = 1;
            c = 0;
        }

        if (touch5 == 1) {
            ghost1.addImage(fakeBlueGhostI);
            ghost2.addImage(fakeBlueGhostI);
            ghost3.addImage(fakeBlueGhostI);
            ghost4.addImage(fakeBlueGhostI);

            timer();
        }

        if (b == 1) {
            fill("White")
            noStroke();
            text("👍👍👍👍", width / 2 + 150, height / 2 + 209);
        }

        if (keyDown("up")) {
            pacman.addImage(pacmanUpA);
            pacman.velocityX = 0;
            pacman.velocityY = -3;
        }

        if (keyDown("down")) {
            pacman.addImage(pacmanDownA);
            pacman.velocityX = 0;
            pacman.velocityY = 3;
        }

        if (keyDown("right")) {
            pacman.addImage(pacmanRightA);
            pacman.velocityY = 0;
            pacman.velocityX = 3;
        }

        if (keyDown("left")) {
            pacman.addImage(pacmanLeftA);
            pacman.velocityY = 0;
            pacman.velocityX = -3;
        }
    }

    if (gameState === "begin") {
        if (keyDown("up")) {
            pacman.addImage(pacmanUpA);
            pacman.velocityX = 0;
            pacman.velocityY = -3;
            gameState = "start";
        }

        if (keyDown("down")) {
            pacman.addImage(pacmanDownA);
            pacman.velocityX = 0;
            pacman.velocityY = 3;
            gameState = "start";
        }

        if (keyDown("right")) {
            pacman.addImage(pacmanRightA);
            pacman.velocityY = 0;
            pacman.velocityX = 3;
            gameState = "start";
        }

        if (keyDown("left")) {
            pacman.addImage(pacmanLeftA);
            pacman.velocityY = 0;
            pacman.velocityX = -3;
            gameState = "start";
        }

        if (touches.length < 0 && touches.isTouching(edges[2])) {
            pacman.addImage(pacmanUpA);
            pacman.velocityX = 0;
            pacman.velocityY = -3;
            gameState = "start";
            touches = [];
        }

        if (touches.length > 0 && touches.isTouching(edges[3])) {
            pacman.addImage(pacmanDownA);
            pacman.velocityX = 0;
            pacman.velocityY = 3;
            gameState = "start";
            touches = [];
        }

        if (touches.length > 0 && touches.isTouching(edges[1])) {
            pacman.addImage(pacmanRightA);
            pacman.velocityY = 0;
            pacman.velocityX = 3;
            gameState = "start";
            touches = [];
        }

        if (touches.length > 0 && touches.isTouching(edges[0])) {
            pacman.addImage(pacmanLeftA);
            pacman.velocityY = 0;
            pacman.velocityX = -3;
            gameState = "start";
            touches = [];
        }
    }

    if (gameState === "begin") {
        if (keyDown("up")) {
            pacman.addImage(pacmanUpA);
            pacman.velocityX = 0;
            pacman.velocityY = -3;
            gameState = "start";
        }
        else if (keyDown("down")) {
            pacman.addImage(pacmanDownA);
            pacman.velocityX = 0;
            pacman.velocityY = 3;
            gameState = "start";
        }
        else if (keyDown("right")) {
            pacman.addImage(pacmanRightA);
            pacman.velocityY = 0;
            pacman.velocityX = 3;
            gameState = "start";
        }
        else if (keyDown("left")) {
            pacman.addImage(pacmanLeftA);
            pacman.velocityY = 0;
            pacman.velocityX = -3;
            gameState = "start";
        }

        if (touches.length < 0 && touches.isTouching(edges[2])) {
            pacman.addImage(pacmanUpA);
            pacman.velocityX = 0;
            pacman.velocityY = -3;
            gameState = "start";
            touches = [];
        }

        if (touches.length > 0 && touches.isTouching(edges[3])) {
            pacman.addImage(pacmanDownA);
            pacman.velocityX = 0;
            pacman.velocityY = 3;
            gameState = "start";
            touches = [];
        }

        if (touches.length > 0 && touches.isTouching(edges[1])) {
            pacman.addImage(pacmanRightA);
            pacman.velocityY = 0;
            pacman.velocityX = 3;
            gameState = "start";
            touches = [];
        }

        if (touches.length > 0 && touches.isTouching(edges[0])) {
            pacman.addImage(pacmanLeftA);
            pacman.velocityY = 0;
            pacman.velocityX = -3;
            gameState = "start";
            touches = [];
        }
    }

    if (gameState === "end") {
        pacman.velocityX = 0;
        pacman.velocityY = 0;

        ghost1.velocityX = 0;
        ghost1.velocityY = 0;

        ghost2.velocityX = 0;
        ghost2.velocityY = 0;

        ghost3.velocityX = 0;
        ghost3.velocityY = 0;

        ghost4.velocityX = 0;
        ghost4.velocityY = 0;

        gameOver.visible = true;
    }
}

function drawCoin(i, j) {
    var coin2 = createSprite(i, j);
    coin2.addImage(coinI);
    coin2.scale = 0.01;
    coins.push(coin2);
}

function timer() {
    if (gameState === "start") {
        count = count - 1;
        if (count <= 0) {
            clearInterval(counter);

            ghost1.addImage(ghost1I);
            ghost2.addImage(ghost2I);
            ghost3.addImage(ghost3I);
            ghost4.addImage(ghost4I);
            bbg = 0;
            return;
        }
    }
}

function timer2() {
    if (gameState === "start") {
        count2 = count2 - 1;
        if (count2 <= 0 && gameState === "start") {
            clearInterval(counter2);

            ghost3.velocityX = 1;
            return;
        }
    }
}

function timer3() {
    if (gameState === "start") {
        count3 = count3 - 1;
        if (count3 <= 0 && gameState === "start") {
            clearInterval(counter3);

            ghost4.velocityX = -1;
            return;
        }
    }
}
