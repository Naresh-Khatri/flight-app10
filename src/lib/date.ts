export const MONTHS_SHORT = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  
  export const DAYS = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  export const formateDate = (date: Date) => {
    // get date in dd-mm-yyyy format, add 0 if date is less than 10
    const _date = new Date(date).getDate();
    const month = new Date(date).getMonth() + 1;
    const year = new Date(date).getFullYear();
    return `${_date < 10 ? "0" + _date : _date}-${month < 10 ? "0" + month : month}-${year}`;
  };
  
  export const getDateFromDDMMYYYY = (date: string) => {
    const [year, month, _date] = date.split("-").reverse().map(Number);
    return new Date(year, month - 1, _date);
  };
  
  export const getDateInfo = (date: Date) => {
    const _date = new Date(date).getDate();
    const day = DAYS[new Date(date).getDay()];
    const month = MONTHS_SHORT[new Date(date).getMonth()];
    const year = new Date(date).getFullYear();
    return {
      date: _date,
      month,
      year,
      day,
    };
  };
  
  // export const getJourneyDuration = (durationString: any) => {
  //   const [hours, minutes] = durationString
  //     .slice(2, durationString.length - 1)
  //     .split("H")
  //     .map((n: string) => parseInt(n));
  //   return `${hours}h ${minutes}m`;
  // };
  
  export const getTimeInHHMM = (date: Date | string | undefined) => {
    if (!date) return "00:00";
    if (typeof date === "string") date = new Date(date);
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
    return `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`;
  };
  
  export const getDuration = (durationString: string | Date[]) => {
    if (typeof durationString === "string") {
      const [hours, minutes] = durationString
        .slice(2, durationString.length - 1)
        .split("H")
        .map((n: string) => parseInt(n));
      return `${hours}h ${!minutes || minutes === 0 ? "00" : minutes}m`;
    } else {
      const start = durationString[0];
      const end = durationString[1];
      const diff = new Date(end).getTime() - new Date(start).getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      return `${hours}h ${!minutes || minutes === 0 ? "00" : minutes}m`;
    }
  };
  