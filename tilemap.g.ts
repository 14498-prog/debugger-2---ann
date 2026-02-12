// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000020000000003000202000202000000000200020200020202020000000002000002000200000006000200020202020c000000020002090200020702000600000202020200060000000200020002020200000002020302020202000200000000000206000003000005000000080202000002020202020200020202020000020007000000000006000000000002000200000202020a02020202020200020002070000000000000600000000070200020002020202020202000202020402070b0007020000000200040002000002000200000000020000000200000000000002000002020202020202020202020200020001000004000000060000000000000000`, img`
. 2 . . . . . . 2 2 . 2 2 . . . 
. 2 . 2 2 . 2 2 2 2 . . . . 2 . 
. 2 . 2 . . . . . 2 . 2 2 2 2 . 
. . . 2 . 2 . 2 . 2 . 2 . . . . 
2 2 2 2 . . . . . 2 . 2 . 2 2 2 
. . . 2 2 . 2 2 2 2 . 2 . . . . 
. 2 . . . . . . . . . . . 2 2 . 
. 2 2 2 2 2 2 . 2 2 2 2 . . 2 . 
. . . . . . . . . . . . 2 . 2 . 
. 2 2 2 . 2 2 2 2 2 2 . 2 . 2 . 
. . . . . . . . . . . . 2 . 2 . 
2 2 2 2 2 2 2 . 2 2 2 . 2 . . . 
. 2 . . . 2 . . . 2 . . 2 . 2 . 
. . . 2 . . . 2 . . . . . . 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 . 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile13], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "end":
            case "tile1":return tile1;
            case "wall":
            case "tile2":return tile2;
            case "greenWall":
            case "tile3":return tile3;
            case "yellowWall":
            case "tile5":return tile5;
            case "orangeWall":
            case "tile8":return tile8;
            case "yellowKey":
            case "tile10":return tile10;
            case "orangeKey":
            case "tile13":return tile13;
            case "enemySpawnLR":
            case "tile6":return tile6;
            case "enemySpawnUD":
            case "tile7":return tile7;
            case "empty":
            case "tile12":return tile12;
            case "greenKey":
            case "tile9":return tile9;
            case "testKey":
            case "tile15":return tile15;
            case "testTile":
            case "tile14":return tile14;
            case "blueKey":
            case "tile11":return tile11;
            case "blueBlock":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
