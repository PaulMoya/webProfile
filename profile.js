import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronDown, FaBriefcase, FaStar, FaCalendar } from "react-icons/fa6";

export default function Profile() {
  const skills = {
    Python: [
      "EDA, ETL/ELT pipeline development using Airflow and Cloud Composer",
      "Data automation and scripting for process efficiency",
      "Data analysis and visualization using Pandas and Matplotlib"
    ],
    SQL: [
      "Advanced query optimization for high-performance analytics",
      "Database design and normalization for scalable solutions",
      "Data transformation and warehousing using BigQuery and Azure SQL"
    ],
    "Cloud Technologies": [
      "Azure Data Factory for ETL pipeline orchestration",
      "Azure Data lake, AWS S3 for scalable cloud storage",
      "Google BigQuery for advanced analytics and data exploration"
    ],
    "Data Visualization": [
      "Power BI dashboard creation for business intelligence",
      "Interactive reporting and visual storytelling",
      "Exploratory Data Analysis (EDA) to uncover business insights"
    ],
    "Data Modeling & Design": [
      "Erwin Data Modeler for conceptual and logical design",
      "DBSchema for relational database modeling and schema design",
      "Lucidchart / Draw.io for enterprise data architecture diagrams"
    ],
    "Data Engineering Use Cases": [
      "Executed data governance and Data quality frameworks",
      "Optimized consumer behaviour data architecture for banking operations",
      "Designed ETL workflows and data processing tasks to eliminate manual input in BPO's sector",
      "Migrated legacy BI reports from Cognos to Power BI, improving efficiency",
      "Worked on consumer reports analytics pipelines in telecommunications industry"
    ]
  };

  const [expanded, setExpanded] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <motion.h1 
          className="text-4xl font-bold mb-4" 
          whileHover={{ scale: 1.05 }}
        >
          José P. Moya | Data Engineer
        </motion.h1>
        <p className="text-gray-400 text-lg">
          I design and optimize data operations, automate workflows, and create
          insightful data outputs. Strong in <strong>SQL, Python, cloud technologies</strong>, and
          <strong> Visualizations.</strong>
        </p>
        <p className="text-gray-400 mt-4">
          Industry Experience: Banking, Government Finance, Retail, Telecommunications, and BPO's.
        </p>
        
        <div className="mt-6 flex justify-center gap-6">
          <motion.a 
            whileHover={{ scale: 1.2 }} 
            href="https://www.linkedin.com/in/jose-moya-55820974/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedin size={28} className="text-blue-400" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2 }} 
            href="https://github.com/PaulMoya" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub size={28} className="text-white" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2 }} 
            href="mailto:josepaulmoya@gmail.com"
          >
            <FaEnvelope size={28} className="text-red-400" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2 }} 
            href="https://cal.com/Jose.Moya" 
            target="_blank"
          >
            <FaCalendar size={28} className="text-green-400" />
          </motion.a>
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-all"
        >
          Hire Me
        </motion.button>
      </motion.div>
    </div>
  );
}
