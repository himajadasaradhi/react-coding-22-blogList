// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogsList} = props
  const {title, description, publishedDate} = blogsList
  return (
    <div>
      <li>
        <div className="flex-row">
          <h1 className="title">{title}</h1>
          <p className="publishedDate">{publishedDate}</p>
        </div>
        <p className="description">{description}</p>
      </li>
    </div>
  )
}

export default BlogItem
