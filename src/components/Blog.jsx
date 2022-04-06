import React from 'react'

const Blog = (props) => {
  return (
	  <>
	  <div>
      <p>{props.titleProp} by {props.authorProp}</p>
      <div>
        {props.textProp}
        <p>{props.createdProp}</p>
      </div>
    </div>
	  </>
  )
}

export default Blog