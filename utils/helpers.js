module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
            date
        ).getFullYear()}`;
    },
    format_plural: (work,amount) => {
        if (amount !== 1) {
            return `${word}s`;
        }

        return word;
    }
}