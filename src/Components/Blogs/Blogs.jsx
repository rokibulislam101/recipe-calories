import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleAddToCookcarts }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {blogs.map(blog => (
          <Blog
            key={blog.id}
            blog={blog}
            handleAddToCookcarts={handleAddToCookcarts}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
