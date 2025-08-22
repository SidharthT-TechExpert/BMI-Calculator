function calculateBMI() {
  async function calculate() {
    // Ask for weight
    const { value: weight } = await Swal.fire({
      title: "Enter your weight in kg",
      input: "number",
      inputLabel: "Weight (kg)",
      inputPlaceholder: "e.g., 70",
      inputAttributes: { min: 0, step: 0.1 },
      showCancelButton: true
    });

    if (!weight) return Swal.fire({ title: "Enter your valid weight" });

    // Ask for height
    const { value: heightCm } = await Swal.fire({
      title: "Enter your height in cm",
      input: "number",
      inputLabel: "Height (cm)",
      inputPlaceholder: "e.g., 175",
      inputAttributes: { min: 0, step: 0.1 },
      showCancelButton: true
    });

    if (!heightCm) return Swal.fire({ title: "Enter your valid height" });

    // BMI calculation
    const heightM = parseFloat(heightCm) / 100;
    const BMI = parseFloat(weight) / (heightM * heightM);

    // Category & color
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

    // Update DOM
    let result = document.getElementById("result");
    let container = document.getElementById("container");
    result.textContent = `Your BMI is: ${BMI.toFixed(2)}\n${category}`;
    container.style.background = color;
  }

  // Call async function
  calculate();
}
