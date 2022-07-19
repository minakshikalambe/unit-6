import { useEffect, useState } from 'react'
import axios from 'axios'

export default function GetBooks(query, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [datas, setDatas] = useState([])
  const [increase, setIncrease] = useState(false)

  useEffect(() => {
    setDatas([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    let cancel
    axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: { q: query, page: pageNumber },
    }).then(res => {
      setDatas(prev => {
        return [...new Set([...prev, ...res.data.docs.map(t => t.title)])]
      })
      setIncrease(res.data.docs.length > 0)
      setLoading(false)
    }).catch(e => {
     console.log(e);
     setLoading(false)
    })
    return () => cancel()
  }, [query, pageNumber])

  return { loading, datas, increase }
}