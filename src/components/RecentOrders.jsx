import { useEffect, useState } from "react";
import Card from "./Card";
import SmallSpan from "./SmallSpan";
import NameAvatar from "./NameAvatar";

const margin = "my-[9px]";

function RecentOrders() {
  const [userData, setUserData] = useState([]),
    tableHeadings = ["Customer", "Order No.", "Amount", "Status"];

  useEffect(() => {
    const randomAmt = (currency) =>
        currency + Math.floor(Math.random() * 1000 * 10) / 10,
      randomOrderNo = () => Math.floor(Math.random() * 90000000) + 10000000;

    const userStatus = [
      "Delivered",
      "Delivered",
      "Cancelled",
      "Pending",
      "Delivered",
      "Delivered",
    ];

    const response = fetch("https://randomuser.me/api/?results=6")
      .then((res) => res.json())
      .then((obj) => {
        setUserData(
          obj.results.map((users, i) => ({
            id: i + 1,
            customer: (
              <NameAvatar
                imgClassName={margin}
                src={users.picture.thumbnail}
                name={`${users.name.first} ${users.name.last}`}
              />
            ),
            orderNo: randomOrderNo(),
            amount: randomAmt("$"),
            status: (
              <ChipLabel greenChip={userStatus[i] === "Delivered"}>
                {userStatus[i]}
              </ChipLabel>
            ),
          }))
        );
        return obj.results;
      });

    response.catch((err) => {
      console.error("Something went wrong :(", err);
      setUserData(
        userStatus.map((statusObj, i) => ({
          id: i + 1,
          customer: <NameAvatar imgClassName={margin} />,
          orderNo: "15478256",
          amount: "$" + 124.0,
          status: (
            <ChipLabel greenChip={statusObj === "Delivered"}>
              {statusObj}
            </ChipLabel>
          ),
        }))
      );
    });
  }, [setUserData]);

  return (
    <Card heading="Recent Orders">
      <table className="border-collapse w-full text-left mt-3">
        {/* Table Heading Row */}
        <thead>
          <tr className={`text-white`}>
            {tableHeadings.map((heading, i) => (
              <th className={i === 0 ? "w-2/5" : "w-1/4"} key={i}>
                <SmallSpan className={`block ${margin}`}>{heading}</SmallSpan>
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Data Rows */}
        <tbody>
          {userData.map((users) => {
            const userKeys = Object.keys(users);
            return (
              <tr key={users.id} className={`border-t border-t-[--iconsBg]`}>
                {userKeys.map(
                  (key, i) =>
                    key !== "id" && (
                      <td className={i === 0 ? "w-2/5" : "w-1/4"} key={i}>
                        <SmallSpan>{users[key]}</SmallSpan>
                      </td>
                    )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

export default RecentOrders;

const ChipLabel = ({ children, greenChip }) => {
  const color = greenChip ? "--percentUpRGB" : "--percentDownRGB";
  return (
    <span
      style={{
        backgroundColor: `rgba(var(${color}),.2)`,
        color: `rgb(var(${color}))`,
      }}
      className="rounded-full px-[.7rem] py-[2px] font-normal mr-8"
    >
      {children}
    </span>
  );
};

// const recentOrdersData = [
//   {
//     id: 1,
//     imgSrc: "",
//     name: "Wade Warren",
//     orderNo: "15478256",
//     amount: 124.0,
//     status: "Delivered",
//   },
// ];
