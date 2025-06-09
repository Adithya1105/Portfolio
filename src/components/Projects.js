import React from "react";
import styles from "./Projects.module.css";

const projects = [

  {
  name: "Claude AI Recipe",
  description: "Built a React app that generates AI powered recipes from a dynamic ingredient list using the Hugging Face Mistral model. Allows users to customize dietary preferences and receive real time, step by step instructions.",
  tech: ["React", "Hugging Face API", "Axios", "Tailwind CSS", "Node.js"],
 // year: "Summer 2024",
  github: "https://github.com/your-username/claude-recipe"
},


{
  name: "Diabetes Prediction using ML & DL",
  description: "Built a classification model using Logistic Regression, SVM, Gradient Boosting, and a Feedforward Neural Network to predict diabetes based on the PIMA Indian dataset. Gradient Boosting achieved 84.5% accuracy and AUC of 0.8999.",
  tech: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "SMOTE", "Matplotlib"],
 // year: "Spring 2024",
  github: "https://github.com/Adithya1105/DiabetesPrediction"
} ,
{
    name: "Counterfeit IC Detection System",
    description: "Leveraged transfer learning with MobileNetV2 for binary classification of authentic vs counterfeit ICs. Achieved 94.1% test accuracy.",
    tech: ["TensorFlow", "MobileNetV2", "Image Processing"],
  //  year: "Fall 2023",
   github: "https://github.com/your-username/ai-image-detector"
  },
  {
    name: "AI Generated Images Detector",
    description: "Customized pre-trained ResNet50 for binary classification of AI-generated images. Precision: 94.9%, Recall: 89.2%, Accuracy: 92.2%.",
    tech: ["TensorFlow", "Numpy", "Matplotlib", "Scikit-Learn"],
   // year: "Spring 2024"
  }




];

const Projects = () => (
  <div>
     <h2 className={styles.title}>Projects</h2>
    <div className={styles.grid}>
      {projects.map((proj, idx) => (
        <div key={idx} className={styles.card}>
          <h3>{proj.name}</h3>
          <p>{proj.description}</p>
          <div className={styles.techStack}>
            {proj.tech.map(t => <span key={t}>{t}</span>)}
          </div>
          <span className={styles.year}>{proj.year}</span>
            <a
      href={proj.github}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.githubLink}
    >
      View on GitHub
    </a>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
