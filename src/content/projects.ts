export type CompetencyTag =
  | "Strategy & Alignment"
  | "ID & Technology"
  | "Collaboration"
  | "Problem-Solving";

export type Artifact = {
  label: string;
  type: "image" | "link" | "pdf";
  url: string;
  note?: string;
};

export type ImpactMetric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  oneLineOutcome: string;
  summary: string;
  role: string;
  context: string;
  constraints: string[];
  approachSteps: string[];
  artifacts: Artifact[];
  impact: ImpactMetric[];
  tools: string[];
  competencyTags: CompetencyTag[];
  reflection: string;
};

export const competencyOptions: CompetencyTag[] = [
  "Strategy & Alignment",
  "ID & Technology",
  "Collaboration",
  "Problem-Solving",
];

export const projects: Project[] = [
  {
    slug: "alt-scan-accessibility-tool",
    title: "Alt-Scan Accessibility Tool",
    oneLineOutcome:
      "Automates alt-text audits so instructional designers can resolve accessibility gaps faster.",
    summary:
      "Created a Python tool that extracts images missing alt text from PDFs, Word docs, and PPTs, producing a receipt that SMEs can complete and return for quick remediation.",
    role: "Instructional Design Specialist • Solution Architect",
    context:
      "Instructional designers needed a faster way to gather accurate alt text from subject matter experts without lengthy back-and-forth.",
    constraints: [
      "Mixed file types (PDF, DOCX, PPTX)",
      "Quick turnaround for course updates",
      "Needed an intuitive workflow for SMEs",
    ],
    approachSteps: [
      "Discovery with instructional design teams",
      "Alignment on accessibility criteria and handoff flow",
      "Design of extraction logic and receipt format",
      "Build + QA with team collaboration",
      "Iterate based on feedback",
    ],
    artifacts: [
      {
        label: "Alt-Scan UI screenshot",
        type: "image",
        url: "/artifacts/alt-scan-screenshot.png",
      },
      {
        label: "Alt-Scan flyer (image)",
        type: "image",
        url: "/artifacts/alt-scan-presentation-flyer.png",
      },
      {
        label: "Alt-Scan output screenshot",
        type: "image",
        url: "/artifacts/alt-scan-output-screenshot.png",
      },
    ],
    impact: [
      { label: "Manual image checks", value: "Eliminated" },
      { label: "File types supported", value: "PDF/DOCX/PPTX" },
      { label: "Workflow speed", value: "Hours → minutes" },
    ],
    tools: ["Python", "Accessibility", "WCAG 2.1", "File processing"],
    competencyTags: [
      "ID & Technology",
      "Problem-Solving",
      "Collaboration",
    ],
    reflection:
      "Presented at the first FIU Online ID Expo; the fast, intuitive workflow made it easy for SMEs to contribute accurate alt text.",
  },
  {
    slug: "360-vr-simulation-learning-experience",
    title: "360° VR Simulation Learning Experience",
    oneLineOutcome:
      "A VR/AR multisensory lab experience gave students access to spaces they rarely get to visit.",
    summary:
      "Partnered with a professor to design a VR/AR experience in CenarioVR for LEI3723L — Recreational Therapy Facilitation Techniques and Modalities Lab, letting students explore multi-sensory rooms such as arousing and calming environments.",
    role: "Instructional Design Consultant",
    context:
      "Access to a therapy multi-sensory lab is limited, so we needed a scalable way for students to experience the space and its therapeutic intent.",
    constraints: [
      "Limited access to a physical multi-sensory lab",
      "Experience needed to work across VR/AR entry points",
      "Platform availability changed after delivery",
    ],
    approachSteps: [
      "Collaborated with faculty on room goals and learner outcomes",
      "Story-mapped an arousing room and a calming room experience",
      "Captured 360° footage onsite at Miami Jewish Health Center",
      "Built and tested the experience in CenarioVR",
      "Documented assets for future reuse",
    ],
    artifacts: [
      {
        label: "360° room preview",
        type: "image",
        url: "/artifacts/360-vr-screenshot-original.png",
      },
      {
        label: "360° room preview 2",
        type: "image",
        url: "/artifacts/360-vr-screenshot-2026-b.png",
      },
      {
        label: "Raw 360 footage playlist",
        type: "link",
        url: "https://youtube.com/playlist?list=PLcKLfL8aJDuG5urRVGMNDmTe5V5NHAzKe&si=2-seh_B6XkLOjKAE",
        note: "YouTube playlist from the VR/AR experience",
      },
    ],
    impact: [
      { label: "Student engagement", value: "Higher in AR/VR" },
      { label: "Assignment completion", value: "Improved" },
      { label: "Learner confidence", value: "Stronger after experience" },
    ],
    tools: ["CenarioVR", "360 Camera", "VR/AR"],
    competencyTags: [
      "ID & Technology",
      "Problem-Solving",
      "Collaboration",
    ],
    reflection:
      "FIU Online no longer has a CenarioVR license, so the original experience is no longer available, but the 360° footage preserves the work.",
  },
  {
    slug: "faculty-workshop-training-enablement",
    title: "Faculty Workshop / Training Enablement",
    oneLineOutcome:
      "Targeted Canvas workshops helped faculty build stronger rubrics and question banks with confidence.",
    summary:
      "Led two highlight trainings for FIU Online faculty: Building and Managing Rubrics in Canvas and Building Quizzes + Managing Question Banks in Canvas, with recordings shared for those who could not attend.",
    role: "Faculty Consultant",
    context:
      "Instructors were frequently running into issues with rubrics and question banks, especially during course copies, so I hosted a departmental workshop with College of Business faculty to address pain points and best practices.",
    constraints: [
      "Complex question bank behavior during course copies",
      "Varied Canvas experience across faculty",
      "Need for reusable, standards-aligned assets",
    ],
    approachSteps: [
      "Collected recurring issues from faculty support tickets",
      "Designed a live demo workflow for quizzes and question banks",
      "Demonstrated reuse strategies for midterms and finals",
      "Aligned rubric design to QM standards and objectives",
      "Recorded sessions and shared materials post-workshop",
    ],
    artifacts: [
      {
        label: "Canvas workshop screenshot",
        type: "image",
        url: "/artifacts/faculty-workshop-screenshot.png",
      },
      {
        label: "Building & Managing Rubrics (slides)",
        type: "pdf",
        url: "/artifacts/rubrics-workshop-slides.pdf",
        note: "Presentation shared with faculty",
      },
    ],
    impact: [
      { label: "Faculty engagement", value: "Higher workshop participation" },
      { label: "Question bank reliability", value: "Fewer copy issues" },
      { label: "Rubric quality", value: "Aligned to QM standards" },
    ],
    tools: ["Canvas", "Zoom", "QM Standards", "Faculty Enablement"],
    competencyTags: [
      "Collaboration",
      "Strategy & Alignment",
      "Problem-Solving",
    ],
    reflection:
      "Live demos plus recorded sessions ensured faculty could return to the steps when building quizzes, question banks, and QM-aligned rubrics. Other trainings hosted:\n• Designing with Impact: Using Photoshop to Elevate Course Visuals (2020)\n• Live Zoom Workshop: Instructional Designers & SMEs (2021)\n• Integrating Top Hat into Canvas: Enhancing Student Engagement (2021)\n• New Hire Onboarding: Tools, Processes, and FIU Online Standards (2021–2024)\n• Building Effective Assessments: Creating Question Banks and Quizzes in Canvas (2023)\n• Creating & Managing Rubrics in Canvas for Transparent Grading (2024).",
  },
  {
    slug: "fiu-online-showcase-course",
    title: "FIU Online Showcase Course",
    oneLineOutcome:
      "A Canvas-based hub spotlighting edtech, design principles, and exemplary learning experiences.",
    summary:
      "Developed showcase pages that highlight educational technology and successful Canvas implementations, giving faculty a quick way to explore tools and inspiring course design examples.",
    role: "Instructional Design Specialist",
    context:
      "FIU Online needed a centralized showcase to share innovative practices and tool guidance across the institution.",
    constraints: [
      "Ensure consistent layouts across multiple tool pages",
      "Balance inspiration with practical implementation guidance",
      "Keep content skimmable for busy faculty",
    ],
    approachSteps: [
      "Mapped priority tools with FIU Online stakeholders",
      "Built page templates aligned to Canvas LMS UX patterns",
      "Authored pages for Loom, Labster, Respondus LockDown Browser, Honorlock, and AR/VR",
      "Documented best practices and example use cases",
      "Published and reviewed pages with faculty feedback",
    ],
    artifacts: [
      {
        label: "Showcase page snapshot 1",
        type: "image",
        url: "/artifacts/showcase-screenshot-1.png",
      },
      {
        label: "Showcase page snapshot 2",
        type: "image",
        url: "/artifacts/showcase-screenshot-2.png",
      },
      {
        label: "FIU Online Showcase course",
        type: "link",
        url: "https://fiu.instructure.com/courses/52044/wiki",
        note: "Canvas course hub",
      },
    ],
    impact: [
      { label: "Faculty discovery", value: "Faster tool exploration" },
      { label: "Design inspiration", value: "Stronger course ideas" },
      { label: "Canvas adoption", value: "More consistent practices" },
    ],
    tools: ["Canvas", "Loom", "Labster", "Respondus", "Honorlock", "AR/VR", "Canva"],
    competencyTags: [
      "Strategy & Alignment",
      "ID & Technology",
      "Collaboration",
    ],
    reflection:
      "Showcasing real examples helped faculty connect tool capabilities to authentic learning outcomes. I was part of the Showcase Course Committee.",
  },
  {
    slug: "mslscm-orientation-shell",
    title: "MSLSCM Orientation Shell",
    oneLineOutcome:
      "A dual-modality orientation hub unified onboarding for both face-to-face and online students.",
    summary:
      "Built orientation Canvas shells for both the face-to-face and online Masters in Logistics & Supply Chain Management (MSLSCM), designed to serve as onboarding and an ongoing information hub.",
    role: "Instructional Design Specialist",
    context:
      "I worked with department stakeholders to define essential orientation content, organize it within Canvas, and future-proof the shell for ongoing student reference.",
    constraints: [
      "Serve both face-to-face and online cohorts",
      "Keep content easy to locate and update",
      "Ensure accessibility and consistent organization",
    ],
    approachSteps: [
      "Partnered with stakeholders to define required orientation content",
      "Structured modules to match program milestones",
      "Designed navigation to double as a long-term resource hub",
      "Built in Canvas with accessibility and consistency checks",
      "Reviewed and refined with department feedback",
    ],
    artifacts: [
      {
        label: "Orientation shell screenshot",
        type: "image",
        url: "/artifacts/mslscm-orientation-screenshot.png",
      },
    ],
    impact: [
      { label: "Orientation clarity", value: "Improved student readiness" },
      { label: "Resource access", value: "Always-on information hub" },
      { label: "Program alignment", value: "Consistent onboarding" },
    ],
    tools: ["Canvas", "Accessibility", "Information Architecture", "CidiLabs", "Photoshop"],
    competencyTags: [
      "Strategy & Alignment",
      "Problem-Solving",
      "Collaboration",
    ],
    reflection:
      "Creating a shared shell for both modalities ensured students always knew where to find critical program information.",
  },
  {
    slug: "pmbao-master-template-implementation",
    title: "PMBAO Program & CASE Master Template",
    oneLineOutcome:
      "Two college-wide master templates brought consistent, accessible, and engaging Canvas course design.",
    summary:
      "Built master templates for PMBAO and an earlier CASE program, designing logos, intuitive content placement, and accessible page structures that elevate engagement while keeping consistency across programs.",
    role: "Instructional Design Specialist",
    context:
      "PMBAO engaged our team to build a signature template aligned to departmental needs, building on lessons from the earlier CASE template that balanced imagery, accessibility, and consistency.",
    constraints: [
      "Multiple stakeholder groups with distinct brand needs",
      "Accessibility requirements alongside visual design goals",
      "Reusable components needed across multiple courses",
    ],
    approachSteps: [
      "Partnered with PMBAO stakeholders to define template goals",
      "Designed logos and visual system for program identity",
      "Built accessible, reusable Canvas page components",
      "Applied earlier CASE template learnings to refine layouts",
      "Presented the CASE template at IDTalks",
    ],
    artifacts: [
      {
        label: "PMBAO template snapshot",
        type: "image",
        url: "/artifacts/case-template-screenshot.png",
      },
      {
        label: "CASE template snapshot",
        type: "image",
        url: "/artifacts/pmbao-template-screenshot.png",
      },
      {
        label: "IDTalks presentation",
        type: "image",
        url: "/artifacts/idtalks-presentation-photo.png",
        note: "Presenting the CASE template at IDTalks",
      },
    ],
    impact: [
      { label: "Template consistency", value: "Program-wide adoption" },
      { label: "Accessibility", value: "Built into layouts" },
      { label: "Engagement", value: "Design-forward experience" },
    ],
    tools: ["Canvas", "HTML/CSS", "Accessibility", "CidiLabs", "Photoshop"],
    competencyTags: [
      "Strategy & Alignment",
      "ID & Technology",
      "Collaboration",
    ],
    reflection:
      "The earlier CASE template was one of the first FIU Online master templates to pair rich visuals with accessibility while maintaining a consistent experience across courses.",
  },
];
