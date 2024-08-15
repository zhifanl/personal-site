import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <h1>Tom Li - Software Development Engineer</h1>
        <p>Passionate about innovation, software development, and cloud computing.</p>
      </header>

      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#about">About Me</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="home" className="section">
        <h2>Welcome!</h2>
        <p>
          I'm Tom Li, a Software Engineer with a passion for designing & developing innovative solutions in the IT industry. Currently, I'm working as a Software Development Engineer at AWS in Vancouver, Canada.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <ul>
          <li><strong>Languages:</strong> Java, Python, JavaScript, TypeScript, Golang, C++, C, Shell Script</li>
          <li><strong>Frameworks & Tools:</strong> Git, AWS, GCP, REST, Node.js, React.js, Redux, SQL, NoSQL, Kubernetes, Docker</li>
          <li><strong>Domains:</strong> Microservices, Distributed Systems, Frontend, Backend, Full-Stack, Machine Learning & AI, Software Architecture, Data Structures & Algorithms, Scalable Architecture, Unit Testing, Continuous Integration</li>
        </ul>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>
        <h3>Open Source Contributor</h3>
        <p>06/2024 - 08/2024</p>
        <p>As an open source contributor, here are the key achievements:<br />
          - Contributed the development of a Power-Capped LLM Inference Service using Kubernetes, focusing on creating scalable and energy-efficient solutions for data centers.<br />
          - Designed solutions, delivered results under supervision of Distinguished Engineer from Red Hat.<br />
          - Implemented a custom power capping operator utilizing Kubernetes Event-Driven Autoscaling (KEDA) to optimize LLM inference service deployments based on power consumption limits.<br />
          - Used open source tool Kepler (with eBPF technology) for precise power consumption tracking of CPU and GPU resources, utilize metrics exporters for data aggregation and decision-making processes.<br />
          - Created a Slack-based alert system for real-time power consumption monitoring and a user-friendly interface using Slack slash commands for system control and limit modifications.<br />
          - Actively contributed to open-source development, participated in code reviews and issues.</p>

        <h3>Research Assistant (University of Calgary)</h3>
        <p>04/2024 - 08/2024</p>
        <p>As a researcher in the field of cloud computing and container orchestration, I spent the summer delving into cutting-edge technologies such as Kubernetes, Kepler(Kubernetes-based Efficient Power Level Exporter), KEDA under the guidance of Dr. Drew in the software engineering department.
          My work focused on exploring cloud-native open source software, with emphasis on Kubernetes scheduling algorithms. Additionally, I co-edited a paper that investigated existing carbon-aware Kubernetes scheduling solutions, highlighting my interest in sustainable computing practices.</p>

        <h3>Application Developer (S.i. Systems, representing TC Energy)</h3>
        <p>09/2023 - 06/2024</p>
        <p>As an Application Developer at TC Energy,
          I took the lead in designing and implementing a real-time asset management system using AWS Iceberg, Step Function, Lambda, SQL, Python, Pandas, Numpy, and S3. Ensuring robust and scalable data management.<br />

          Key Achievements include:<br />
          - Orchestrating automated updates for the data pipeline within AWS,<br />
          - Translated intricate engineering concepts into efficient code, ensured code was optimized and could run within the required time threshold,<br />
          - Executed the ingestion of extremely complex time series asset data, demanding unparalleled granularity. During development, I communicated effectively across cross-functional teams, engaged in clearing the roadblocks, and helped the team make sure data was accurate and trustworthy.<br />

          - Cross-functional Collaboration: Communicated between emissions engineers, facility asset data management teams, architects, and PowerBI developer. Dealt with ambiguity and solve problems together.<br />
          - Code Review and Quality Assurance: Actively participated in code review processes, ensuring high standards of code quality and maintainability. Contributed to the continuous improvement of software practices, enhancing team productivity and code reliability.<br /></p>

        <h3>Software Development Engineer Intern (Amazon Web Services)</h3>
        <p>05/2023 - 08/2023</p>
        <p>
          As a SDE Intern worked at AWS Insights and Optimizations, Usage Reporting & Analytics team, here are the key achievements:<br />

          - Led the migration of AWS Cost Explorer’s Reports Service, impacting over 3.8 million users globally by transitioning a legacy complex system on AWS to an improved and streamlined design called AWS Insights Preference Service (AIPS), significantly enhancing the performance of the API services for the team.<br />
          - Took the initiative, designed and developed a unique solution that utilizes distributed computing technology to help migrate large, complex NoSQL databases with millions of traffics while maintaining minimal downtime, great efficiency, and data consistency, and also is extensible to support migration of many other services. This solution is deployed to production and is being used by many senior developers at AWS.<br />
          - Streamlined operational processes, deprecating the legacy gateway, proxy, and lambda service applications by using the newly built service to integrate with existing software applications, resulting in a roughly 20% reduction in operational effort for developers to maintain the legacy pipeline.<br />
          - Actively communicated and collaborated with cross-functional teams from upstream and downstream to ensure the software system had zero downtime, preserving the integrity and accessibility of critical user data during the transition.<br />
          - Successfully conducted design document review (High-Level Design, Low-Level Design), and presented the result to the leadership and engineers.<br />
          - Code Review and Quality Assurance: Actively participated in code review processes, ensuring high standards of code quality and maintainability. Contributed to the continuous improvement of software practices.</p>

        <h3>Software Engineer Intern (TC Energy)</h3>
        <p>01/2022 - 03/2023</p>
        <p>As a Software Developer Intern worked at Product Delivery Team<br />

          - Worked as a Data Engineer and built an automated ETL data pipeline for delivery data to the PowerBI Reporting Team, reducing redundant ETL work from 3 hours to 3 minutes for each AWS IceBerg table ingested in the databases (800+ different data sources in total), saving thousands of hours for Business Analysts and developers.<br />
          - Solved ambiguous and complex technical problems for TC Energy’s engineers. Participated in and delivered several successful complex engineering projects involving data exploration, data collection, ingestion, data engineering, front-end development, back-end development, and data visualization by using AWS, Azure, Microsoft Fabric, React, Node, TypeScript, Python, SQL, and PowerBI.<br />
          - Developed a real-time power trading price prediction system at TC Energy. It is used by traders to forecast future prices.<br />
          - Worked as a Data Engineer to develop data feeding functions for fetching data from power market websites, then ingested ERCOT and Alberta Power Market data to AWS Redshift periodically.<br />
          - Received positive feedback from stakeholders for my performance and results that exceeded expectations.</p>

        <h3>Software Engineer Intern (AI Shading)</h3>
        <p>06/2021 - 12/2021</p>
        <p>Led the development of an AI-powered IoT curtain product using NodeRED, JavaScript, Linux, MQTT, and TensorFlow.</p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <h3>
          <a href="https://github.com/Climatik-Project/Climatik-Project" target="_blank" rel="noopener noreferrer">
            Climatik Project
          </a>
        </h3>
        <p>Enabled LLM-powered autoscaling to scale replicas based on power capping limits, current power consumption, and forecast power consumption. Tech Stack: Golang, Kubernetes, KEDA, Python, Prometheus, Webhooks, CI/CD, Docker.</p>

        <h3>
          <p>
            LockedIn (Private - NDA)
          </p>
        </h3>
        <p>Developed an advanced autonomous navigation software for vehicle operators, featuring dynamic route optimization with A* algorithm and intelligent collision avoidance using C++, Shell Scripts, and QT.</p>

        <h3>
          <a href="https://github.com/zhifanl/UofC-AI-Study-Hub" target="_blank" rel="noopener noreferrer">
            AI Study Hub
          </a>
        </h3>
        <p>Co-developed an award-winning educational chat platform integrating Generative AI to enhance student learning, built with React, Node.js, Socket.io, MongoDB, and AWS technologies.</p>
      </section>

      <section id="education" className="section">
        <h2>Education</h2>
        <p><strong>Bachelor of Science in Software Engineering</strong></p>
        <p>University of Calgary (09/2019 - 04/2024) - Graduated with distinction, GPA: 3.86/4.00.</p>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>Long story short, I was born in China and moved to Calgary 10 years ago. After graduating from the University of Calgary, I joined Amazon as a Software Development Engineer. Outside of work, I enjoy playing badminton, reading, cooking, working out, swimming, and running. I also have a 7-year-old cat named Mika.</p>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:zhifanli2000@gmail.com">zhifanli2000@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/zhifan-tom-li/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/zhifan-tom-li/</a></p>
        <p>GitHub: <a href="https://github.com/zhifanl" target="_blank" rel="noreferrer">https://github.com/zhifanl</a></p>
      </section>

      <footer className="footer">
        <p>&copy; Updated in 2024.</p>
      </footer>
    </div>
  );
}

export default App;
