function calculateBMI() {
  let weight = parseFloat(prompt("Enter your weight in kg:"));
  let heightCm = parseFloat(prompt("Enter your height in cm:"));

  if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
    alert("❌ Please enter valid numbers for weight and height.");
} else {
    let height = heightCm / 100;
    let BMI = weight / (height ** 2);
    let category = "";
    let color = "";

    if (BMI < 18.5) {
      category = "Underweight 😟";
      color = "#1E90FF";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      category = "Normal weight 😊";
      color = "#28a745";
    } else if (BMI >= 25 && BMI <= 29.9) {
      category = "Overweight 😐";
      color = "#ffc107";
    } else if (BMI >= 30) {
      category = "Obese 😟";
      color = "#dc3545";
    }

    let result = document.getElementById("result");
    let container = document.getElementById('container');

    result.textContent = `Your BMI is: ${BMI.toFixed(2)}\n${category}`;
    container.style.background = color;
  }
}
