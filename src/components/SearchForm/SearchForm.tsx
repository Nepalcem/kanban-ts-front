import { ChangeEvent, FormEvent, useState } from "react";
import { StyledForm } from "./SearchForm.styled";
import SearchButton from "./SearchButton/SearchButton";
import { useAppDispatch, useAppSelector } from "components/hooks/typedHooks";
import { getBoard } from "appRedux/apiFunctions";
import { getBoardLoadingSelector } from "appRedux/selectors";


export default function SearchForm() {
  const [inputValue, setInputValue] = useState<string>("");

  const isLoading = useAppSelector(getBoardLoadingSelector);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      dispatch(getBoard(inputValue));
      setInputValue("");
    } catch (error: any) {
      console.error("Error fetching issues:", error.message);
    }
  };

  return (
    <div>
      <h1>SearchForm</h1>
      <StyledForm>
        <input
          type="text"
          placeholder="Enter Board Id"
          value={inputValue}
          onChange={handleChange}
        ></input>
        <SearchButton onClick={handleSubmit} isLoading={isLoading} />
      </StyledForm>
    </div>
  );
}
