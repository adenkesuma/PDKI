import { TbSearch } from "react-icons/tb"
import { SearchProps } from "@/utils/interface";

const Search = ({ search, onSetSearch } : SearchProps) => {
  return (
    <div className="relative mb-4 sm:mb-0">   
      <input 
        className="text-[#555] bg-[#fff] outline-none shadow-md shadow-gray-300 rounded-2xl py-2 pl-4 pr-8 w-[300px] sm:w-[350px]"
        type="text" 
        placeholder="Ketikan judul yang kamu cari ..."
        value={search}
        onChange={onSetSearch}
      />
      <TbSearch className="absolute top-[10px] right-3 text-xl text-[#888]"/>
    </div> 
  )
}

export default Search
