/* eslint-disable react/prop-types */
const CategoryCard = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div>
      <div className="card bg-[#FAF8FF] text-primary-content">
        <div className="ml-8 mt-8 bg-[#EFECFF] p-3 w-12">
            <img src={logo} alt="" />
        </div>
        <div className="card-body text-left">
          <h2 className="card-title text-black">{category_name}</h2>
          <p className="text-gray-400">{availability}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
