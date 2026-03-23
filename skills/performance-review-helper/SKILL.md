---
name: performance-review-helper
description: Drafts balanced, specific, actionable performance reviews — for managers writing reviews of direct reports, employees writing self-evaluations, or 360 peer feedback. Transforms vague impressions into documented, constructive feedback with built-in bias checks.
triggers:
  - performance review
  - write review
  - employee review
  - performance feedback
  - annual review
  - self review
  - 360 feedback
---

## What it does

Turns raw notes, bullet points, and impressions into polished, evidence-based performance reviews. The hardest part of writing reviews isn't knowing what happened — it's translating it into language that is specific, fair, constructive, and useful for the recipient. This skill does that translation.

Works for three review types:
- **Manager → direct report**: formal annual/mid-year review
- **Self-evaluation**: employee writes their own review (a separate skill from describing accomplishments)
- **360 peer feedback**: feedback on a colleague, calibrated to be honest but constructive

Built-in bias check at every step: flags vague language, double standards, and personality-focused (vs. behavior-focused) feedback before the review is finalized.

## How to invoke

Describe the person, their role, and what happened this review period. The skill will structure it into a complete draft.

Examples:
- `/performance-review-helper Manager review of mid-level engineer — exceeded on delivery, needs growth in communication`
- `Help me write my self-evaluation for my senior PM role — strong half on roadmap, weaker on stakeholder management`
- `I need to write 360 feedback for a colleague who's great technically but often derails meetings`

## Workflow

### Step 1 — Review type
Establish the frame:

- **Manager → direct report**: you are writing a formal review that will be seen by the employee and may affect compensation, promotion, or HR record
- **Self-evaluation**: you are writing about yourself, likely as input into a manager's review or for a promotion case
- **360 peer feedback**: you are providing feedback on a colleague — this may be anonymous or attributed

Each type requires a different voice and emphasis. Manager reviews carry authority; self-evals require confident advocacy; peer feedback should be honest but constructive (not a grievance filing).

### Step 2 — Collect raw inputs
Gather everything available about the review period:

- **Role and level**: title, seniority (IC3, IC4, Manager, etc.)
- **Review period**: Q1 2026, FY2025, H1 2025, etc.
- **Key projects/accomplishments**: what did they actually ship, lead, or contribute to? List everything, even rough bullets.
- **Challenges or misses**: what didn't go well? Deadlines missed, incidents caused, feedback received, conflicts?
- **Notable behaviors**: specific things you observed — positive (went above and beyond, mentored someone, handled a hard situation well) and constructive (missed meetings, defensive to feedback, communication gaps)
- **Overall performance level**: Exceeds / Meets / Needs Improvement (or company-specific rating)
- **Promotion readiness** (optional): is this person ready for the next level?

If inputs are sparse, the skill will prompt for more before proceeding — a good review cannot be written from nothing.

### Step 3 — Accomplishments section
Reframe raw bullets into impact statements.

**Formula**: "Led / Owned / Delivered [X] which resulted in [Y] as measured by [Z]."

**Examples**:
- Raw: "Worked on the payment migration project"
- Reframed: "Led the migration of our payment processing infrastructure to Stripe, completing on schedule and reducing transaction failure rate from 2.3% to 0.4%."

- Raw: "Did a lot of support for junior engineers"
- Reframed: "Mentored two IC2 engineers through their first production on-call rotations, both of whom successfully resolved P1 incidents independently within the quarter."

**Quantify wherever possible**: percentages, dollar amounts, time saved, headcount, NPS scores, uptime, release velocity. If exact numbers aren't available, use directional language ("reduced significantly," "cut by roughly half") with a note to verify before publishing.

### Step 4 — Strengths narrative
Write 2-3 strengths with specific behavioral evidence.

**Template**:
> **[Strength name]**: [Name] consistently demonstrates [strength] through [specific behavior]. A clear example was [specific incident/project], where [what they did] resulted in [outcome/impact]. This has [effect on team/product/company].

**Avoid generic praise**:
- "Great team player" → "Consistently volunteers to unblock teammates; when the backend API was delayed in Q3, [Name] proactively picked up the integration testing work to keep the frontend team moving."
- "Strong communicator" → "Writes clear, proactive status updates that give stakeholders confidence without requiring check-ins. The product team specifically cited [Name]'s weekly summaries as a model during the Q4 planning process."

### Step 5 — Growth areas
Write 1-2 specific, actionable development areas. Framed as growth toward potential, not as failures.

**Template**:
> **[Growth area]**: One area where [Name] has an opportunity to grow is [specific competency]. This showed up in [specific observable behavior/incident, not personality]. The impact was [effect on team/project]. A suggested next step is [concrete, achievable action — training, pairing with someone, taking on a specific type of project, etc.].

