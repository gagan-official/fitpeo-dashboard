import BarChart from "./BarChart";
import Card from "./Card";
import CustomButton from "./CustomButton";
import CustomerFeedback from "./CustomerFeedback";
import DonutChart from "./DonutChart";
import InfoCard from "./InfoCard";
import RecentOrders from "./RecentOrders";
import SmallSpan from "./SmallSpan";
import UpDown from "./UpDown";
import { FaChevronRight } from "react-icons/fa";

function Dashboard() {
  return (
    <main className="dashboard p-6 overflow-y-auto h-full">
      <h1 className="text-3xl font-semibold">Dashboard</h1>

      {/* Grid Container */}
      <div className="gridCont lg:grid gap-6 mt-7 flex flex-col">
        {/* Total Displayer */}
        <div className="infoCont flex gap-3 maxmd:grid maxmd:grid-cols-2">
          {infoCardData.map((items) => (
            <InfoCard key={items.id} infoData={items} />
          ))}
        </div>

        {/* Net Profit */}
        <Card className="flex justify-between">
          <div className="flex flex-col justify-between">
            <SmallSpan>Net Profit</SmallSpan>
            <h2 className="text-4xl font-bold">$6759.25</h2>
            <UpDown />
          </div>
          <DonutChart />
        </Card>

        {/* Activity Bar Chart */}
        <Card heading="Activity">
          <BarChart />
        </Card>

        {/* Options Section */}
        <Card>
          {optionsData.map(({ id, src, bgColor, text }) => (
            <OptionComp key={id} src={src} bgColor={bgColor} text={text} />
          ))}
        </Card>

        {/* Recent Orders List */}
        <RecentOrders />

        {/* Customer's Feedback List */}
        <CustomerFeedback />
      </div>
    </main>
  );
}

export default Dashboard;

const OptionComp = ({ src, text, bgColor }) => {
  return (
    <div className="flex items-center justify-between p-2 rounded-md hover:bg-[--compsBgHigh] cursor-pointer">
      <div className="flex gap-4 items-center">
        <img
          className={`w-[4.5rem] h-[4.5rem] p-[1.45rem] rounded-full ${bgColor}`}
          src={`assets/icons/${src}.png`}
          alt="options"
        />
        <span className="text-xl">{text}</span>
      </div>
      <CustomButton>
        <FaChevronRight />
      </CustomButton>
    </div>
  );
};

const optionsData = [
  {
    id: 1,
    src: "goals",
    text: "Goals",
    bgColor: "bg-[#5e3238]",
  },
  {
    id: 2,
    src: "popular",
    text: "Popular Dishes",
    bgColor: "bg-[#273367]",
  },
  {
    id: 3,
    src: "menus",
    text: "Menus",
    bgColor: "bg-[#244a5d]",
  },
];

const infoCardData = [
  {
    imgSrc: "assets/icons/orders.png",
    imgColor: "#293368",
    title: "Total Orders",
    totalNum: "75",
    down: false,
    id: 1,
  },
  {
    imgSrc: "assets/icons/delivered.png",
    imgColor: "#145347",
    title: "Total Delivered",
    totalNum: "70",
    down: true,
    id: 2,
  },
  {
    imgSrc: "assets/icons/cancelled.png",
    imgColor: "#613339",
    title: "Total Cancelled",
    totalNum: "05",
    down: false,
    id: 3,
  },
  {
    imgSrc: "assets/icons/revenue.png",
    imgColor: "#5f2c4c",
    title: "Total Revenue",
    totalNum: "$12k",
    down: true,
    id: 4,
  },
];
