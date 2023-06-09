import { useEffect, useState } from 'react';
import axios from 'axios';

export function UsePagination(refresh,setRefresh) {
    const [currentPage, setCurrentPage] = useState(0)
    const [totalPages, setTotalPages] = useState(1)
    const [itemArray, setItemArray] = useState([])
    const [sort, setSort] = useState("")
    const [sortBy, setSortBy] = useState("")
    const [location, setLocation] = useState("")

    // Render Current Search's Data Or Use Defaults In Backend
    useEffect(() => {
        const findAll = async () => {
            try{
                const url = `/inventories?page=${currentPage}&sort=${sort}&sortby=${sortBy}&location=${location}`

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