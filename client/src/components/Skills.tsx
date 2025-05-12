import React from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  Bot, 
  Cog, 
  BarChart, 
  Database,
  Terminal,
  Cloud,
  Settings,
  LayoutDashboard,
  FlaskConical,
  Search
} from "lucide-react";
import { 
  SiPython, 
  SiJavascript, 
  SiTypescript, 
  SiPytorch, 
  SiReact, 
  SiGit, 
  SiDocker, 
  SiHuggingface,
} from "react-icons/si";

type SkillCategory = {
  title: string;
  skills: Array<{
    name: string;
    icon: React.ReactNode;
  }>;
};

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "AI & 머신러닝",
      skills: [
        { name: "자연어 처리 (NLP)", icon: <Brain size={24} /> },
        { name: "LLM Post Training", icon: <Bot size={24} /> },
        { name: "데이터 수집&분석", icon: <BarChart size={24} /> }
      ]
    },
    {
      title: "프로그래밍 언어",
      skills: [
        { name: "Python", icon: <SiPython size={24} /> },
        { name: "JavaScript", icon: <SiJavascript size={24} /> },
        { name: "SQL", icon: <Database size={24} /> }
      ]
    },
    {
      title: "프레임워크 & 라이브러리",
      skills: [
        { name: "PyTorch", icon: <SiPytorch size={24} /> },
        { name: "Hugging Face", icon: <SiHuggingface size={24} /> },
        { name: "Unsloth", icon: <Settings size={24} /> },
        { name: "Streamlit", icon: <LayoutDashboard size={24} /> },
        { name: "Selenium", icon: <Search size={24} /> },
        { name: "WandB", icon: <FlaskConical size={24} /> },
      ]
    },
    {
      title: "개발 도구 & 환경",
      skills: [
        { name: "Git", icon: <SiGit size={24} /> },
        { name: "Linux", icon: <Terminal size={24} /> },
        { name: "AWS", icon: <Cloud size={24} /> }
      ]
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl text-primary-900 text-center mb-6">기술 스택</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          LLM 개발과 AI 응용 프로그램 구축에 필요한 다양한 기술들을 습득하고 있습니다.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                variants={categoryVariants}
                className="mb-12 last:mb-0"
              >
                <h3 className="font-heading font-semibold text-xl text-primary-900 mb-6">{category.title}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="skill-badge flex flex-col items-center p-4 bg-primary-50 rounded-lg"
                    >
                      <div className="text-primary-500 mb-2">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
