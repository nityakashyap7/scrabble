import { useRef, useEffect } from 'react'
import Bag from './js/Bag.js'
import Hand from './js/Hand.js'
import Board from './js/Board.js'
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
    const reset = new Button(TILE_SIZE*9, TILE_SIZE*17, "reset", "turn", TILE_SIZE)
    const end = new Button(TILE_SIZE*11, TILE_SIZE*17, "end", "turn", TILE_SIZE)

    //everything here is called every frame so it "draws" frame by frame, animates...
    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        bag.draw(ctx)
        board.draw(ctx)
        hand.draw(ctx)
        reset.draw(ctx)
        end.draw(ctx)
    }

    //a bunch of event listeners for mouse input, for tile grabbing and buttons...
    let tileGrabbed = null
    const rect = canvas.getBoundingClientRect()

    addEventListener('mousedown', (event) => {
        tileGrabbed = hand.grabTile(event.clientX-rect.left, event.clientY-rect.top)
    })

    addEventListener('mousemove', (event) => {
        if (tileGrabbed) {
            tileGrabbed.move(event.clientX-rect.left, event.clientY-rect.top)
        }
        reset.hovering(event.clientX-rect.left, event.clientY-rect.top)
        end.hovering(event.clientX-rect.left, event.clientY-rect.top)
    })

    addEventListener('mouseup', (event) => {
        if (tileGrabbed) {
            if (board.placeTile(event.clientX-rect.left, event.clientY-rect.top, tileGrabbed))
                hand.placeTile(tileGrabbed)
            tileGrabbed = null
        }
        hand.alignTiles()
    })

    addEventListener('click', (event) => {
        if (reset.clicked(event.clientX-rect.left, event.clientY-rect.top)) {
            hand.reset()
            board.reset()
            hand.alignTiles()
        }
        if (end.clicked(event.clientX-rect.left, event.clientY-rect.top)) {
            hand.drawTiles(bag)
            board.endTurn()
            hand.alignTiles()
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