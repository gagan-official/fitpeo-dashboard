import Card from "./Card";
import SmallSpan from "./SmallSpan";
import UpDown from "./UpDown";

function InfoCard({ infoData }) {
  const [imgSrc, imgColor, title, totalNum, down] = Object.keys(infoData);
  //   const percentColor = infoData[down] ? "--percentDown" : "--percentUp";
  //   console.log({ percentColor });
  //   const downUp = infoData[down] ? "before:-scale-y-100 before:bottom-0" : "";
  return (
    <Card className="w-full" title={infoData[title]}>
      <img
        style={{ backgroundColor: infoData[imgColor] }}
        src={infoData[imgSrc]}
        alt="info icon"
        className={`w-12 h-12 rounded-xl p-2 mb-2`}
      />
      <SmallSpan>{infoData[title]}</SmallSpan>
      <h2 className="text-3xl font-bold mt-2">{infoData[totalNum]}</h2>
      <UpDown className="!absolute right-3 bottom-5" down={infoData[down]} />
    </Card>
  );
}

export default InfoCard;
