import * as React from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  title?: string;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);
  const modalElm = React.useRef<HTMLDivElement | null>(null);

  const titleRef = React.useRef<HTMLHeadingElement | null>(null);
  const triggerRef = React.useRef<Element | null>(null);

  React.useEffect(() => {
    const el = document.createElement("div");
    document.body.appendChild(el);
    modalElm.current = el;
    return () => {
      document.body.removeChild(el);
    };
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement;
      titleRef.current?.focus();
    } else {
      triggerRef.current instanceof HTMLElement && triggerRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      <ul>
        <li>
          <button type="button" onClick={() => setOpen(true)}>
            Open modal
          </button>
        </li>
      </ul>

      {isOpen &&
        modalElm.current &&
        createPortal(
          <div
            className="
              absolute top-0 left-0 right-0 bottom-0
              flex justify-center items-center
              p-8
              bg-black/[.06]"
          >
            <div tabIndex={0} onFocus={() => titleRef.current?.focus()} />
            <div
              className="
                p-8
                bg-white
                text-gray-800
                rounded-md"
              role="dialog"
              aria-modal={true}
              aria-labelledby="modalTitle"
            >
              <h2 id="modalTitle" ref={titleRef} tabIndex={-1}>
                {title}
              </h2>
              <p>{children}</p>
              <button type="button" onClick={() => setOpen(false)}>
                Close modal
              </button>
            </div>
            <div tabIndex={0} onFocus={() => titleRef.current?.focus()} />
          </div>,
          modalElm.current
        )}
    </>
  );
};

export default Modal;
