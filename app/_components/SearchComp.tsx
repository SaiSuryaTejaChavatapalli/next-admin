"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

type SearchCompProps = {
  placeholder: string;
};

const SearchComp = ({ placeholder }: SearchCompProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      params.set("page", "1");
      if (e.target.value) {
        e.target.value.length > 2 && params.set("q", e.target.value);
      } else {
        params.delete("q");
      }
      router.replace(`${pathName}?${params}`);
    },
    300
  );

  return (
    <div className="flex items-center gap-2 p-2 rounded-lg w-max">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-none outline-none"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchComp;
