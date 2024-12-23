import React from 'react';

interface FAQSectionProps {
  title: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export const FAQSection = ({ title, questions }: FAQSectionProps) => {
  return (
    <div className="mt-12 bg-secondary/50 rounded-lg p-8">
      <h2 className="text-2xl font-display font-semibold mb-4">
        {title}
      </h2>
      <div className="space-y-4">
        {questions.map((faq, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};