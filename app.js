// Filter out odds
function filterOutOdds(...nums) {
    return nums.filter((num) => num % 2 === 0);
}

// Find min
function findMin(...nums) {
    return Math.min(...nums)
}

// Merge Objects
function mergeObjects(obj1, obj2) {
    const newObj = { ...obj1, ...obj2 };
    return newObj;
}

// Double and Return
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)]

// Slice and Dice
function removeRandom(items) {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

const extend = (array1, array2) => {
    return [...array1, ...array2];
};

const addKeyVal = (obj, key, val) => {
    const newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}

const removeKey = (obj, key) => {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
}

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
};

const update = (obj, key, val) => {
    const newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}