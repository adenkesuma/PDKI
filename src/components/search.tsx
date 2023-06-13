import { TbSearch } from "react-icons/tb"

interface SearchProps {}

const Search = () => {
  return (
    <div className="relative flex">
      <input
        className="rounded-3xl w-[240px] outline-none border-[1.8px] border-slate-500 py-[6px] px-3 text-slate-900"
        type="text"
        placeholder="search..."
      />
      <TbSearch 
        className="absolute top-2 right-3 text-xl text-slate-500"
      />
    </div>
  )
}

export default Search
