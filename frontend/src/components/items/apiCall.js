import axios from 'axios'

export default function fetchItems(currentPage){
    return(axios.get(`/inventories?page=${currentPage}`))
} 