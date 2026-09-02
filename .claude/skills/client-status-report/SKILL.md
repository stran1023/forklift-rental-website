---
name: client-status-report
description: Summarize what's finished vs. still in progress on the project, then draft a non-technical client-facing status update message. Use when the user asks for a project status summary, a progress report, or a message/email to send to a client/stakeholder about where the work stands.
license: MIT
---

# Client Status Report

Produces two things every time: (1) an accurate internal scope summary, and
(2) a client-facing message built from it. Never skip straight to the message
— the summary is what keeps the message honest.

## Gap it fills

Harness files like `feature_list.json` / `progress.md` go stale fast — they
get updated at the end of a work session, not after every commit. Drafting a
client message straight from memory or from those files risks reporting
placeholder/demo work as finished, or missing something that shipped since
the docs were last touched. This skill forces a ground-truth check first.

## Step 1 — Establish ground truth (don't trust docs alone)

Gather from the actual current state, not just from what's remembered in
conversation:

- `git log --oneline <base>..<branch>` (or since the last reported date/tag)
  for every commit that actually shipped, on the branch that's really
  deployed (check which branch is live, e.g. `master`).
- `feature_list.json` / `progress.md` if the project has them — but treat
  timestamps and statuses as a *starting point*, not fact. Cross-check any
  status against the current code (e.g. "in_progress" or "not_started" is
  wrong if a later commit shipped it, or right if the doc was too optimistic).
- Any open vs. merged PRs (`gh pr list --state all`) to know what's actually
  live vs. still sitting on a branch.
- Read the actual code for anything that smells like a demo/placeholder
  before calling it done — mock data, hardcoded arrays, TODO/FIXME comments,
  forms that don't call a real backend, `console.log` where a network call
  should be. Grep for words like "mock", "placeholder", "fake", "TODO".

## Step 2 — Write the internal scope summary

Group into exactly three buckets, each item one line:

- **Finished & live** — shipped, merged to the deployed branch, verified
  working. If something is built but only *shows* placeholder data (mock
  reviews, demo content), it goes here but flagged explicitly as
  placeholder — don't let it read as "done" without that caveat.
- **In progress** — partially built, or built but not wired to a real
  backend/data source yet.
- **Not started** — no work yet, even if planned.

Call out anything risky in plain terms: a form that doesn't save
submissions, content that can't be edited without a code deploy, auth that
doesn't exist yet. These are exactly the things a client will assume work
unless told otherwise.

## Step 3 — Draft the client message

Before writing, check (ask the user if genuinely unclear, don't guess):
- **Language** — match the audience, not the conversation language. If the
  product/business content is in a specific language, default to that
  language for the client message unless told otherwise.
- **Channel/tone** — email, chat message, formal report? Keep it short by
  default; expand only if asked.

Then write it following these rules:
- No engineering jargon: no "PR", "branch", "commit", "merge", "endpoint",
  "backend" as a bare word — describe user-visible effect instead ("saved to
  our system", "an admin dashboard", "not yet connected").
- Lead with what's live and working — the client wants reassurance the site
  reflects real progress before hearing about gaps.
- State every placeholder/non-functional piece explicitly and neutrally
  (not apologetically, not hidden) — e.g. "the reviews shown are sample
  placeholders; send us your real customer reviews and we'll swap them in."
  If a form/feature looks live but isn't actually capturing data yet, say so
  plainly so the client doesn't rely on it.
- Don't promise dates unless the user gives one.
- Close with a clear, small next step (a call, a piece of content needed
  from the client, or what's next in the queue) — not a vague "let us know
  if you have questions."

## Output format

Reply with two clearly separated sections: `## Scope Summary` (the three
buckets from Step 2) and `## Client-facing message` (the drafted message,
ready to copy-paste). Offer — don't assume — a translation or tone rewrite
if the audience/language wasn't confirmed.
