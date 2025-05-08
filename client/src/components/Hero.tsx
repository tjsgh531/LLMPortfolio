import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-primary-900 mb-6">
              <span className="block">안녕하세요,</span>
              <span className="block">LLM 개발자</span>
              <span className="block font-bold text-primary-600">'이선호'</span>
              <span className="block">입니다</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              LLM 전반에 관심이 많으며, 특히 RAG, Post-training, AI-Agent 분야에 깊이 몰두하고 있습니다.
              인공지능을 실생활에 더 가까이 들여오는 개발자가 되어 사람들의 일상을 변화시키고 싶습니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                size="lg"
                className="bg-primary-500 hover:bg-primary-700 text-white shadow-md hover:shadow-lg"
              >
                <a href="#projects" className="text-white">프로젝트 보기</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="bg-white hover:bg-gray-100 border-primary-500 shadow-sm hover:shadow-md"
              >
                <a href="#contact" className="text-primary-500">연락하기</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-300 to-primary-600 animate-pulse"></div>
              <img
                src="./images/profile.jpeg"
                alt="이선호 프로필 사진"
                className="relative rounded-full w-72 h-72 object-cover mx-auto shadow-2xl border-4 border-white"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
