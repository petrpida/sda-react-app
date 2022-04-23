import Game from './sharedComponents/TicTacToe/Game';
import Menu from './sharedComponents/Menu';
//import Button from "./sharedComponents/MyButton";
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
import Counter from './sharedComponents/Counter';
import Search from './sharedComponents/SearchFilter';
import ReactTraning from './sharedComponents/ReactTraining';
import Exercise1 from './sharedComponents/ReactTraining/exercise1';
import Exercise2 from './sharedComponents/ReactTraining/exercise2';
import Exercise3 from './sharedComponents/ReactTraining/exercise3';
import Weather from './sharedComponents/Weather';
import PhoneInput from './sharedComponents/PhoneInput';
import ToDoList from './sharedComponents/ToDoList';
import ContactsList from './sharedComponents/ContactList';
import Exercise4 from './sharedComponents/ReactTraining/exercise4';
import Exercise5 from './sharedComponents/ReactTraining/exercise5';
import Exercise6 from './sharedComponents/ReactTraining/exercise6';
import Exercise7 from './sharedComponents/ReactTraining/exercise7';
import Exercise8 from './sharedComponents/ReactTraining/exercise8';
import Exercise9 from './sharedComponents/ReactTraining/exercise9';

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
          <Route exact path="/counter" element={<Counter/>}/>
          <Route exact path="/joke" element={<Joke/>}/>
          <Route exact path="/form" element={<SignInForm/>}/>
          <Route exact path="/news" element={<News/>}/>
          <Route path="/news/:id" element={<NewsEditForm/>} />
          <Route exact path="/tictactoe" element={<Game gameName="TicTacToe" players={2}/>}/>
          <Route exact path="/menu" element={<Menu menuName="SDA" menuItems={["odkaz1", "odkaz2", "odkaz3"]}/>}/>
          <Route exact path="/table" element={<Table rows={3} columns={9} />} />
          <Route
            path="/buttons"
            element={
              <MyButtonList
                buttonsObject={[
                  { text: "load", disableCounter: true },
                  { text: "send", disableCounter: true },
                  { text: "reset", disableCounter: true },
                  { text: "cancel", disableCounter: false }
                ]}
              />
            }
          />
          <Route exact path="/weather" element={<Weather/>}/>

          <Route exact path="/search" element={<Search values={["Banana", "Apple", "Pinapple", "Orange", "Watermelon", "Mango"]}/>}/>
          <Route exact path="/reacttraining" element={<ReactTraning/>}/>
          <Route exact path="/reacttraining/exercise1" element={<Exercise1/>}/>
          <Route exact path="/reacttraining/exercise2" element={<Exercise2/>}/>
          <Route exact path="/reacttraining/exercise3" element={<Exercise3/>}/>
          <Route exact path="/reacttraining/exercise4" element={<Exercise4/>}/>
          <Route exact path="/reacttraining/exercise5" element={<Exercise5/>}/>
          <Route exact path="/reacttraining/exercise6" element={<Exercise6 arr={["dog", "cat", "chicken", "cow", "sheep", "horse"]}/>}/>
          <Route exact path="/reacttraining/exercise7" element={<Exercise7/>}/>
          <Route exact path="/reacttraining/exercise8" element={<Exercise8/>}/>
          <Route exact path="/reacttraining/exercise9" element={<Exercise9/>}/>
            
          <Route exact path="/phone" element={<PhoneInput/>}/>
          <Route exact path="/todo" element={<ToDoList/>}/>
          <Route exact path="/contacts" element={<ContactsList/>}/>





          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
