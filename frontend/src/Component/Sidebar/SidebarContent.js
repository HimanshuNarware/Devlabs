import React from "react";

function SidebarContent({name,description}) {

  function handleSidebarClick(prop) {
    localStorage.setItem("filter", prop);

    if (prop === "tools") {
      localStorage.setItem("filter-2", "web");
    }
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <div
      className="sidebar-content filter"
      onClick={() => handleSidebarClick(name)}
    >
      {description}
    </div>
  );
}

export default SidebarContent;
