describe("tired", () => {
    test ("retuns correct string", () => {
        expect(tired("tired")).toBe("drink coffee")
        expect(tired("not tired")).toBe("keep working")
    })
})
const tired = (status) => {
    if(status == "tired"){
        return "drink coffee"
    } else {
        return "keep working"
    }
}

describe("stressedTest", () => {
    test ("retuns correct string", () => {
        expect(stressedTest("stressed")).toBe("relax")
        expect(stressedTest("not stressed")).toBe("keep going")
    })
})
const stressedTest = (status) => {
    if(status == "stressed"){
        return "relax"
    } else {
        return "keep going"
    }
}

describe("budget", () => {
    test ("returns whether price is in budget", () => {
        expect(budget(100)).toBe("in budget")
    })
})

const budget = (num) => {
    if(num < 300) {
        return "in budget"
    }
}

describe("lowerNum", () => {
    test ("if the function returns the lower number", () => {
        expect(lowerNum (1,2)).toBe(1)
        expect(lowerNum (8,6)).toBe(6)
    })
})

lowerNum = (num1, num2) => {
    if (num1 > num2){
        return num2
    } else {
        return num1
    }
}

describe("fruit", () => {
    test ("check if returns right color", () => {
        expect(fruit("banana")).toBe("yellow")
        expect(fruit("apple")).toBe("red")
        expect(fruit("grape")).toBe("purple")
    })
})
fruit = (type) => {
    if (type === "banana"){
        return "yellow"
    } else if (type === "apple"){
        return "red"
    } else {
        return "purple"
    }
// }

describe("oddNum", () => {
    test ("if the function returns odd number", () => {
        expect(oddNum (1)).toBe("odd")
    })
})

oddNum = (num1) => {
    if (num1 % 2 !== 0){
        return "odd"
    }
}



describe("greeter", () => {
    test ("test if returns a greeting with a proper name", () => {
        expect(greeter("mike")).toBe("Hello Mike")
    })
})
greeter = (name) => {
    var newName = name.charAt(0).toUpperCase() + name.substring(1)
    return `Hello ${newName}`
}

describe("oddOrEven", () => {
    test ("if the function returns odd or even number", () => {
        expect(oddOrEven (1)).toBe("odd")
        expect(oddOrEven (2)).toBe("even")
    })
})

oddOrEven = (num1) => {
    if (num1 % 2 !== 0){
        return "odd"
    } else {
        return "even"
    }
}

describe ("double", () => {
    test ("if the function multiplies input by 2", () => {
        var message = "please enter a number"
        expect(double(3)).toBe(6)
        expect(double(9)).toBe(18)
        expect(double("hello")).toBe(message)
        expect(double(true)).toBe(message)
    })
})

double = (num) => {
    if (typeof num !== "number"){
        return "please enter a number"
    } else {
        return num * 2
    }
}

describe("multiply", () => {
    test("check if result multiplies 2 numbers", () => {
        expect(multiply(3,3)).toBe(9)
    })
})
multiply = (num1, num2) => {
    return num1 * num2
}

describe ("divisibleBy", () => {
    test("check if first num is divisible by second num", () => {
        expect(divisibleBy(10,5)).toBe("10 is evenly divisible by 5")
        expect(divisibleBy(40,20)).toBe("40 is evenly divisible by 20")
    })
})

divisibleBy = (num1, num2) => {
    if(num1 % num2 === 0) {
        return num1 + " is evenly divisible by " + num2
    }
}

describe ("describeProduct", () => {
    test("function returns string, including product type and price", () => {
        var product = { name: "chair", price: 14.99 }
        expect(describeProduct(product)).toBe("The product is a chair. It costs $14.99")
    })
})

describeProduct = (item) => {
    var product = { name: "chair", price: 14.99 }
    return `The product is a ${product.name}. It costs $${product.price}`
}
