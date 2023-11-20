import Card from "../_components/Card";
import Chart from "../_components/Chart";
import RightBar from "../_components/RightBar";
import Transactions from "../_components/Transactions";

const DashboardPage = () => {
  return (
    <div className="flex gap-5 mt-5 ml-5">
      <div className="flex flex-col gap-5 w-3/4">
        <div className="flex gap-5 justify-between ">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="w-1/4">
        <RightBar />
      </div>
    </div>
  );
};

export default DashboardPage;
