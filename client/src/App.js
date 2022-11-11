import { AppRouter } from "./routes/routes";
import { GlobalStyles } from "./styles/App.style";
import { Reset } from "./styles/Reset.style";

function App() {
  return (
    <>
      <AppRouter />
      <Reset />
      <GlobalStyles />
    </>
  );
}

export default App;
