import axios from 'axios'

export default function fetchItems(currentPage){
    return(axios.get(`/inventory?page=${currentPage}`))
} 