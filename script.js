var nameStudent=document.querySelector("#exampleInputEmail1");
var semsterNo=document.querySelector("#semesterNo");
var totalSubject= document.querySelector("#totalSubject")
var btnSumbit = document.querySelector("#btnsubmit")
btnSumbit.addEventListener("click",function(e){
  e.preventDefault();
  btnSumbit.style.backgroundColor="rgba(9, 1, 93, 1)";

 let studentName=nameStudent.value;
  let semsterNumber =semsterNo.value;
  let totalSubjectNumer=Number(totalSubject.value);
 let studentDetail={
  studentName:studentName,
  semsterNo:semsterNumber,
  totalSubject:totalSubjectNumer
};
console.log(studentDetail);
let allSubjects = [];
let container = document.querySelector("#subjectbox");

// --- Step 1: Create input fields dynamically ---
for (let i = 1; i <= totalSubjectNumer; i++) {
  let subjectbox = document.createElement("div");
  subjectbox.classList.add("subjectRow");

  let inputSubName = document.createElement("input");
  inputSubName.placeholder = "Enter Subject Name";
  inputSubName.type = "text";
  inputSubName.classList.add("inputBox");

  let inputNumber = document.createElement("input");
  inputNumber.placeholder = "Enter Marks";
  inputNumber.type = "number";
  inputNumber.classList.add("inputBox");

  let inputHour = document.createElement("input");
  inputHour.placeholder = "Enter Credit Hours";
  inputHour.type = "number";
  inputHour.classList.add("inputBox");

  allSubjects.push({
    nameInput: inputSubName,
    marksInput: inputNumber,
    creditInput: inputHour
  });

  subjectbox.appendChild(inputSubName);
  subjectbox.appendChild(inputNumber);
  subjectbox.appendChild(inputHour);
  container.appendChild(subjectbox);
}

// --- Step 2: Submit Button ---
let buttonSubmit = document.createElement("button");
buttonSubmit.textContent = "Calculate GPA";
buttonSubmit.classList.add("button-style")

buttonSubmit.addEventListener("click", function () {

  let totalCredit = 0;
  let totalQualityPoints = 0;
  let fullData = [];

  allSubjects.forEach(function(subject){
    let marks = Number(subject.marksInput.value);
    let credit = Number(subject.creditInput.value);

    // --- Karachi University discrete GPA ---
    let gradePoint = 0;
    if(marks >= 85) gradePoint = 4.0;
    else if(marks >= 80) gradePoint = 3.7;
    else if(marks >= 75) gradePoint = 3.3;
    else if(marks >= 70) gradePoint = 3.0;
    else if(marks >= 65) gradePoint = 2.7;
    else if(marks >= 60) gradePoint = 2.3;
    else if(marks >= 55) gradePoint = 2.0;
    else gradePoint = 1.0;

    totalQualityPoints += gradePoint * credit;
    totalCredit += credit;

    fullData.push({
      subjectName: subject.nameInput.value,
      marks: marks,
      creditHour: credit,
      gradePoint: gradePoint
    });
  });

  let GPA = totalQualityPoints / totalCredit;
  GPA = GPA.toFixed(2);

  console.log("Your GPA:", GPA);
  let popup = document.querySelector("#popup");
let popupText = document.querySelector("#popupText");
let closeBtn = document.querySelector("#closePopup");

popupText.innerHTML = `
  Name: <b>${studentName}</b><br>
  Semester: <b>${semsterNumber}</b><br>
  Total Subjects: <b>${totalSubjectNumer}</b><br>
  GPA: <b>${GPA}</b>
`;

popup.style.display = "flex";

closeBtn.addEventListener("click", function() {
  popup.style.display = "none";
});

});

container.appendChild(buttonSubmit);

container.appendChild(buttonSubmit);
});

tsParticles.load("tsparticles", {
    fpsLimit: 120,
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
                default: "bounce"
            }
        },
        size: {
            value: { min: 1, max: 3 }
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: "circle"
        }
    },
    background: {
        color: "rgba(9, 1, 93, 1)"
    }
});

