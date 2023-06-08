import React from "react";

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => { },
    daySelected: null,
    setDaySelected: (day) => { },
    showEventModal: false,
    setShowEventModal: () => { },
    dispatchCalEvent: ({ type, playload }) => { },
    savedEvents: [],
});

export default GlobalContext;

