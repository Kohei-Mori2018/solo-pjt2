import React, { useState, useContext } from "react";
//react-icons の使い方
import { MdClose } from "react-icons/md";
import GlobalContext from "../context/GlobalContext";

export const EventModal = () => {
  const { daySelected, setShowEventModal, dispatchCalEvent } =
    useContext(GlobalContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    //クリックに送信するデフォルト動作をキャンセルする。
    e.preventDefault();
    const calendarEvent = {
      title: title,
      day: daySelected.valueOf(),
      id2: Date.now(),
    };
    console.log(calendarEvent);
    console.log(JSON.stringify(calendarEvent));
    fetch("http://localhost:8080/training2", {
      method: "POST",
      body: JSON.stringify(calendarEvent),
      headers: {
        "Content-type": "application/json",
      },
    });
    dispatchCalEvent({ type: "push", payload: calendarEvent });
    setShowEventModal(false);
  };

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl flex justify-end">
        <header className="bg-gray-100 px-4 py-2 flex justify-end">
          <div className="text-gray-400">
            <button
              onClick={() => {
                setShowEventModal(false);
              }}
            >
              <MdClose />
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="add training menu!"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl
                        font-semibold pb-2 w-full border-b-2 border-gray-200
                        focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            <p>{daySelected.format("dddd , MMMM DD")}</p>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-400 px-6 py-2 rounded text-white"
          >
            Save commit!
          </button>
        </footer>
      </form>
    </div>
  );
};

//test~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// import React, { useState, useContext } from "react";
// import { MdClose } from "react-icons/md";
// import GlobalContext from "../context/GlobalContext";

// export const EventModal = () => {
//   const { daySelected, setShowEventModal, dispatchCalEvent } =
//     useContext(GlobalContext);
//   const [title, setTitle] = useState("");

//   const handleSubmit = (e) => {
//     // クリック時に送信するというdefaultの動作をキャンセルする
//     e.preventDefault();
//     const calendarEvent = {
//       title: title,
//       day: daySelected.valueOf(),
//       id: Date.now(),
//     };
//     dispatchCalEvent({ type: "push", payload: calendarEvent });
//     setShowEventModal(false);
//   };

//   return (
//     <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
//       <form className="bg-white rounded-lg shadow-2xl w-1/4">
//         <header className="bg-gray-100 px-4 py-2 flex justify-end">
//           <div className="text-gray-400">
//             <button onClick={() => setShowEventModal(false)}>
//               <MdClose />
//             </button>
//           </div>
//         </header>
//         <div className="p-3">
//           <div className="grid grid-cols-1/5 items-end gap-y-7">
//             <div> </div>
//             <input
//               type="text"
//               name="title"
//               placeholder="Add title"
//               value={title}
//               required
//               className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
//               onChange={(e) => setTitle(e.target.value)}
//             />
//             <p>{daySelected.format("dddd, MMMM DD")}</p>
//           </div>
//         </div>
//         <footer className="flex justify-end border-t p-3 mt-5">
//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
//           >
//             Save
//           </button>
//         </footer>
//       </form>
//     </div>
//   );
// };
