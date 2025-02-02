function ProgressBar({budget}: {budget: {progress: number, remaining: number}}) {
  return (
    <div>
      <div
        className={`relative w-full h-3 ${
          budget.progress > 50 ? "bg-[#e8f5f1]" : "bg-[#ffefd6]"
        }  rounded-full mt-4`}
      >
        <div
          className={`${
            budget.progress > 50 ? "bg-[#06a070] " : "bg-[#facc03]"
          } h-3 rounded-full`}
          style={{ width: `${budget.progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-sm mt-2">
        <span
          className={`${
            budget.progress > 50 ? "text-[#06a070]" : "text-[#facc03]"
          } h-3 rounded-full`}
        >
          {budget.progress}%
        </span>
        <span className="text-gray-400">{budget.remaining}%</span>
      </div>
    </div>
  );
}
export default ProgressBar
