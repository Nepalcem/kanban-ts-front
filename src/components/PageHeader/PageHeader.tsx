import SearchForm from "components/SearchForm/SearchForm";
import BoardControl from "components/boardControls/BoardControl";
import BoardStatus from "components/boardStatus/BoardStatus";
import { PageHeaderStyled } from "./PageHeader.styled";


export default function PageHeader() {
  return (
    <PageHeaderStyled>
      <SearchForm />
      <BoardStatus />
      <BoardControl />
    </PageHeaderStyled>
  );
}