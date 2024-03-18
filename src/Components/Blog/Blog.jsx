import { MdAccessTime } from 'react-icons/md';
import { FaFire } from 'react-icons/fa';
const Blog = ({ blog, handleAddToCookcarts }) => {
  const {
    image,
    recipe_name,
    short_description,
    ingredients_array,
    preparing_time,
    calories,
  } = blog;

  return (
    <div>
      <div className="p-6 shadow-2xl border-2 border-gray-400 rounded-3xl">
        <div className="">
          <img className="rounded-3xl w-full h-52 pb-4" src={image} alt="" />
        </div>
        <h2 className="text-2xl font-bold my-4 ">{recipe_name}</h2>
        <p className="mb-4">{short_description}</p>
        <hr />
        <h3 className="my-4 text-xl">Ingredients:{ingredients_array.length}</h3>
        <ul className="my-4 list-disc px-8">
          <li>{ingredients_array[0]}</li>
          <li>{ingredients_array[1]}</li>
          <li>{ingredients_array[2]}</li>
          <li>{ingredients_array[3]}</li>
          <li>{ingredients_array[4]}</li>
        </ul>
        <hr />
        <div className=" flex justify-between my-4 ">
          <div className="flex gap-2 items-center">
            <MdAccessTime className=""></MdAccessTime>
            {preparing_time} minutes
          </div>
          <div className="flex gap-2 items-center">
            <FaFire></FaFire>
            {calories} calories
          </div>
        </div>
        <div>
          <button
            onClick={() => handleAddToCookcarts(blog)}
            className="btn  bg-green-500 rounded-full"
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
