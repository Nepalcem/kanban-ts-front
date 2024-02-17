import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "components/hooks/typedHooks";
import { getBoard } from "appRedux/apiFunctions";
import { getTasks } from "appRedux/slices/tasksSlice";
import { getBoardLoadingSelector } from "appRedux/selectors";
import SearchButton from "./SearchButton/SearchButton";
import { StyledForm } from "./SearchForm.styled";


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
     await dispatch(getBoard(inputValue)).then((response) => {
       dispatch(getTasks(response.payload.tasks));
     });
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
