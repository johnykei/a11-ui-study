import * as React from "react";

interface ModalWithDialogElProps {
  title?: string;
  children?: React.ReactNode;
}

const ModalWithDialogEl: React.FC<ModalWithDialogElProps> = ({
  title,
  children,
}) => {
  const [isOpen, setOpen] = React.useState(false);

  const dialogRef = React.useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <ul>
        <li>
          <button
            type="button"
            onClick={() => {
              if (dialogRef.current) {
                dialogRef.current.showModal();
              }
              setOpen(true);
            }}
          >
            Open modal
          </button>
        </li>
      </ul>

      <dialog
        className="
          p-8
          bg-white dark:bg-gray-800
          light:text-gray-800
          rounded-md 
        backdrop:bg-black/[.4] backdrop:dark:bg-white/[.4] backdrop:content-[''] backdrop:inset-0"
        ref={dialogRef}
        open={isOpen}
        aria-labelledby="modalTitle"
      >
        <h2
          id="modalTitle"
          className="
            mb-4
            text-xl font-bold"
        >
          {title}
        </h2>
        <p className="mb-8 text-left">{children}</p>
        <button
          type="button"
          onClick={() => {
            if (dialogRef.current) {
              dialogRef.current.close();
            }
            setOpen(false);
          }}
        >
          Close modal
        </button>
      </dialog>
    </>
  );
};

export default ModalWithDialogEl;
