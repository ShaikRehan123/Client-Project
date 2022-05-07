/* eslint-disable @next/next/no-img-element */
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { categoriesOfArchitects, architects } from "../lib/constants";
import Select from "react-select";
import { useRouter } from "next/router";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredArchitects, setFilteredArchitects] = useState(architects);
  const router = useRouter();

  useEffect(() => {
    if (selectedCategory) {
      let newfilteredArchitects =
        selectedCategory === "all"
          ? architects
          : architects.filter(function (itm) {
              return selectedCategory.indexOf(itm.category) > -1;
            });
      setFilteredArchitects(newfilteredArchitects);
    } else {
      setFilteredArchitects(architects);
    }
  }, [selectedCategory]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e);
  };

  return (
    <div>
      <Navbar darkMode={true} />
      <div className="relative">
        <div className="absolute justify-end top-[84px] w-screen pr-9 flex-wrap pl-9 md:flex">
          <Select
            options={categoriesOfArchitects}
            className="w-full"
            classNamePrefix="select"
            onChange={(e) => {
              handleCategoryChange(e.value);
            }}
            value={selectedCategory}
            placeholder={
              selectedCategory
                ? selectedCategory.charAt(0).toUpperCase() +
                  selectedCategory.slice(1)
                : "All"
            }
          />
        </div>
        <div className="absolute top-[120px]">
          <div className="images-row-container mt-14">
            {filteredArchitects.map((architect) => {
              console.log(architect);
              return (
                <div
                  onClick={() => {
                    router.push(`/project/${architect.slug}`);
                  }}
                  key={architect.id}
                  className="images-column-container [flex:100%] md:[flex:50%] lg:[flex:33.33%] xl:[flex:25%]"
                >
                  <img
                    src={architect?.images[0]}
                    alt={architect?.imageAlt}
                    className="images-img"
                  />
                  <div className="fadedbox mt-1.5">
                    <div className="title text">
                      <span>
                        {architect?.fullName} || {architect?.category}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
