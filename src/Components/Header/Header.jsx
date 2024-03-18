import { FaRegUserCircle } from 'react-icons/fa';
const Header = () => {
  return (
    <header className="container mx-auto mt-10">
      <div className="navbar bg-base-100 px-10  ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu text-xl menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghos hidden lg:block text-3xl">
            Recipe Calories
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a> About</a>
            </li>
            <li>
              <a> Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end "></div>
        <div className="form-control relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 top-4 tex-2xl left-4 absolute "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered rounded-full bg-slate-200 border-none outline-none mr-4 pl-10 w-24 md:w-auto"
          />
        </div>
        <div className="bg-green-600  rounded-full">
          <span className="text-4xl m-2">
            <FaRegUserCircle></FaRegUserCircle>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
