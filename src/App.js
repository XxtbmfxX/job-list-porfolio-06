import { useState } from "react";
import AddedFilters from "./components/AddedFilters";
import Card from "./components/Card";
import Filter from "./components/Filter";

import Data from "./data.json";

import IMAGES from "./images/index.js";

function App() {
  const [filter, setFilter] = useState([]);

  const handleFilter = (e) => {
    if (!filter.includes(e.target.innerText)) {
      setFilter([...filter, e.target.innerText]);
    }
  };

  const handleClean = () => {
    setFilter([]);
  };

  const manageFilter = (compare) => {
    let allow = null;
    if (filter.length > 0) {
      for (let i = 0; i < filter.length; i++) {
        const element = filter[i];
        let response = compare.map((item) => {
          if (item === element) {
            return true;
          }
        });

        allow = response.includes(true);
      }
    }

    return allow;
  };

  return (
    <div className="App">
      <header className="Header">
        <div className="Header-bg"></div>
      </header>
      <Filter handleFilter={handleFilter} handleClean={handleClean} />
      <AddedFilters>
        {filter !== "" && filter.map((f) => <span key={f}>{f} </span>)}
      </AddedFilters>
      <div className="Main">
        {/* ------------------------------------------------,------------------- */}
        {Data.map((item) => {
          const compare = [
            item.role,
            item.level,
            ...item.languages,
            ...item.tools,
          ];
          const innerData = item;
          if (manageFilter(compare) === null) {
            return (
              <Card
                key={item.company}
                logo={IMAGES[item.id - 1]}
                innerData={innerData}
              />
            );
          } else if (manageFilter(compare)) {
            return (
              <Card
                key={item.company}
                logo={IMAGES[item.id - 1]}
                innerData={innerData}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
