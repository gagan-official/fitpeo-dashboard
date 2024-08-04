import { FaStar } from "react-icons/fa";
import { custFeedbackData } from "../assets/data/CustFeedbackData";
import Card from "./Card";
import NameAvatar from "./NameAvatar";

export default function CustomerFeedback() {
  const totalRating = [1, 2, 3, 4, 5];
  return (
    <Card heading="Customer's Feedback" className="max-h-[460px] flex flex-col">
      <ul className="ratingsCont overflow-y-auto">
        {custFeedbackData.map(({ id, name, rating, feedback }) => (
          <li
            key={id}
            className="flex flex-col gap-2 py-4 last-of-type:border-none border-b border-b-[--iconsBg]"
          >
            <NameAvatar
              name={name}
              className="text-lg font-semibold text-slate-200"
            />
            <div className="rating text-xl flex gap-1">
              {totalRating.map((r) => (
                <FaStar
                  className={r <= rating ? "text-[rgb(var(--ratingRGB))]" : ""}
                  key={r}
                />
              ))}
            </div>
            <p className="text-xs">{feedback}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
}
