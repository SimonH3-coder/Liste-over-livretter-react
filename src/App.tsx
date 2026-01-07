import { WrapperComponent } from "./components/Wrapper/WrapperComponent";
import "./App.css";

function App() {
  const Livretter = ["Bøf med brun sovs og kartofler", "Spaghetti med millionbøf", "Mixcanske pandekager", "Nudler", "Pizza"];
  const film = ["Batman", "Into to the wild", "Goodfellas", "Ringenes Herre", "En verden udenfor"];
  return (
    <div>
      {Livretter.map((item) => {
        return <WrapperComponent textvalue={item} />;
      })}
      {film.map((item) => {
        return <WrapperComponent textvalue={item} />;
      })}
    </div>
  );
}

export default App;
