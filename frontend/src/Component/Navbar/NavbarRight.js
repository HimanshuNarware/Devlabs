import React from "react";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import "../../style/Navbar.css";
function NavbarRight({ setSearchQuery }) {
  const [searchQuery, setLocalSearchQuery] = useState(""); // Local state to manage search query

  //debounce search query
  useEffect(() => {
    let timer = setTimeout(() => {
      setSearchQuery(searchQuery);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, setSearchQuery]);

  const handleInputChange = (e) => {
    setLocalSearchQuery(e.target.value); // Update the search query when input changes
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchQuery); // Pass the search query to the parent component (App)
  };

  const clearSearchHandler = (e) => {
    e.preventDefault();
    setSearchQuery(""); // Pass the empty search query to the parent component (App)
  };

  return (
    <div className="navbar-right" id="navbarTogglerDemo03">
      {/* Any other content you want to keep in the navbar */}
    </div>
  );
}

export default NavbarRight;
