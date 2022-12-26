export function addStartPaddingToTime(time: number) {
  return time < 10 ? `0${time}` : String(time);
}
