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
    const studentIdInput: HTMLInputElement | null =  document.getElementById("studentId") as HTMLInputElement;
    const studentNameInput: HTMLInputElement | null = document.getElementById("studentName") as HTMLInputElement;
    const numCoursesInput: HTMLInputElement | null = document.getElementById("numCourses") as HTMLInputElement;
    const transportationInput: HTMLSelectElement | null = document.getElementById("transportation") as HTMLSelectElement;
    const libraryInput: HTMLSelectElement | null = document.getElementById("library") as HTMLSelectElement;
    const sportsInput: HTMLSelectElement | null = document.getElementById("sports") as HTMLSelectElement;
    const gpaInput: HTMLSelectElement | null = document.getElementById("gpa") as HTMLSelectElement;

    if (studentIdInput && studentNameInput && numCoursesInput && transportationInput && libraryInput && sportsInput && gpaInput) {
        const studentId: string = studentIdInput.value;
        const studentName: string = studentNameInput.value;
        const numCourses: number = parseFloat(numCoursesInput.value);
        const transportation: number = parseFloat(transportationInput.value);
        const library: number = parseFloat(libraryInput.value);
        const sports: number = parseFloat(sportsInput.value);
        const gpa: number = parseFloat(gpaInput.value);

        // Calculate total fees
        const courseFee = numCourses * 21000;
        const subtotal = courseFee + transportation + library + sports;
        const discountAmount = subtotal * gpa;
        const total = subtotal - discountAmount;

        // Display result in a table
        const tableBody = `
            <tr>
                <th>Student ID</th>
                <td>${studentId}</td>
            </tr>
            <tr>
                <th>Student Name</th>
                <td>${studentName}</td>
            </tr>
            <tr>
                <th>Number of Courses</th>
                <td>${numCourses}</td>
            </tr>
            <tr>
                <th>Course Fee</th>
                <td>${courseFee.toFixed(2)}</td>
            </tr>
            <tr>
                <th>Transportation</th>
                <td>${transportation.toFixed(2)}</td>
            </tr>
            <tr>
                <th>Library</th>
                <td>${library.toFixed(2)}</td>
            </tr>
            <tr>
                <th>Sports</th>
                <td>${sports.toFixed(2)}</td>
            </tr>
            <tr>
                <th>Subtotal</th>
                <td>${subtotal.toFixed(2)}</td>
            </tr>
            <tr>
                <th>GPA Discount (${(gpa * 100).toFixed(0)}%)</th>
                <td>${discountAmount.toFixed(2)}</td>
            </tr>
            <tr>
                <th>Total</th>
                <td>${total.toFixed(2)}</td>
            </tr>
        `;

        // Render the table
        const tableContainer: HTMLElement | null = document.getElementById("tableContainer");
        if (tableContainer) {
            tableContainer.innerHTML = `
                <div class="container">
                    <h1 class="text-center my-4">Fee Receipt</h1>
                    <div class="table-responsive">
                        <table class="table">
                            <tbody>${tableBody}</tbody>
                        </table>
                    </div>
                </div>
            `;
        }
    } else {
        console.error("One or more input elements not found.");
    }
}
