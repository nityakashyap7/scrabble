import { useRef, useEffect } from 'react'
import Bag from './js/Bag.js'
import Hand from './js/Hand.js'
import Board from './js/Board.js'
import Score from './js/Score.js'
import Button from './js/Button.js'

//this is organized terribly...
//let me just put a bunch of logic in here...
//UPDATE it's actually terrible...

const useCanvas = draw => {
  
  const canvasRef = useRef(null)
  
  useEffect(() => {
    
    //setting up canvas (the component everything is drawn on?)
    //and context (what you call to draw stuff?)
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    canvas.width = innerWidth
    canvas.height = innerHeight

    let frameCount = 0
    let animationFrameId

    //everything size-wise is based on TILE_SIZE for now...
    const TILE_SIZE = canvas.height / 20

    //initializing a bunch of game objects, basically...
    const bag = new Bag(TILE_SIZE)
    const hand = new Hand(TILE_SIZE, bag)
    const board = new Board(TILE_SIZE)
    const score = new Score(TILE_SIZE)
    const reset = new Button(TILE_SIZE*9, TILE_SIZE*17, TILE_SIZE, TILE_SIZE, "reset", "turn")
    const end = new Button(TILE_SIZE*11, TILE_SIZE*17, TILE_SIZE, TILE_SIZE, "end", "turn")
    const exchange = new Button(TILE_SIZE*13.5, TILE_SIZE*17, TILE_SIZE*2, TILE_SIZE, "exchange", "tiles")

    //everything here is called every frame so it "draws" frame by frame, animates...
    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        bag.draw(ctx)
        board.draw(ctx)
        hand.draw(ctx)
        reset.draw(ctx)
        end.draw(ctx)
        exchange.draw(ctx)
        score.draw(ctx)
    }

    //a bunch of event listeners for mouse input, for tile grabbing and buttons...
    let tileGrabbed = null
    const rect = canvas.getBoundingClientRect()

    //mousedown select tile
    addEventListener('mousedown', (event) => {
        tileGrabbed = hand.grabTile(event.clientX-rect.left, event.clientY-rect.top)
        if (!tileGrabbed)
            tileGrabbed = board.grabTile(event.clientX-rect.left, event.clientY-rect.top, hand)
    })

    //mousemove drag tile, and hover buttons
    addEventListener('mousemove', (event) => {
        if (tileGrabbed) {
            hand.alignTiles()
            tileGrabbed.move(event.clientX-rect.left, event.clientY-rect.top)
        }
        reset.hovering(event.clientX-rect.left, event.clientY-rect.top)
        end.hovering(event.clientX-rect.left, event.clientY-rect.top)
        exchange.hovering(event.clientX-rect.left, event.clientY-rect.top)
    })

    //mouseup release tile
    addEventListener('mouseup', (event) => {
        if (tileGrabbed) {
            board.placeTile(event.clientX-rect.left, event.clientY-rect.top, tileGrabbed, hand)
            score.setScore(board.score())
            tileGrabbed = null
        }
        score.setScore(board.score())
        hand.alignTiles()
    })

    //click buttons
    addEventListener('click', (event) => {
        if (reset.clicked(event.clientX-rect.left, event.clientY-rect.top)) {
            board.reset(hand)
            hand.reset()
            hand.alignTiles()
            score.setScore(0)
        }
        if (end.clicked(event.clientX-rect.left, event.clientY-rect.top)) {
            if (board.valid()) {
                hand.drawTiles(bag)
                board.endTurn()
                hand.alignTiles()
                score.endTurn()
            }
        }
        if (exchange.clicked(event.clientX-rect.left, event.clientY-rect.top)) {
            board.reset(hand)
            const tiles = hand.returnTiles()
            hand.drawTiles(bag)
            bag.returnTiles(tiles)
            hand.alignTiles()
            score.setScore(0)
        }
    })
    
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return canvasRef
}

export default useCanvas