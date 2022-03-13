// import Game from './sharedComponents/TicTacToe/Game';
// import Menu from './sharedComponents/Menu';
// import Button from "./sharedComponents/MyButton";
import MyButtonList from "./sharedComponents/MyButtonList";

function App() {
  return (
    <div>
      {/* <Menu menuName="Menu SDA" menuItems={["odkaz1", "odkaz2", "odkaz3"]} /> */}
      {/* <Game gameName="PISKVORKY" players={2} /> */}
      {/* <Button buttonName="button 1" disableCounter={true}/> */}
      {/* <Button buttonName="button 2" disableCounter={false}/> */}
      {/* <Button buttonName="button 3" disableCounter={false}/> */}
          <MyButtonList buttonsCount={10} disableCounters={false}/>
    </div>
  );
}

export default App;
