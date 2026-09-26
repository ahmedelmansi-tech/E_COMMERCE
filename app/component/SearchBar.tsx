import {Search} from "lucide-react" 
const SearchBar = () => {
  return (
    <div className="hidden md:flex items-center gap-3 ring ring-gray-500 rounded-md p-1">
      <Search />
      <input type="text" id="search" placeholder="searching..." className="outline-none"/>
    </div>
  )
}

export default SearchBar
