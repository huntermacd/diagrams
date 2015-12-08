var game = new Phaser.Game(240, 400, Phaser.CANVAS, '', {preload: preload, create: create, update: update});

function preload(){
    game.load.image('neck', 'neck.png');
    game.load.spritesheet('note', 'note.png', 30, 30, 3);
}

function create(){
    game.stage.backgroundColor = '#fff';
    neck = game.add.sprite(15, 15, 'neck');

    six_1 = game.add.sprite(5, 35, 'note');
    six_2 = game.add.sprite(5, 95, 'note');
    six_3 = game.add.sprite(5, 155, 'note');
    six_4 = game.add.sprite(5, 215, 'note');
    six_5 = game.add.sprite(5, 275, 'note');
    six_6 = game.add.sprite(5, 335, 'note');
    five_1 = game.add.sprite(45, 35, 'note');
    five_2 = game.add.sprite(45, 95, 'note');
    five_3 = game.add.sprite(45, 155, 'note');
    five_4 = game.add.sprite(45, 215, 'note');
    five_5 = game.add.sprite(45, 275, 'note');
    five_6 = game.add.sprite(45, 335, 'note');
    four_1 = game.add.sprite(85, 35, 'note');
    four_2 = game.add.sprite(85, 95, 'note');
    four_3 = game.add.sprite(85, 155, 'note');
    four_4 = game.add.sprite(85, 215, 'note');
    four_5 = game.add.sprite(85, 275, 'note');
    four_6 = game.add.sprite(85, 335, 'note');
    three_1 = game.add.sprite(125, 35, 'note');
    three_2 = game.add.sprite(125, 95, 'note');
    three_3 = game.add.sprite(125, 155, 'note');
    three_4 = game.add.sprite(125, 215, 'note');
    three_5 = game.add.sprite(125, 275, 'note');
    three_6 = game.add.sprite(125, 335, 'note');
    two_1 = game.add.sprite(165, 35, 'note');
    two_2 = game.add.sprite(165, 95, 'note');
    two_3 = game.add.sprite(165, 155, 'note');
    two_4 = game.add.sprite(165, 215, 'note');
    two_5 = game.add.sprite(165, 275, 'note');
    two_6 = game.add.sprite(165, 335, 'note');
    one_1 = game.add.sprite(205, 35, 'note');
    one_2 = game.add.sprite(205, 95, 'note');
    one_3 = game.add.sprite(205, 155, 'note');
    one_4 = game.add.sprite(205, 215, 'note');
    one_5 = game.add.sprite(205, 275, 'note');
    one_6 = game.add.sprite(205, 335, 'note');

    notes = [six_1, six_2, six_3, six_4, six_5, six_6,
                five_1, five_2, five_3, five_4, five_5, five_6,
                four_1, four_2, four_3, four_4, four_5, four_6,
                three_1, three_2, three_3, three_4, three_5, three_6,
                two_1, two_2, two_3, two_4, two_5, two_6,
                one_1, one_2, one_3, one_4, one_5, one_6];

    for (var i = 0; i < notes.length; i++) {
        notes[i].frame = 0;
        notes[i].inputEnabled = true;
        notes[i].events.onInputDown.add(change_frame, this);
    };
}

function change_frame(sprite){
    if (sprite.frame === 2){
        sprite.frame = 0;
    } else {
        sprite.frame += 1;
    }
}

function update(){

}