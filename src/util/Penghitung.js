import Big from "big.js";

// import operate from "./operate";
const hitung = (numberOne, numberTwo, operation) => {
    const one = Big(numberOne || "0");
    const two = Big(numberTwo || (operation === "÷" || operation === 'x' ? "1" : "0"));
    if (operation === "+") {
        return one.plus(two).toString();
    }
    if (operation === "-") {
        return one.minus(two).toString();
    }
    if (operation === "x") {
        return one.times(two).toString();
    }
    if (operation === "÷") {
        if (two === "0") {
            alert("Divide by 0 error");
            return "0";
        } else {
            return one.div(two).toString();
        }
    }
    throw Error(`Unknown operation '${operation}'`);
}

const isNumber = (item) => {
    return /[0-9]+/.test(item);
}

export default function penghitung(obj, buttonName) {
    if (buttonName === "CE") {
        return {
            total: null,
            next: null,
            operation: null,
        };
    }

    if (isNumber(buttonName)) {
        if (buttonName === "0" && obj.next === "0") {
            return {};
        }
        if (obj.operation) {
            if (obj.next) {
                return {next: obj.next + buttonName};
            }
            return {next: buttonName};
        }
        if (obj.next) {
            const next = obj.next === "0" ? buttonName : obj.next + buttonName;
            return {
                next,
                total: null,
            };
        }
        return {
            next: buttonName,
            total: null,
        };
    }

    if (buttonName === "%") {
        if (obj.operation && obj.next) {
            const result = hitung(obj.total, obj.next, obj.operation);
            return {
                total: Big(result)
                    .div(Big("100"))
                    .toString(),
                next: null,
                operation: null,
            };
        }
        if (obj.next) {
            return {
                next: Big(obj.next)
                    .div(Big("100"))
                    .toString(),
            };
        }
        return {};
    }

    if (buttonName === ".") {
        if (obj.next) {
            if (obj.next.includes(".")) {
                return {};
            }
            return {next: obj.next + "."};
        }
        return {next: "0."};
    }

    if (buttonName === "=") {
        if (obj.next && obj.operation) {
            return {
                total: hitung(obj.total, obj.next, obj.operation),
                next: null,
                operation: null,
                riwayat: obj.riwayat.concat({ angkaPertama: obj.total == null ? "0" :obj.total ,  operator: obj.operation , angkaKedua : obj.next, hasil:  hitung(obj.total, obj.next, obj.operation)})
            };
        } else {
            return {};
        }
    }

    if (buttonName === "+/-") {
        if (obj.next) {
            return {next: (-1 * parseFloat(obj.next)).toString()};
        }
        if (obj.total) {
            return {total: (-1 * parseFloat(obj.total)).toString()};
        }
        return {};
    }

    if (obj.operation) {
        return {
            total: hitung(obj.total, obj.next, obj.operation),
            next: null,
            operation: buttonName,
        };
    }

    if (!obj.next) {
        return {operation: buttonName};
    }

    return {
        total: obj.next,
        next: null,
        operation: buttonName,
    };
}
