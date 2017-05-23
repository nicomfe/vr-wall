export const formatDate = (date) => {
  if (!date) return ''

  var monthNames = [
    "Jan.", "Feb.", "Mar.",
    "Apr.", "May", "Jun.", "Jul.",
    "Aug.", "Sep.", "Oct.",
    "Nov.", "Dec."
  ];

  var day = date.getDate()
  var monthIndex = date.getMonth()

  return `${day} ${monthNames[monthIndex]}`
}
