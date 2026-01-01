import React, { useState, useMemo, useEffect } from 'react';
import { questions } from './data';
import { UserAnswers } from './types';
import { QuestionCard } from './components/QuestionCard';
import { ChevronLeft, ChevronRight, CheckCircle, RotateCcw, AlertCircle, Award, BookOpen, Target, Clock, ExternalLink, Home } from 'lucide-react';

enum AppMode {
  WELCOME = 'WELCOME',
  EXAM = 'EXAM',
  RESULTS = 'RESULTS',
  REVIEW = 'REVIEW',
}

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [revealedQuestions, setRevealedQuestions] = useState<number[]>([]);
  const [mode, setMode] = useState<AppMode>(AppMode.WELCOME);
  const [jumpInput, setJumpInput] = useState('1');
  
  // For Review Mode: Filtered list of indices referring to the main `questions` array
  const [reviewIndices, setReviewIndices] = useState<number[]>([]);

  // Update jump input when question index changes
  useEffect(() => {
    setJumpInput((currentQuestionIndex + 1).toString());
  }, [currentQuestionIndex]);

  const handleJumpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setJumpInput(val);
    
    const num = parseInt(val);
    if (!isNaN(num) && num >= 1 && num <= totalQuestions) {
      setCurrentQuestionIndex(num - 1);
    }
  };

  const goHome = () => {
    if (window.confirm('Are you sure you want to return to the home page? Your current progress will be lost.')) {
      setMode(AppMode.WELCOME);
      setUserAnswers({});
      setCurrentQuestionIndex(0);
    }
  };

  // Get the actual question object based on mode
  const currentQuestionData = useMemo(() => {
    if (mode === AppMode.REVIEW) {
       const realIndex = reviewIndices[currentQuestionIndex];
       return questions[realIndex];
    }
    return questions[currentQuestionIndex];
  }, [currentQuestionIndex, mode, reviewIndices]);

  const totalQuestions = mode === AppMode.REVIEW ? reviewIndices.length : questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleAnswerSelect = (optionId: string) => {
    const questionId = currentQuestionData.id;
    const currentSelected = userAnswers[questionId] || [];
    const questionData = currentQuestionData;

    // Check instruction to see if multiselect limit applies (logic simplified for UX)
    // If "Choose 1", replace. If "Choose 2", toggle.
    const isSingleChoice = questionData.instruction.toLowerCase().includes('choose 1');

    let newSelected: string[];

    if (isSingleChoice) {
      newSelected = [optionId];
    } else {
      if (currentSelected.includes(optionId)) {
        newSelected = currentSelected.filter(id => id !== optionId);
      } else {
        newSelected = [...currentSelected, optionId];
      }
    }

    setUserAnswers(prev => ({
      ...prev,
      [questionId]: newSelected
    }));
  };

  const handleToggleReveal = () => {
    const qId = currentQuestionData.id;
    if (revealedQuestions.includes(qId)) {
      setRevealedQuestions(prev => prev.filter(id => id !== qId));
    } else {
      setRevealedQuestions(prev => [...prev, qId]);
    }
  };

  const calculateScore = () => {
    let score = 0;
    const wrongIndices: number[] = [];
    const answeredQuestionIds = Object.keys(userAnswers).map(Number);
    
    // Filter questions to only those that have been answered
    const questionsToScore = questions.filter(q => answeredQuestionIds.includes(q.id));
    const attemptedCount = questionsToScore.length;

    questionsToScore.forEach((q) => {
      const userAns = userAnswers[q.id] || [];
      const correctAns = q.correctAnswers;
      
      // Sort to compare arrays regardless of order
      const sortedUser = [...userAns].sort();
      const sortedCorrect = [...correctAns].sort();
      
      const isCorrect = JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect);
      
      if (isCorrect) {
        score++;
      } else {
        // Find the index in the original questions array for review mode
        const originalIndex = questions.findIndex(quest => quest.id === q.id);
        wrongIndices.push(originalIndex);
      }
    });
    return { score, wrongIndices, attemptedCount };
  };

  const handleFinish = () => {
    setMode(AppMode.RESULTS);
  };

  const startReview = () => {
    const { wrongIndices } = calculateScore();
    setReviewIndices(wrongIndices);
    setCurrentQuestionIndex(0);
    setMode(AppMode.REVIEW);
    setRevealedQuestions([]); // Reset reveals for review
  };

  const restartExam = () => {
    setUserAnswers({});
    setRevealedQuestions([]);
    setCurrentQuestionIndex(0);
    setMode(AppMode.EXAM);
  };

  // ----- Render: Welcome View -----
  if (mode === AppMode.WELCOME) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#00A1E0] via-[#0176D3] to-[#032D60] flex items-center justify-center p-4 overflow-y-auto">
        <div className="max-w-4xl w-full bg-white/95 backdrop-blur-sm rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20 animate-in fade-in zoom-in duration-700">
          <div className="relative p-8 md:p-12 text-center overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full -translate-x-16 -translate-y-16 blur-2xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full translate-x-32 translate-y-32 blur-3xl animate-pulse delay-700" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sf-blue rounded-2xl shadow-lg shadow-blue-200 mb-6 animate-bounce duration-[3000ms]">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                Salesforce <span className="text-sf-blue">Admin</span>
              </h1>
              <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto font-medium">
                Master the ecosystem with our advanced preparation portal. 
                Engineered for excellence.
              </p>
            </div>
          </div>
          
          <div className="px-8 md:px-12 pb-12">
            <div className="grid md:grid-cols-2 gap-10 mb-12">
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-sf-blue" />
                  </div>
                  Exam Blueprint
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Questions', val: '65', icon: BookOpen },
                    { label: 'Time', val: '105m', icon: Clock },
                    { label: 'Passing', val: '65%', icon: CheckCircle },
                    { label: 'Format', val: 'MCQ', icon: Target },
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-50 p-3 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
                      <item.icon className="w-4 h-4 text-slate-400 mb-2 group-hover:text-sf-blue transition-colors" />
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.label}</div>
                      <div className="text-lg font-black text-slate-800">{item.val}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-sf-blue" />
                  </div>
                  Topic Weighting
                </h2>
                <div className="space-y-2">
                  {[
                    { label: 'Configuration and Setup', val: 15 },
                    { label: 'Object Manager & App Builder', val: 15 },
                    { label: 'Data & Analytics Management', val: 17 },
                    { label: 'Automation', val: 15 },
                    { label: 'Sales & Marketing Apps', val: 10 },
                    { label: 'Service & Support Apps', val: 10 },
                    { label: 'Productivity & Collaboration', val: 10 },
                    { label: 'Agentforce', val: 8 },
                  ].map((topic, i) => (
                    <div key={i} className="space-y-0.5">
                      <div className="flex justify-between text-[11px] font-bold text-slate-600">
                        <span className="truncate pr-2">{topic.label}</span>
                        <span className="text-sf-blue shrink-0">{topic.val}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-sf-blue rounded-full animate-in slide-in-from-left duration-1000" 
                          style={{ width: `${topic.val}%` }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-[2rem] p-6 mb-10 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award className="w-24 h-24 rotate-12" />
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
                  Engineering Credits
                </h3>
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Lead Developer & Prompt Engineer</div>
                    <a 
                      href="https://www.linkedin.com/in/zakaria-mairy/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl font-black hover:text-blue-400 transition-colors flex items-center gap-2"
                    >
                      ZAKARIA MAIRY
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="h-8 w-px bg-slate-700 hidden md:block" />
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">AI Architecture</div>
                    <div className="text-base font-bold text-blue-100">Gemini 3 Flash & Pro (Preview)</div>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setMode(AppMode.EXAM)}
              className="group relative w-full py-6 bg-sf-blue hover:bg-blue-600 text-white text-2xl font-black rounded-2xl transition-all shadow-2xl shadow-blue-200 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="flex items-center justify-center gap-4">
                LAUNCH EXAM PORTAL
                <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ----- Render: Results View -----
  if (mode === AppMode.RESULTS) {
    const { score, wrongIndices, attemptedCount } = calculateScore();
    const totalToScore = attemptedCount || 1; // Avoid division by zero
    const percentage = Math.round((score / totalToScore) * 100);
    const passed = percentage >= 65; // Salesforce standard passing is usually 65%

    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden text-center">
          <div className={`p-8 ${passed ? 'bg-sf-success' : 'bg-sf-dark'} text-white`}>
            {passed ? <Award className="w-16 h-16 mx-auto mb-4" /> : <AlertCircle className="w-16 h-16 mx-auto mb-4" />}
            <h1 className="text-3xl font-bold mb-2">{passed ? 'Exam Passed!' : 'Keep Studying'}</h1>
            <p className="opacity-90">{passed ? 'Great job, Administrator!' : 'You can do this next time.'}</p>
          </div>
          
          <div className="p-8">
            <div className="flex justify-center items-end mb-6">
              <span className="text-6xl font-bold text-slate-800">{percentage}%</span>
              <span className="text-lg text-slate-500 mb-2 ml-2">Score</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-green-600">{score}</div>
                <div className="text-sm text-slate-500">Correct</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-red-500">{attemptedCount - score}</div>
                <div className="text-sm text-slate-500">Incorrect</div>
              </div>
            </div>
            
            <div className="mb-6 text-sm text-slate-500">
              You answered {attemptedCount} out of {questions.length} questions.
            </div>

            <div className="space-y-3">
              {wrongIndices.length > 0 && (
                <button 
                  onClick={startReview}
                  className="w-full py-3 px-4 bg-sf-blue hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <AlertCircle className="w-5 h-5" />
                  Review Incorrect Answers
                </button>
              )}
              
              <button 
                onClick={restartExam}
                className="w-full py-3 px-4 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Start New Exam
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ----- Render: Exam / Review View -----
  return (
    <div className="h-screen flex flex-col bg-[#F4F6F9] overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm shrink-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={goHome}
              className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors"
              title="Back to Home"
            >
              <Home className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-sf-blue rounded flex items-center justify-center text-white font-bold text-sm">
                SF
              </div>
              <div>
                <h1 className="font-bold text-slate-800 text-sm sm:text-base hidden sm:block">
                  {mode === AppMode.REVIEW ? 'Review Mode' : 'Admin Certification'}
                </h1>
                <span className="text-xs text-slate-500 sm:hidden">
                  {mode === AppMode.REVIEW ? 'Review' : 'Exam'}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm font-medium text-slate-600">
              <input
                type="text"
                value={jumpInput}
                onChange={handleJumpChange}
                className="w-10 h-7 text-center border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-sf-blue text-sf-blue font-bold"
                title="Jump to question"
              />
              <span className="text-slate-400">/</span>
              <span>{totalQuestions}</span>
            </div>
            {mode === AppMode.EXAM && (
               <button 
               onClick={handleFinish}
               className="text-sm font-medium text-sf-blue hover:underline"
             >
               Finish
             </button>
            )}
             {mode === AppMode.REVIEW && (
               <button 
               onClick={() => setMode(AppMode.RESULTS)}
               className="text-sm font-medium text-slate-600 hover:text-slate-900"
             >
               Back
             </button>
            )}
          </div>
        </div>
        {/* Progress Bar */}
        <div className="h-1 bg-slate-100 w-full">
          <div 
            className="h-full bg-sf-blue transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Main Content - Flex to fill available space */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-4 overflow-hidden flex flex-col">
        <QuestionCard 
          question={currentQuestionData}
          selectedAnswers={userAnswers[currentQuestionData.id] || []}
          onAnswerChange={handleAnswerSelect}
          showCorrect={revealedQuestions.includes(currentQuestionData.id) || mode === AppMode.REVIEW}
          onToggleShowCorrect={handleToggleReveal}
        />
      </main>

      {/* Footer Navigation */}
      <div className="bg-white border-t border-slate-200 p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] shrink-0 z-10">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <button
            onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
            disabled={currentQuestionIndex === 0}
            className={`flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
              currentQuestionIndex === 0 
                ? 'text-slate-300 cursor-not-allowed' 
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <div className="flex gap-2">
            {currentQuestionIndex === totalQuestions - 1 ? (
              <button
                onClick={handleFinish}
                className="flex items-center gap-2 px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium text-sm transition-colors shadow-sm shadow-green-200"
              >
                <CheckCircle className="w-4 h-4" />
                {mode === AppMode.REVIEW ? 'Finish' : 'Submit'}
              </button>
            ) : (
              <button
                onClick={() => setCurrentQuestionIndex(prev => Math.min(totalQuestions - 1, prev + 1))}
                className="flex items-center gap-1 px-5 py-2 bg-sf-blue hover:bg-blue-600 text-white rounded-lg font-medium text-sm transition-colors shadow-sm shadow-blue-200"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}