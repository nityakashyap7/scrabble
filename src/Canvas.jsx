import useCanvas from './useCanvas.jsx'

//see Test.jsx...
//idk what is going on here...
const Canvas = props => {  
  
  const { draw, ...rest } = props
  const canvasRef = useCanvas(draw)
  
  return <canvas ref={canvasRef} {...rest}/>
}

export default Canvas