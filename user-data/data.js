const data = {
  "bio": [
    "Hi, I'm Puneeth Kumar Amudala — a Data Engineering Specialist with 2+ years of experience in healthcare, agriculture, and retail sectors, specializing in building scalable data pipelines and efficient data models.",
    "I excel in developing robust ETL/ELT processes using Microsoft Fabric, Azure Data Tools, and Python/PySpark, with expertise in implementing Medallion architecture and machine learning models for real-world applications.",
    "I'm passionate about transforming complex data challenges into actionable insights through cloud-based analytics, with a strong focus on data quality, governance, and innovative solutions."
  ],
  "skills": [
    //Microsoft Azure
    "Azure Data Factory",
    "Dataflow Gen2",
    "Azure Synapse Analytics",
    "Azure Databricks",
    "Azure Purview",
    "Azure DevOps",
    "Azure Machine Learning",
    
    // Programming
    "Python",
    "SQL (T-SQL, PL/SQL)",
    "Pyspark",
    "R",
    
    // Technologies & Tools
    "Microsoft Fabric",
    "Snowflake",
    "DataBricks",
    "Microsoft Excel",
    
    // Analytics & Visualization
    "Microsoft Power BI",
    "D3",
    "Tableau",
    "Matplotlib",
    "Seaborn",
    "Plotly"
  ],
  "experience": [
    {
      "title": "Grand Valley State University",
      "duration": "July 2024 - Present",
      "subtitle": "Graduate Research Assistant",
      "details": [
        "Developed and deployed 3 automated data pipelines using Microsoft Fabric and PySpark, incrementally loading over 3 months of IoT sensor data with a monthly scheduled trigger.",
        "Designed and implemented robust ETL processes adhering to Medallion architecture, ensuring data quality and integrity for the sustainable agriculture project.",
        "Engineered and trained two distinct machine learning models in Python to predict soil moisture, achieving R-squared scores exceeding 0.99.",
        "Validated model accuracy using 6 months of ground-truth data from 2 LORAWAN-based IoT sensors and built real-time dashboards for efficient water management."
      ],
      "tags": [
        "Microsoft Fabric",
        "PySpark",
        "Python",
        "Machine Learning",
        "IoT Data"
      ],
      "icon": "graduation-cap"
    }
  ],
  "education": [
    {
      "title": "Master of Science in Applied Computer Science",
      "duration": "2024 - Present",
      "subtitle": "Grand Valley State University, Allendale, Michigan",
      "details": [

        "GPA in Major: 4/4 | Overall GPA: 3.66/4",
        "Databricks Data Engineer Associate (Cert. #141649487) – Databricks (2025)",
        "SQL Advanced Certificate (Cert. #D809ab2df393) – HackerRank (2024)"
      ],
      "tags": [
        "Data Engineering",
        "Machine Learning",
        "Cloud Computing"
      ],
      "icon": "graduation-cap"
    },
    {
      "title": "Bachelor of Technology in Mechanical Engineering",
      "duration": "2019 - 2023",
      "subtitle": "Sri Venkateswara College of Engineering and Technology (Tirupati, Andhra Pradesh)",
      "details": [

        "GPA: 3.56/4",
        "Served as Department Representative for 2 years, organizing academic and extracurricular events.",
        "Graduated with First Class Honors, ranking in the top 10% of the class.",
        "Received 'Best Innovative Award' for final year project on 'Determination of Thermal Conductivity of a Metal (Rod) using Fin Concept'."

      ],
      "tags": ["Leadership", "Academic Excellence", "Innovation"],
      "icon": "book"
    },
    {
      "title": "Higher Secondary Education",
      "duration": "2017 - 2019",
      "subtitle": "Sri Chaitanya Junior College (Tirupati, Andhra Pradesh)",
      "details": [

        "GPA: 4/4",
        "Graduated with First Class Honors, ranking in the top 5% of the State.",
        "Achieved top scores in Mathematics and Physics in state-level board examinations."
      ],
      "tags": ["Academic Excellence", "Mathematics", "Physics"],
      "icon": "book"
    }
  ],
  "contactLinks": [
    {
      "label": "Email",
      "link": "mailto:Puneethkumaramudala7@gmail.com",
      "icon": "fa fa-envelope"
    },
    {
      "label": "LinkedIn",
      "link": "https://www.linkedin.com/in/puneeth-kumar-amudala-4bb7a4245/",
      "icon": "fa-brands fa-linkedin"
    },
    {
      "label": "GitHub",
      "link": "https://github.com/Puneeth0106",
      "icon": "fa-brands fa-github"
    }
  ],
  "projects": [
    {
      "title": "Crop Disease Management System",
      "description": "Architected and implemented a PostgreSQL Snowflake-schema database with six normalized tables, enabling real-time pesticide recommendations for over 1,000 farmers. Designed the database from scratch, demonstrating expertise in data modeling and SQL for efficient, scalable data access.",
      "tags": ["PostgreSQL", "Database Design", "Data Modeling", "SQL"],
      "icon": "leaf",
      "image": "images/projects/crop-disease.jpg",
      "link": "https://github.com/Puneeth0106/Crop-Disease-Management-System"
    },
    {
      "title": "Soil-Moisture-Prediction-Using-ML",
      "description": "Constructed a predictive models for precision farming by evaluating 4 machine learning algorithms, achieving an R² of 0.9975 and MSE of 0.00033 with a Voting Regressor ensemble to predict soil moisture in unsensed areas.",
      "tags": ["Machine Learning", "Voting Regressor", "Precision Farming"],
      "icon": "water",
  "image": "images/projects/soil-moisture.jpg",
      "link": "https://github.com/Puneeth0106/Soil-Moisture-Prediction-Using-Machine-Learning"
    },
    {
      "title": "AI-Driven News Intelligence Pipeline",
      "description": "Engineered an AI-driven pipeline in Microsoft Fabric, processing over 1,000 daily news articles with PySpark and a bronze-silver-gold architecture. Automated API ingestion and ML-based sentiment analysis on 30K+ records, delivering two Power BI dashboards for proactive monitoring.",
      "tags": ["Microsoft Fabric", "PySpark", "Machine Learning", "Power BI"],
      "icon": "newspaper",
      "image": "images/projects/news-intelligence.jpg",
      "link": "https://github.com/Puneeth0106/Fabric_Projects/tree/master/Bing-News"
    },
    {
      "title": "ETL Diabetes Risk Analysis Pipeline",
      "description": "Developed a three-stage ETL pipeline using Azure Databricks and ADF, fully automating the processing of 400K+ public health records. Created four+ risk features and aggregated data across six age groups, two genders, and eight income levels, enhancing insights with two interactive Power BI dashboards.",
      "tags": ["Azure Databricks", "ADF", "ETL", "Power BI"],
      "icon": "heartbeat",
      "image": "images/projects/diabetes-analysis.jpg",
      "link": "https://github.com/Puneeth0106/ETL-diabetes-pipeline"
    },
    {
      "title": "NYC Green Taxi Data Engineering Project",
      "description": "Constructed a multi-layered data pipeline using Azure Synapse Analytics to process over 10 million NYC Green Taxi trip records. Automated ingestion and transformation of seven+ diverse data formats, delivering scalable insights for forecasting and trend analysis.",
      "tags": ["Azure Synapse", "Data Pipeline", "Big Data", "Analytics"],
      "icon": "taxi",
      "image": "images/projects/nyc-taxi.jpg",
      "link": "https://github.com/Puneeth0106/NYC-Green-Taxi-Data-Engineering-Projecthttps://github.com/Puneeth0106/NYC-Green-Taxi-Analysis"
    },
    {
      "title": "COVID-19 Data Analysis & Visualization",
      "description": "Analyzed over 1.2 million public COVID-19 records from sources like ECDC, leveraging Microsoft Power BI to identify key trends and patterns. Developed 3 interactive dashboards and reports, enabling stakeholders to monitor case and death counts, ICU occupancy rates, and Virus testing trends across European states with a single click.",
      "tags": ["Power BI", "Data Analysis", "Visualization", "Healthcare"],
      "icon": "virus",
      "image": "images/projects/covid-analysis.jpg",
      "link": "https://github.com/Puneeth0106/Fabric_Projects/tree/master/Covid-19-data-project"
    }
  ],
  "certifications": [
    {
      "title": "Databricks Data Engineer Associate",
      "issuer": "Databricks",
      "date": "2025",
      "credentialId": "141649487",
      "description": "Professional certification validating expertise in building and managing data engineering solutions using Databricks.",
      "icon": "certificate",
      "logo": "images/certifications/databricks-logo.png",
      "link": "https://credentials.databricks.com/141649487"
    },
    {
      "title": "SQL Advanced Certificate",
      "issuer": "HackerRank",
      "date": "2024",
      "credentialId": "D809ab2df393",
      "description": "Advanced certification demonstrating proficiency in complex SQL queries, database design, and optimization.",
      "icon": "database",
      "logo": "images/certifications/hackerrank-logo.png",
      "link": "https://www.hackerrank.com/certificates/D809ab2df393"
    }
  ],
  "awards": [
    {
      "title": "Innovation Award",
      "issuer": "Sri Venkateswara University College of Engineering Alumni Association",
      "date": "Apr 2023",
      "description": "Awarded for the final B.Tech project on 'Determination of Thermal Conductivity of a Metal (Rod) using Fin Concept.' Recognized for innovative thinking, leadership, and technical skills in applying theoretical concepts to practical engineering problems. Sponsored by Dr. Damodar Reddy Ambur.",
      "icon": "trophy",
      "image": "images/awards/innovative-award.jpg"
    },
    {
      "title": "Pratibha Award (Dr. APJ Abdul Kalam Pratibha Puraskar)",
      "issuer": "Government of Andhra Pradesh, India",
      "date": "Mar 2017",
      "description": "Prestigious award recognizing exceptional academic achievements in Secondary school education. Includes a cash prize and merit certificate for securing a top rank.",
      "icon": "star",
      "image": "images/awards/pratibha-award.jpg"
    }
  ],
  "footer": [
    {
      "label": "copyright-text",
      "data": [
        "Built with ❤️ by Puneeth Kumar Amudala"
      ]
    }
  ]
};

export const bio = data.bio;
export const awards = data.awards;
export const skills = data.skills;
export const experience = data.experience;
export const education = data.education;
export const projects = data.projects;
export const certifications = data.certifications;
export const contactLinks = data.contactLinks;
export const footer = data.footer;
