
export class QuizManager {
    private quizez: Quiz[]
    constructor() {
      this.quizez = [];
 }
  public start(roomId: string) {
     const io = IoManager.getIo();
    const quiz = this.quizes.find(x => x.roomId === roomId);
    quiz.start();
  }
}
public next(roomId: string) {
    const io = IoManager.getIo();
    io.to(roomId).emit({
       type: "START ROOM",
    })
 }
