import dayjs from "dayjs";

export function getTimeByMs(time) {
    const currTime = dayjs();
    const futTime = dayjs(time);
    if(currTime.isAfter(futTime)) return;
    return {
        minutes : getMinutesByMs(currTime, futTime),
        seconds: getSecondByMs(currTime,futTime)
    };
    
}
function getSecondByMs(currTime ,futTime){
    return futTime.diff(currTime,'second')%60;
}
function getMinutesByMs(currTime,futTime){
    return futTime.diff(currTime,"minute")
}