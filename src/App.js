import { useState, useEffect } from 'react'
import Blog from './components/Blog';

function App() {
  const [blogs, setBlogs] = useState([]);
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
    </>
  );
}

export default App;