interface NavButtonProps {
  icon: React.ReactElement;
  text: string;
  className?: string;
}

const NavButton = ({ icon, text, className }: NavButtonProps) => {
  return (
    <button
      className={`flex items-center gap-[2px] text-xs bg-[#f0eeef] hover:bg-white font-semibold px-3 py-2 rounded-lg ${className}`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default NavButton;
