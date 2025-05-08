import React from "react";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Lightbulb, 
  Users 
} from "lucide-react";

const About: React.FC = () => {
  const strengths = [
    {
      icon: <Rocket size={24} />,
      title: "빠른 학습 능력",
      description: "새로운 기술과 프레임워크를 빠르게 습득하고 적용합니다."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "문제 해결 중심",
      description: "복잡한 문제를 분석하고 효율적인 해결책을 찾습니다."
    },
    {
      icon: <Users size={24} />,
      title: "협업 역량",
      description: "다양한 팀원들과 효과적으로 소통하고 협력합니다."
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
              저는 AI와 자연어 처리에 열정을 가진 신입 LLM 개발자입니다. 언어 모델과 대화형 AI 시스템 개발에 특히 관심이 있으며, 
              사용자 경험을 개선하고 복잡한 문제를 해결하는 데 AI 기술을 활용하는 것을 목표로 하고 있습니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              컴퓨터 공학을 전공하면서 자연어 처리와 머신러닝의 기초를 다졌고, 다양한 개인 프로젝트를 통해 실질적인 경험을 쌓았습니다. 
              특히 Transformer 아키텍처와 최신 LLM 모델들의 동작 원리에 대한 이해를 바탕으로 GPT, BERT 등의 모델을 활용한 애플리케이션 개발에 집중하고 있습니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              비록 신입이지만, 학습에 대한 열정과 문제 해결 능력을 바탕으로 LLM 개발자로서 성장하고 기여하고자 합니다. 
              새로운 기술을 빠르게 습득하고 창의적인 해결책을 제시하는 것이 저의 강점입니다.
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
