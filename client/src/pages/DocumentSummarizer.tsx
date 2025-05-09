import React from "react";
import { Link, useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function DocumentSummarizer() {
  const [location, setLocation] = useLocation();
  const project = {
    id: 3,
    title: "과학 질의 응답 챗봇 구현",
    duration: "24.03.20 ~ 24.04.15",
    fullDescription: 
      "과학 질의 응답 챗봇은 다양한 과학 분야(물리학, 화학, 생물학, 천문학 등)에 대한 정확하고 신뢰할 수 있는 답변을 제공하는 프로젝트입니다. " +
      "OpenAI의 API를 활용하여 초기 모델을 구성하고, 과학 분야 데이터셋으로 파인튜닝하여 도메인 특화된 답변 성능을 향상시켰습니다. " +
      "FastAPI 백엔드와 Vue.js 프론트엔드를 통해 사용자 친화적인 웹 인터페이스를 구현하였으며, 텍스트 질문 입력과 함께 이미지 업로드를 통한 시각적 질문도 지원합니다.",
    features: [
      "과학 분야 데이터로 파인튜닝된 LLM 활용",
      "자연어 과학 질문에 대한 정확한 답변 제공",
      "소스 인용 및 신뢰성 지표 표시",
      "멀티모달 질의응답 지원 (이미지 분석 기능)",
      "사용자 피드백 기반 지속적 학습 시스템"
    ],
    challenges: [
      "과학적 정확성과 최신 연구 성과 반영",
      "복잡한 과학 개념을 이해하기 쉽게 설명하는 능력 개발",
      "신뢰할 수 있는 정보 소스 확보 및 인용",
      "과학적 불확실성 및 논쟁점 균형 있게 전달",
      "사용자 질문 의도 정확히 파악하는 컨텍스트 이해력 향상"
    ],
    results: [
      "일반 LLM 대비 과학 질문 정확도 35% 향상",
      "사용자 만족도 조사에서 92% 긍정 평가",
      "복잡한 과학 개념에 대한 설명 이해도 테스트에서 90% 이상 성공률 달성"
    ],
    technologies: ["Python", "PyTorch", "Hugging Face Transformers", "FastAPI", "Vue.js"],
    image: "/images/projects/document-summarizer.png",
    githubUrl: "https://github.com/tjsgh531"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <Button 
        variant="outline" 
        className="mb-8 flex items-center" 
        onClick={() => setLocation("/")}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        돌아가기
      </Button>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-12 lg:grid-cols-3"
      >
        {/* 왼쪽 사이드바 - 프로젝트 정보 */}
        <motion.div variants={itemVariants} className="lg:col-span-1">
          <div className="rounded-lg border bg-card text-card-foreground shadow-lg overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="font-heading text-2xl font-bold text-primary-900 mb-2">{project.title}</h2>
              <p className="text-gray-500 mb-4">{project.duration}</p>
              
              <div className="mb-6">
                <h3 className="font-heading text-lg font-semibold text-primary-800 mb-2">사용 기술</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="outline" className="bg-primary-100 text-primary-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href={project.githubUrl} 
                  className="inline-flex items-center justify-center rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary-600 w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub 저장소 방문
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 오른쪽 컨텐츠 영역 */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <div className="space-y-10">
            {/* 프로젝트 설명 */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-4">프로젝트 개요</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{project.fullDescription}</p>
            </div>

            {/* 주요 기능 */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-4">주요 기능</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-primary-500">✅</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 기술적 도전과제 */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-4">기술적 도전과제</h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-primary-500">🔍</span>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 결과 및 성과 */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-4">결과 및 성과</h2>
              <ul className="space-y-2">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-primary-500">🎯</span>
                    <span className="text-gray-700">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}