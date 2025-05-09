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
    title: "자동 문서 요약기",
    duration: "24.03.20 ~ 24.04.15",
    fullDescription: 
      "자동 문서 요약기는 Hugging Face의 T5 모델을 활용하여 긴 문서를 핵심 내용만 담은 요약본으로 변환하는 프로젝트입니다. " +
      "특히 한국어 문서에 최적화된 모델 KoT5를 기반으로 추가 학습을 진행하여 요약 성능을 향상시켰습니다. " +
      "FastAPI 백엔드와 Vue.js 프론트엔드를 통해 사용자 친화적인 웹 인터페이스를 구현하였으며, 문서를 텍스트로 입력하거나 파일로 업로드하여 요약할 수 있습니다.",
    features: [
      "KoT5 모델을 기반으로 한 문서 요약 구현",
      "Extractive 요약과 Abstractive 요약 모두 지원",
      "FastAPI 백엔드와 Vue.js 프론트엔드 연동",
      "PDF 파일 업로드 및 추출 기능",
      "요약 길이 및 방식 조절 기능"
    ],
    challenges: [
      "대용량 한국어 문서의 효율적인 처리를 위한 학습 최적화",
      "요약 품질과 속도의 균형 조정",
      "PDF 파일에서 텍스트 추출 시 포맷 유지 문제 해결",
      "요약 길이에 따른 모델 출력 품질 변화 관리"
    ],
    results: [
      "기존 요약 시스템 대비 20% 더 정확한 요약 생성",
      "PDF 문서 처리 시간 30% 단축",
      "한국어 문맥 이해도 향상으로 더 자연스러운 요약 생성"
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