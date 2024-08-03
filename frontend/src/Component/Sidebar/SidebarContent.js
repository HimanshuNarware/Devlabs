import React from "react";
function SidebarContent({name,description,active}) {

  function handleSidebarClick(prop) {
    localStorage.setItem("filter", prop);

    if (prop === "tools") {
      localStorage.setItem("filter-2", "web");
    }
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <div
      className={`sidebar-content filter ${active?"active":""}`}
      onClick={() => handleSidebarClick(name)}
    >
      {description}
    </div>
  );
}

export default SidebarContent;
