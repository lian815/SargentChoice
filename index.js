let currentStep = 1;

function showStep(stepNumber) {
  // Hide all steps
  const steps = document.querySelectorAll('.module-step');
  steps.forEach(step => step.classList.remove('active-step'));

  // Show the current step
  const currentStepElement = document.getElementById(`step${stepNumber}`);
  currentStepElement.classList.add('active-step');
}

function nextStep() {
  if (currentStep < 15) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
  }
}

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}