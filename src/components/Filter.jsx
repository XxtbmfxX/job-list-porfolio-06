import React, { useState } from "react";

const Filter = ({ handleFilter, handleClean }) => {
  const DropdownMenu = ({ value }) => {
    return <span onClick={handleFilter}> {value} </span>;
  };
  return (
    <div className="Filter">
      <Navbar className="Filter-drop">
        <NavItem icon="filter">
          <span onClick={handleClean} className="Filter-clear">
            Clear X
          </span>
          <NavItem icon="Role">
            <div className="NavItem-list">
              <DropdownMenu value="Frontend" />
              <DropdownMenu value="Backend" />
              <DropdownMenu value="Fullstack" />
            </div>
          </NavItem>

          <NavItem icon="Level">
            <div className="NavItem-list">
              <DropdownMenu value="Junior" />
              <DropdownMenu value="Midweight" />
              <DropdownMenu value="Senior" />
            </div>
          </NavItem>

          <NavItem icon="Languages">
            <div className="NavItem-list">
              <DropdownMenu value="Python" />
              <DropdownMenu value="Ruby" />
              <DropdownMenu value="JavaScript" />
              <DropdownMenu value="HTML" />
              <DropdownMenu value="CSS" />
            </div>
          </NavItem>
          <NavItem icon="Tools">
            <div className="NavItem-list">
              <DropdownMenu value="React" />
              <DropdownMenu value="Sass" />
              <DropdownMenu value="Vue" />
              <DropdownMenu value="Django" />
              <DropdownMenu value="RoR (Ruby on Rails) " />
            </div>
          </NavItem>
        </NavItem>
      </Navbar>
    </div>
  );
};

function Navbar({ children }) {
  return (
    <nav className="Navbar">
      <ul className="Navbar-nav">{children}</ul>
    </nav>
  );
}

function NavItem({ icon, children }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="NavItem">
      <span
        className="NavItem-button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {icon}
      </span>
      {open && children}
    </li>
  );
}

export default Filter;
