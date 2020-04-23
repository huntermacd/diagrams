var game = new Phaser.Game(240, 430, Phaser.CANVAS, "container", {
  preload: preload,
  create: create,
});

var dl_link;
var save_link = document.getElementById("save");

function preload() {
  game.load.image("neck", "neck.png");
  game.load.spritesheet("note", "note.png", 32, 32, 11);
  game.load.spritesheet("open", "open.png", 30, 30, 3);
}

function create() {
  game.stage.backgroundColor = "#fff";
  neck = game.add.sprite(15, 5, "neck");

  six_0 = game.add.sprite(5, 5, "open");
  six_1 = game.add.sprite(5, 65, "note");
  six_2 = game.add.sprite(5, 125, "note");
  six_3 = game.add.sprite(5, 185, "note");
  six_4 = game.add.sprite(5, 245, "note");
  six_5 = game.add.sprite(5, 305, "note");
  six_6 = game.add.sprite(5, 365, "note");

  five_0 = game.add.sprite(45, 5, "open");
  five_1 = game.add.sprite(45, 65, "note");
  five_2 = game.add.sprite(45, 125, "note");
  five_3 = game.add.sprite(45, 185, "note");
  five_4 = game.add.sprite(45, 245, "note");
  five_5 = game.add.sprite(45, 305, "note");
  five_6 = game.add.sprite(45, 365, "note");

  four_0 = game.add.sprite(85, 5, "open");
  four_1 = game.add.sprite(85, 65, "note");
  four_2 = game.add.sprite(85, 125, "note");
  four_3 = game.add.sprite(85, 185, "note");
  four_4 = game.add.sprite(85, 245, "note");
  four_5 = game.add.sprite(85, 305, "note");
  four_6 = game.add.sprite(85, 365, "note");

  three_0 = game.add.sprite(125, 5, "open");
  three_1 = game.add.sprite(125, 65, "note");
  three_2 = game.add.sprite(125, 125, "note");
  three_3 = game.add.sprite(125, 185, "note");
  three_4 = game.add.sprite(125, 245, "note");
  three_5 = game.add.sprite(125, 305, "note");
  three_6 = game.add.sprite(125, 365, "note");

  two_0 = game.add.sprite(165, 5, "open");
  two_1 = game.add.sprite(165, 65, "note");
  two_2 = game.add.sprite(165, 125, "note");
  two_3 = game.add.sprite(165, 185, "note");
  two_4 = game.add.sprite(165, 245, "note");
  two_5 = game.add.sprite(165, 305, "note");
  two_6 = game.add.sprite(165, 365, "note");

  one_0 = game.add.sprite(205, 5, "open");
  one_1 = game.add.sprite(205, 65, "note");
  one_2 = game.add.sprite(205, 125, "note");
  one_3 = game.add.sprite(205, 185, "note");
  one_4 = game.add.sprite(205, 245, "note");
  one_5 = game.add.sprite(205, 305, "note");
  one_6 = game.add.sprite(205, 365, "note");

  opens = [six_0, five_0, four_0, three_0, two_0, one_0];

  notes = [
    six_1,
    six_2,
    six_3,
    six_4,
    six_5,
    six_6,
    five_1,
    five_2,
    five_3,
    five_4,
    five_5,
    five_6,
    four_1,
    four_2,
    four_3,
    four_4,
    four_5,
    four_6,
    three_1,
    three_2,
    three_3,
    three_4,
    three_5,
    three_6,
    two_1,
    two_2,
    two_3,
    two_4,
    two_5,
    two_6,
    one_1,
    one_2,
    one_3,
    one_4,
    one_5,
    one_6,
  ];

  for (var i = 0; i < opens.length; i++) {
    opens[i].inputEnabled = true;
    opens[i].events.onInputDown.add(change_frame_open, this);
  }

  for (var i = 0; i < notes.length; i++) {
    notes[i].inputEnabled = true;
    notes[i].events.onInputDown.add(change_frame_note, this);
  }

  update_dl_link();
}

function change_frame_open(sprite) {
  if (sprite.frame === 2) {
    sprite.frame = 0;
  } else {
    sprite.frame += 1;
  }
  update_dl_link();
}

function change_frame_note(sprite) {
  if (sprite.frame === 10) {
    sprite.frame = 0;
  } else {
    sprite.frame += 1;
  }
  update_dl_link();
}

function clear_notes() {
  for (var i = 0; i < notes.length; i++) {
    notes[i].frame = 0;
  }
  for (var i = 0; i < opens.length; i++) {
    opens[i].frame = 0;
  }
}

function update_dl_link() {
  setTimeout(function () {
    dl_link = game.canvas.toDataURL();
    save_link.setAttribute("href", dl_link);
  }, 500);
}
