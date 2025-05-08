import React from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function KrxPredictionDetail() {
  const project = {
    id: 2,
    title: "KRX 금융 언어 모델 대회",
    duration: "25.03.15 ~ 25.04.10",
    fullDescription: 
      "본 프로젝트는 국내 주식시장(KRX)에서 다양한 기계학습 모델들의 주가 예측 성능을 비교 분석한 연구입니다. " +
      "기업의 규모와 산업군에 따라 서로 다른 모델이 어떤 예측 성능을 보이는지 체계적으로 분석했으며, " +
      "특히 v4_mi 모델이 대부분의 카테고리에서 가장 높은 예측 정확도를 보였습니다.",
    features: [
      "5가지 다른 예측 모델 비교 (qwenz-7B-Instruct, v1, v2, v3, v4_mi)",
      "6개 카테고리별 성능 분석 (전체 평균, 국가기업, 재무회계, 주가예측, 금융에이전트, 금융시장)",
      "모델별 성능 시각화 및 통계적 분석",
      "산업군에 따른 최적 모델 제안",
      "시계열 데이터의 패턴 인식 능력 비교"
    ],
    challenges: [
      "비정형 금융 데이터의 효과적 전처리",
      "시계열 특성을 고려한 모델 평가 방법론 설계",
      "모델 간 공정한 비교를 위한 실험 설계",
      "산업별 특성을 반영한 모델 최적화"
    ],
    image: "/images/projects/model-performance.png",
    technologies: ["Python", "Pandas", "Scikit-learn", "PyTorch", "Matplotlib"],
    githubUrl: "https://github.com/username/krx-prediction-models"
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/#projects" className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        <span>프로젝트 목록으로 돌아가기</span>
      </Link>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 sm:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading text-3xl font-bold text-primary-900 mb-2">{project.title}</h1>
            <p className="text-gray-500 mb-6">{project.duration}</p>
            
            <div className="mb-8">
              <img 
                src={project.image} 
                alt={`${project.title} 스크린샷`}
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              {project.fullDescription}
            </p>
            
            <h2 className="font-heading text-2xl font-semibold text-primary-800 mb-4">주요 기능</h2>
            <ul className="mb-8 space-y-2">
              {project.features?.map((feature, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <span className="mr-2 text-green-600">✅</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <h2 className="font-heading text-2xl font-semibold text-primary-800 mb-4">기술적 도전과제</h2>
            <ul className="mb-8 space-y-2">
              {project.challenges?.map((challenge, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <span className="mr-2 text-green-600">✅</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
            
            <h2 className="font-heading text-2xl font-semibold text-primary-800 mb-4">연구 결과 상세</h2>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <p className="text-gray-700 mb-4">
                연구 결과, v4_mi 모델이 대부분의 카테고리에서 가장 높은 예측 정확도를 보였습니다. 특히 국가기업과 금융에이전트 카테고리에서 각각 0.92와 0.77의 높은 점수를 기록했습니다. 반면, 기존 모델(qwenz-7B-Instruct)은 대부분의 카테고리에서 저조한 성능을 보였습니다.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-3 rounded border border-gray-200">
                  <h4 className="font-semibold text-primary-700 mb-1">성능 결과 요약</h4>
                  <p className="text-sm text-gray-600">전체 평균 기준으로 v4_mi(0.61), v3(0.59), v2(0.50), qwenz-7B-Instruct(0.44), v1(0.39) 순으로 높은 성능을 보였습니다.</p>
                </div>
                
                <div className="bg-gray-50 p-3 rounded border border-gray-200">
                  <h4 className="font-semibold text-primary-700 mb-1">카테고리별 최고 성능 모델</h4>
                  <p className="text-sm text-gray-600">국가기업: v4_mi(0.92), 금융에이전트: v4_mi(0.77), 주가예측: v4_mi(0.55), 금융시장: v3(0.44)</p>
                </div>
                
                <div className="bg-gray-50 p-3 rounded border border-gray-200">
                  <h4 className="font-semibold text-primary-700 mb-1">모델 성능 개선 요인</h4>
                  <p className="text-sm text-gray-600">v4_mi 모델의 우수한 성능은 금융 도메인 데이터에 특화된 학습과 시계열 패턴 인식 능력 향상에서 기인합니다.</p>
                </div>
              </div>
            </div>
            
            <h2 className="font-heading text-2xl font-semibold text-primary-800 mb-4">기술 스택</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex justify-center">
              <a 
                href={project.githubUrl} 
                className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-sm hover:shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub 저장소 방문하기
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}