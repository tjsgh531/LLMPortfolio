import React from "react";
import { Link, useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function DocumentSummarizer() {
  const base = import.meta.env.BASE_URL || "/";
  const joinUrl = (base: string, path: string) =>
    `${base.replace(/\/$/, "")}/${path.replace(/^\/+/, "")}`;

  const [location, setLocation] = useLocation();
  const project = {
    id: 3,
    title: "과학 질의 응답 챗봇 구현",
    duration: "24.10.02 ~ 24.10.24",
    shortDescription: "해당 프로젝트는 FastCampus Upstage AI Lab 3기 부트캠프에서 진행한 경진대회 입니다. 참여자들은 쿼리 데이터 220개와 문서 데이터 4272개를 받습니다. 쿼리가 주어지면 쿼리와 연관된 문서를 기반으로 응답을 생성하는 시스템을 만들어야 합니다. 해당 대회의 평가 방식은 쿼리에 연관된 문서를 얼마나 잘 검색하였는지를 MAP, MRR 지표를 활용하여 시스템 순위를 결정합니다. 저희 팀은 Advanced RAG를 활용한 과학 질의 응답 시스템을 만들었습니다. elasticsearch와 Faiss를 활용하여 과학 질의에 가장 밀접한 데이터를 검색 후 해당 데이터를 토대로 GPT-4o가 응답을 생성하였습니다. 또한 해당 대회의 내용에 국한 되지 않고 Streamlit을 활용하여 챗봇 인터페이스를 구성하여 사용자가 과학적 질문을 입력하면 해당 시스템을 통해 응답을 반환하도록 설계했습니다. 또한 Pinecone을 활용하여 사용자와의 대화를 기억하고 사용자가 이전 대화에 관련한 질의를 이어서하면 이전 대화를 이해하여 대화 흐름에 올바른 응답을 생성하였습니다.",
    
    architectures: ["/images/projects/advanced_rag_achitecture(1).png", "/images/projects/advanced_rag_achitecture(2).png", "/images/projects/advanced_rag_achitecture(3).png", "/images/projects/advanced_rag_achitecture(4).png", "/images/projects/advanced_rag_achitecture(5).png"],
    architecture_descs: [
      "대회에서 전달 받은 쿼리 데이터는 멀티 홉 데이터와 싱글 턴 데이터가 혼재 되어 있습니다. GPT-4o 모델을 활용하여 멀티 홉 대화를 싱글 턴 데이터로 정제하여 모든 데이터가 싱글 턴이 되도록 합니다. 이후 데이터를 GPT-4o를 통해 해당 데이터가 과학과 관련되어 있는지 판단합니다. 과학적 질문이 아니라면 RAG 시스템을 사용하지 않습니다. 과학적 질문이라면 RAG 시스템을 통해 관련 문서를 찾습니다.",
      "dense방식, sparse방식, re-ranker방식으로 쿼리와 연관된 문서를 검색 할 수 있습니다. 저희는 dense 방식의 검색을 구현하기 위해 upstage의 solar 임베더를 활용하여 문서를 임베딩 하여 Faiss를 활용하여 벡터 DB를 생성합니다. 과학 관련 쿼리가 입력으로 주어지면 해당 벡터 DB는 KNN방식으로 쿼리와 유사한 문서 200개를 추출했습니다. sparse 방식으로 검색은 elasticsearch를 활용하여 BM25기준 쿼리와 유사한 문서 200개를 추출했습니다. dense방식과 sparse방식 각각으로 뽑아온 쿼리와 유사한 문서 400개를 중복을 제거하고 “Dongjin-kr/ko-reranker”에 입력하여 re-ranker기반 유사도 점수를 측정했습니다. 이러한 과정을 거치면 쿼리 하나당 dense 방식으로 측정한 문서 유사도, sparse 방식으로 측정한 문서 유사도, re-ranker 방식으로 측정한 문서 유사도, 총 3가지의 문서 유사도를 가진 유사 문서를 400개(이하)를 추출 할 수 있습니다.",
      "Faiss 점수, elastic 점수, reraker 점수 를 사용해서 fusion score을 만듭니다. fusion score = (dense score * 0.7 + sparse score * 0.3) * 0.525 + re-ranker score * 0.475 fusion score이 가장 큰 15개 문서를 추출합니다. 15개 문서를 GPT-4o 모델에 넣어서 최종 쿼리와 가장 유사한 문서 5개를 추출합니다. 그 결과 MAP 지표는 0.7015 ➡️ 0.9136 약 30.25% 향상하였습니다. MRR지표 또한 0.7076 ➡️ 0.9167 약 29.56% 향상하였습니다.",
      "Streamlit을 활용하여 유저 인터페이스를 구현하였고, Advanced RAG 구조를 그대로 사용하지만 유저와의 대화를 관리하기 위해 history manager를 추가하였습니다.",
      "histroy manager는 최근 대화 데이터를 저장하는 recent_data와 요약된 전체 대화 흐름을 저장하는 summary_data로 나누어 Pinecone에 저장됩니다. 질의가 입력으로 들어오면 최근 대화 데이터 2개와 질의와 관련 있는 요약 데이터 2개를 반환해 줍니다. 이를 통해 GPT-4o 모델은 대화 흐름에 올바름 응답을 제공할 수 있습니다."
    ],

    features: [
      "Elasticsearch와 Faiss를 활용한 효율적인 유사 문서 검색",
      "GPT-4o 기반 정확한 과학 질의응답 생성",
      "과학 분야/비과학 분야 질문 의도 구분 처리",
      "Pinecone을 활용한 사용자 대화 기억 능력 구현",
      "Streamlit을 활용한 챗봇 인터페이스 구현",
    ],
    challenges: [
      "쿼리가 과학에 관련된 질문인지 판단",
      "4200여 개의 과학 문서에서 관련성 높은 문서 효율적 검색",
      "검색 엔진 인덱싱 및 쿼리 최적화",
      "대화 형태의 데이터를 검색 효율적이게 최적화",
      "사용자와의 대화 흐름에 맡게 응답 가능한 챗봇 구현"
    ],
    
    technologies: ["Advanced RAG", "Elasticsearch", "Faiss", "Pinecone", "Streamlit"],
    image: "/images/projects/document-summarizer.png",
    githubUrl: "https://github.com/tjsgh531/Scientific_Knowledge_RAG"
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
              <video 
                autoPlay
                loop
                muted
                controls
                className="w-full rounded-lg shadow-md"
              >
                <source src={joinUrl(base, "/videos/chatbot_with_rag.mp4")} type="video/mp4" />
                브라우저가 video 태그를 지원하지 않습니다.
              </video>
            </div>
            
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              {project.shortDescription}
            </p>

            <div className="mb-8 space-y-4">
              <p className="flex items-center">
                <span className="text-xl mr-2">👬</span>
                <span className="font-semibold">팀명 & 팀원 수 :</span>
                <span className="ml-2">Elite / 5명</span>
              </p>
              <p className="flex items-center">
                <span className="text-xl mr-2">🏆</span>
                <span className="font-semibold">결과 :</span>
                <span className="ml-2"> 2위 | MAP: 0.9136 / MRR: 0.9167</span>
              </p>
              <p className="flex items-center">
                <span className="text-xl mr-2">🙋🏻</span>
                <span className="font-semibold">맡은 역할 :</span>
                <span className="ml-2">EDA, Advanced RAG 구현, Chatbot구현</span>
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
                    <span className="mr-2 text-primary-500 flex-shrink-0 mt-1">✅</span>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-6">시스템 아키텍처</h2>
              <div className="mb-8">
                <h3 className="font-heading text-xl font-semibold text-primary-900 mb-4">Advanced RAG 시스템 아키텍처</h3>
                <img 
                  src={joinUrl(base, project.architectures[0])} 
                  alt='시스템 아키텍쳐 1'
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-gray-700 leading-relaxed">
                  {project.architecture_descs[0]}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="font-heading text-xl font-semibold text-primary-900 mb-4">RAG 시스템 아키텍처</h3>
                <img 
                  src={joinUrl(base, project.architectures[1])} 
                  alt='시스템 아키텍쳐 2'
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-gray-700 leading-relaxed">
                  {project.architecture_descs[1]}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="font-heading text-xl font-semibold text-primary-900 mb-4">Fusion 시스템 아키텍처</h3>
                <img 
                  src={joinUrl(base, project.architectures[2])} 
                  alt='시스템 아키텍쳐 3'
                  className="w-3/5 h-auto rounded-lg"
                />
                <p className="text-gray-700 leading-relaxed">
                  {project.architecture_descs[2]}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="font-heading text-xl font-semibold text-primary-900 mb-4">ChatBot 시스템 아키텍처</h3>
                <img 
                  src={joinUrl(base, project.architectures[3])} 
                  alt='시스템 아키텍쳐 4'
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-gray-700 leading-relaxed">
                  {project.architecture_descs[3]}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="font-heading text-xl font-semibold text-primary-900 mb-4">History manager 시스템 아키텍처</h3>
                <img 
                  src={joinUrl(base, project.architectures[4])} 
                  alt='시스템 아키텍쳐 5'
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-gray-700 leading-relaxed">
                  {project.architecture_descs[4]}
                </p>
              </div>
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