'use client'
import { useState, useEffect } from 'react';

const TypewriterText = ({ 
  texts = [
    "Railway simplifies your infrastructure stack from servers to observability with a single, scalable, easy-to-use platform.",
    "Deploy applications instantly with zero configuration and automatic scaling.",
    "Build full-stack applications with integrated databases, services, and networking.",
    "From prototype to production - Railway handles your entire development lifecycle."
  ],
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 2000,
  className = ""
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const targetText = texts[currentTextIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < targetText.length) {
          setCurrentText(targetText.slice(0, currentText.length + 1));
        } else {
          setIsPaused(true);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div className={className}>
      <span>{currentText}</span>
      <span className="animate-pulse text-purple-400 ml-1">|</span>
    </div>
  );
};

export default TypewriterText;