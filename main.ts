sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.warmRadial, 100)
    music.buzzer.play()
    info.changeLifeBy(-1)
})
let bee: Sprite = null
let clover: Sprite = null
scene.setBackgroundImage(assets.image`background`)
let hero = sprites.create(assets.image`hero`, SpriteKind.Player)
controller.moveSprite(hero)
hero.setStayInScreen(true)
game.onUpdateInterval(5000, function () {
    clover = sprites.createProjectileFromSide(img`
        . . . b b b . . . b b . . . . . 
        . . b 5 7 b . . b 5 b b . . . . 
        . b b 7 7 b . . b 7 7 b b . . . 
        b b 7 7 7 b b b b 7 7 7 7 b . . 
        b 7 6 6 7 7 b b 7 7 6 6 7 b . . 
        . b b b 6 7 7 7 7 6 b b b . . . 
        . . . . b b 7 7 b b . . . . . . 
        b b b b 7 7 7 7 7 7 b b b b . . 
        b 5 7 7 7 6 b b 6 7 7 7 5 b . . 
        b 7 7 7 6 b b 6 b 6 7 7 7 b . . 
        b b 7 7 b . b 6 b b 6 7 b b . . 
        . b b 6 b . b 6 . b b 6 b . . . 
        . . b b . . b b 6 . b b . . . . 
        . . . . . . . b 7 6 . . . . . . 
        . . . . . . . b b b . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    bee = sprites.createProjectileFromSide(img`
        . . . . 1 9 1 9 1 1 9 1 9 . . . 
        . . . . 1 . 9 . 9 . 9 . 9 . . . 
        . . . . . 9 . 1 . 9 . 1 9 . . . 
        . . . . . . 9 9 9 9 9 9 . . . . 
        . . f f . . 5 5 f 5 4 f . . . . 
        . f f f f 4 5 f 5 5 f 5 4 . . . 
        f d f f f 5 5 f 5 5 f 5 5 f . . 
        f f f f f 5 5 f 5 5 f 5 5 f f f 
        f d f f f 5 5 f 5 5 f 5 5 f . . 
        . f f f f 4 5 f 5 5 f 5 4 . . . 
        . . f f . . 5 5 f 5 4 f . . . . 
        . . . . . . 9 9 9 9 9 9 . . . . 
        . . . . . 9 . 1 . 9 . 1 9 . . . 
        . . . . 1 . 9 . 9 . 9 . 9 . . . 
        . . . . 1 9 1 9 1 1 9 1 9 . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    bee.setKind(SpriteKind.Enemy)
})
