import './Tile.css';
import woodBg1 from './assets/scrabble_wood_tile.png';
import woodBg2 from './assets/scrabble_wood_tile2.png';
import woodBg3 from './assets/scrabble_wood_tile3.png';
import woodBg4 from './assets/scrabble_wood_tile4.png';
import { motion } from 'framer-motion';

export default function Tile({ letter, value, bounce = false, delay = 0 }) {
  const MotionWrapper = bounce ? motion.div : 'div';

  const woodBgs = [woodBg1, woodBg2, woodBg3, woodBg4]

  return (
    <MotionWrapper
      className="tile"
      initial={bounce ? { y: -20, opacity: 0 } : false}
      animate={bounce ? { y: 0, opacity: 1 } : false}
      transition={bounce ? { delay, type: 'spring', stiffness: 500 } : {}}
      style={{ backgroundImage: `url(${woodBg})` }}
    >
      <span className="letter">{letter}</span>
      <span className="value">{value}</span>
    </MotionWrapper>
  );
}