import LoginForm from "./components/LoginForm/LoginForm";
import Navigation from "./components/Navigation/Navigation";/*Imports are set*/


function App() {
  return (
    <div>
      <Navigation /> {/*Placed our two components within the App function*/}
      <LoginForm />
    </div>
  );
}

export default App;
