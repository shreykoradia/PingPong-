import React from 'react'
import '../index.css'

const Game = () => {
  return (
    <div class="score">
    <div class="player-score" id="player-score">0</div>
    <div class="computer-score" id="computer-score">0</div>
    <div class="ball" id="ball"></div>
    <div class="paddle left" id="player-paddle"></div>
    <div class="paddle right" id="computer-paddle"></div>
    </div>
  )
}

export default Game