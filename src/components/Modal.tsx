import { useEffect } from "react";
import { Portal } from "./Portal";
import { X } from "lucide-react";

export const Modal = ({
  children,
  isOpen,
  handleClose,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}) => {
  const onClose = () => {
    handleClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }

    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? onClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Portal wrapperId="react-portal-modal-container">
      <div
        className={`h-[100vh] flex justify-center items-center backdrop-blur-sm overflow-hidden transition-opacity opacity-100`}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="w-[32px] h-[32px] absolute top-4 right-4 rounded-full bg-atlysBlack-2 flex justify-center items-center"
          >
            <X size={20} className="text-white" />
          </button>
          <div>{children}</div>
        </div>
      </div>
    </Portal>
  );
};
