import { TbSearch } from "react-icons/tb"
import { SearchProps } from "@/utils/interface";

const Search = ({ search, onSetSearch } : SearchProps) => {
  return (
    <div className="relative">   
      <input 
        className="bg-gray-100 outline-none border-[1.6px] border-[#666] rounded-2xl py-2 pl-4 pr-8 w-[80%] sm:w-[350px]"
        type="text" 
        placeholder="Ketikan judul berita ..."
        value={search}
        onChange={onSetSearch}
      />
      <TbSearch className="absolute top-[10px] right-3 text-xl text-[#666]"/>
    </div> 
  )
}

export default Search
