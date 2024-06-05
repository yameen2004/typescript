// function regestor() {
//   const std_id: HTMLInputElement | null = document.getElementById(
//     "std_id"
//   ) as HTMLInputElement;
//   const std_name: HTMLInputElement | null = document.getElementById(
//     "std_name"
//   ) as HTMLInputElement;
//   const std_course: HTMLInputElement | null = document.getElementById(
//     "std_course"
//   ) as HTMLInputElement;
//   const transportation: HTMLInputElement | null = document.getElementById(
//     "transportation"
//   ) as HTMLInputElement;
//   const library: HTMLInputElement | null = document.getElementById(
//     "library"
//   ) as HTMLInputElement;
//   const sports: HTMLInputElement | null = document.getElementById(
//     "sports"
//   ) as HTMLInputElement;
//   const gpa: HTMLInputElement | null = document.getElementById(
//     "gpa"
//   ) as HTMLInputElement;
//   let wrapper: HTMLElement = document.getElementById("wrapper") as HTMLElement;
//   let fees: number = 0;
//   if (
//     std_id &&
//     std_name &&
//     std_course &&
//     transportation &&
//     library &&
//     sports &&
//     gpa
//   ) {
//     const stdId = std_id.value;
//     const stdName = std_name.value;
//     const stdCourse = parseFloat(std_course.value);
//     const transportCost = parseFloat(transportation.value);
//     const libraryCost = parseFloat(library.value);
//     const sportsCost = parseFloat(sports.value);
//     const gpaPercent = parseFloat(gpa.value);
//     if (stdCourse >= 2 && stdCourse <= 7) {
//       const courseFee = stdCourse * 21000;
//       const subtotal = courseFee + transportCost + libraryCost + sportsCost;
//       const discountAmount = subtotal * gpaPercent;
//       const total = subtotal - discountAmount;
//       wrapper.innerHTML = "";
//       const receiptContainer = document.createElement("div");
//       receiptContainer.classList.add(
//         "max-w-md",
//         "mx-auto",
//         "my-8",
//         "bg-white",
//         "rounded-md",
//         "shadow-md",
//         "overflow-hidden"
//       );
//       const title = document.createElement("h2");
//       title.classList.add(
//         "text-center",
//         "text-2xl",
//         "font-bold",
//         "py-4",
//         "bg-gray-100"
//       );
//       title.textContent = "Fee Receipt";
//       const table = document.createElement("table");
//       table.classList.add("w-full", "table-auto");
//       const tbody = document.createElement("tbody");
//       function createRow(label, value) {
//         const tr = document.createElement("tr");
//         const tdLabel = document.createElement("td");
//         tdLabel.textContent = label;
//         const tdValue = document.createElement("td");
//         tdValue.textContent = value;
//         tr.appendChild(tdLabel);
//         tr.appendChild(tdValue);
//         return tr;
//       }
//       tbody.appendChild(createRow("Student ID:", stdId));
//       tbody.appendChild(createRow("Student Name:", stdName));
//       tbody.appendChild(createRow("Course:", stdCourse));
//       tbody.appendChild(createRow("Course Fee:", `$${courseFee.toFixed(2)}`));
//       tbody.appendChild(
//         createRow("Transportation:", `$${transportCost.toFixed(2)}`)
//       );
//       tbody.appendChild(createRow("Library:", `$${libraryCost.toFixed(2)}`));
//       tbody.appendChild(createRow("Sports:", `$${sportsCost.toFixed(2)}`));
//       tbody.appendChild(createRow("Subtotal:", `$${subtotal.toFixed(2)}`));
//       tbody.appendChild(
//         createRow(
//           `GPA Discount (${gpaPercent}%):`,
//           `$${discountAmount.toFixed(2)}`
//         )
//       );
//       tbody.appendChild(createRow("Total:", `$${total.toFixed(2)}`));
//       table.appendChild(tbody);
//       receiptContainer.appendChild(title);
//       receiptContainer.appendChild(table);
//       // Append receipt to the document
//       document.body.appendChild(receiptContainer);
//     } else {
//       alert("Number of courses must be between 2 and 7.");
//     }
//   } else {
//     alert("One or more input elements not found.");
//   }
function calculateFees() {
    var studentIdInput = document.getElementById("studentId");
    var studentNameInput = document.getElementById("studentName");
    var numCoursesInput = document.getElementById("numCourses");
    var transportationInput = document.getElementById("transportation");
    var libraryInput = document.getElementById("library");
    var sportsInput = document.getElementById("sports");
    var gpaInput = document.getElementById("gpa");
    if (studentIdInput && studentNameInput && numCoursesInput && transportationInput && libraryInput && sportsInput && gpaInput) {
        var studentId = studentIdInput.value;
        var studentName = studentNameInput.value;
        var numCourses = parseFloat(numCoursesInput.value);
        var transportation = parseFloat(transportationInput.value);
        var library = parseFloat(libraryInput.value);
        var sports = parseFloat(sportsInput.value);
        var gpa = parseFloat(gpaInput.value);
        // Calculate total fees
        var courseFee = numCourses * 21000;
        var subtotal = courseFee + transportation + library + sports;
        var discountAmount = subtotal * gpa;
        var total = subtotal - discountAmount;
        // Display result in a table
        var tableBody = "\n            <tr>\n                <th>Student ID</th>\n                <td>".concat(studentId, "</td>\n            </tr>\n            <tr>\n                <th>Student Name</th>\n                <td>").concat(studentName, "</td>\n            </tr>\n            <tr>\n                <th>Number of Courses</th>\n                <td>").concat(numCourses, "</td>\n            </tr>\n            <tr>\n                <th>Course Fee</th>\n                <td>").concat(courseFee.toFixed(2), "</td>\n            </tr>\n            <tr>\n                <th>Transportation</th>\n                <td>").concat(transportation.toFixed(2), "</td>\n            </tr>\n            <tr>\n                <th>Library</th>\n                <td>").concat(library.toFixed(2), "</td>\n            </tr>\n            <tr>\n                <th>Sports</th>\n                <td>").concat(sports.toFixed(2), "</td>\n            </tr>\n            <tr>\n                <th>Subtotal</th>\n                <td>").concat(subtotal.toFixed(2), "</td>\n            </tr>\n            <tr>\n                <th>GPA Discount (").concat((gpa * 100).toFixed(0), "%)</th>\n                <td>").concat(discountAmount.toFixed(2), "</td>\n            </tr>\n            <tr>\n                <th>Total</th>\n                <td>").concat(total.toFixed(2), "</td>\n            </tr>\n        ");
        // Render the table
        var tableContainer = document.getElementById("tableContainer");
        if (tableContainer) {
            tableContainer.innerHTML = "\n                <div class=\"container\">\n                    <h1 class=\"text-center my-4\">Fee Receipt</h1>\n                    <div class=\"table-responsive\">\n                        <table class=\"table\">\n                            <tbody>".concat(tableBody, "</tbody>\n                        </table>\n                    </div>\n                </div>\n            ");
        }
    }
    else {
        console.error("One or more input elements not found.");
    }
}
