import image from './dices 1.png'

const Startgame = ({ toggle }) =>{
    return <nav className='container'>
      <div>
        <h1>DICE GAME</h1>
        <img src={image} alt='shit' ></img>
      </div>
      <div className='title'>
        <h1>DICE GAME</h1>
        <button onClick={toggle}>Play now</button>
      </div>
    </nav>
}
export default Startgame;