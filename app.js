console.log("Goodbye World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for (let i = 1; i <= Math.abs(count); i++) {
        if (i % 2 != 0) {
            console.log(i * Math.sign(count));
        }
    }
}

printOdds(-54);
printOdds(100);

//Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(name, age) {
    let aboveSixteen = `Grab ${name} their keys.`;
    let belowSixteen = `Not there yet ${name}. Another ${16 - age} year(s) for you.`;

if (age < 16) {
    console.log(belowSixteen);
} else {
    console.log(aboveSixteen);
}}

checkAge("BOB JR", 6);
checkAge("BOB SR", 33);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function getQuadrant(x, y) {
    if (x === 0 && y === 0) {
    console.log("The point is at the origin.");
    } else if (x === 0) {
    console.log("The point is on the y-axis.");
    } else if (y === 0) {
    console.log("The point is on the x-axis.");
    } else if (x > 0 && y > 0) {
    console.log("The point is in quadrant 1.");
    } else if (x < 0 && y > 0) {
    console.log("The point is in quadrant 2.");
    } else if (x < 0 && y < 0) {
    console.log("The point is in quadrant 3.");
    } else if (x > 0 && y < 0) {
    console.log("The point is in quadrant 4.");
    }
}

getQuadrant(3, 5); // The point is in quadrant 1.
getQuadrant(-2, 4); // The point is in quadrant 2.
getQuadrant(-3, -2); // The point is in quadrant 3.
getQuadrant(5, -1); // The point is in quadrant 4.
getQuadrant(0, 4); // The point is on the y-axis.
getQuadrant(2, 0); // The point is on the x-axis.
getQuadrant(0, 0); // The point is at the origin.

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function getTriangleType(a, b, c) {
    // Check if the input is valid
    if (a <= 0 || b <= 0 || c <= 0) {
    return `Invalid triangle: All sides should have a positive length.`;
    } else if (a + b <= c || a + c <= b || b + c <= a) {
    return `Invalid triangle: The sum of two sides should always be greater than the length of the third side.`;
    }
    
    // Determine the type of triangle
    if (a == b && a == c) {
    return `Equilateral triangle: All sides are equal.`;
    } else if (a == b || a == c || b == c) {
    return `Isosceles triangle: Two sides are equal.`;
    } else {
    return `Scalene triangle: All sides are different.`;
    }
}

getTriangleType(3, 3, 3); // Equilateral triangle: All sides are equal.
getTriangleType(5, 5, 8); // Isosceles triangle: Two sides are equal.
getTriangleType(5, 12, 13); // Scalene triangle: All sides are different.
getTriangleType(-1, 4, 5); // Invalid triangle: All sides should have a positive length.
getTriangleType(3, 4, 7); // Invalid triangle: The sum of two sides should always be greater than the length of the third side.

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function checkDataUsage(planLimit, day, usage) {
    // Calculate the average daily usage
    let daysLeft = 30 - day;
    let averageUsage = (planLimit - usage) / daysLeft;
    
    // Check if the user has exceeded their plan limit
    if (usage > planLimit) {
    let overUsage = usage - planLimit;
    return `You have exceeded your plan limit by ${overUsage} GB. Please purchase additional data if needed.`;
    }
    
    // Check if the user has run out of data
    if (usage == planLimit) {
    return `You have used all of your data for this month. Please wait until the next billing cycle.`;
    }
    
    // Calculate the remaining data and average daily usage
    let remainingData = planLimit - usage;
    let remainingDailyUsage = remainingData / daysLeft;
    
    // Check if the user is under or over the average daily usage
    if (averageUsage > remainingDailyUsage) {
    return `You are using less data than the average daily usage. You have ${remainingData} GB remaining, which is an average of ${remainingDailyUsage.toFixed(2)} GB per day for the rest of the month.`;
    } else {
    return `You are using more data than the average daily usage. You have ${remainingData} GB remaining, which is an average of ${remainingDailyUsage.toFixed(2)} GB per day for the rest of the month.`;
    }
}

checkDataUsage(10, 15, 5); // You are using less data than the average daily usage. You have 50 GB remaining, which is an average of 1.67 GB per day for the rest of the month.
checkDataUsage(10, 20, 12); // You are using more data than the average daily usage. You have 18 GB remaining, which is an average of 0.60 GB per day for the rest of the month.
checkDataUsage(10, 25, 15); // You have exceeded your plan limit by 5 GB. Please purchase additional data if needed.
checkDataUsage(10, 30, 10); // You have used all of your data for this month. Please wait until the next billing cycle.
