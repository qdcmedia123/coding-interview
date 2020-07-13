class FinalcialPlanner {
  constructor(
    age,
    salary,
    initialSavings,
    periodicSavings,
    retirementYear,
    lifeExpectancy,
    investmentRateBeforeRetirement,
    investmentRateDuringRetirement,
    inflationRate,
    managementFees,
    salaryGrowth,
    yearEndSalaryGrowth,
    periodAccumulation,
    periodDecumulation,
    desiredIncome
  ) {
    this.age                                      = age;
    this.salary                                   = salary;
    this.initialSavings                           = initialSavings;
    this.periodicSavings                          = periodicSavings;
    this.retirementYear                           = retirementYear;
    this.lifeExpectancy                           = lifeExpectancy;
    this.investmentRateBeforeRetirement           = investmentRateBeforeRetirement;
    this.investmentRateDuringRetirement           = investmentRateDuringRetirement;
    this.inflationRate                            = inflationRate;
    this.managementFees                           = managementFees;
    this.salaryGrowth                             = salaryGrowth;
    this.yearEndSalaryGrowth                      = yearEndSalaryGrowth;
    this.periodAccumulation                       = periodAccumulation;
    this.periodDecumulation                       = periodDecumulation;
    this.desiredIncome                            = desiredIncome;

    this.outputSimulation                         = [];
    this.desiredOutputSimulation                  = [];
  }

  Saving() {
    const periodicInvestmentRate =
      (1 +
        (this.investmentRateBeforeRetirement - this.managementFees) * 0.01) **
        (1 / this.periodAccumulation) -
      1;

    let year                                      = this.age;
    let periodicSavings                           = this.periodicSavings;
    this.salaryAdjusted                           = this.salary;
    let end_balance                               = this.initialSavings;
    this.accumulatetotalPrincipale                = this.initialSavings;
    this.accumulatetotalInterest                  = 0;
  
    // Loop contribution ducation

    for (var i = 0; i < this.contributionDuration; i++) {
      // Adding yera to the i
      year = parseFloat(this.age + i);

      // Start banalce
      let start_balance           = end_balance;

      // Check year
      if (year <= this.yearEndSalaryGrowth) {
        // Groth factor
        let growthFactor    = (1 + this.salaryGrowth * 0.01) ** i;

        // Period saving
        periodicSavings     = this.periodicSavings * growthFactor;

        // Salary adjust
        this.salaryAdjusted = this.salary * growthFactor;
      }

      let contributions = periodicSavings * this.periodAccumulation;

      const lst = [];

      for (var tt = 0; tt < this.periodAccumulation; tt++) {
        lst.push(periodicSavings * (1 + periodicInvestmentRate) ** tt);
      }
      
      // Calculating end blance 
      end_balance =
        start_balance *
          (1 + periodicInvestmentRate) ** this.periodAccumulation +
        lst.reduce((a, b) => a + b, 0);
      
      // Intrest 
      let interest =
        end_balance - start_balance - periodicSavings * this.periodAccumulation;

      //  Append intrest to class properties accumulatetotalInterest
      this.accumulatetotalInterest += interest;

      //  Append intrest to class properties accumulatetotalPrincipale
      this.accumulatetotalPrincipale += contributions;

      // Setting the value to outputSimulation class properties 
      this.outputSimulation[i] = {
        year: year,
        startBalance: parseFloat(start_balance).toFixed(0),
        contributions: parseFloat(contributions).toFixed(0),
        salary: this.salaryAdjusted,
        interest: parseFloat(interest).toFixed(0),
        periodicPayments: 0,
        payments: 0,
        periodicPaymentsAdjusted: 0,
        paymentsAdjusted: 0,
        endBalance: parseFloat(end_balance).toFixed(0),
      };
    }

    // Set accumulated Wealth end balance
    this.accumulatedWealth = end_balance;
  }
  
  /**
   *  Will calculate winthdral 
  **/

  Withdrawl() {
    // Period invenstement rate calculation 
    const periodicInvestmentRate =
      (1 +
        (this.investmentRateDuringRetirement - this.managementFees) * 0.01) **
        (1 / this.periodDecumulation) -
      1;
    // Calculating compute factore based on periodic Investement Rate, retirement Duration and period decumulation 
    const compoundFactor =
      periodicInvestmentRate /
      ((1 + periodicInvestmentRate) *
        (1 -
          (1 + periodicInvestmentRate) **
            (-this.retirementDuration * this.periodDecumulation)));
    
    // inflation factore calculatin 
    const inflationFactor = 1 + this.inflationRate * 0.01;

    // Period payment calculation on the basis 
    this.periodicPayment = this.accumulatedWealth * compoundFactor;
    var start_balance = this.accumulatedWealth;

    for (var t = 0; t < this.retirementDuration; t++) {
      const year = parseInt(this.retirementYear + t);
      this.periodicPaymentAdjusted =
        this.periodicPayment / inflationFactor ** t;
      const payment = this.periodicPayment * this.periodDecumulation;
      const paymentAdjusted =
        this.periodicPaymentAdjusted * this.periodDecumulation;
      let interest = 0;
      let start_period = start_balance;

      for (var i = 0; i < periodDecumulation; i++) {
        interest +=
          (start_period - this.periodicPayment) * periodicInvestmentRate;
        var end_period =
          start_period +
          (start_period - this.periodicPayment) * periodicInvestmentRate -
          this.periodicPayment;
        start_period = end_period;
      }

      let end_balance = end_period;

      this.outputSimulation[t + this.contributionDuration] = {
        year: year,
        startBalance: start_balance.toFixed(0),
        contributions: 0,
        salary: 0,
        interest: interest.toFixed(0),
        periodicPayments: this.periodicPayment,
        payments: -payment.toFixed(0),
        periodicPaymentsAdjusted: -this.periodicPaymentAdjusted.toFixed(0),
        paymentsAdjusted: -paymentAdjusted.toFixed(0),
        endBalance: end_balance.toFixed(0),
      };

      start_balance = end_balance;
    }

    //console.log(this.outputSimulation);
    return this.outputSimulation;
  }

  desiredWithdrawl() {
    const periodicInvestmentRate =
      (1 +
        (this.investmentRateDuringRetirement - this.managementFees) * 0.01) **
        (1 / this.periodDecumulation) -
      1;
    const discountFactor =
      (1 -
        (1 + periodicInvestmentRate) **
          -(this.retirementDuration * this.periodDecumulation - 1)) /
      periodicInvestmentRate;
    const inflationFactor = 1 + this.inflationRate * 0.01;
    this.requiredWealth =
      this.desiredIncome + this.desiredIncome * discountFactor;
    var start_balance = this.requiredWealth;

    //console.log(start_balance)

    for (var t = 0; t < this.retirementDuration; t++) {
      const year = parseInt(this.retirementYear + t);
      this.periodicDesiredPaymentAdjusted =
        this.desiredIncome / inflationFactor ** t;
      const payment = this.desiredIncome * this.periodDecumulation;
      const paymentAdjusted =
        this.periodicDesiredPaymentAdjusted * this.periodDecumulation;
      let interest = 0;
      let start_period = start_balance;
      var end_period = '';

      for (var i = 0; i < this.periodDecumulation; i++) {
        interest +=
          (start_period - this.desiredIncome) * periodicInvestmentRate;

        end_period =
          start_period +
          (start_period - this.desiredIncome) * periodicInvestmentRate -
          this.desiredIncome;
        start_period = end_period;
      }

      let end_balance = end_period;

      //console.log(interest.toFixed(0));

      this.desiredOutputSimulation[t + this.contributionDuration] = {
        year: year,
        startBalance: start_balance.toFixed(0),
        contributions: 0,
        salary: 0,
        interest: interest.toFixed(0),
        periodicPayments: -this.desiredIncome,
        payments: -payment.toFixed(0),
        periodicPaymentsAdjusted: -this.periodicDesiredPaymentAdjusted.toFixed(
          0
        ),
        paymentsAdjusted: -paymentAdjusted.toFixed(0),
        endBalance: end_balance.toFixed(0),
      };
      start_balance = end_balance;
    }

    //start_balance       = end_balance;
  }

  requiredSaving() {
    var periodicInvestmentRate =
      (1 +
        (this.investmentRateBeforeRetirement - this.managementFees) * 0.01) **
        (1 / this.periodAccumulation) -
      1;
    var year = this.age;
    let compoundFactor =
      ((1 + periodicInvestmentRate) **
        (this.contributionDuration * this.periodAccumulation) -
        1) /
      periodicInvestmentRate;
    this.requiredSaving =
      (this.requiredWealth -
        this.initialSavings *
          (1 + periodicInvestmentRate) **
            (this.contributionDuration * this.periodAccumulation)) /
      compoundFactor;
    var end_balance = this.initialSavings;

    for (var t = 0; t < this.contributionDuration; t++) {
      year = parseInt(this.age + t);
      var start_balance = end_balance;
      var periodicSavings = this.requiredSaving;

      var contributions = periodicSavings * this.periodAccumulation;

      const lst = [];

      for (var tt = 0; tt < this.periodAccumulation; tt++) {
        lst.push(periodicSavings * (1 + periodicInvestmentRate) ** tt);
      }

      end_balance =
        start_balance *
          (1 + periodicInvestmentRate) ** this.periodAccumulation +
        lst.reduce((a, b) => a + b, 0);

      this.desiredOutputSimulation[t] = {
        year: year,
        startBalance: start_balance.toFixed(0),
        contributions: contributions.toFixed(0),
        salary: 0,
        interest: 0,
        periodicPayments: 0,
        payments: 0,
        periodicPaymentsAdjusted: 0,
        paymentsAdjusted: 0,
        endBalance: end_balance.toFixed(0),
      };
    }
    this.requiredAccumulatedWealth = end_balance;
  }

  calculate() {
    this.contributionDuration = this.retirementYear - this.age;
    this.retirementDuration = this.lifeExpectancy - this.retirementYear;

    // Run the function
    this.Saving();
    this.Withdrawl();
    this.desiredWithdrawl();
    this.requiredSaving();

    //console.log(this.desiredOutputSimulation);
    this.periodicPaymentToday       = (this.periodicPayment / (1+ this.inflationRate*0.01) ** this.contributionDuration).toFixed(0)
		this.replacementRatio           = (100*this.periodicPaymentToday*this.periodDecumulation/this.salary).toFixed(0)
		this.savingRatio             = (100*this.periodicSavings * this.periodAccumulation / this.salary).toFixed(0)
	     
    this.outputParameters = {
                                  contributionDuration:this.contributionDuration,
                                  accumulatedWealth:this.accumulatedWealth,
                                  totalPrincipal:this.accumulatetotalPrincipale,
                                  totalInterest:this.accumulatetotalInterest,
                                  savingRatio:this.savingRatio,
                                  salaryAtRetirement:this.salaryAdjusted,
                                  replacementRatio:this.replacementRatio,
                                  retirementDuration:this.retirementDuration,
                                  periodicPaymentToday:this.periodicPaymentToday,
                                  periodicPaymentAtRetirement:this.periodicPayment,
                                  lastPaymentDuringRetirment:this.periodicPaymentAdjusted,
                                  requiredWealth:this.requiredWealth,
                                  desiredPaymentAtRetirement:this.desiredIncome,
                                  lastDesiredPaymentAtRetirement:this.periodicDesiredPaymentAdjusted,
                }
    console.log(this.outputParameters);
  }
}

const age = 30;
const salary = 120000;
const initialSavings = 30000;
const periodicSavings = 1000;
const retirementYear = 65;
const lifeExpectancy = 95;
const investmentRateBeforeRetirement = 7.6;
const investmentRateDuringRetirement = 2.6;
const inflationRate = 2.0;
const managementFees = 0.6;
const salaryGrowth = 0.0;
const yearEndSalaryGrowth = 45;
const periodAccumulation = 12;
const periodDecumulation = 12;
const desiredIncome = 5000;

const Planner = new FinalcialPlanner(
  age,
  salary,
  initialSavings,
  periodicSavings,
  retirementYear,
  lifeExpectancy,
  investmentRateBeforeRetirement,
  investmentRateDuringRetirement,
  inflationRate,
  managementFees,
  salaryGrowth,
  yearEndSalaryGrowth,
  periodAccumulation,
  periodDecumulation,
  desiredIncome
);

Planner.calculate();

//console.log(Planner.outputSimulation);
console.log(Planner.desiredOutputSimulation);
