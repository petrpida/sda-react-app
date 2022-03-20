import Game from './sharedComponents/TicTacToe/Game';
import Menu from './sharedComponents/Menu';
// import Button from "./sharedComponents/MyButton";
import MyButtonList from "./sharedComponents/MyButtonList";
import Table from "./sharedComponents/Table";
//import TableRow from "./sharedComponents/TableRow";
import Home from './sharedComponents/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import News from './sharedComponents/News';
//import NewsDetail from './sharedComponents/NewsDetail';
import SignInForm from './sharedComponents/SignInForm';
import NewsEditForm from './sharedComponents/NewsEditForm';
import Alert from './sharedComponents/Alert';
import Joke from './sharedComponents/Joke';

function App() {
  return (
    <div>
      {/* <Menu menuName="Menu SDA" menuItems={["odkaz1", "odkaz2", "odkaz3"]} /> */}
      {/* <Game gameName="PISKVORKY" players={2} /> */}
      {/* <Button buttonName="button 1" disableCounter={true}/> */}
      {/* <Button buttonName="button 2" disableCounter={false}/> */}
      {/* <Button buttonName="button 3" disableCounter={false}/> */}
      {/* <MyButtonList
        buttonsObject={[
          { text: "load", disableCounter: true },
          { text: "send", disableCounter: false },
          { text: "reset", disableCounter: true },
          { text: "cancel", disableCounter: false }
        ]}
      /> */}
      {/* <Table rows={6} columns={4}/> */}
      <Router>
        <Routes>
          <Route exact path="/alert/:id" element={<Alert show={true} text="text of alert" color={"red"}/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/joke" element={<Joke/>}/>
          <Route exact path="/form" element={<SignInForm/>}/>
          <Route exact path="/news" element={<News/>}/>
          <Route path="/news/:id" element={<NewsEditForm/>} />
          <Route exact path="/tictactoe" element={<Game gameName="TicTacToe" players={2}/>}/>
          <Route exact path="/menu" element={<Menu menuName="SDA" menuItems={["odkaz1", "odkaz2", "odkaz3"]}/>}/>
          <Route exact path="/table" element={<Table rows={5} columns={6} />} />
          <Route
            path="/buttons"
            element={
              <MyButtonList
                buttonsObject={[
                  { text: "load", disableCounter: true },
                  { text: "send", disableCounter: false },
                  { text: "reset", disableCounter: true },
                  { text: "cancel", disableCounter: false }
                ]}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
