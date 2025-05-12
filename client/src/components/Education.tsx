import React from "react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

type EducationType = {
  id: number;
  title: string;
  institution: string;
  period: string;
  description: string;
  tags: string[];
};

const Education: React.FC = () => {
  const educations: EducationType[] = [
    {
      id: 1,
      title: "항공우주 및 소프트웨어 공학과 졸업",
      institution: "경상 국립 대학교",
      period: "2018 - 2024",
      description: "컴퓨터 과학 및 역학 분야에 중점을 둔 학사 과정을 이수했습니다. 다양한 컴퓨터 언어(C, Java, Python), 자료구조 및 알고리즘, 데이터 베이스, 컴퓨터 네트워크 등의 과목을 수강했습니다.",
      tags: ["컴퓨터 과학", "운영체제커널", "데이터베이스", "자료구조"]
    },
    {
      id: 2,
      title: "데이터 사이언스 학과 졸업(복수 전공)",
      institution: "USG 공유대학",
      period: "2022 - 2024",
      description: "데이터 수집과 분석 및 통계학에 중점을 둔 학사과정을 이수했습니다. 빅데이터 이해, 데이터 마이닝, 회귀 분석 등의 과목을 수강했습니다.",
      tags: ["데이터 수집&분석", "회귀분석", "데이터 마이닝"]
    },
    {
      id: 3,
      title: "NLP 학부 연구생",
      institution: "Software Evolution and Architecture Lab",
      period: "2023 - 2024",
      description: "NLP 학부 연구생으로 참여하여 NLP 모델과 활용 분야를 연구하였습니다. 특히, Sentence Embedding과 Faiss를 활용하여 Github Issue 중복을 찾아낸 시스템을 개발하고 해당 시스템 기반으로 논문을 저술 하였습니다.",
      tags: ["NLP", "Transformer", "Duplicate Bug Report Detection by Using Sentence Embedding and Faiss"]
    },
    {
      id: 4,
      title: "FastCampus Upstage AI Lab 3기",
      institution: "FastCampus & Upstage",
      period: "2024",
      description: "FastCampus와 Upstage에서 주최한 AI 부트캠프에 참여하여 인공지능 전 분야의 핵심 기술들을 익히고 각 분야별 경진대회를 참여함으로써 실전 능력을 길렀습니다. 특히 NLP분야에서는 RAG를 활용한 ChatBot을 구현함으로써 실제 산업에서 요구하는 기술들을 익힐 수 있는 기회가 되었습니다.",
      tags: ["AI 부트캠프", "ML", "CV", "NLP"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl text-primary-900 text-center mb-6">교육 & 자격</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          제 학습 여정과 전문 분야를 발전시키기 위해 노력한 과정입니다.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {educations.map((education, index) => (
              <motion.div
                key={education.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white">
                  <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="font-heading font-semibold text-xl text-primary-900">{education.title}</h3>
                      <div className="text-gray-500 mt-1 md:mt-0">{education.period}</div>
                    </div>
                    <div className="text-primary-500 font-medium">{education.institution}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{education.description}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      {education.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-primary-100 text-primary-700 hover:bg-primary-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
