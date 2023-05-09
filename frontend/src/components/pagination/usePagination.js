import { useEffect, useState } from 'react';
import axios from 'axios';

export function usePagination(refresh,setRefresh) {
    const [currentPage, setCurrentPage] = useState(0)
    const [totalPages, setTotalPages] = useState(1)
    const [itemArray, setItemArray] = useState([])
    const [sort, setSort] = useState("")
    const [sortBy, setSortBy] = useState("")
    const [location, setLocation] = useState("")

    useEffect(() => {
        const findAll = async () => {
            try{
                const url = `/inventory/search?page=${currentPage}&sort=${sort}&sortby=${sortBy}&location=${location}`

                const {data} = await axios.get(url)
                setItemArray(data.content)
                setTotalPages(data.totalPages)
                setRefresh(false)
            }catch(err){
                console.log("error : ",err)
            }
        }
        findAll()
    }, [currentPage,location,sort,sortBy,refresh])

  return {itemArray, currentPage, totalPages, setCurrentPage, setSort, setSortBy, setLocation}
}