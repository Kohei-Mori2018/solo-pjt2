import dayjs from "dayjs";

//引数 = は　デフォルト引数
export function getMonth(month = dayjs().month()) {
    const year = dayjs().year();
    //dayjs .dayで曜日取得。 0(日曜日)~6(土曜日)
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
    let currentMonthCount = 0 - firstDayOfTheMonth;
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        });
    })
    return daysMatrix;
}