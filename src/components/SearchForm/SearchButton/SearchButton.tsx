interface SearchButtonProps {
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
  isLoading: boolean;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick, isLoading }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : "Load Board"}
    </button>
  );
};

export default SearchButton;
