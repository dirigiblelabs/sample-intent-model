/*
 * Hand-written service-task handler referenced by the LoanApproval process
 * (notifyMember step: `call: custom/notify-member.ts`).
 *
 * This lives under custom/ - the escape hatch the intent layer never generates or overwrites - so
 * edit it freely. The intent generator only wires the BPMN service task to this path; the business
 * logic is yours. Here it simply records that the member should be notified of the loan decision.
 */
console.log("LoanApproval: notifying the member about the loan decision.");
