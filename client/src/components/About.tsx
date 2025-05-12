import React from "react";
import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Users, 
  ShieldCheck
} from "lucide-react";

const About: React.FC = () => {
  const strengths = [
    {
      icon: <Users size={24} />,
      title: "협업 역량",
      description: "16개의 팀 프로젝트 참여하여 5개의 대회에서 수상한 경험이 있습니다."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "리더십",
      description: "대학교 4년중 3년을 동아리 회장직을 수행하고 16개 팀프로젝트 중 9개를 팀장으로 참여하였습니다."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "지식 공유",
      description: "수학 학원 강사, 천문대 강사, 인공지능 멘토, IoT 메이커톤 멘토등 다양한 분야에서 멘토 경험이 있습니다."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl text-primary-900 text-center mb-12">소개</h2>
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="bg-gray-50 p-8 rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700 leading-relaxed mb-6">
              저는 LLM과 최신 AI 기술에 깊은 열정을 가진 개발자 이선호입니다. 특히 RAG(Retrieval-Augmented Generation), Post-training 최적화, AI-Agent 개발 분야에 
              집중하고 있으며, 이러한 기술을 활용해 실생활에 도움이 되는 솔루션을 만들고자 합니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              제 관심사는 단순히 모델을 구현하는 것을 넘어 AI가 실제 사용자의 일상에 어떻게 더 가까이 다가갈 수 있는지에 있습니다. 
              특히, RAG, LangChain, LangGraph, MCP 등의 기술을 적용하여 현실에서 마주하고 있는 문제를 인공지능으로 해결하려는 노력을 하고 있습니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              비록 신입이지만, 모든 팀에 녹아들 수 있는 협업 능력과 풍부한 경험에서 오는 리더십과 멘토링 능력을 통해 AI 기술을 빠르게 배우고 적용하면서도 팀원들과 소통할 수 있는 개발자 입니다.
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {strengths.map((strength, index) => (
              <motion.div 
                key={index} 
                className="bg-primary-50 p-6 rounded-xl shadow-sm hover:shadow transition-shadow"
                variants={itemVariants}
              >
                <div className="text-primary-500 mb-2">
                  {strength.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">{strength.title}</h3>
                <p className="text-gray-600">{strength.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
