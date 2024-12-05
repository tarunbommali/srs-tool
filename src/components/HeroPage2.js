import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Description, Checklist, Assessment, Build, Star as StarIcon } from "@mui/icons-material"; // Add StarIcon import

const HeroPage2 = () => {
  return (
    <div className="h-full">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="Step 1"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Description />}
        >
          <h3 className="vertical-timeline-element-title">1. Introduction</h3>
          <p>
            Understand the purpose, scope, and key definitions of your project to set the stage for the SRS.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Step 2"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Checklist />}
        >
          <h3 className="vertical-timeline-element-title">2. Overall Description</h3>
          <p>
            Describe the product's perspective, major functions, and user characteristics. Identify system constraints and assumptions.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Step 3"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Assessment />}
        >
          <h3 className="vertical-timeline-element-title">3. System Features</h3>
          <p>
            Define core system functionalities and detailed use cases for your application.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Step 4"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Checklist />}
        >
          <h3 className="vertical-timeline-element-title">4. Data Requirements</h3>
          <p>
            Specify the logical data model, data dictionaries, and reporting needs.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Step 5"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Build />}
        >
          <h3 className="vertical-timeline-element-title">5. External Interface Requirements</h3>
          <p>
            Define user interface, software, hardware, and communication interfaces required for the system.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Step 6"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<Checklist />}
        >
          <h3 className="vertical-timeline-element-title">6. Quality Attributes</h3>
          <p>
            Highlight performance, security, usability, and safety requirements of the system.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Step 7"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<Checklist />}
        >
          <h3 className="vertical-timeline-element-title">7. Appendices</h3>
          <p>
            Provide supplementary information such as a glossary and other relevant data.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default HeroPage2;
