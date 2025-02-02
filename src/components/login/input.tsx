import { FaCircleCheck, FaRegEnvelope } from "react-icons/fa6";

function Input({email,  isValid, handleChange}: {email: string,  isValid: boolean, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) {

  return (
    <div className="flex h-12 items-center border border-[#999999] rounded-xl px-3 bg-white py-8">
      <div className="px-4 border-r border-r-[#999999]">
        <FaRegEnvelope size={20} />
      </div>
      <div className="px-4 w-[80%]">
        <p className="text-xs font-bold text-gray-500">Email Address</p>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          className="bg-transparent outline-none"
        />
      </div>
      <div>
        {/* Conditionally render the check mark based on the email validity */}
        {isValid && <FaCircleCheck size={20} className="text-green-600" />}
      </div>
    </div>
  );
}

export default Input;
