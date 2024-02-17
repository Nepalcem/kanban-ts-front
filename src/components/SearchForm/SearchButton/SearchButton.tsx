import { FaSearch } from "react-icons/fa";
import { LuLoader2 } from "react-icons/lu";

interface SearchButtonProps {
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
  isLoading: boolean;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick, isLoading }) => {
  return (
    <button type="submit" onClick={onClick} disabled={isLoading}>
      {isLoading ? (
        <LuLoader2 className="loading-icon"></LuLoader2>
      ) : (
        <FaSearch></FaSearch>
      )}
      Load Board
    </button>
  );
};

export default SearchButton;
