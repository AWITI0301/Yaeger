import { UserProvider } from "./context/user";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Logout from "./components/Logout";
import GamesContainer from "./components/Game/GamesContainer";
import GameCard from "./components/Game/GameCard";
import CommentForm from "./components/Comment/CommentForm";
import GameForm from "./components/Game/GameForm";
import CommentContainer from "./components/Comment/CommentContainer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <UserProvider>
      <NavBar />

      <Switch>
        <Route path="/comments/new">
          <CommentForm />
        </Route>

        <Route path="/game/new">
          <GameForm />
        </Route>

        <Route path="/comments">
          <CommentContainer />
        </Route>

        <Route path="/games">
          <GamesContainer />
        </Route>

        <Route path="/games/:id">
          <GameCard />
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/logout">
          <Logout />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="*">
          <h3>404 Page Not Found</h3>
        </Route>
      </Switch>
      </UserProvider>
    </div>
  );
}

export default App;
