import moment from "moment";

export const dateFormat = (dateString) => moment(dateString).format('MMMM Do YYYY, h:mm:ss a')