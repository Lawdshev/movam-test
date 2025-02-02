import { BsThreeDots } from "react-icons/bs";
import NavButton from "../../components/layout/navbar-buttons";
import ProgressBar from "./progress-bar";

interface BudgetCardProps {
  budget: {
    amount: string;
    title: string;
    progress: number;
    remaining: number;
    totalAmount: string;
    startDate: string;
    endDate: string;
    tags: string[];
  };
}

function BudgetCard({ budget }: BudgetCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-semibold">{budget.amount}</h2>
          <p className="text-gray-600 text-sm">{budget.title}</p>
        </div>
        <div>
          <NavButton
            text={""}
            icon={<BsThreeDots />}
            className="!px-2 !hover:bg-gray-400"
          />
        </div>
      </div>
      <div className="my-6">
        <ProgressBar budget={budget} />
      </div>
      {/* Details */}
      <div className="mt-4 text-[#8d8d8d] text-sm">
        <p className="flex justify-between items-center ">
          <span>Total Amount:</span>{" "}
          <span className="text-black">{budget.totalAmount}</span>
        </p>
        <p className="flex justify-between my-4 items-center">
          <span>Start Date:</span>{" "}
          <span className="text-black">{budget.startDate}</span>
        </p>
        <p className="flex justify-between items-center">
          <span>End Date:</span>{" "}
          <span className="text-black">{budget.endDate}</span>
        </p>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {budget.tags.map((tag, idx) => (
          <span key={idx} className="px-3 py-1 text-sm bg-[#f7f6f6] rounded ">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default BudgetCard;
