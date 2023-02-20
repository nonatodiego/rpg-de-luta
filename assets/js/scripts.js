let char = new Brave('DiNo')
let monster = new LittleMonster();

let stage = new Stage(
    char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster")
)

stage.start()