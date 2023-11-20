import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="bg-slate-500 p-5 rounded-md flex gap-5 cursor-pointer text-white">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-5">
        <span>Total Users</span>
        <span className="text-lg font-semibold">10.273</span>
        <span className="text-sm font-normal">
          <span>12%</span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
