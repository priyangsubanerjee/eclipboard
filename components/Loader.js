import React from "react";

function Loader({ loading }) {
  return (
    <>
      {loading && (
        <div className="h-full w-full fixed inset-0 z-20 bg-white/80 flex items-center justify-center">
          <div className="h-20 w-20 rounded-full shadow-xl bg-white flex items-center justify-center">
            <div className="border-2 border-black border-t-transparent h-10 w-10 rounded-full animate-spin duration-700"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Loader;
