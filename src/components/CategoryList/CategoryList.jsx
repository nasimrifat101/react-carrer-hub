import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const CategoryList = () => {
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data => setCategorys(data)));
  }, []);

  return (
    <div>
      <div className="text-center pt-20">
        <h2 className="text-4xl font-bold mb-4">Job Category List</h2>
        <p className="text-gray-400">
          Explore thousands of job opportunities with all the information you
          need. Its your future.
        </p>
        <div className="grid grid-cols-4 gap-3 py-6">
          {
            categorys.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
