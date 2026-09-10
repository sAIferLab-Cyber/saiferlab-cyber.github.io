---
layout: page
title: Thesis rules
eyebrow: Information for students
intro: The steps and working principles used to define, conduct, and complete a thesis with the group.
page_kind: rules
permalink: /rules/
---

## Table of Contents

1. [Preamble and Scope](#preamble)
2. [General Rules](#general-rules)
3. [Drafting Guidelines](#drafting-guidelines)
4. [Student Autonomy](#student-autonomy)
5. [Bachelor's Thesis](#bachelors-thesis)
6. [Master's Thesis](#masters-thesis)
7. [Final Phases](#final-phases)
8. [Final Clause](#final-clause)

# Thesis Regulations

## Before applying

Read the topic description and verify that your background is aligned with the expected activities. Contact the listed supervisor with a short introduction, your degree programme, relevant coursework or technical experience, and the period in which you intend to start.

## Bachelor's and Master's Degree Programs

<a id="preamble"></a>
## 1. Preamble and Scope

These regulations define the procedural rules, drafting standards, and role distribution among the student, supervisor, and co-supervisor for the preparation of the thesis.

They apply to:

- Bachelor's Degree thesis students in *Ingegneria Elettronica, Informatica e delle Tecnologie per Internet*;
- Master's Degree thesis students in Computer Engineering, Cybersecurity and Artificial Intelligence.

Acceptance of the thesis topic by the student implies full acceptance of these regulations.

<a id="general-rules"></a>
## 2. General Rules

### 2.1 Topic Assignment

The topic is assigned or agreed upon during a preliminary interview. Following assignment, the student has 7 days to officially confirm acceptance via email. After this deadline, the topic will be considered available again.

### 2.2 Co-Supervision

When provided, the co-supervisor follows the student more closely in day-to-day thesis work. The supervisor participates in meetings as needed and maintains general scientific oversight, but the co-supervisor is the student's first operational point of contact.

#### Task Distribution

- **Co-supervisor:** regular progress monitoring, methodological support, technical consistency verification, and first point of reference for technical questions.
- **Supervisor:** general scientific supervision, approval of the work direction, participation in strategic meetings, and handling of bureaucratic matters.

#### Limits of the Co-Supervisor

The co-supervisor does not act as a help desk for implementation, code, installation, or debugging issues. Their role remains one of supervision and methodological guidance, not execution or technical problem-solving on behalf of the student.

### 2.3 Shared Workspace

The student is assigned a shared workspace, such as a Git repository or Teams group, to be used for:

- tracking work progress;
- publishing and versioning produced code;
- sharing documentation, data, and intermediate results.

The student is required to keep the workspace regularly updated. Failure to publish code or progress for periods exceeding 3 weeks will result in a formal warning.

### 2.4 Periodic Updates

- **Bachelor's thesis students:** meeting or written report with a PPT presentation every 3 weeks.
- **Master's thesis students:** meeting or written report with a PPT presentation every 2 weeks.

Updates must include progress status, difficulties encountered, and next objectives. Failure to present two consecutive updates without justification will result in temporary suspension of supervision until regularity is restored.

### 2.5 Deadlines and Timelines

The thesis student commits to respecting the following general deadlines:

- **Bachelor's:** 6 months from the date of topic acceptance.
- **Master's:** 8 months from the date of topic acceptance.

<table border="1" cellspacing="0" cellpadding="8">
  <thead>
    <tr>
      <th>Phase</th>
      <th>Bachelor's</th>
      <th>Master's</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Delivery of structured methodological<br />
        and experimental plan
      </td>
      <td>Month 1</td>
      <td>Month 1</td>
    </tr>
    <tr>
      <td>Execution of experiments</td>
      <td>Months 2–4</td>
      <td>Months 2–6</td>
    </tr>
    <tr>
      <td>First draft of thesis</td>
      <td>Month 4</td>
      <td>Months 6–7</td>
    </tr>
    <tr>
      <td>Delivery of final version</td>
      <td>Month 5</td>
      <td>Month 7</td>
    </tr>
  </tbody>
</table>

Dates are indicative and agreed upon on a case-by-case basis. Any delay exceeding 20% of the expected duration must be justified in writing at least 30 days before the original deadline.

### 2.6 Communication

- **Official channel:** institutional email.
- **Technical issues:** co-supervisor, if present; otherwise supervisor.
- **Bureaucratic issues:** supervisor.
- **Co-supervisor communications:** may take place via Microsoft Teams if expressly agreed.
- **Response time:** up to 5 working days for ordinary emails; up to 10 working days for review of a chapter or thesis draft.

Instant messaging services, including WhatsApp, Telegram, and SMS, are not allowed for substantial thesis matters unless expressly agreed otherwise with the co-supervisor.

<a id="drafting-guidelines"></a>
## 3. Drafting Guidelines

### 3.1 Writing Tool

The thesis must be written exclusively in LaTeX. No other writing tools are allowed, including Word or Google Docs.

The student is responsible for independently learning LaTeX. The supervisor and co-supervisor do not provide technical support for compilation, package management, or build error resolution.

### 3.2 Document Structure

The thesis must respect the following general minimum structure:

1. Title page
2. Table of contents
3. Introduction
4. State of the art / Background
5. Methodology / Original contribution
6. Results / Experimentation / Analysis
7. Conclusions and future developments
8. Bibliography
9. Appendices, if applicable

### 3.3 Style and Form

- **Language:** Italian or English, agreed upon at the time of assignment. English is mandatory for Master's theses.
- **Style:** formal, grammatically impersonal, and terminologically precise.
- **Figures and tables:** numbered, cited in the text, and provided with a caption and source where applicable.
- **Source code / pseudocode:** included in suitable environments and explained in the text. Uncommented or excessively long listings must not be attached.
- **LaTeX template:** mandatory for Master's theses.

### 3.4 Citations and Plagiarism

Every idea, datum, or text fragment that is not original must be cited. Plagiarism, including partial or accidental plagiarism, will result in immediate suspension of the work and reporting to the Department Commission.

<a id="student-autonomy"></a>
## 4. Student Autonomy and Role of Supervisor/Co-Supervisor

### 4.1 Fundamental Principle

The thesis is an autonomous work of the student. The supervisor and co-supervisor provide scientific and methodological supervision; they do not substitute for the student or execute the work on their behalf.

### 4.2 What Does Not Fall Within Their Role

The supervisor and co-supervisor do **not**:

- write paragraphs, code, formulas, or queries on behalf of the student;
- act as a technical help desk for installation, environment configuration, compilation, or runtime-error debugging;
- solve implementation problems that the student can address through official documentation, technical forums, manuals, or institutional tutoring;
- provide support on prerequisites such as programming languages, statistical tools, or LaTeX.

### 4.3 What Falls Within Their Role

- **Supervisor:** guides scientific direction and problem definition; evaluates methodological consistency; provides feedback on structure, argumentation, and exposition; identifies critical issues and bibliographic gaps; approves the final version; handles bureaucratic matters.
- **Co-supervisor:** monitors operational progress; verifies the technical consistency of the work; provides methodological feedback on implementation choices; serves as first point of reference for technical questions, within the limits above.

### 4.4 Handling Technical Difficulties

The student is required to:

1. Consult official documentation independently.
2. Check reliable sources, such as forums, repositories, and manuals.
3. Summarize the problem in a structured manner: intended outcome, attempts made, and exact error obtained.
4. Submit the issue to the co-supervisor, or supervisor when no co-supervisor is present, only if it affects the scientific validity of the work.

<a id="bachelors-thesis"></a>
## 5. Specifications for Bachelor's Thesis

- **Indicative length:** 30–50 pages, excluding title page, table of contents, and bibliography.
- **Depth level:** demonstration of topic mastery, critical analysis, and practical application of known methodologies.
- **Originality:** absolute scientific originality is not required; autonomy in application and discussion of results is required.
- **Code / implementation:** if included, it must be functional and documented, but cannot be the sole object of the thesis.

<a id="masters-thesis"></a>
## 6. Specifications for Master's Thesis

- **Indicative length:** 70–100+ pages.
- **Depth level:** original contribution or innovative application; critical mastery of the state of the art; ability to position the work with respect to the literature.
- **Originality:** an element of novelty is required, whether theoretical, methodological, or applicative, explicitly stated and defended.

<a id="final-phases"></a>
## 7. Final Phases

### 7.1 Draft Submission

The complete draft must be submitted in PDF format at least 20 days before the expected graduation date.

### 7.2 Review

The supervisor, and where involved the co-supervisor, may request up to two review cycles. Further substantial modifications requested beyond the second cycle may result in postponement of the graduation session.

### 7.3 Final Approval

The final version must be approved in writing, by confirmation email from the supervisor, at least 7 days before the deadline for submission to the Registrar's Office.

<a id="final-clause"></a>
## 8. Final Clause

These regulations may be supplemented by specific agreements between the supervisor, co-supervisor, and student, provided they do not conflict with University regulations. In case of disputes, reference is made to the University Teaching Regulations and the judgment of the Degree Program Coordinator.
