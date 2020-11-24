import React, { useContext, useEffect } from 'react'
import { ForumContext } from '../../contexts/ForumContext'
import forumKit from '../../data/forumKit'

export default function BeforeForm(props) {
  const {categories, setCategories} = useContext(ForumContext)
  const ForumKit = new forumKit()
  function fetchCategories() {
    if(!categories) {
      ForumKit.fetchCategories()
      .then(res => res.json())
      .then(data=> {
        setCategories(data.results)
      })
      .catch(e => console.log(e))
    }
  }

  useEffect(() => {
    fetchCategories()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      {props.children}
    </div>
  )
}
