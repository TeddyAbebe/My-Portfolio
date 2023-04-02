import React, { useState } from "react";
import { Heading } from "../common/Heading";
import { portfolio } from "../data/data";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { GitHub } from "@mui/icons-material";

// const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))]
export const Portfolio = () => {
  const [list, setLists] = useState(portfolio);
  // const [category, setCategory] = useState(allCategory)
  // console.log(setCategory)

  // const filterItems = (category) => {
  //   const newItems = portfolio.filter((item) => item.category === category)
  //   setLists(newItems)
  //   if (category === "all") {
  //     setLists(portfolio)
  //     return
  //   }
  // }

  return (
    <>
      <article>
        <div className="container">
          <Heading title="Portfolio" />
          {/* <div className='catButton'>
            {category.map((category) => (
              <button className='primaryBtn' onClick={() => filterItems(category)} data-aos='zoom-out-down'>
                {category}
              </button>
            ))}
          </div> */}
          <div className="content grid3">
            {list.map((item) => (
              <div className="box" data-aos="fade-up">
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>
                <div className="overlay">
                  <h2>{item.name}</h2>
                  <div className="overlay_icons">
                    <a
                      href={item.git}
                      title="View Code On Github"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHub sx={{ fontSize: 45 }} />
                    </a>
                    <a
                      href={item.link}
                      title="Visit Site"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <VisibilityOutlinedIcon sx={{ fontSize: 45 }} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};
