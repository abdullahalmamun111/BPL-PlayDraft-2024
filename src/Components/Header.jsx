const Header = ({ freeClaim }) => {
  return (
    <div className="fixed container top-[-5px] rounded-lg bg-opacity-50 backdrop-blur-md bg-red-50 z-10 ">
      <div className="navbar  mb-2 flex">
        <div className=" navbar-start">
          <img src="https://i.imgur.com/sWYg3lz.png" alt="image not found" />
        </div>
        <div className="flex-none hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 text-[#131313B3] text-xl items-center">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
            <li>
              <a className="px-5 py-2 border-2 rounded-lg shadow-sm font-bold text-2xl text-[#131313]">
                {freeClaim} Coin
                <img
                  className="h-[50px]"
                  src="https://img.icons8.com/fluency/48/cheap-2--v1.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-center lg:hidden flex">
            <button className="flex gap-2 text-[#131313] text-[18px] items-center font-bold">{freeClaim} Coin<img
            className="h-[35px]"src="https://img.icons8.com/fluency/48/cheap-2--v1.png"alt=""/>
          </button>
              {/* <button><a className="px-3 md:px-5 py-2 border-2 rounded-lg shadow-sm font-bold text-xl text-[#131313]">
                {freeClaim} Coin <img
                className="h-[35px]"
                src="https://img.icons8.com/fluency/48/cheap-2--v1.png"
            alt=""/></a></button> */}
        </div>
        <div className="navbar-end lg:hidden">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-[150px] ml-[-100px] p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
