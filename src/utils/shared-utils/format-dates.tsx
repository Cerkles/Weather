const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const getDaySuffix = (day: number) => {
    switch (day) {
        case 1:
        case 21:
        case 31:
            return 'st';
        case 2:
        case 22:
            return 'nd';
        case 3:
        case 23:
            return 'rd';
        default:
            return 'th';
    }
}

export const formatDate = (inputDate: string) => {
    const date = new Date(inputDate);

    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const suffix = getDaySuffix(day)
    const year = date.getFullYear();

    return `${monthName}, ${day}${suffix} ${year}`;
}

export const formatTime = (inputDate: string) => {
    const date = new Date(inputDate);

    const hour = date.getHours() % 12 || 12;
    const minute = date.getMinutes();
    const period = date.getHours() >= 12 ? 'PM' : 'AM';

    return `${hour}:${minute.toString().padStart(2, '0')} ${period}`
}