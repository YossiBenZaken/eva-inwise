import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  getKeys() {
    return [
      {
        Key: '69f6ccdd873d4de7bba7235bacd5bd6c',
        Value: 'אורדע - מי נתניה',
      },
      {
        Key: 'a08e645a290e461e8ce8f703b42c5048',
        Value: 'אורדע - עין כרמים',
      },
      {
        Key: 'e049f856de7f4aa38987a7c1eca9da5c',
        Value: 'אורדע - נווה מדבר',
      },
      {
        Key: '3f98b64f2d9a4d1b89c211152b081bbb',
        Value: 'אורדע - הבאר השלישית',
      },
      {
        Key: '090fb752786a46fe910ed343d62d8c69',
        Value: 'אורדע - מי שמש',
      },
      {
        Key: 'fbd626138a264dcca2f607d821ed7eac',
        Value: 'אורדע - הוד השרון',
      },
      {
        Key: '8d250c0482de4411bbd6a72d5ef2b8be',
        Value: ' אורדע סונול גז +',
      },
      {
        Key: '976d0762251f4873872e6a6f28991f55',
        Value: 'אורדע - Worcare',
      },
      {
        Key: '848f96445e1a48588fa27c4356f8f899',
        Value: 'אורדע - בדיקות',
      },
      {
        Key: 'afcad93dd0be4778ac68b91f75c8d0cf',
        Value: 'אורדע - מי הרצליה',
      },
      {
        Key: '673fa1397619414a8ba89c3e588738e9',
        Value: 'אורדע פרינט -מנורה',
      },
      {
        Key: 'd7accaaeebd649c291563c302d562990',
        Value: 'אורדע - מנורה מתגלגלים',
      },
      {
        Key: '6e8f7cf6dc55453dabdad81d9bd04d42',
        Value: 'אורדע - אלטשולר מסרונים',
      },
      {
        Key: 'ae66793411b74393bd333b2aff7b327a',
        Value: 'אורדע - עיריית תל אביב',
      },
      {
        Key: 'ee23814f990f44c7a4a232be0b73b806',
        Value: 'אורדע - כללית',
      },
      {
        Key: 'ac0ac9a648504369b7f2b0c689900d92',
        Value: 'אורדע - חבר',
      },
      {
        Key: '6319d078139c46168266ab15e9e2ad14',
        Value: 'אורדע - כללי',
      },
      {
        Key: 'e6a5a5511e0f4d95be8526d53f52a9aa',
        Value: 'אורדע - לאומי קופות גמל',
      },
      {
        Key: 'ba2258faa7c2406e9e9e09b06b55dc78',
        Value: 'אורדע - שוק ההון',
      },
      {
        Key: '1491cb42e98f474eaf55a1ba7ce3760c',
        Value: 'אורדע - מי אביבים',
      },
      {
        Key: 'd20521df60b240f8a6990411055ea1dd',
        Value: 'אורדע עיריית חיפה - ארנונה',
      },
      {
        Key: '4786d475c9264adcb2e289656b459b0d',
        Value: 'אורדע - מי כרמל',
      },
      {
        Key: '7868dc7cae81402dbb83a31ef74bbca7',
        Value: 'אורדע - מניב ראשון',
      },
      {
        Key: '67baa730335441ba995ed703cc6efb73',
        Value: 'אורדע - מנורה מתגלגלים (ביטוח)',
      },
      {
        Key: '70dd9d618c7c419bb1d82adce979ba6e',
        Value: 'אורדע – מיתב',
      },
      {
        Key: '956054f608494ec7b14481485a474331',
        Value: 'אורדע - תנובה '
      },
    ].sort((a, b) => a.Value.localeCompare(b.Value));
  }
}
