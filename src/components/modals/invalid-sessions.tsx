import { useEffect } from "react";
import { createPortal } from "react-dom";
import { MdErrorOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const InvalidSessionModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
        navigate("/");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, navigate, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        {/* Error Icon */}
        <div className="bg-red-100 p-4 rounded-full inline-block">
          <MdErrorOutline className="text-red-500 text-5xl" />
        </div>

        {/* Message */}
        <h1 className="text-2xl font-semibold text-gray-800 mt-4">
          Invalid Session
        </h1>
        <p className="text-gray-600 mt-2">
          Your session has expired. Redirecting to login...
        </p>

        {/* Spinner */}
        <div className="mt-4 flex justify-center">
          <div className="w-6 h-6 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Close Button (optional) */}
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          onClick={() => {
            onClose();
            navigate("/login");
          }}
        >
          Go to Login
        </button>
      </div>
    </div>,
    document.body
  );
};

export default InvalidSessionModal;