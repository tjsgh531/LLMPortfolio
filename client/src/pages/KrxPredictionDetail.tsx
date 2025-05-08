import React from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function KrxPredictionDetail() {
  const project = {
    id: 2,
    title: "KRX 금융 언어 모델 대회",
    duration: "24.10.14 ~ 24.12.6",
    fullDescription: 
      "본 대회는 한국거래소(KRX)와 금융 특화 언어 모델 전문 기업 원라인AI가 공동 개발한 'KRX-Bench'를 통해 금융 특화 언어 모델의 성능을 평가하는 대회입니다. " +
      "참가자들은 금융 시장의 효율성을 높이고 투자자들에게 더욱 정확하고 유용한 정보를 제공하는 언어 모델을 개발하는 것이 목표입니다. " +
      "우리 팀은 SFT(Supervised Fine-Tuning), DAPT(Domain-Adaptive Pre-Training), Adapting LLM, QLoRA 기술을 활용해 Qwen2-7B-Instruct 모델을 금융 도메인에 최적화했고, 예선 3위와 본선 12위의 성적을 달성했습니다.",
    features: [
      "금융 도메인 특화 언어 모델 개발 (Qwen2-7B-Instruct 기반)",
      "SFT(Supervised Fine-Tuning)를 통한 금융 지식 학습",
      "DAPT(Domain-Adaptive Pre-Training)로 금융 데이터 이해력 강화",
      "QLoRA 활용한 경량화 및 효율적 학습 최적화",
      "KRX-Bench를 통한 정량적 성능 평가 및 분석",
      "예선 3위, 본선 12위 달성"
    ],
    challenges: [
      "금융 전문 용어 및 복잡한 시장 개념 이해 학습",
      "제한된 컴퓨팅 리소스에서 효율적인 학습 방법론 설계",
      "금융 데이터의 특수성을 고려한 모델 최적화",
      "다양한 금융 카테고리에 대한 균형 있는 성능 조정"
    ],
    image: "/images/projects/model-performance.png",
    technologies: ["Qwen2-7B-Instruct", "SFT", "DAPT", "QLoRA", "Adapting LLM", "PyTorch", "HuggingFace"],
    githubUrl: "https://github.com/tjsgh531/finance_llm_with_krx?tab=readme-ov-file"
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/#projects" className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        <span>돌아가기</span>
      </Link>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 sm:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading text-3xl font-bold text-primary-900 mb-2">{project.title}</h1>
            <p className="text-gray-500 mb-6">프로젝트 기간 : {project.duration}</p>
            
            <div className="mb-8">
              <img 
                src={project.image} 
                alt={`${project.title} 결과 분석 그래프`}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">
                KRX-Bench 평가에서 우리 팀 모델의 예선 성적 결과 그래프 (예선 3위, 본선 12위 달성)
              </p>
            </div>
            
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              {project.fullDescription}
            </p>
            
            <div className="mb-8 space-y-4">
              <p className="flex items-center">
                <span className="text-xl mr-2">👬</span>
                <span className="font-semibold">팀명 & 팀원 수 :</span>
                <span className="ml-2">KR-X-AI / 4명</span>
              </p>
              <p className="flex items-center">
                <span className="text-xl mr-2">🏆</span>
                <span className="font-semibold">수상 내역 :</span>
                <span className="ml-2">예선 3위, 본선 12위</span>
              </p>
              <p className="flex items-center">
                <span className="text-xl mr-2">🙋🏻</span>
                <span className="font-semibold">맡은 역할 :</span>
                <span className="ml-2">MCQA 데이터 제작, SFT학습 : V3, V4_m 모델 학습</span>
              </p>
            </div>
            
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
            
            <h2 className="font-heading text-2xl font-semibold text-primary-800 mb-4">모델 개발 과정</h2>
            <div className="p-6 mb-8">
              <p className="text-gray-700 mb-4">
                우리 팀은 KRX-Bench 평가 기준의 총 6개 카테고리(전체 평균, 국가기업, 재무회계, 주가예측, 금융에이전트, 금융시장)에서 균형 잡힌 고성능을 보이는 모델을 개발하기 위해 단계적인 모델 고도화를 진행했습니다. Qwen2-7B-Instruct 기반 모델을 시작점으로, V1부터 V4까지 총 4단계의 발전 과정을 거치며 각 카테고리별 성능을 지속적으로 향상시켰습니다. 이러한 체계적인 접근 방식으로 예선에서 약 100팀 중 3위, 본선에서 12위라는 성과를 달성했습니다.
              </p>
              
              <div className="relative my-8 space-y-8">
                {/* 모델 1: 기본 모델 */}
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-primary-800 mb-2">V1: DAPT 적용 기본 모델</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-primary-200 text-primary-800 px-2 py-1 rounded-full text-xs">성능 지표: 기준점 설정</span>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">BASE: Qwen2-7B-Instruct</span>
                    </div>
                    <p className="text-gray-700 text-sm">금융 도메인 데이터를 활용한 DAPT(Domain-Adaptive Pre-Training)를 진행하여 기본 지식을 강화했습니다.</p>
                    <p className="text-xs text-gray-600 mt-2 italic">참고 논문: "<a href="#" className="text-primary-600 hover:underline">Don't Stop Pretraining: Adapt Language Models to Domains and Tasks</a>" (Gururangan et al., 2020)</p>
                  </div>
                </div>
                
                {/* 모델 2: SFT 적용 */}
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-primary-800 mb-2">V2: SFT 적용 모델</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-primary-200 text-primary-800 px-2 py-1 rounded-full text-xs">성능 향상: +15%</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">기법: SFT</span>
                    </div>
                    <p className="text-gray-700 text-sm">금융 전문가 답변 데이터셋을 활용한 SFT(Supervised Fine-Tuning)를 적용하여 모델의 금융 지식 응답 능력을 향상시켰습니다.</p>
                    <p className="text-xs text-gray-600 mt-2 italic">참고 논문: "<a href="#" className="text-primary-600 hover:underline">Fine-tuning Language Models from Human Preferences</a>" (Ziegler et al., 2019)</p>
                  </div>
                </div>
                
                {/* 모델 3: QLoRA 적용 */}
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-primary-800 mb-2">V3: QLoRA 최적화 모델</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-primary-200 text-primary-800 px-2 py-1 rounded-full text-xs">성능 향상: +8%</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">기법: QLoRA</span>
                    </div>
                    <p className="text-gray-700 text-sm">QLoRA(Quantized Low-Rank Adaptation)를 적용하여 제한된 컴퓨팅 환경에서도 효율적인 파라미터 최적화를 구현했습니다.</p>
                    <p className="text-xs text-gray-600 mt-2 italic">참고 논문: "<a href="#" className="text-primary-600 hover:underline">QLoRA: Efficient Finetuning of Quantized LLMs</a>" (Dettmers et al., 2023)</p>
                  </div>
                </div>
                
                {/* 모델 4: 최종 모델 */}
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-primary-800 mb-2">V4: 카테고리별 최적화 최종 모델</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-primary-200 text-primary-800 px-2 py-1 rounded-full text-xs">성능 향상: +10%</span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">기법: 카테고리별 학습</span>
                    </div>
                    <p className="text-gray-700 text-sm">KRX-Bench의 6개 카테고리별로 특화된 데이터셋을 추가 구성하여 각 영역의 성능을 균형있게 향상시켰습니다.</p>
                    <p className="text-xs text-gray-600 mt-2 italic">참고 논문: "<a href="#" className="text-primary-600 hover:underline">Task-specific Fine-tuning of Large Language Models</a>" (Wei et al., 2022)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-primary-50 to-white p-4 rounded-lg border-l-4 border-primary-500">
                <h4 className="font-semibold text-primary-800 mb-2">대회 성적</h4>
                <p className="text-gray-700">
                  위 모델 개발 과정을 통해 <span className="font-semibold">예선에서 약 100팀 중 3위</span>를 차지했으며, <span className="font-semibold">본선에서는 12위</span>를 기록했습니다. 이는 제한된 컴퓨팅 자원에서도 효율적인 학습 방법론이 얼마나 중요한지 보여주는 성과입니다.
                </p>
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