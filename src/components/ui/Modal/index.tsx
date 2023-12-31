import * as React from "react";
import { createPortal } from "react-dom";
import { tv } from "tailwind-variants";

interface ModalProps {
  title?: string;
  children?: React.ReactNode;
}

const modal = tv({
  slots: {
    container: `
      absolute top-0 left-0 right-0 bottom-0
      flex justify-center items-center
      p-8
      bg-black/[.06]
    `,
    base: `
      p-8
      bg-white dark:bg-gray-800 light:text-gray-800
      rounded-md
    `,
    modalTitle: `
      mb-4
      text-xl font-bold
    `,
    modalText: `mb-8 text-left`,
  },
});

const { base, container, modalTitle, modalText } = modal();

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
          <div className={container()}>
            <div tabIndex={0} onFocus={() => titleRef.current?.focus()} />
            <div
              className={base()}
              role="dialog"
              aria-modal={true}
              aria-labelledby="modalTitle"
            >
              <h2
                id="modalTitle"
                className={modalTitle()}
                ref={titleRef}
                tabIndex={-1}
              >
                {title}
              </h2>
              <p className={modalText()}>{children}</p>
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
