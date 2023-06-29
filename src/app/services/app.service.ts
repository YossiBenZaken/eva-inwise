import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  getKeys() {
    return [
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