**Examples**:
- "Upward communication: [Name] frequently does excellent work that isn't visible to stakeholders because updates aren't sent until completion. A next step would be establishing a weekly status note to the PM and EM by EOD Friday — even if just 3 bullets."
- "Scope management: On two projects this half, [Name] took on additional work mid-sprint without flagging capacity tradeoffs, which contributed to missed deadlines. Practicing explicit tradeoff conversations with the EM before expanding scope would strengthen this."

**Bias check**: growth areas should be framed around **observable behaviors**, not personality traits. "Needs to be more confident" is not actionable. "In three team meetings this quarter, [Name] had relevant context but didn't speak up until directly asked — proactively contributing to design discussions is a growth opportunity" is specific and actionable.

### Step 6 — Overall rating justification
A paragraph that supports the rating with specific evidence. Calibrate tone to the rating:

- **Exceeds**: acknowledge the bar that was cleared and what makes this exceptional — not just "did their job well"
- **Meets**: validate solid performance without damning with faint praise — frame as delivering reliably, which is genuinely valued
- **Needs Improvement**: be direct but constructive; specific about what "meeting bar" looks like, and what support is available

**Bias check**: Before finalizing, ask:
- Would I write this same paragraph about a colleague of a different gender/race/age with the same performance?
- Am I holding this person to a higher bar because they're "supposed to be" at the next level?
- Am I attributing success to external factors ("the team helped a lot") for this person but internal factors for others?
- Are my growth areas framed as behaviors or as personality?

### Step 7 — Goals for next period
2-3 SMART goals based on growth areas and team priorities.

**SMART format**: Specific, Measurable, Achievable, Relevant, Time-bound.

**Template**:
> **Goal [N]**: [Action verb] [specific outcome] by [timeframe], as measured by [how you'll know it happened].

**Examples**:
- "Lead the end-to-end delivery of [Feature X] from design review to GA by Q3, owning the cross-functional coordination with Design, Product, and QA."
- "Grow mentorship skills by formally onboarding one new IC2 hire in H1 — including weekly 1:1s, code review, and 30/60/90 plan check-ins."
- "Improve upward communication: send a project status note to EM and PM every Friday by EOD, starting January 6. Goal: no more 'I didn't know about that' feedback from stakeholders in the H1 check-in."

---

## Built-in bias checks

The skill applies bias checks at every step. Flags include:

| Pattern | Example | Why it's a problem |
|---|---|---|
| Personality vs. behavior | "She's too emotional" | Not actionable; likely reflects bias |
| Vague negative language | "Didn't always meet expectations" | Unactionable; what specifically? |
| Attribution asymmetry | Crediting team for successes, individual for failures (or vice versa) | Inconsistent standards |
| Likability vs. performance | "Rubs people the wrong way" | Penalizes assertiveness, often gender-coded |
| Recency bias | Only reviewing last 6 weeks | Missing full performance period |
| Halo/horn effect | One great/terrible project colors entire review | Lacks balance |

---

## Live Data Sources

- **SHRM Performance Management Research** (shrm.org) — evidence-based guidance on performance calibration, feedback effectiveness, and review cycle design from the Society for Human Resource Management.
- **OKR Benchmark Databases** — industry OKR examples and goal-setting frameworks (e.g., from Workboard, Lattice, and Culture Amp research) to help calibrate SMART goals against what high-performing teams at comparable companies target.

---

## Example output

**Input**: Manager review of mid-level engineer (IC3). Exceeded on delivery — shipped 3 major features on time, helped debug a production incident. Needs growth in communication — doesn't send updates, stakeholders often surprised. Overall: Meets Expectations (strong Meets, close to Exceeds).

**Accomplishments** (excerpt):
> This half, [Name] delivered three significant product features — [A], [B], and [C] — all on or ahead of schedule. Notably, [Name] played a key role in diagnosing and resolving a P1 payment processing incident in October, reducing customer-impacting downtime from an estimated 4+ hours to 47 minutes.

**Strengths** (excerpt):
> **Delivery reliability**: [Name] has an exceptional track record of shipping what they commit to. In a half where the broader team missed 40% of sprint commitments due to shifting priorities, [Name] hit 9 of 10 sprint goals. Engineering leadership has cited [Name] as a model of dependable execution.

**Growth area** (excerpt):
> **Proactive communication**: One consistent gap this half was keeping stakeholders informed without being asked. On the [B] feature, the PM learned the launch date had slipped by one week only when they checked the ticket — not from a direct update. Establishing a lightweight weekly status note (even 2-3 bullets) would significantly improve confidence across the team.

**Goal for next period**:
> By March 31, establish a weekly Friday status update habit for active projects — one note per project, sent to EM and relevant PM. Success metric: zero "I didn't know about that" surprises from stakeholders in the H1 check-in.
