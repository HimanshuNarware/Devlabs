import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import "../../style/Navbar.css";

function NavbarRight(props) {
  const [searchQuery, setSearchQuery] = useState(""); // Local state to manage search query
  const [searchResult,setSearchResult]=useState([])
  //debounce search query
  useEffect(() => {
    let timer = setTimeout(() => {
      props.setSearchQuery(searchQuery);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  useEffect(()=>{
    console.log(searchResult)
    if(searchResult?.[0]?.data===null){
      setSearchResult([])
    }
    else if(searchQuery.length>0){
      let filter=props.project_details.filter(ele=>ele.projectName.toLowerCase().includes(searchQuery.toLowerCase()))
      setSearchResult(filter)
     }
     else{
       setSearchResult([])
     }
  },[searchQuery])
  console.log(searchResult.length)
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query when input changes
  };

  const handleSearch = (e) => {
    e.preventDefault();
    props.setSearchQuery(searchQuery); // Pass the search query to the parent component (App)
  };

  const clearSearchHandler = (e) => {
    e.preventDefault();
    setSearchQuery("");
    props.setSearchQuery(""); // Pass the empty search query to the parent component (App)
  };

  return (
    <div className="navbar-right" id="navbarTogglerDemo03">
      <div className="search">
        <form role="search" className="search-bar" onSubmit={handleSearch}>
          <div className="box" focus>
            <input
              type="text"
              className="input"
              placeholder="Search . . ."
              value={searchQuery} // Set input value to the search query
              onChange={handleInputChange}
            />
            {searchResult.length>0?
            <div  className="searhcResults">
              {
                searchResult.map((item,index)=>(
                  <p onClick={()=>{setSearchQuery(item.projectName);setSearchResult([{data:null}])}} key={index}>{item.projectName}</p>
                ))
              }
            </div>
             :<></>}
            <button
              className={`span ${!searchQuery && "invisible"}`}
              type="button"
              onClick={clearSearchHandler}
            >.

              <RxCross2 />
            </button>
            <button className="span" type="submit">
              <BsSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NavbarRight;
