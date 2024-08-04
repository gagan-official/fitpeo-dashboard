import { PieChart } from "@mui/x-charts/PieChart";

const DonutChart = () => {
  const value = 70,
    series = [{ value: value }, { value: 100 - value }],
    seriesProps = {
      innerRadius: 38,
      outerRadius: 50,
      cornerRadius: 20,
      cx: 45,
      cy: 45,
    },
    smallLabelStyle = "text-[.6rem] text-center";

  return (
    <div className="flex flex-col items-center relative">
      <PieChart
        series={[
          {
            data: [{ value: 100, color: "#28336b" }],
            ...seriesProps,
          },
          {
            data: series,
            ...seriesProps,
          },
        ]}
        colors={["#7394fd", "#0000"]}
        height={100}
        width={100}
        sx={{
            strokeWidth: 0
        }}
      />
      <div className="centerLabel absolute top-6 lg:top-7 w-1/3 text-center flex flex-col">
        <h3 className="font-semibold text-xl">{value}%</h3>
        <span className={smallLabelStyle}>Goal Completed</span>
      </div>
      <span className={smallLabelStyle}>
        *The values here has been rounded off.
      </span>
    </div>
  );
};

export default DonutChart;
