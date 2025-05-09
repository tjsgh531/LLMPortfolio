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
    shortDescription: "Advanced RAG를 활용한 과학 질의 응답 시스템. elasticsearch와 Faiss를 활용하여 과학 질의에 가장 밀접한 데이터를 검색 후 해당 데이터를 토대로 GPT-4o가 응답을 생성하는 시스템.",
    introduction: [
      "모델은 학습 과정에서 정보를 압축해서 저장하기 때문에 정보의 손실이 발생할 수밖에 없고, 이 때문에 특정 입력 조건에 대해서는 사실 여부보다는 지식를 표현하는 국소적인 패턴이 더 큰 영향을 주면서 답변이 생성될 수 있기 때문입니다.",
      "이러한 문제를 극복하기 위해서는 RAG(Retrieval Augmented Generation) 기술이 필수입니다.",
      "RAG는 질문에 적합한 레퍼런스 추출을 위해 검색엔진을 활용하고 답변 생성을 위해 LLM(Large Language Model)을 활용합니다.",
      "이때 LLM은 스스로 알고 있는 지식을 출력하기보다는 언어 추론 능력을 극대화하는 것에 방점을 둡니다.",
      "이렇게 사실에 기반한 지식 정보를 토대로 질문에 답을 하고 출처 정보도 같이 줄 수 있기 때문에 사용자는 훨씬 더 안심하고 정보를 소비할 수 있게 됩니다."
    ],
    fullDescription: 
      "이번 대회에서는 과학 상식을 질문하는 시나리오를 가정하고 과학 상식 문서 4200여개를 미리 검색엔진에 색인해 둡니다. 대화 메시지 또는 질문이 들어오면 과학 상식에 대한 질문 의도인지 그렇지 않은 지 판단 후에 과학 상식 질문이라면 검색엔진으로부터 적합한 문서들을 추출하고 이를 기반으로 답변을 생성합니다. 만일 과학 상식 이외의 질문이라면 검색엔진을 활용할 필요 없이 적절한 답을 바로 생성합니다. 마지막으로, 본 프로젝트는 모델링에 중점을 둔 대회가 아니라 RAG(Retrieval Augmented Generation) 시스템의 개발에 집중하고 있습니다. 이 대회는 여러 모델과 다양한 기법, 그리고 앙상블을 활용하여 모델의 성능을 향상시키는 일반적인 모델링 대회와는 다릅니다. 대신에 검색 엔진이 올바른 문서를 색인했는지, 그리고 생성된 답변이 적절한지 직접 확인하는 것이 중요한 대회입니다.",
    evaluationMethod: 
      "사용자가 입력한 질문에 대해서 답변을 얼마나 잘 생성했는지 정량화하는 작업은 매우 고난도의 작업입니다. 어떤 질문에 대해서도 정답이 정해져 있는 것이 아니라 다양한 형태로 표현해 낼 수 있기 때문입니다. 그나마 어느 정도의 객관성을 확보하기 위해서는 다수의 사람이 직접 평가하는 방식을 사용할 수밖에 없습니다. 그렇지만 대회에서는 자동화된 평가 방법을 적용해야 하기 때문에 RAG에 대한 end-to-end 평가 대신 적합한 레퍼런스를 얼마나 잘 추출했는지에 대한 평가만 진행합니다. 이번 평가에서는 MAP(Mean Average Precision)라는 metric을 사용합니다. MAP는 질의 N개에 대한 Average Precision의 평균 값을 구하고, Average Precision은 Precision-recall curve에서 아래쪽 면적을 의미합니다. 그런데 이번 대회에서는 MAP를 약간 변형하여 RAG 평가에 적합하도록 살짝 수정한 형태의 로직을 사용합니다.",
    features: [
      "Elasticsearch와 Faiss를 활용한 효율적인 유사 문서 검색",
      "GPT-4o 기반 정확한 과학 질의응답 생성",
      "검색 결과에 대한 관련성 순위 최적화",
      "참고 자료 인용 및 출처 명시 기능",
      "과학 분야/비과학 분야 질문 의도 구분 처리"
    ],
    challenges: [
      "4200여 개의 과학 문서에서 관련성 높은 문서 효율적 검색",
      "검색 결과의 정확도와 다양성 사이의 균형 최적화",
      "검색 엔진 인덱싱 및 쿼리 최적화",
      "복잡한 과학 개념을 이해하기 쉽게 설명하는 프롬프트 설계",
      "응답 생성 과정에서의 환각(hallucination) 최소화"
    ],
    results: [
      "MAP(Mean Average Precision) 평가에서 0.92 달성",
      "과학 질문 의도 분류 정확도 95% 달성",
      "응답 생성 시간 평균 1.2초로 최적화"
    ],
    technologies: ["Python", "Elasticsearch", "Faiss", "GPT-4o", "FastAPI", "Vue.js"],
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
    <div className="container mx-auto px-4 py-12">
      <Button 
        variant="ghost" 
        onClick={() => setLocation("/")}
        className="mb-8 flex items-center text-primary-500 hover:text-primary-700"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        <span>돌아가기</span>
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
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
                alt={project.title} 
                className="w-full rounded-lg shadow-md"
              />
            </div>
            
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              {project.shortDescription}
            </p>
            
            <div className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-6">소개</h2>
              <div className="space-y-4">
                {project.introduction.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-6">프로젝트 개요</h2>
              <p className="text-gray-700 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
            
            <div className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-6">평가 방법</h2>
              <p className="text-gray-700 leading-relaxed">
                {project.evaluationMethod}
              </p>
            </div>
            
            <div className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-6">주요 기능</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-primary-500 flex-shrink-0 mt-1">✅</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-6">기술적 도전과제</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-primary-500 flex-shrink-0 mt-1">🔍</span>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-6">결과 및 성과</h2>
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-primary-500 flex-shrink-0 mt-1">🎯</span>
                    <span className="text-gray-700">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="sticky top-8"
          >
            <div className="rounded-lg border bg-card p-6 shadow-lg">
              <h3 className="font-heading text-xl font-semibold text-primary-900 mb-4">사용 기술</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map(tech => (
                  <Badge key={tech} variant="outline" className="bg-primary-100 text-primary-700">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <a 
                href={project.githubUrl} 
                className="inline-flex items-center justify-center rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary-600 w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub 저장소 방문
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}