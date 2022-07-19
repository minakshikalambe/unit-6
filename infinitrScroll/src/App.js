
import React, { useState, useRef, useCallback } from 'react'
import GetBooks from './getBooks'

export default function App() {
  const [q, setQ] = useState('')
  const [pageNo, setPageNo] = useState(1)
  const { datas, increase, loading} = GetBooks(q, pageNo)

  const customer = useRef()
  const last = useCallback(node => {
    if (loading) return
    if (customer.current) customer.current.disconnect()
    customer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && increase) {
        setPageNo(prev => prev + 1)
      }
    })
    if (node) customer.current.observe(node)
  }, [loading, increase])

  function mannageSearching(e) {
    setQ(e.target.value)
    setPageNo(1)
  }

  return (
    <>
      <input type="text" value={q} onChange={mannageSearching}></input>
      {datas.map((data, i) => {
        if (datas.length === i + 1) {
          return <div customer={last} key={i}>{data}</div>
        } else {
          return <div key={i}>{data}</div>
        }
      })}
      <div>{loading && 'Loading...'}</div>
    </>
  )
}

