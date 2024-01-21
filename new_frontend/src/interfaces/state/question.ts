export default interface Question {
  diagnose: 'notStarted' | 'progress' | 'finished', 
  question1: number,
  question2: number,
  question3: number,
}