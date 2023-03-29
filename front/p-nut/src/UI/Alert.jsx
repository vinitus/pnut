import React from "react";

const Alert = (props) => {
  const { open, close } = props;

  const modalShow = `
  @keyframes modalShow {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

  const modalBgShow = `
  @keyframes modalBgShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

  return (
    <div
      className={`${
        open ? "flex items-center animate-modalBgShow" : "hidden"
      } fixed top-0 right-0 bottom-0 left-0 z-50 bg-black bg-opacity-60 transition-all duration-300`}
      style={{
        animation: open ? modalBgShow : "",
      }}
    >
      {open ? (
        <section
          className="w-11/12 mx-auto bg-white rounded-sm max-w-450"
          style={{
            animation: open ? `modalShow 0.3s` : "",
          }}
        >
          <style>{modalShow}</style>
          <main className="p-4 border-t border-b border-gray-300">
            {props.children}
          </main>
          <footer className="p-4 text-right">
            <button
              className="px-4 py-2 text-white bg-gray-600 rounded focus:outline-none"
              onClick={close}
            >
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Alert;
