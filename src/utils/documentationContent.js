const DOCUMENTATION_CONTENT = {
  sections: [
    {
      id: "introduction",
      title: "1. Introduction",
      subsections: [
        { id: "purpose", title: "1.1 Purpose", content: "Define the purpose of the SRS document, outlining the scope of the software system." },
        { id: "scope", title: "1.2 Scope", content: "Provide an overview of the software, its benefits, objectives, and goals." },
        { id: "definitions", title: "1.3 Definitions, Acronyms, and Abbreviations", content: "Define terms, acronyms, and abbreviations used in the document." },
        { id: "references", title: "1.4 References", content: "List references such as related documents, manuals, or standards." },
      ],
    },
    {
      id: "overall-description",
      title: "2. Overall Description",
      subsections: [
        { id: "product-perspective", title: "2.1 Product Perspective", content: "Describe how the system fits into the existing environment." },
        { id: "product-functions", title: "2.2 Product Functions", content: "Summarize the system's major functions." },
        { id: "user-characteristics", title: "2.3 User Characteristics", content: "Identify user types and their needs." },
        { id: "operating-environment", title: "2.4 Operating Environment", content: "Specify the hardware, software, and network environment." },
        { id: "constraints", title: "2.5 Design and Implementation Constraints", content: "Mention constraints such as regulations, standards, or specific technologies." },
        { id: "assumptions", title: "2.6 Assumptions and Dependencies", content: "State assumptions about the system or dependencies on external factors." },
      ],
    },
    {
      id: "system-features",
      title: "3. System Features",
      subsections: [
        { id: "feature1", title: "3.1 Feature 1", content: "Provide a description and related functional requirements." },
        { id: "feature2", title: "3.2 Feature 2", content: "Continue describing system features and functionality." },
      ],
    },
    {
      id: "data-requirements",
      title: "4. Data Requirements",
      subsections: [
        { id: "logical-data-model", title: "4.1 Logical Data Model", content: "Explain the structure of the data." },
        { id: "data-dictionaries", title: "4.2 Data Dictionaries", content: "Define data elements used in the system." },
        { id: "reports", title: "4.3 Reports", content: "List required system reports." },
        { id: "data-integrity", title: "4.4 Data Integrity and Disposal", content: "Address data validation, protection, and removal policies." },
      ],
    },
    {
      id: "external-interface-requirements",
      title: "5. External Interface Requirements",
      subsections: [
        { id: "user-interface", title: "5.1 User Interface", content: "Describe the user interface design principles and components." },
        { id: "software-interfaces", title: "5.2 Software Interfaces", content: "Define interactions with other systems or software." },
        { id: "hardware-interfaces", title: "5.3 Hardware Interfaces", content: "Specify hardware requirements." },
        { id: "communication-interfaces", title: "5.4 Communication Interfaces", content: "Describe network protocols and communication standards." },
      ],
    },
    {
      id: "quality-attributes",
      title: "6. Quality Attributes",
      subsections: [
        { id: "usability", title: "6.1 Usability", content: "Define usability goals." },
        { id: "performance", title: "6.2 Performance", content: "Specify performance requirements." },
        { id: "security", title: "6.3 Security", content: "Outline security measures and protocols." },
        { id: "safety", title: "6.4 Safety", content: "Discuss safety aspects and failure mitigation." },
      ],
    },
    {
      id: "internationalization",
      title: "7. Internationalization",
      subsections: [
        { id: "localization", title: "7.1 Localization", content: "Describe support for multiple languages, currencies, etc." },
        { id: "schedule-budget", title: "7.2 Schedule and Budget", content: "Provide a timeline and estimated budget for the project." },
      ],
    },
    {
      id: "appendices",
      title: "8. Appendices",
      subsections: [
        { id: "supplementary-info", title: "8.1 Supplementary Information", content: "Include additional details not covered in the main sections." },
        { id: "glossary", title: "8.2 Glossary", content: "Define terms, acronyms, and abbreviations used in the document." },
      ],
    },
  ],
};

export default DOCUMENTATION_CONTENT;
