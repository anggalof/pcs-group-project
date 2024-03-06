import React, {
  useEffect,
  useImperativeHandle,
  useState,
  forwardRef,
  useCallback,
} from "react";

export function Modal({ children, fade = false, defaultOpened = false }, ref) {
  const [isOpen, setIsOpen] = useState(defaultOpened);

  const close = useCallback(() => setIsOpen(false), []);

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close,
    }),
    [close]
  );

  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) close();
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleEscape, false);
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  return (
    <>
      {isOpen ? (
        <div className={`modal  ${fade ? "modal-fade" : ""} max-w-480`}>
          <div className="modal-overlay max-w-480" onClick={close} />
          <div className="modal-body max-w-480">
            <div className="header">
              <span
                role="button"
                className="modal-close"
                aria-label="close"
                onClick={close}
              >
                <i className="fa fa-arrow-left"></i>
              </span>
              <div className="notification-name">
                Notification
              </div>
            </div>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default forwardRef(Modal);
