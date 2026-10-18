# PM-04 Final Project: RedAcademy Resource Request Form

## Project Option
Brandon De Wet and Ryan Ward selected: Department Resource Request Form

## Project Description
This project provides an interactive portal for internal staff members to log technical, infrastructure, and administrative requests across various departments. It captures critical information, performs real-time data cleansing and validation, prioritizes requests, and dynamic logs an active operational history directly on the screen without reloading the page.

## Features
- **Real-Time Inputs Sanitization:** Natively blocks numbers from being typed into the name input box using targeted character replacements (`/[0-9]/g`).
- **Domain-Specific Email Enforcer:** Restricts data submissions exclusively to verified company staff matching the `@redpandasoftware.co.za` domain profile using explicit RegExp patterns.
- **Dynamic Submission Lockout:** Leverages contextual event listener workflows to ensure that the primary "Submit Request" button remains completely disabled until all required forms pass logical validation checks.
- **Active Operations Logging:** Aggregates form payloads upon submission into a state array and automatically constructs visual history nodes (`<li>`) displaying priority categories and breakdown summaries on the interface.

## JavaScript Concepts Used
- **Variables:** Declared local arrays (`requests`) to act as data stores alongside standard DOM references (`const form`, `const emailAddress`) to handle script operations safely.
- **Functions:** Implemented programmatic structural blocks (`validateForm`, `displaySummary`, `displayRequestList`, `checkPriorityLevel`) to separate validation checks, UI rendering, and state evaluation logic cleanly. Function has been implemneted as well to count the number of tickets that are currently open and resolved on the page.
- **Arrays or objects:** Structured complete record nodes via inline key-value pairs (e.g., `requester`, `email`, `department`) and pushed those objects securely into a linear tracking collection matrix (`requests.push(request)`).
- **Conditions:** Leveraged comprehensive logical assertions (`if / else if / else`) to control element styling behaviors and display priority thresholds ("Low", "Medium", "High", "Critical").
- **Loops:** Handled data parsing cycles through functional iterations (`requests.forEach`) to sweep through existing memory arrays and rebuild standard interface logs dynamically.
- **Events:** Implemented active event listeners (`input`, `change`, `submit`) to track typing states, drop-down selection shifts, and form updates.
- **DOM manipulation:** Interacted with elements through document properties (`.innerHTML`, `.value.trim()`, `document.createElement`, `.appendChild`, and `.style.borderColor`) to modify visual interfaces seamlessly.
- **Validation:** Deployed inline browser requirements (`required`, `maxlength`, `type="email"`) alongside a custom regular expression configuration (`/^[^\s@]+@redpandasoftware\.co\.za$/i`) to enforce absolute data integrity prior to form submission.

## How to Use the Project
1. Open `index.html` in your choice of modern web browser.
2. Enter your name in the input box (numbers are automatically restricted).
3. Type a valid company email address matching the exact `@redpandasoftware.co.za` syntax structure (invalid profiles will highlight the target frame red and reveal an inline error warning).
4. Choose the target Department, Resource Type, Description details, and global Priority setting from the form modules.
5. Once all requirements are fulfilled, the primary "Submit Request" action button automatically unlocks. Click **Submit Request**.
6. View the summary summary alert box feedback, visual structural output modifications, and chronological entry items appended directly into the "History of submitted Requests" panel section.

## Testing Notes
I tested the following:
- **Valid input:** Submitted complete entries utilizing the explicit `***@redpandasoftware.co.za` structure, confirming that the border frame shifts green, errors disappear, the button activates, and records append cleanly.
- **Missing required input:** Verified that omitting drop-downs, names, or utilizing standard generic email servers like `gmail.com` correctly forces the validation check to fail, keeping the action submit button firmly disabled.
- **Different priority/status/calculation/answer cases:** Validated that selecting specific priority tiers ("Low" vs "Critical") updates string labels inside the tracker block container correctly, while dynamically injecting specific target string names onto historical list items for targeted styling setups.

## Reflection
In this project, I learned that JavaScript can be used to dramatically improve standard form workflows, validate real-time text structures securely using advanced regex rules, manipulate layout properties like CSS color bindings dynamically, and process structured data layouts safely on the frontend without forcing problematic page refreshes.

## Ryan Ward changes /2026/10/18

- Five sample tickets load when the page opens.
- Priority changes require a reason, and Critical tickets cannot have their priority changed.
- Tickets can be resolved with a mandatory resolution message.
- Open and Resolved ticket counts update automatically.
- Console logs and validation support testing and troubleshooting.
- HTML, CSS and JavaScript changes are documented.

## Features Added:
- `Five sample tickets:` Five example tickets load automatically whenever the page opens.
- `Ticket numbers:` Each new ticket receives a unique number during the current page session.
- `Priority changes:` Users can change the priority of an open ticket, except when its current priority is Critical.
- `Mandatory priority-change reason:` Users must enter a reason before a priority change is saved. The previous priority, new priority, and reason are displayed in the ticket history.
- `Ticket resolution:` Users can mark an open ticket as Resolved and must provide a reason.
- `Ticket status summary:` The page displays the current number of Open and Resolved (closed) tickets, updating when the ticket list changes.
- `Ticket controls:` Each ticket displays buttons to change its priority or resolve it. Resolved tickets cannot be changed or resolved again.

## Files Updated:
- `index.html` — Added the Ticket Status Summary section.
- `style.css` — Added styles for ticket action buttons, priority-change reasons, resolution messages, ticket counts.
- `script.js` — Added sample tickets, priority-change and resolution functions, ticket status counting, validation, and console logs.

## Testing
1. Confirm that five sample tickets appear when the page loads.
2. Change a non-Critical open ticket's priority and provide a reason.
3. Confirm that a Critical ticket's priority-change button is disabled.
4. Try saving a priority change without a reason.
5. Resolve an open ticket and provide a reason.
6. Confirm that the Open and Resolved counts update.
7. Create a new ticket and confirm it appears in the list.
8. Check the browser console for diagnostic messages.