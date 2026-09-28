"use client"
import { useSearchParams ,usePathname , useRouter} from "next/navigation"
const Filter = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

const  handleSorting = (sortingValue : string) => {
  const sortedParam = new URLSearchParams(searchParams)
  sortedParam.set("sort", sortingValue)
  router.push(`${pathname}/?${sortedParam}`)
}
  return (
       <div className="flex items-center justify-end gap-2 text-sm text-gray-500 my-6">
      <span>Sort by:</span>
      <select
        name="sort"
        id="sort"
        className="ring-1 ring-gray-200 shadow-md p-1 rounded-sm"
        onChange={(e) => handleSorting(e.target.value)}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  )
}

export default Filter
