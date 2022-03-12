import Game from './sharedComponents/TicTacToe/Game';
// import Menu from './sharedComponents/Menu';

function App() {
  return (
    <div>
      {/* <Menu menuName="Menu SDA" menuItems={["odkaz1", "odkaz2", "odkaz3"]} /> */}
      <Game gameName="PISKVORKY" players={2} />
    </div>
  );
}

export default App;
