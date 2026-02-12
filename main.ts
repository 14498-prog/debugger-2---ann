namespace SpriteKind {
    export const Friend = SpriteKind.create()
}

function addEnemies() {
    add_LR_Enemies()
    add_UP_Enemies()
}
function add_LR_Enemies() { //Left and Right moving enemies
    let spawns_LR = tiles.getTilesByType(assets.tile`enemySpawnLR`)
    spawns_LR.forEach((spawn) => {
        let enemySprite = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
        enemySprite.setPosition(spawn.x, spawn.y)
        enemySprite.setVelocity(50, 0)
        enemySprite.setBounceOnWall(true)
    })
}
function add_UP_Enemies() { //Up and Down moving enemies
    let spawns_UD = tiles.getTilesByType(assets.tile`enemySpawn`)
    spawns_UD.forEach((spawn) => {
        let enemySprite = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
        enemySprite.setPosition(spawn.x, spawn.y)
        enemySprite.setVelocity(0, 50)
    })
}

scene.onOverlapTile(SpriteKind.Player, assets.tile`end`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`greenKey`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`empty`)
    greenKey = true
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`greenWall`, function (sprite, location){
    if(greenKey) {
        tiles.setTileAt(location, assets.tile`empty`)
    } else {
        sprite.setPosition(8, 8)
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`yellowKey`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`empty`)
    yellowKey = true
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`yellowWall`, function (sprite, location) {
    if (yellowKey) {
        tiles.setTileAt(location, assets.tile`empty`)
    } else {
        sprite.setPosition(8, 8)
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`orangeKey`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`empty`)
    orangeKey = true
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`orangeWall`, function (sprite, location) {
    if (orangeKey) {
        tiles.setTileAt(location, assets.tile`empty`)
    } else {
        //sprite.setPosition(8, 8)
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`blueKey`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`empty`)
    blueKey = true
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`blueBlock`, function (sprite, location) {
    if (blueKey) {
        tiles.setTileAt(location, assets.tile`empty`)
    } else {
        sprite.setPosition(-8, -8)
    }
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})

let greenKey = false
let blueKey = false
let yellowKey = false
let orangeKey = false

let playerSprite = sprites.create(assets.image`player`, SpriteKind.Player)
playerSprite.setPosition(8, 8)
playerSprite.setStayInScreen(true)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(playerSprite)
controller.moveSprite(playerSprite, 100)
addEnemies()