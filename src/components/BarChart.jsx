import Chart from "react-apexcharts";
import CustomButton from "./CustomButton";
import { FaCaretDown } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";

const BarChart = () => {
  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    tooltip: {
      theme: "dark",
    },
    plotOptions: {
      bar: {
        borderRadius: 15,
        columnWidth: 30,
        dataLabels: {
          position: "top",
        },
      },
    },
    colors: ["#7394fd"],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27],
    },
    yaxis: {
      max: 15000,
    },
  };

  const series = [
      {
        name: "Activity",
        data: [
          1000, 7000, 5000, 6000, 7000, 9000, 10000, 15000, 10000, 6000, 8000,
        ],
      },
    ],
    selectOptions = ["Weekly", "Monthly", "Yearly"];

  return (
    <>
      <div className="selectCont relative -mt-6 flex justify-end items-center text-[rgba(var(--colorRGB),.85)]">
        <CustomButton
          elementName="select"
          className="flex text-xs appearance-none !px-3 !pr-5 !py-1 border border-[rgba(var(--colorRGB),.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--themeColor] peer"
        >
          {selectOptions.map((option, i) => (
            <option key={i} value={option} selected={i === 0}>
              {option}
            </option>
          ))}
        </CustomButton>
        <BiSolidDownArrow className="absolute right-3 text-[.5rem] pointer-events-none transition-transform peer-focus-visible:-rotate-180" />
      </div>
      <Chart options={options} series={series} type="bar" height={220} />
    </>
  );
};

export default BarChart;
