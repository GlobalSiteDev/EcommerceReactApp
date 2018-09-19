export const formatDate = (date) => {
    const dateObject = new Date(date);
    let passedTime = (Date.now() - dateObject.getTime()) / 1000;
    const period = {
        day: 86400,
        week: 604800
    };

    //if time passed after adding a product is <= than a week (7days)
    if (passedTime <= period.week) {
    //getting how much days passed
        passedTime = Math.floor(passedTime / period.day);
    //depending on if it's a 1 day or a couple of days setting right spelling
        const spelling = (passedTime < 2) ? 'day' : 'days';
        return `${passedTime} ${spelling} ago`;
    }
  
    // return full date if passed time is > week (7 days)
    return date;
}