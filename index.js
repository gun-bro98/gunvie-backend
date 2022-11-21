import express from 'express';

const app = express();

app.set('port', 5001);

app.listen(app.get('port'), () => {
  console.log('안녕하세요. 기획과 DB좀 생각하느라 늦었습니다.!');
});