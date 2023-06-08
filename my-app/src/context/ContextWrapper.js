import React, { useState, useEffect, useReducer } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

//田邊さん改善
const saveEventsReducer = (state, { type, payload }) => {
    switch (type) {
        case "push":
            const ids = state.map(e => e.id);
            if ([...new Set(ids)].indexOf(payload.id) === -1) {
                return [...state, payload]
            } else {
                return [...state]
            }
        default:
            throw new Error();
    }
}

// const initEvents = () => {
//     const getInitialTraining = async () => {
//         return await fetch("http://localhost:8080/training")
//             .then((res) => res.json())
//             .then((data) => { console.log(data); })
//     }
//     const initialTraining = getInitialTraining()
//     console.log(initialTraining);

//     const storageEvents = localStorage.getItem("savedEvents");
//     const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
//     return parsedEvents;
// }

const ContextWrapper = (props) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [daySelected, setDaySelected] = useState(dayjs());
    const [showEventModal, setShowEventModal] = useState(false);
    // const [savedEvents, dispatchCalEvent] = useReducer(
    //     saveEventsReducer,
    //     [],
    //     initEvents
    // );
    // const getInitialTraining = async () => {
    //     return await fetch("http://localhost:8080/training")
    //         .then((res) => res.json())
    //         .then((data) => { console.log(data); })
    // }
    // const initEvents = async () => {
    //     return await initialTraining;
    // }

    const [savedEvents, dispatchCalEvent] = useReducer(
        saveEventsReducer,
        [],
        // getInitialTraining()
        // initEvents
    );

    // ここ書き足しました〜〜〜〜〜〜〜〜〜〜〜〜〜〜
    useEffect(() => {
        const getInitialTraining = async () => {
            const data = await fetch("http://localhost:8080/training")
                .then((res) => res.json());
            localStorage.clear();
            data.map(e => dispatchCalEvent({ type: "push", payload: { ...e, day: Number(e.day) } }));
        }
        getInitialTraining();
    }, [])

    useEffect(() => {
        // 以下構文でlocalStorageに保存
        // localStorage.setItem('key', 'value')
        localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
    }, [savedEvents]);

    return (
        <GlobalContext.Provider
            value={{
                monthIndex, setMonthIndex,
                daySelected, setDaySelected,
                showEventModal, setShowEventModal,
                dispatchCalEvent, savedEvents
            }}>
            {/* props.children調べる */}
            {props.children}
        </GlobalContext.Provider>
    )
}

export default ContextWrapper;


