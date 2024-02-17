import { ToastContainer } from "react-toastify";
import MainContainer from "components/MainContainer/MainContainer";
import PageHeader from "components/PageHeader/PageHeader";
import TaskPlateCondition from "components/TasksPlate/TaskPlateCondition/TaskPlateCondition";

function App() {
  return (
    <MainContainer>
      <ToastContainer autoClose={5000} theme="colored" />
      <PageHeader />
      <TaskPlateCondition />
    </MainContainer>
  );
}

export default App;
