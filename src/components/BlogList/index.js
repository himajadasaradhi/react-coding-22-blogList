// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div>
      <ul className="unordered-list">
        {blogsList.map(eachList => (
          <BlogItem blogsList={eachList} key={eachList.id} />
        ))}
      </ul>
    </div>
  )
}
export default BlogList
