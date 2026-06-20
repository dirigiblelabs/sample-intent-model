# sample-intent-model

A Dirigible **intent** sample. A single [`app.intent`](sample-intent-model/app.intent) YAML file at
the project root is the source of truth, one altitude above the model files. Open it in the Intent
Editor and click **Generate** to produce the derived model files next to it:

- `library.edm` + `library.model` — entities + relations
- `LoanApproval.bpmn` — the loan-approval process
- `ApproveLoan.form` — the approval form
- `MembersWithLoansDue.report` — members with loans currently due
- `library.roles` — permissions
- `genres.csvim` + `genres.csv` — seed data
- `library.glue` — declarative glue, generated as annotated client-Java (listeners, jobs, controllers)

The intent models a small library domain (Genre, Book, Member, Loan) with a manager/curator loan
approval workflow. Beyond the model files it also showcases **declarative glue** — often-used
integrations expressed directly in the intent and generated as annotated client-Java against
`org.eclipse.dirigible.sdk.*`, so the need for hand-written code stays low:

- **notifications** — email the desk whenever a Loan is updated
- **schedules** — a daily job that emails notices for overdue loans
- **integrations** — POST each new Loan to a partner endpoint
- **inbound** — a webhook that creates a Loan from a posted JSON body
- **rollups** — keep `Book.loanCount` in sync with the number of Loans per Book

See the Eclipse Dirigible intent layer for details.
