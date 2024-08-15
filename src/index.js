module.exports = function toReadable(number) {
    let bool = false
    let numberMassive = [];
    let digit = 0;
    let numberStringMassive = [];
    let mult = 1
    let string = '';
    while (number !== 0) {
        let remainder = number % 10;
        number = Math.floor(number / 10)
        numberMassive.unshift(remainder * mult);
        mult *= 10;
    }
    for (let i = numberMassive.length - 1; i >= 0; i--) {
        digit++

        if (bool) {
            bool = false;
            continue;
        }

        if (numberMassive[numberMassive.length - 2] === 10 && digit === 1) {
            switch (numberMassive[numberMassive.length - digit]) {
                case 0:
                    numberStringMassive.push("ten");
                    break;
                case 1:
                    numberStringMassive.push("eleven");
                    break;
                case 2:
                    numberStringMassive.push("twelve");
                    break;
                case 3:
                    numberStringMassive.push("thirteen");
                    break;
                case 4:
                    numberStringMassive.push("fourteen");
                    break;
                case 5:
                    numberStringMassive.push("fifteen");
                    break;
                case 6:
                    numberStringMassive.push("sixteen");
                    break;
                case 7:
                    numberStringMassive.push("seventeen");
                    break;
                case 8:
                    numberStringMassive.push("eighteen");
                    break;
                case 9:
                    numberStringMassive.push("nineteen");
                    break;
            }
            bool = true;
        } else if (digit === 1) {
            switch (numberMassive[numberMassive.length - digit]) {
                case 0:
                    numberStringMassive.push("zero");
                    break;
                case 1:
                    numberStringMassive.push("one");
                    break;
                case 2:
                    numberStringMassive.push("two");
                    break;
                case 3:
                    numberStringMassive.push("three");
                    break;
                case 4:
                    numberStringMassive.push("four");
                    break;
                case 5:
                    numberStringMassive.push("five");
                    break;
                case 6:
                    numberStringMassive.push("six");
                    break;
                case 7:
                    numberStringMassive.push("seven");
                    break;
                case 8:
                    numberStringMassive.push("eight");
                    break;
                case 9:
                    numberStringMassive.push("nine");
                    break;
            }
        } else if (digit === 2 && numberMassive[numberMassive.length - digit] === 0) {
            continue;
        } else if (digit === 2) {
            switch (numberMassive[numberMassive.length - digit]) {
                case 20:
                    numberStringMassive.push("twenty");
                    break;
                case 30:
                    numberStringMassive.push("thirty");
                    break;
                case 40:
                    numberStringMassive.push("forty");
                    break;
                case 50:
                    numberStringMassive.push("fifty");
                    break;
                case 60:
                    numberStringMassive.push("sixty");
                    break;
                case 70:
                    numberStringMassive.push("seventy");
                    break;
                case 80:
                    numberStringMassive.push("eighty");
                    break;
                case 90:
                    numberStringMassive.push("ninety");
                    break;
            }
        } else if (digit === 3) {
            switch (numberMassive[numberMassive.length - digit]) {
                case 100:
                    numberStringMassive.push("one hundred");
                    break;
                case 200:
                    numberStringMassive.push("two hundred");
                    break;
                case 300:
                    numberStringMassive.push("three hundred");
                    break;
                case 400:
                    numberStringMassive.push("four hundred");
                    break;
                case 500:
                    numberStringMassive.push("five hundred");
                    break;
                case 600:
                    numberStringMassive.push("six hundred");
                    break;
                case 700:
                    numberStringMassive.push("seven hundred");
                    break;
                case 800:
                    numberStringMassive.push("eight hundred");
                    break;
                case 900:
                    numberStringMassive.push("nine hundred");
                    break;
            }
        }


    }

    let newNumberStringMassive = [];

    if (numberStringMassive.length >= 1) {
        for (let i = 0; i < numberStringMassive.length; i++) {
            if (numberStringMassive[i] !== 'zero') {
                newNumberStringMassive.push(numberStringMassive[i]);
            }
        }
    }

    for (let i = newNumberStringMassive.length - 1; i >= 0; i--) {
        string += newNumberStringMassive[i] + " ";

    }
    if (string.trim() === "") {
        string = 'zero';
    }
    return string.trim()
}
