import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faBootstrap,
  faPhp,
  faAndroid,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons/faPython";
import { faJava } from "@fortawesome/free-brands-svg-icons/faJava";
import { faC } from "@fortawesome/free-solid-svg-icons/faC";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons/faNodeJs";
import { faDatabase } from "@fortawesome/free-solid-svg-icons/faDatabase";

const KnownLanguages = () => {
  const [languages] = useState([
    { name: "PHP", icon: <FontAwesomeIcon icon={faPhp} size="3x" />, },
    { name: "Python", icon: <FontAwesomeIcon icon={faPython} size="3x" />, },
    { name: "Node.js", icon: <FontAwesomeIcon icon={faNodeJs} size="3x" />, },
    { name: "Java", icon: <FontAwesomeIcon icon={faJava} size="3x" />, },
    { name: "DBMS + SQL", icon: <FontAwesomeIcon icon={faDatabase} size="3x" />, },
    { name: "C", icon: <FontAwesomeIcon icon={faC} size="3x" />, },
    { name: "HTML", icon: <FontAwesomeIcon icon={faHtml5} size="3x" />, },
    { name: "CSS", icon: <FontAwesomeIcon icon={faCss3} size="3x" />, },
    { name: "JavaScript", icon: <FontAwesomeIcon icon={faJava} size="3x" />, },
    { name: "Bootstrap", icon: <FontAwesomeIcon icon={faBootstrap} size="3x" />, },
    { name: "Android Development", icon: <FontAwesomeIcon icon={faAndroid} size="3x" />, },
    { name: "iOS Development", icon: <FontAwesomeIcon icon={faApple} size="3x" />, },
  ]);

  return (
    <div className="container mx-auto py-4">
      <h2 className="text-5xl font-bold text-center mb-6">Tech Toolkit</h2> <br/> <br/> <br/> <br/> <br/>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-10">
        {languages.map((language, index) => (
          <div key={index} className="flex flex-col items-center">
            {language.icon}
            <span className="text-lg mt-2">{language.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnownLanguages;
