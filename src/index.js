module.exports = function check(str, bracketsConfig) {
    let tempStec = [];
    for (let braket of str.split("")) {
        if (tempStec.length > 0) {
          let neededRule = bracketsConfig.find((rul) => {
              return rul[0] === tempStec[tempStec.length - 1]
              })
            if (neededRule && neededRule[1] === braket) {
                tempStec.pop()
            } else {
                tempStec.push(braket);
            }
        } else {
            tempStec.push(braket);
        }
    }

    return tempStec.length == 0
}
