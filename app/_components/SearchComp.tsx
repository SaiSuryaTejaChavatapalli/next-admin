import { MdSearch } from "react-icons/md";

type SearchCompProps = {
  placeholder: string;
};

const SearchComp = ({ placeholder }: SearchCompProps) => {
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg w-max">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-none outline-none"
      />
    </div>
  );
};

export default SearchComp;
