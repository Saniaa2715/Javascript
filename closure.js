const countFrom = (initialValue) => {

    const counter = () => {
        initialValue += 1;
        return initialValue;
    }

    return counter;
}

const countFrom10 = countFrom(10);
countFrom10(); // 11
const countFrom5 = countFrom(5);
countFrom5();
countFrom10(); // 12

// 
const loanFactory = (r) => {
    return [
        (p, n) => p * n * r / 100,
        (newRate) => r = newRate
    ];  
}

const [carLoanCalc, updateCarRate] = loanFactory(8);
const [homeLoanCalc, updateHomeRate] = loanFactory(10);
const [personalLoanCalc, updatePersonalRate] = loanFactory(12);

carLoanCalc(100000, 12);
homeLoanCalc(100000, 12);
personalLoanCalc(100000, 12);

// change r for carLoan = 10 
updateCarRate(10);
carLoanCalc(100000, 12);

const multiply = n1=>n2=>n3=> n1 * n2 * n3;

const product = multiply(5)(7)(2); // 70

const fn1 = multiply(5);
const fn2 = fn1(7);
const prod = fn2(2);

const outer = (n1) => {
    const inner = (n2) => {
        return n1 * n2;
    }

    return inner;
}

const referenceToOuter = outer;
const referenceToInner = outer(12);
const refToInner = referenceToOuter(12)
referenceToInner(12); // 144
