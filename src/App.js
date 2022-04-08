import { useState, useEffect } from 'react'
import Blog from './components/Blog';
import { Pagination } from '@mui/material'

function App() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await fetch(`https://6239ddb128bcd99f02763cfe.mockapi.io/blogs`)
        const data = await res.json();
        setBlogs(data)
      } catch (error) {
        console.log(error)
      }
    }
    getBlogs();
  })
  return (
    <>
    {blogs
    .slice((page - 1) * 5, (page - 1) * 5 + 5)
    .map(({author, title, text, id, createdAt}) => {
      return (
      <>
      <Blog
      id={id}
      titleProp={title}
      authorProp={author}
      textProp={text}
      createdProp={createdAt}
      />
      </>
      )
    })
    }
    <Pagination
      count={(blogs.length / 16).toFixed(0)}
      onChange={(_, value) => {
        setPage(value)
      window.scroll(0, 450);
      }}
      style={{ padding: 20, width: '100%', display: 'flex', justifyContent: 'center' }}
    />
    </>
  );
}

export default App;