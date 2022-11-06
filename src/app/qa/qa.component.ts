import { Component, OnInit } from '@angular/core';
import { Question } from '../models/Question.model';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.scss'],
})
export class QaComponent {
  questions: Question[] = [
    {
      question: 'מה פירוש הסטטוסים?',
      answer:
        '0 - לא נשלח<br />2 - נפתח במייל<br />3 - bounce<br />4 - נדחה<br />5 - נשלח בהצלחה',
    },
    {
      question: 'קובץ קיים במערכת?',
      answer:
        'קיבלת מייל שרשום בו שהקובץ קיים במערכת ויש לטעון מחדש מה לעשות? <br />יש לשנות את השם של הקובץ לשם אחר ואז לנסות לשלוח שוב',
    },
    {
      question: 'קוד לא נמצא בטבלת המרה?',
      answer:
        'קיבלת מייל שרשום בו שהקוד לא נמצא בטבלת המרה מה לעשות? <br /><ul><li>יש לבדוק את הקובץ txt שנמצא בקובץ זיפ ולראות שרשום שמה קוד</li><li>אם הקוד נמצא בקובץ יש לבדוק שהקוד נמצא בעמוד התבניות</li></ul>',
    },
    {
      question: 'קובץ לא נמצא בזיפ?',
      answer:
        'קיבלת מייל שרשום בו שהקובץ לא נמצא בזיפ? <br />יש לבדוק שהקובץ קיים בקובץ זיפ באותו שם שקיבלת במייל',
    },
    {
      question: 'פיצול שליחת סמסים לפי קוד',
      answer: 'כדי לפצל סמסים לפי קוד יש להוסיף לשם של הקובץ multicode',
    },
  ];
}
