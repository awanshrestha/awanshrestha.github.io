let eventTime = new Date('Fri Feb 26 2021 08:00:00 GMT-0800').getTime();

        let x = setInterval(function() {
        let now = new Date().getTime();
        let difference = eventTime - now;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // document.getElementById("timer").innerHTML = days + " Days " + hours + " Hours "
        // + minutes + " Minutes " + seconds + " Seconds ";

        document.getElementById("daystogo").innerHTML = days;
        document.getElementById("hourstogo").innerHTML = hours;
        document.getElementById("minutestogo").innerHTML = minutes;
        document.getElementById("secondstogo").innerHTML = seconds;

        if (difference < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "Finally! The Summit is here";
        }
        }, 1000);
