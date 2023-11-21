"use client";
const Pagination = () => {
  const handlePrevious = () => {};
  const handleNext = () => {};
  return (
    <div className="p-3 flex justify-between">
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Pagination;
