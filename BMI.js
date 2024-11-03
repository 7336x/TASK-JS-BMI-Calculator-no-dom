/**
 * Calculate BMI
 * - takes a weight in KG
 * - takes a height in cm
 * - returns the calculated BMI
 */
function calculateBMI(weight, height) {
  /**
   *  Write your code here 👇🏼
   */
  
  let BMI = 0;
   BMI = weight / ((height / 100) ** 2);
  
  /**
   * Stop making changes here!
   */
  return BMI;
}

/**
 * Get BMI State
 * - takes the BMI
 * - returns a string with the BMI state
 */
function getBMIState(BMI) {
  let BMIState;

  if (BMI < 18.5) {
    BMIState = "underweight";
  } else if (BMI >= 18.5 && BMI < 24.9) {
    BMIState = "healthy"; 
  } else if (BMI >= 25 && BMI < 29.9) {
    BMIState = "overweight";
  } else {
    BMIState = "obese";
  }

  return BMIState;
}

/**
 * Get BMI State by Age
 * - takes the BMI
 * - takes the age
 * - returns a string with the BMI state
 */
function getBMIStateByAge(BMI, age) {
  let BMIState;

  if (age > 18) {
    
    if (BMI < 18.5) {
      BMIState = "underweight";
    } else if (BMI >= 18.5 && BMI < 24) {
      BMIState = "healthy"; 
    } else {
      BMIState = "overweight";
    }
  } else {
    
    BMIState = getBMIState(BMI);
  }

  return BMIState;
}

module.exports = { calculateBMI, getBMIState, getBMIStateByAge };
