import SearchForm from "components/SearchForm/SearchForm";
import BoardControl from "components/boardControls/BoardControl";
import BoardStatus from "components/boardStatus/boardStatus";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer autoClose={5000} theme="colored" />
      <SearchForm />
      <BoardStatus />
      <BoardControl/>
    </>
  );
}

export default App;
