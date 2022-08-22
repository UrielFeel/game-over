import { useState } from "react";

export default function usePagination(data=[], itemsPP = 5){
  const [currentPage, setCurrentPage] = useState(1)
  let maxPage = Math.ceil(data.length / itemsPP) || 1


  const currentData = ()=>{

    const begin = (currentPage - 1) * itemsPP
    const end = begin + itemsPP

    return data.slice(begin, end)
  }

  const next=()=>{
    setCurrentPage(Math.min((currentPage + 1), maxPage))
  }

  const prev = () => {
    setCurrentPage(Math.max((currentPage - 1), 1))
  }

  const jump = (page)=>{
    page = Math.max(1, page)
    setCurrentPage(Math.min(maxPage, page))
  }
 

  return ({currentPage, currentData, maxPage, next, prev, jump})

}