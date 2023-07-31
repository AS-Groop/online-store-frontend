import { useMemo, useState } from "react"
import PostForm from "./component/PostForm"
import PostList from "./component/PostList"
import './style/style.css'
import PostFilter from "./component/PostFilter"

function App() {

  const removePost = (id)=>{
    setPosts(posts.filter(i=>i.id!==id))
  }

  const [posts, setPosts] = useState([
    {id:1, title: 'Javascript', info: "Jdskjhfk fdjhs adlfsadfu ldsfludsh f"},
    {id:2, title: 'Pyton', info: "Djhjhgj  bn sjhs adlfsadfu ldsfludsh f"},
    {id:3, title: 'Java', info: "Xkhb cdhbjhjdhs adlfsadfu ldsfludsh f"},
    {id:4, title: 'C++', info: "Wkldhnsjjkjkjhs adlfsadfu ldsfludsh f"},
    {id:5, title: 'C#', info: "Pasjkh jsddjhs adlfsadfu ldsfludsh f"}
  ])

  
	const [filter, setFilter] = useState({search:'', sort:''})

  const sortedPosts = useMemo(()=>{
    if(filter.sort) {
      return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
    }
    return [...posts]
  },[filter.sort, posts])

  const sortedAndSearchPosts = useMemo(()=>{
    return sortedPosts.filter(i=>i.title.toLocaleLowerCase().includes(filter.search.toLocaleLowerCase()))
  },[filter.search, sortedPosts])

  return (
    <div className="content">
      <PostForm change={(obj)=>setPosts([...posts, obj])}/>
      <hr className="hr"/>
      <PostFilter 
        filter={filter}
        setFilter={setFilter} 
        options={[
          {id:1, name: "по название", value: "title"},
          {id:2, name: "по инфо", value: "info"},
        ]} 
      />
      <PostList remove={removePost} posts={sortedAndSearchPosts}/>
    </div>
  )
}

export default App
