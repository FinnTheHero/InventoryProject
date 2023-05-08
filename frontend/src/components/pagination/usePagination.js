import { useEffect, useState } from 'react';

export function usePagination(apiCall, refresh, setRefresh) {
    const [currentPage, setCurrentPage] = useState(0)
    const [totalPages, setTotalPages] = useState(1)
    const [itemArray, setItemArray] = useState([])
    const [loading, setLoading] = useState(false)    

    useEffect(() => {
        setLoading(true)
        apiCall(currentPage)
            .then((response) => {
                setItemArray(response.data.content)
                setTotalPages(response.data.totalPages)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
                setRefresh(false)
            })     
    }, [currentPage,refresh])

  return {itemArray, currentPage, totalPages, loading, setCurrentPage}
}