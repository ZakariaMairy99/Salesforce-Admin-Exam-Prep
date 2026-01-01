import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { Check, X, HelpCircle, Eye } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  selectedAnswers: string[];
  onAnswerChange: (answerId: string) => void;
  showCorrect: boolean;
  onToggleShowCorrect: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswers,
  onAnswerChange,
  showCorrect,
  onToggleShowCorrect,
}) => {
  const isMultiSelect = question.instruction.toLowerCase().includes('choose 2') || question.instruction.toLowerCase().includes('choose 3');

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
      {/* Header - Compacted padding */}
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 shrink-0">
        <div className="flex justify-between items-start mb-1">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-sf-blue/10 text-sf-blue">
            Question {question.id}
          </span>
          <span className="text-xs font-medium text-slate-500 italic">
            {question.instruction}
          </span>
        </div>
        <h2 className="text-lg font-semibold text-slate-800 leading-snug">
          {question.text}
        </h2>
      </div>

      {/* Options - Compacted spacing and padding */}
      <div className="p-4 space-y-2 overflow-y-auto custom-scrollbar">
        {question.options.map((option) => {
          const isSelected = selectedAnswers.includes(option.id);
          const isCorrect = question.correctAnswers.includes(option.id);
          
          let containerClass = "relative flex items-start p-3 border rounded-lg cursor-pointer transition-all duration-200 ";
          
          if (showCorrect) {
            if (isCorrect) {
              containerClass += "bg-green-50 border-green-500 ring-1 ring-green-500";
            } else if (isSelected && !isCorrect) {
              containerClass += "bg-red-50 border-red-300 opacity-75";
            } else {
              containerClass += "border-slate-200 opacity-50";
            }
          } else {
            if (isSelected) {
              containerClass += "bg-sf-blue/5 border-sf-blue ring-1 ring-sf-blue";
            } else {
              containerClass += "border-slate-200 hover:border-sf-blue/50 hover:bg-slate-50";
            }
          }

          return (
            <div
              key={option.id}
              onClick={() => !showCorrect && onAnswerChange(option.id)}
              className={containerClass}
            >
              <div className="flex items-center h-5">
                <div className={`flex items-center justify-center w-5 h-5 rounded border ${
                   showCorrect && isCorrect ? 'bg-green-500 border-green-500' :
                   showCorrect && isSelected && !isCorrect ? 'bg-red-500 border-red-500' :
                   isSelected ? 'bg-sf-blue border-sf-blue' : 'bg-white border-slate-300'
                }`}>
                  {showCorrect && isCorrect ? (
                    <Check className="w-3 h-3 text-white" />
                  ) : showCorrect && isSelected && !isCorrect ? (
                    <X className="w-3 h-3 text-white" />
                  ) : (
                    <span className={`text-[10px] font-bold ${isSelected ? 'text-white' : 'text-slate-500'}`}>
                      {option.id}
                    </span>
                  )}
                </div>
              </div>
              <div className="ml-3 text-[15px] leading-snug text-slate-700 select-none">
                {option.text}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer / Actions - Compacted */}
      <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex justify-between items-center shrink-0 mt-auto">
        <button
          onClick={onToggleShowCorrect}
          className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
            showCorrect 
              ? 'bg-slate-200 text-slate-700 hover:bg-slate-300' 
              : 'text-sf-blue hover:bg-sf-blue/10'
          }`}
        >
          <Eye className="w-4 h-4" />
          {showCorrect ? 'Hide Answer' : 'Show Correct Answer'}
        </button>
      </div>
    </div>
  );
};