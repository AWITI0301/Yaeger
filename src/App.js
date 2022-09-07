import NavBar from './components/NavBar';
import { UserProvider } from './context/User';


function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <NavBar />
          <switch>
          <Route path="/comments/new">
            <CommentForm />
          </Route>
          </switch>
        </Router>
      </UserProvider>
    
  
    </div>
  );
}

export default App;
