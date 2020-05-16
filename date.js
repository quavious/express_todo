//jshint esversion:6

exports.returnDate = () => {
    let options = {
        weekday: 'long',
        day: "numeric",
        month: "long"
    }
    return new Date().toLocaleString("en-US",options);
}

exports.returnDay= () => {
    let options = {
        weekday: 'long'
    }
    return new Date().toLocaleString("en-US",options);
}

module.exports