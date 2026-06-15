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

The intent models a small library domain (Genre, Book, Member, Loan) with a manager/curator loan
approval workflow. See the Eclipse Dirigible intent layer for details.
