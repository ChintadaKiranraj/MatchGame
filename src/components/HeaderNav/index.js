import './index.css'

const HeaderNav = props => {
  const {gameTimeLimit, Score} = props
  console.log('time limit', gameTimeLimit)
  return (
    <ul className="head-bg">
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo-image"
        />
      </li>

      <ul className="score-time">
        <li>
          <p>Score:{Score.toString()}</p>
        </li>
        <li
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignContent: 'center',
          }}
        >
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              style={{width: '35px', paddingTop: '9px', paddingLeft: '5px'}}
            />
          </div>
          <p>{`${gameTimeLimit.toString()} Sec`}</p>
        </li>
      </ul>
    </ul>
  )
}

export default HeaderNav
