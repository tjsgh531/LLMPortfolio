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
                우리 팀은 KRX-Bench 평가 기준의 총 6개 카테고리(전체 평균, 국가기업, 재무회계, 주가예측, 금융에이전트, 금융시장)에서 균형 잡힌 고성능을 보이는 모델을 개발하기 위해 단계적인 모델 고도화를 진행했습니다. Qwen2-7B-Instruct 기반 모델을 시작점으로, V1부터 V4_m까지 총 4단계의 발전 과정을 거치며 각 카테고리별 성능을 지속적으로 향상시켰습니다.
              </p>
              
              <div className="relative my-8 space-y-8">
                {/* 모델 1: 기본 모델 */}
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-primary-800 mb-2">V1: DAPT 적용 기본 모델</h4>
                    
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">BASE: Qwen2-7B-Instruct</span>
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">기법: DAPT</span>
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded-md mb-3">
                      <h5 className="text-sm font-medium text-primary-700 mb-2">성능 지표 비교</h5>
                      <div className="overflow-auto">
                        <table className="text-xs w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 p-1 text-left">모델</th>
                              <th className="border border-gray-300 p-1 text-center">전체 평균</th>
                              <th className="border border-gray-300 p-1 text-center">국내기업</th>
                              <th className="border border-gray-300 p-1 text-center">재무회계</th>
                              <th className="border border-gray-300 p-1 text-center">주가예측</th>
                              <th className="border border-gray-300 p-1 text-center">금융에이전트</th>
                              <th className="border border-gray-300 p-1 text-center">금융시장</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 p-1 font-medium">base_model</td>
                              <td className="border border-gray-300 p-1 text-center">0.44</td>
                              <td className="border border-gray-300 p-1 text-center">0.51</td>
                              <td className="border border-gray-300 p-1 text-center">0.27</td>
                              <td className="border border-gray-300 p-1 text-center">0.54</td>
                              <td className="border border-gray-300 p-1 text-center">0.62</td>
                              <td className="border border-gray-300 p-1 text-center">0.26</td>
                            </tr>
                            <tr className="bg-amber-50">
                              <td className="border border-gray-300 p-1 font-medium">v1</td>
                              <td className="border border-gray-300 p-1 text-center">0.39</td>
                              <td className="border border-gray-300 p-1 text-center">0.38</td>
                              <td className="border border-gray-300 p-1 text-center">0.27</td>
                              <td className="border border-gray-300 p-1 text-center">0.50</td>
                              <td className="border border-gray-300 p-1 text-center">0.47</td>
                              <td className="border border-gray-300 p-1 text-center">0.31</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded-md mb-3 border-l-2 border-primary-300">
                      <div className="flex items-center mb-2">
                        <span className="font-medium text-primary-700">📍 학습 방법</span>
                      </div>
                      <p className="text-gray-700 text-sm">단순 대량의 금융 도메인 데이터를 Qwen2-7B-Instruct 모델에 DAPT(Domain-Adaptive Pre-Training) 적용</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="bg-slate-50 p-2 rounded-md">
                        <div className="text-xs font-medium text-primary-700 mb-1">📍 데이터셋</div>
                        <p className="text-gray-700 text-xs">AI Hub 금융 용어 데이터셋 (Raw 형태)</p>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-md">
                        <div className="text-xs font-medium text-primary-700 mb-1">📍 학습 시간</div>
                        <p className="text-gray-700 text-xs">4시간 48분 12초</p>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-md col-span-2">
                        <div className="text-xs font-medium text-primary-700 mb-1">📍 하드웨어</div>
                        <p className="text-gray-700 text-xs">AMD 3960X RTX3090</p>
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-600 mt-2">
                      <span className="font-medium">참고:</span> V1 모델은 단순 DAPT(Domain-Adaptive Pre-Training) 접근법을 사용했으며, 금융시장 카테고리에서만 약간의 성능 향상을 보였습니다. 전반적으로는 base 모델보다 낮은 성능을 보여, 단순 대량의 데이터를 DAPT 하는 방식은 성능 향상에 오히려 부정적임을 확인했습니다.
                    </p>
                    
                    <p className="text-xs text-gray-600 mt-3 italic">참고 논문: "<a href="#" className="text-primary-600 hover:underline">Don't Stop Pretraining: Adapt Language Models to Domains and Tasks</a>" (Gururangan et al., 2020)</p>
                  </div>
                </div>
                
                {/* 모델 2: SFT 적용 */}
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-primary-800 mb-2">V2: Adapting LLM 모델</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">기법: Adapting LLM</span>
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded-md mb-3">
                      <h5 className="text-sm font-medium text-primary-700 mb-2">성능 향상</h5>
                      <div className="grid grid-cols-3 gap-2 mb-2">
                        <div className="bg-blue-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">전체 평균</div>
                          <div className="text-sm font-medium text-blue-700">0.50 (+14%)</div>
                        </div>
                        <div className="bg-blue-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">국내기업</div>
                          <div className="text-sm font-medium text-blue-700">0.61 (+20%)</div>
                        </div>
                        <div className="bg-blue-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">재무회계</div>
                          <div className="text-sm font-medium text-blue-700">0.34 (+26%)</div>
                        </div>
                        <div className="bg-blue-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">주가예측</div>
                          <div className="text-sm font-medium text-blue-700">0.55 (+2%)</div>
                        </div>
                        <div className="bg-blue-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">금융에이전트</div>
                          <div className="text-sm font-medium text-blue-700">0.66 (+6%)</div>
                        </div>
                        <div className="bg-blue-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">금융시장</div>
                          <div className="text-sm font-medium text-blue-700">0.35 (+35%)</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded-md mb-3 border-l-2 border-primary-300">
                      <div className="flex items-center mb-2">
                        <span className="font-medium text-primary-700">📍 학습 방법</span>
                      </div>
                      <p className="text-gray-700 text-sm">Reading Comprehension 기반 QA 형태의 합성 데이터를 활용한 Supervised Fine-tuning</p>
                    </div>
                    
                    <div className="mt-3 border-t border-gray-200 pt-3">
                      <h5 className="font-medium text-sm text-primary-800 mb-2">데이터셋 생성 과정</h5>
                      <p className="text-gray-700 text-sm">
                        <span className="font-medium">읽기 이해(Reading Comprehension) 기반 합성 데이터 생성:</span> 기획재정부 금융 용어집(941KB)에서 전문 용어와 설명이 담긴 Raw Text를 수집한 후, GPT-4o를 활용하여 다양한 형태의 질의응답(QA) 데이터로 변환했습니다. 이 과정에서 하나의 금융 개념에 대해 여러 각도에서 질문하는 방식으로 약 85,000개의 풍부한 합성 데이터셋을 구축했습니다.
                      </p>
                      <p className="text-gray-700 text-sm mt-2">
                        이렇게 생성된 데이터로 학습을 진행한 결과, 모든 카테고리에서 기준 모델 대비 성능이 향상되었습니다. 특히 금융시장 카테고리에서 35%, 재무회계 분야에서 26%의 놀라운 성능 향상을 보였습니다. 이는 대량의 Raw Data를 단순 pretraining 했을 때보다 QA형태로 변형해서 읽기 이해(Reading Comprehension)를 향상시켰을 때 더 높은 성능을 얻을 수 있다는 것을 증명합니다.
                      </p>
                    </div>
                    
                    <p className="text-xs text-gray-600 mt-3 italic">참고 논문: "<a href="#" className="text-primary-600 hover:underline">Adapting Large Language Models to Domains via Reading Comprehension</a>" (Yuxian et al., 2023)</p>
                  </div>
                </div>
                
                {/* 모델 3: QLoRA 적용 */}
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-primary-800 mb-2">V3: QLoRA 최적화 모델</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">기법: QLoRA</span>
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded-md mb-3">
                      <h5 className="text-sm font-medium text-primary-700 mb-2">성능 향상</h5>
                      <div className="bg-green-50 p-2 rounded-md text-center mb-2">
                        <div className="text-xs text-gray-500 mb-1">전체 평균 성능 향상</div>
                        <div className="text-sm font-medium text-green-700">+8%</div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded-md mb-3 border-l-2 border-primary-300">
                      <div className="flex items-center mb-2">
                        <span className="font-medium text-primary-700">📍 학습 방법</span>
                      </div>
                      <p className="text-gray-700 text-sm">QLoRA(Quantized Low-Rank Adaptation)를 적용하여 제한된 컴퓨팅 환경에서도 효율적인 파라미터 최적화를 구현했습니다. 모델 매개변수의 크기를 줄이면서도 성능은 유지할 수 있는 양자화 기법을 활용했습니다.</p>
                    </div>
                    
                    <p className="text-xs text-gray-600 mt-2">
                      <span className="font-medium">참고:</span> QLoRA는 기존 LoRA 방식에 양자화 기법을 도입하여 메모리 사용량을 크게 줄이면서도 성능 손실을 최소화하는 방법입니다. 이를 통해 단일 GPU 환경에서도 대규모 모델을 효율적으로 학습할 수 있었습니다.
                    </p>
                    
                    <p className="text-xs text-gray-600 mt-3 italic">참고 논문: "<a href="#" className="text-primary-600 hover:underline">QLoRA: Efficient Finetuning of Quantized LLMs</a>" (Dettmers et al., 2023)</p>
                  </div>
                </div>
                
                {/* 모델 4: 최종 모델 */}
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-primary-800 mb-2">V4_m: 카테고리별 최적화 최종 모델</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">기법: 카테고리별 학습</span>
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded-md mb-3">
                      <h5 className="text-sm font-medium text-primary-700 mb-2">성능 향상</h5>
                      <div className="bg-purple-50 p-2 rounded-md text-center mb-2">
                        <div className="text-xs text-gray-500 mb-1">전체 평균 성능 향상</div>
                        <div className="text-sm font-medium text-purple-700">+10%</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mt-3">
                        <div className="bg-purple-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">국내기업</div>
                          <div className="text-sm font-medium text-purple-700">+9%</div>
                        </div>
                        <div className="bg-purple-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">재무회계</div>
                          <div className="text-sm font-medium text-purple-700">+12%</div>
                        </div>
                        <div className="bg-purple-50 p-2 rounded-md text-center">
                          <div className="text-xs text-gray-500 mb-1">금융시장</div>
                          <div className="text-sm font-medium text-purple-700">+14%</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded-md mb-3 border-l-2 border-primary-300">
                      <div className="flex items-center mb-2">
                        <span className="font-medium text-primary-700">📍 학습 방법</span>
                      </div>
                      <p className="text-gray-700 text-sm">KRX-Bench의 6개 카테고리별로 특화된 데이터셋을 추가 구성하여 각 영역의 성능을 균형있게 향상시켰습니다. 이 접근법은 V2 모델의 Reading Comprehension 방법론과 V3의 QLoRA 최적화 기법을 결합한 것입니다.</p>
                    </div>
                    
                    <p className="text-xs text-gray-600 mt-2">
                      <span className="font-medium">참고:</span> 카테고리별 특화 학습은 모델이 각 분야의 미묘한 차이를 더 잘 이해할 수 있게 해주었습니다. 특히 기존 모델이 상대적으로 약했던 재무회계와 금융시장 분야에서 가장 큰 성능 향상을 보였습니다.
                    </p>
                    
                    <p className="text-xs text-gray-600 mt-3 italic">참고 논문: "<a href="#" className="text-primary-600 hover:underline">Task-specific Fine-tuning of Large Language Models</a>" (Wei et al., 2022)</p>
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