module.exports = {
    format_date: date => {
<<<<<<< HEAD
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
      },

=======
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
>>>>>>> c4897ca319d62277b87b18507153b9428828e0b4
}