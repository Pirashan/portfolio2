import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaRegStar } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";

function WorkExperience() {
  return (
    <div id='workexperience' className='w-full min-h-screen justify-center'>
        <div className='max-w-[1240px] mx-auto px-2 py-16 content-center'>
        <p className='text-2xl font-semibold tracking-widest mt-10 uppercase text-[#5651e5]'>
            Work Experience
        </p>
        </div>

        <div className='w-full min-h-screen p-2 flex items-center'>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(204, 204, 245)'}}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Mar 2023 - Present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaBriefcase />}
        >
            <h2 className="vertical-timeline-element-title">Business Analyst</h2>
            <h4 className="vertical-timeline-element-subtitle">BTCG</h4>
            <p>
                - Executed lead and analyst roles for an SAP EAM implementation project to
                provide resource support for utility industry clients
            </p>
            <p>
                - Pitched a TensorFlow-based ANN to estimate time to repair damaged assets
            </p>
            <p>
                - Led analysis and migration on asset data, including data cleaning,
                transformation, and validation while managing analysts to run mock loads and
                data verification/validation cycles
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2022 - Feb 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaBriefcase />}
        >
            <h2 className="vertical-timeline-element-title">Salesforce Business Analyst</h2>
            <h4 className="vertical-timeline-element-subtitle">Adi Group</h4>
            {/* <p>
                - Deployed Service Cloud from ideation to implementation, including roadmap
                development, UAT and training of end users
            </p>
            <p>
                - Designed Visualforce pages using Apex and JS to better handle case creation,
                decreasing cycle time by 65%
            </p>
            <p>
                - Created dashboards for KPI tracking using APIs in Power BI from ProCore
                data, leading to reduction in average ticket age by 40%
            </p> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2021 - Jan 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaBriefcase />}
        >
            <h2 className="vertical-timeline-element-title">Customer Success Engineer</h2>
            <h4 className="vertical-timeline-element-subtitle">Shoplogix Inc.</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2019 - Apr 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaBriefcase />}
        >
            <h2 className="vertical-timeline-element-title">Project Manager</h2>
            <h4 className="vertical-timeline-element-subtitle">Toyota Motor Manufacturing Canada</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2024 - Present"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<IoMdSchool />}
        >
            <h2 className="vertical-timeline-element-title">Georgia Institute of Technology</h2>
            <h3 className="vertical-timeline-element-title">MS in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Atlanta, GA</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2017 - 2022"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<IoMdSchool />}
        >
            <h2 className="vertical-timeline-element-title">University of Waterloo</h2>
            <h3 className="vertical-timeline-element-title">BASc in Chemical Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Waterloo, ON</h4>
            <p>
            Cum. GPA: 3.70 / 4.0
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<FaRegStar />}
        />
        </VerticalTimeline>
        </div>
    </div>
  )
}

export default WorkExperience