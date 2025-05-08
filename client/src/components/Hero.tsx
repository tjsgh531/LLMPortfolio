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
              <span className="block text-primary-500">LLM 개발자입니다</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              인공지능과 대화형 AI 애플리케이션에 관심이 많은 신입 개발자입니다.
              AI의 잠재력을 활용한 혁신적인 솔루션을 만들고 싶습니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                className="bg-primary-500 hover:bg-primary-700 text-white py-3 px-6 shadow-md hover:shadow-lg"
              >
                <a href="#projects">프로젝트 보기</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="bg-white hover:bg-gray-100 text-primary-500 border-primary-500 py-3 px-6 shadow-sm hover:shadow-md"
              >
                <a href="#contact">연락하기</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
              alt="LLM 개발자 프로필 사진" 
              className="rounded-full w-72 h-72 object-cover mx-auto shadow-2xl border-4 border-white"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
