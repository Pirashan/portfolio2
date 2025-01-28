import React, { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaRegStar } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";

function WorkExperience() {
    const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setAnimate(false);
      } else {
        setAnimate(true);
      }
    };

    handleResize(); // Check the screen size initially
    window.addEventListener('resize', handleResize); // Add event listener for screen resize

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id='workexperience' className='w-full min-h-screen justify-center'>
        <div className='max-w-[1240px] mx-auto px-2 py-16 content-center'>
        <p className='text-2xl font-semibold tracking-widest mt-10 uppercase text-[#5651e5]'>
            Work Experience
        </p>
        </div>

        <div className='w-full min-h-screen p-2 flex items-center'>
        <VerticalTimeline
            animate = {animate}
        >
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(204, 204, 245)'}}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Mar 2023 - Present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaBriefcase />}
        >
            <h2 className="vertical-timeline-element-title">Data/ML Software Consultant</h2>
            <h4 className="vertical-timeline-element-subtitle">BTCG</h4>
            <p>
                - Directed machine learning initiatives with TensorFlow-based neural networks, achieving a 72% improvement in damaged
                asset repair time prediction.
            </p>
            <p>
                - Aggregated unstructured data from 20+ sources to build Power BI dashboard; eliminated 100% of visibility issues.
            </p>
            <p>
                - Led analysis and migration of data, including data cleaning, transformation, and validation while managing analysts to run
                mock loads and data verification/validation cycles.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2022 - Feb 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaBriefcase />}
        >
            <h2 className="vertical-timeline-element-title">Operations Program Manager</h2>
            <h4 className="vertical-timeline-element-subtitle">ADI Development Group</h4>
            <p>
                - Led end-to-end deployment of Service Cloud (Salesforce), from ideation to implementation, including Scrum adoption,
                    roadmap development, UAT, and end-user training.
            </p>
            <p>
                - Designed and developed Visualforce pages with Apex and JavaScript to handle case creation, decreasing cycle time by 65%.
            </p>
            <p>
                - Created dashboards for KPI tracking using APIs in Power BI from ProCore
                data, leading to reduction in average ticket age by 40%
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2021 - Jan 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaBriefcase />}
        >
            <h2 className="vertical-timeline-element-title">Customer Success Engineering Intern</h2>
            <h4 className="vertical-timeline-element-subtitle">Shoplogix Inc.</h4>
            <p>
                - Identified inefficient processes through API queries and organized customer machine data reports for determining OEE
                patterns, trend analyses, and ROI improvements.
            </p>
            <p>
                - Developed Python scripts to restore lost XML data with 100% accuracy, resolving discrepancies and ensuring data integrity.
            </p>
            <p>
                - Leveraged AWS servers, cloud services, and hardware/software connections to support customers with modifications.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2019 - Apr 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaBriefcase />}
        >
            <h2 className="vertical-timeline-element-title">Manufacturing Engineering Specialist Intern</h2>
            <h4 className="vertical-timeline-element-subtitle">Toyota Motor Manufacturing Canada</h4>
            <p>
                - Built a Production Scheduler using Python and the Pandas/NumPy/SciPy libraries to optimize production scheduling by 8%.
            </p>
            <p>
                - Managed cross-functional team programming for external contractors and internal engineers to ensure smooth installation of
                $6M project impacting 250 employees.
            </p>
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
            <p>
            Cum. GPA: 3.90 / 4.0
            </p>
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
            Cum. GPA: 3.90 / 4.0
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