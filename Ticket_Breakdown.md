# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket #1

Add custom user ID column to `Agents` table. Use `VARCHAR(255)` to support larget strings like UUIDs.

Time estimate: 1 – 2 hours.

### Ticket #2

Create UI to allow Facilities managers to assign custom IDs to agents.

The UI must have a form that allows Facilities managers to search for agents by name using a typeahead form input. There is an additional input for the new custom ID. The custom ID field must have form validation to ensure the string is within the `VARCHAR(255)` size in the database.

When selecting a user from the typeahead, we must call the `GET` agent endpoint (see ticket #3) to retrieve any existing custom ID for this facility and populate the custom ID field below with this data.

When submitting the form, call the new endpoint detailed in ticket #3.

#### Copy

The typeahead for searching for users has the following label:

> Find agent by name

The custom ID input has a label of:

> Custom ID

And the submit button has different copy depending on the action. If there was no custom ID previously, the copy is "Add". If the operation is updating a previously set ID the copy is "Update".

### Ticket #3

Add new API routes to accept custom ID for agent. These routes are `POST`/`PUT` routes that accept the facility ID, the agent ID (ours), and the new custom ID.

Add a new `GET` route that accepts the facility ID as a query parameter and returns the custom ID assigned by the facility.

- `POST /agent/{agentID}/custom-id`
- `PUT /agent/{agentID}/custom-id`
- `GET /agent/{agentID}/custom-id?facilityID={facilityID}`

Time estimate: 2 days.

### Ticket #4

Update `getShiftsByFacility` function to return custom ID with agent metadata. This function will have to call the new `GET` endpoint detailed in ticket #3.

Time estimate: 4 hours.

## Ticket #5

Update `generateReport` function to include custom ID instead of the internal ID.

Time estimate: 4 hours.
