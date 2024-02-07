import { ChangeEvent, FormEvent, useState } from "react";
import { StyledForm } from "./SearchForm.styled";
import SearchButton from "./SearchButton/SearchButton";
import { useAppDispatch } from "components/hooks/typedHooks";
import { getBoard } from "../../redux/apiFunctions";

export default function SearchForm() {
  const [inputValue, setInputValue] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
    };
    
     const handleSubmit = async (e: FormEvent): Promise<void> => {
       e.preventDefault();
       setIsLoading(true);
       try {
         dispatch(getBoard(inputValue));

       } catch (error: any) {
         console.error("Error fetching issues:", error.message);
       } finally {
         setIsLoading(false);
       }
     };

  return (
    <h1>
      SearchForm
      <StyledForm>
        <input
          type="text"
          placeholder="Enter Board Id"
          value={inputValue}
          onChange={handleChange}
        ></input>
        <SearchButton onClick={handleSubmit} isLoading={isLoading} />
      </StyledForm>
    </h1>
  );
}
