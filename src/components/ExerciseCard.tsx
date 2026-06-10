import { useState, useCallback } from 'react'
import type { Exercise } from '../types'
import { addWrongQuestion, ENCOURAGEMENTS } from '../utils/progress'

function getEncouragement(): string {
  return ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)]
}

export default function ExerciseCard({
  exercise,
  onComplete,
}: {
  exercise: Exercise
  onComplete: () => void
}) {
  const [selected, setSelected] = useState<string>('')
  const [blankValue, setBlankValue] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [encouragement] = useState(getEncouragement)

  const checkAnswer = useCallback(() => {
    let correct = false
    const userAnswer = exercise.type === 'blank' ? blankValue.trim().toLowerCase() : selected

    if (exercise.type === 'trueFalse') {
      correct = selected === String(exercise.answer)
    } else if (exercise.type === 'choice' && typeof exercise.answer === 'string') {
      correct = selected === exercise.answer
    } else if (exercise.type === 'blank') {
      const acceptable = (exercise.acceptableAnswers || [String(exercise.answer)]).map(a => a.toLowerCase())
      correct = acceptable.includes(userAnswer.toLowerCase())
    }

    setIsCorrect(correct)
    setSubmitted(true)

    if (!correct) {
      const lessonId = window.location.pathname.split('/').pop() || ''
      addWrongQuestion(
        lessonId,
        exercise.id,
        exercise.question,
        userAnswer,
        exercise.answer
      )
    }
  }, [selected, blankValue, exercise])

  const handleSubmit = () => {
    if (submitted) return
    if (exercise.type === 'blank') {
      if (!blankValue.trim()) return
    } else if (exercise.type === 'choice' || exercise.type === 'trueFalse') {
      if (!selected) return
    }
    checkAnswer()
  }

  const handleContinue = () => {
    onComplete()
  }

  return (
    <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 animate-fade-in-up">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm font-medium text-indigo-500">
          {exercise.type === 'choice' ? '📝 选择题' : exercise.type === 'blank' ? '✍️ 填空题' : '⚖️ 判断题'}
        </span>
      </div>

      <p className="text-base font-medium text-gray-800 mb-4">{exercise.question}</p>

      {/* Choice */}
      {exercise.type === 'choice' && exercise.options && (
        <div className="space-y-2">
          {exercise.options.map(opt => {
            const isSelected = selected === opt
            const isAnswer = opt === exercise.answer
            let btnClass =
              'w-full text-left px-4 py-3 rounded-xl border-2 transition-all font-medium text-sm'

            if (!submitted) {
              btnClass += isSelected
                ? ' border-indigo-400 bg-indigo-50 text-indigo-700'
                : ' border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/50 text-gray-700'
            } else {
              if (isAnswer) {
                btnClass += ' border-green-400 bg-green-50 text-green-700'
              } else if (isSelected && !isAnswer) {
                btnClass += ' border-red-400 bg-red-50 text-red-700'
              } else {
                btnClass += ' border-gray-200 text-gray-400 opacity-60'
              }
            }

            return (
              <button
                key={opt}
                className={btnClass}
                onClick={() => !submitted && setSelected(opt)}
                disabled={submitted}
              >
                {opt}
              </button>
            )
          })}
        </div>
      )}

      {/* Fill in blank */}
      {exercise.type === 'blank' && (
        <div>
          <input
            type="text"
            className={`w-full px-4 py-3 rounded-xl border-2 text-base outline-none transition-all ${
              submitted
                ? isCorrect
                  ? 'border-green-400 bg-green-50'
                  : 'border-red-400 bg-red-50'
                : 'border-gray-200 focus:border-indigo-400 bg-gray-50 focus:bg-white'
            }`}
            placeholder="输入你的答案..."
            value={blankValue}
            onChange={e => !submitted && setBlankValue(e.target.value)}
            disabled={submitted}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          />
        </div>
      )}

      {/* True/False */}
      {exercise.type === 'trueFalse' && (
        <div className="flex gap-3">
          {['正确', '错误'].map(label => {
            const val = label === '正确' ? 'true' : 'false'
            const isSelected = selected === val
            const isAnswer = val === String(exercise.answer)
            let btnClass =
              'flex-1 py-3 rounded-xl border-2 transition-all font-medium text-sm'

            if (!submitted) {
              btnClass += isSelected
                ? ' border-indigo-400 bg-indigo-50 text-indigo-700'
                : ' border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/50 text-gray-700'
            } else {
              if (isAnswer) {
                btnClass += ' border-green-400 bg-green-50 text-green-700'
              } else if (isSelected && !isAnswer) {
                btnClass += ' border-red-400 bg-red-50 text-red-700'
              } else {
                btnClass += ' border-gray-200 text-gray-400'
              }
            }

            return (
              <button
                key={label}
                className={btnClass}
                onClick={() => !submitted && setSelected(val)}
                disabled={submitted}
              >
                {label === '正确' ? '✅ 正确' : '❌ 错误'}
              </button>
            )
          })}
        </div>
      )}

      {/* Feedback */}
      {submitted && (
        <div className={`mt-4 p-4 rounded-xl ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'} animate-pop-in`}>
          <p className={`font-bold text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {isCorrect ? encouragement : '😅 不太对，看看解析：'}
          </p>
          <p className="text-sm text-gray-600 mt-2">{exercise.explanation}</p>
          <button
            className="mt-3 w-full py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-sm transition-all active:scale-[0.98]"
            onClick={handleContinue}
          >
            {isCorrect ? '👏 继续下一题' : '💪 明白了，下一题'}
          </button>
        </div>
      )}

      {/* Submit button */}
      {!submitted && (
        <button
          className="mt-4 w-full py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-300 disabled:text-gray-500 text-white font-medium text-sm transition-all active:scale-[0.98]"
          onClick={handleSubmit}
          disabled={
            exercise.type === 'blank'
              ? !blankValue.trim()
              : !selected
          }
        >
          ✅ 提交答案
        </button>
      )}
    </div>
  )
}