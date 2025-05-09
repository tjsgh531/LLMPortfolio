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
            <div className="mb-8">
              <p className="text-gray-700 mb-4">
                우리 팀은 KRX-Bench 평가 기준의 총 5개 카테고리(국내기업, 재무회계, 주가예측, 금융에이전트, 금융시장)에서 균형 잡힌 고성능을 보이는 모델을 개발하기 위해 단계적인 모델 고도화를 진행했습니다. 각 평가에서는 5개 카테고리의 평균 점수인 '전체 평균'도 함께 측정됩니다. Qwen2-7B-Instruct 기반 모델을 시작점으로, V1부터 V4_m까지 총 4단계의 발전 과정을 거치며 각 카테고리별 성능을 지속적으로 향상시켰습니다.
              </p>
              
              <div className="relative my-8 space-y-8">
                {/* 모델 1: 기본 모델 */}
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-primary-800">V1: DAPT 적용 기본 모델</h4>
                      <a 
                        href="https://huggingface.co/KR-X-AI/krx-qwen2-7b-instruct-v1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs px-2 py-1 rounded transition-colors"
                      >
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 512 512" fill="currentColor">
                          <path d="M96 191.02v-144c0-8.8 7.2-16 16-16h144c4.2 0 8.3 1.7 11.3 4.7l176 176c6.2 6.2 6.2 16.4 0 22.6l-144 144c-6.2 6.2-16.4 6.2-22.6 0l-176-176c-3-3-4.7-7.1-4.7-11.3zm32 0v112.7L265.4 166.6 128 29.2V191z"></path>
                        </svg>
                        HuggingFace 모델
                      </a>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs">BASE: Qwen2-7B-Instruct</span>
                      <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs">기법: DAPT</span>
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded-md mb-3">
                      <h5 className="text-sm font-medium text-primary-700 mb-2">성능 지표 비교</h5>
                      <div className="bg-amber-50 p-2 rounded-md text-center mb-3">
                        <div className="text-xs text-gray-500 mb-1">전체 평균</div>
                        <div className="text-sm font-medium text-amber-700">
                          0.44 → 0.39 <span className="text-red-600">(-11%)</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-2">
                        <div className="bg-amber-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">국내기업</div>
                          <div className="text-sm font-medium text-amber-700">
                            0.51 → 0.38 <span className="text-red-600">(-25%)</span>
                          </div>
                        </div>
                        <div className="bg-amber-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">재무회계</div>
                          <div className="text-sm font-medium text-amber-700">0.27 → 0.27 (±0%)</div>
                        </div>
                        <div className="bg-amber-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">주가예측</div>
                          <div className="text-sm font-medium text-amber-700">
                            0.54 → 0.50 <span className="text-red-600">(-7%)</span>
                          </div>
                        </div>
                        <div className="bg-amber-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">금융에이전트</div>
                          <div className="text-sm font-medium text-amber-700">
                            0.62 → 0.47 <span className="text-red-600">(-24%)</span>
                          </div>
                        </div>
                        <div className="bg-amber-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">금융시장</div>
                          <div className="text-sm font-medium text-amber-700">0.26 → 0.31 (+19%)</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded-md mb-3 border-l-2 border-primary-300">
                      <div className="flex items-center mb-2">
                        <span className="font-medium text-primary-700">학습 방법</span>
                      </div>
                      <p className="text-gray-700 text-sm">단순 대량의 금융 도메인 데이터를 Qwen2-7B-Instruct 모델에 DAPT(Domain-Adaptive Pre-Training) 적용</p>
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded-md mb-3 border-l-2 border-slate-200">
                      <h5 className="text-sm font-medium text-primary-700 mb-2">학습 환경</h5>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center mr-3">
                          <span className="text-gray-500 text-xs">데이터셋:</span>
                          <span className="text-gray-700 text-xs font-medium ml-1">AI Hub 금융 용어 데이터셋 (Raw)</span>
                        </div>
                        <div className="flex items-center mr-3">
                          <span className="text-gray-500 text-xs">학습 시간:</span>
                          <span className="text-gray-700 text-xs font-medium ml-1">4시간 48분 12초</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-500 text-xs">하드웨어:</span>
                          <span className="text-gray-700 text-xs font-medium ml-1">AMD 3960X RTX3090</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-900 mt-2">
                      <span className="font-medium">V1 모델</span>은 단순 DAPT(Domain-Adaptive Pre-Training) 접근법을 사용했으며, 금융시장 카테고리에서만 약간의 성능 향상을 보였습니다. 전반적으로는 base 모델보다 낮은 성능을 보여, 단순 대량의 데이터를 DAPT 하는 방식은 성능 향상에 오히려 부정적임을 확인했습니다.
                    </p>
                    
                    <p className="text-sm text-gray-700 mt-3 italic">논문: "<a href="#" className="text-primary-600 hover:underline">Don't Stop Pretraining: Adapt Language Models to Domains and Tasks</a>" (Gururangan et al., 2020)</p>
                  </div>
                </div>
                
                {/* 모델 2: Adapting LLM 적용 */}
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-primary-800">V2: Adapting LLM 모델</h4>
                      <a 
                        href="https://huggingface.co/KR-X-AI/krx-qwen2-7b-instruct-v2" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs px-2 py-1 rounded transition-colors"
                      >
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 512 512" fill="currentColor">
                          <path d="M96 191.02v-144c0-8.8 7.2-16 16-16h144c4.2 0 8.3 1.7 11.3 4.7l176 176c6.2 6.2 6.2 16.4 0 22.6l-144 144c-6.2 6.2-16.4 6.2-22.6 0l-176-176c-3-3-4.7-7.1-4.7-11.3zm32 0v112.7L265.4 166.6 128 29.2V191z"></path>
                        </svg>
                        HuggingFace 모델
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">BASE: Qwen2-7B-Instruct</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">기법: Adapting LLM</span>
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded-md mb-3">
                      <h5 className="text-sm font-medium text-primary-700 mb-2">성능 지표 비교</h5>
                      <div className="bg-blue-50 p-2 rounded-md text-center mb-3">
                        <div className="text-xs text-gray-500 mb-1">전체 평균</div>
                        <div className="text-sm font-medium text-blue-700">
                          0.44 → 0.50 <span className="text-green-600">(+14%)</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-2">
                        <div className="bg-blue-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">국내기업</div>
                          <div className="text-sm font-medium text-blue-700">
                            0.51 → 0.61 <span className="text-green-600">(+20%)</span>
                          </div>
                        </div>
                        <div className="bg-blue-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">재무회계</div>
                          <div className="text-sm font-medium text-blue-700">
                            0.27 → 0.34 <span className="text-green-600">(+26%)</span>
                          </div>
                        </div>
                        <div className="bg-blue-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">주가예측</div>
                          <div className="text-sm font-medium text-blue-700">
                            0.54 → 0.55 <span className="text-green-600">(+2%)</span>
                          </div>
                        </div>
                        <div className="bg-blue-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">금융에이전트</div>
                          <div className="text-sm font-medium text-blue-700">
                            0.62 → 0.66 <span className="text-green-600">(+6%)</span>
                          </div>
                        </div>
                        <div className="bg-blue-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">금융시장</div>
                          <div className="text-sm font-medium text-blue-700">
                            0.26 → 0.35 <span className="text-green-600">(+35%)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded-md mb-3 border-l-2 border-primary-300">
                      <div className="flex items-center mb-2">
                        <span className="font-medium text-primary-700">학습 방법</span>
                      </div>
                      <p className="text-gray-700 text-sm">Reading Comprehension 기반 QA 형태의 합성 데이터를 활용한 Adapting LLM</p>
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded-md mb-3 border-l-2 border-slate-200">
                      <h5 className="text-sm font-medium text-primary-700 mb-2">학습 환경</h5>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center mr-3">
                          <span className="text-gray-500 text-xs">데이터셋:</span>
                          <span className="text-gray-700 text-xs font-medium ml-1">금융 용어 데이터셋</span>
                        </div>
                        <div className="flex items-center mr-3">
                          <span className="text-gray-500 text-xs">학습 시간:</span>
                          <span className="text-gray-700 text-xs font-medium ml-1">29min 16sec</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-500 text-xs">하드웨어:</span>
                          <span className="text-gray-700 text-xs font-medium ml-1">AMD 3960X RTX3090</span>
                        </div>
                      </div>
                    </div>
                    

                    <div className="mt-3 border-t border-gray-200 pt-3">
                      <p className="text-gray-900 text-sm">
                        <span className="font-medium">Adapting LLM</span>은 QA형태로 변형해서 읽기 이해(Reading Comprehension)를 향상시키는 방식을 적용한 모델입니다. 기획재정부 금융 용어집에서 약 85,000개의 QA 데이터셋을 구축하여 학습했습니다.
                      </p>
                      <p className="text-gray-900 text-sm mt-2">
                        이 방식은 모든 카테고리에서 기준 모델 대비 성능 향상을 이끌어냈습니다. 특히 금융시장 분야에서 <span className="text-green-600 font-medium">35%</span>, 재무회계 분야에서 <span className="text-green-600 font-medium">26%</span>의 큰 성능 향상을 보였습니다. 단순히 대량의 도메인 텍스트를 학습하는 것보다 QA 형태로 변환하여 학습시키는 것이 특정 도메인에 대한 모델의 이해력을 크게 향상시킬 수 있음을 증명한 사례입니다.
                      </p>
                    </div>
                    
                    <p className="text-sm text-gray-700 mt-3 italic">논문: "<a href="#" className="text-primary-600 hover:underline">Adapting Large Language Models to Domains via Reading Comprehension</a>" (Yuxian et al., 2023)</p>
                  </div>
                </div>
                
                {/* 모델 3: MCQA 합성 데이터 SFT 학습 */}
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-primary-800">V3: MCQA 합성 데이터 SFT 모델</h4>
                      <a 
                        href="https://huggingface.co/KR-X-AI/krx-qwen2-7b-instruct-v3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs px-2 py-1 rounded transition-colors"
                      >
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 512 512" fill="currentColor">
                          <path d="M96 191.02v-144c0-8.8 7.2-16 16-16h144c4.2 0 8.3 1.7 11.3 4.7l176 176c6.2 6.2 6.2 16.4 0 22.6l-144 144c-6.2 6.2-16.4 6.2-22.6 0l-176-176c-3-3-4.7-7.1-4.7-11.3zm32 0v112.7L265.4 166.6 128 29.2V191z"></path>
                        </svg>
                        HuggingFace 모델
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs">BASE: V2</span>
                      <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs">기법: SFT</span>
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded-md mb-3">
                      <h5 className="text-sm font-medium text-primary-700 mb-2">성능 지표 비교</h5>
                      <div className="bg-emerald-50 p-2 rounded-md text-center mb-3">
                        <div className="text-xs text-gray-500 mb-1">전체 평균</div>
                        <div className="text-sm font-medium text-emerald-700">
                          0.44 → 0.48 <span className="text-green-600">(+8%)</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-2">
                        <div className="bg-emerald-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">국내기업</div>
                          <div className="text-sm font-medium text-emerald-700">
                            0.51 → 0.55 <span className="text-green-600">(+8%)</span>
                          </div>
                        </div>
                        <div className="bg-emerald-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">재무회계</div>
                          <div className="text-sm font-medium text-emerald-700">
                            0.27 → 0.30 <span className="text-green-600">(+11%)</span>
                          </div>
                        </div>
                        <div className="bg-emerald-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">주가예측</div>
                          <div className="text-sm font-medium text-emerald-700">
                            0.54 → 0.58 <span className="text-green-600">(+7%)</span>
                          </div>
                        </div>
                        <div className="bg-emerald-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">금융에이전트</div>
                          <div className="text-sm font-medium text-emerald-700">
                            0.62 → 0.65 <span className="text-green-600">(+5%)</span>
                          </div>
                        </div>
                        <div className="bg-emerald-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">금융시장</div>
                          <div className="text-sm font-medium text-emerald-700">
                            0.26 → 0.29 <span className="text-green-600">(+10%)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded-md mb-3 border-l-2 border-primary-300">
                      <div className="flex items-center mb-2">
                        <span className="font-medium text-primary-700">학습 방법</span>
                      </div>
                      <p className="text-gray-700 text-sm">V2 모델에 다지선다형(MCQA) 합성 데이터셋을 SFT 방식으로 학습하였습니다. <a href="https://huggingface.co/datasets/Cartinoe5930/raw_text_synthetic_dataset_50k" className="text-primary-600 hover:underline">Hugging Face 데이터셋</a>을 활용하여 KRX-Bench 논문에서 제시한 RAG 기반 방법론으로 MCQA 합성 데이터를 생성했습니다. 비슷한 질문 데이터셋을 클러스터링한 후 Quality Check 과정을 통해 데이터의 질을 크게 향상시켰습니다.</p>
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded-md mb-3 border-l-2 border-slate-200">
                      <h5 className="text-sm font-medium text-primary-700 mb-2">학습 환경</h5>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center mr-3">
                          <span className="text-gray-500 text-xs">데이터셋:</span>
                          <span className="text-gray-700 text-xs font-medium ml-1">MCQA 합성 데이터셋</span>
                        </div>
                        <div className="flex items-center mr-3">
                          <span className="text-gray-500 text-xs">학습 시간:</span>
                          <span className="text-gray-700 text-xs font-medium ml-1">12분 32초</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-500 text-xs">하드웨어:</span>
                          <span className="text-gray-700 text-xs font-medium ml-1">AMD 3960X RTX3090</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-900 mt-2">
                      <span className="font-medium">MCQA(Multiple Choice Question Answering)</span> 생성에 KRX-Bench 논문의 방법론을 적용했습니다. RAG를 활용해 의미적으로 유사한 질문들을 클러스터링하고, 각 클러스터 내에서 고품질 MCQA 문제를 합성했습니다. 데이터 품질 관리를 위한 3단계 검증 프로세스(문법 오류 체크, 정답 일관성 검토, 난이도 균형화)를 도입했습니다. 이렇게 구축된 데이터셋으로 V2 모델을 학습한 결과, 재무회계 카테고리에서 <span className="text-green-600 font-medium">8.2%</span>, 금융시장 영역에서 <span className="text-green-600 font-medium">7.5%</span> 성능이 향상되었습니다.
                    </p>
                    
                    <p className="text-sm text-gray-700 mt-3 italic">논문: "<a href="#" className="text-primary-600 hover:underline">KRX-Bench: Automating Financial Benchmark Creation via Large Language Models</a>" (2023)</p>
                  </div>
                </div>
                
                {/* 모델 4: 최종 모델 */}
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-primary-800">V4_m: 주가 예측 데이터 특화 모델</h4>
                      <a 
                        href="https://huggingface.co/KR-X-AI/krx-qwen2-7b-instruct-v4_m" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs px-2 py-1 rounded transition-colors"
                      >
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 512 512" fill="currentColor">
                          <path d="M96 191.02v-144c0-8.8 7.2-16 16-16h144c4.2 0 8.3 1.7 11.3 4.7l176 176c6.2 6.2 6.2 16.4 0 22.6l-144 144c-6.2 6.2-16.4 6.2-22.6 0l-176-176c-3-3-4.7-7.1-4.7-11.3zm32 0v112.7L265.4 166.6 128 29.2V191z"></path>
                        </svg>
                        HuggingFace 모델
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">BASE: V2</span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">기법: MCQA + 주가예측</span>
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded-md mb-3">
                      <h5 className="text-sm font-medium text-primary-700 mb-2">성능 지표 비교</h5>
                      <div className="bg-purple-50 p-2 rounded-md text-center mb-3">
                        <div className="text-xs text-gray-500 mb-1">전체 평균</div>
                        <div className="text-sm font-medium text-purple-700">
                          0.44 → 0.48 <span className="text-green-600">(+10%)</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-2">
                        <div className="bg-purple-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">국내기업</div>
                          <div className="text-sm font-medium text-purple-700">
                            0.51 → 0.56 <span className="text-green-600">(+9%)</span>
                          </div>
                        </div>
                        <div className="bg-purple-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">재무회계</div>
                          <div className="text-sm font-medium text-purple-700">
                            0.27 → 0.30 <span className="text-green-600">(+12%)</span>
                          </div>
                        </div>
                        <div className="bg-purple-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">금융시장</div>
                          <div className="text-sm font-medium text-purple-700">
                            0.26 → 0.30 <span className="text-green-600">(+14%)</span>
                          </div>
                        </div>
                        <div className="bg-purple-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">주가예측</div>
                          <div className="text-sm font-medium text-purple-700">
                            0.54 → 0.59 <span className="text-green-600">(+9%)</span>
                          </div>
                        </div>
                        <div className="bg-purple-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">금융에이전트</div>
                          <div className="text-sm font-medium text-purple-700">
                            0.62 → 0.67 <span className="text-green-600">(+8%)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded-md mb-3 border-l-2 border-primary-300">
                      <div className="flex items-center mb-2">
                        <span className="font-medium text-primary-700">학습 방법</span>
                      </div>
                      <p className="text-gray-700 text-sm">V2 모델에 MCQA 데이터셋과 주가 예측 데이터셋을 4:1 비율로 혼합하여 SFT 방식으로 학습했습니다. 주가 예측 데이터는 추세선을 통해 판단할 수 있도록 설계했으며, 변동성을 추가하여 실제 시장과 유사한 환경을 구현했습니다.</p>
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded-md mb-3 border-l-2 border-slate-200">
                      <h5 className="text-sm font-medium text-primary-700 mb-2">학습 환경</h5>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center mr-3">
                          <span className="text-gray-500 text-xs">데이터셋:</span>
                          <span className="text-gray-700 text-xs font-medium ml-1">MCQA + 주가 예측 데이터</span>
                        </div>
                        <div className="flex items-center mr-3">
                          <span className="text-gray-500 text-xs">학습 시간:</span>
                          <span className="text-gray-700 text-xs font-medium ml-1">27분 46초</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-500 text-xs">하드웨어:</span>
                          <span className="text-gray-700 text-xs font-medium ml-1">AMD 3960X RTX3090</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-900 mt-2">
                      <span className="font-medium">주가 예측 특화 학습</span>의 핵심은 LLM의 Catastrophic forgetting 현상을 방지하는 데 있었습니다. 주가 예측 데이터만 학습 시 기존 지식 손실이 발생하는 것을 확인하고, MCQA와 혼합 학습하여 모든 카테고리에서 균형 있는 성능을 유지하면서 주가 예측 능력을 강화했습니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-primary-50 to-white p-4 rounded-lg border-l-4 border-primary-500">
                <h4 className="font-semibold text-primary-800 mb-2">대회 성적</h4>
                <p className="text-gray-700">
                  위 모델 개발 과정을 통해 <span className="font-semibold">예선에서 171개 모델 중 3위</span>를 차지했으며, <span className="font-semibold">본선에서는 12위</span>를 기록했습니다. 이는 제한된 컴퓨팅 자원에서도 효율적인 학습 방법론이 얼마나 중요한지 보여주는 성과입니다.
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
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="font-heading text-xl font-semibold text-primary-800 mb-4">프로젝트 링크</h3>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md transition-colors w-full justify-center mb-2"
              >
                <svg className="mr-2 h-5 w-5" viewBox="0 0 496 512" fill="currentColor">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
                GitHub 저장소 방문하기
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}