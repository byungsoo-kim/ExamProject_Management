const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req,res)=>{
    res.send([
        {
            'id' : 1,
            'image' : 'https://placeimg.com/64/64/1',
            'name' :'홍길동',
            'birthday' : '940226',
            'gender' : '남자',
            'job':'학생'
            },
            {
              'id' : 2,
              'image' : 'https://placeimg.com/64/64/2',
              'name' :'홍길동1',
              'birthday' : '940226',
              'gender' : '남자',
              'job':'학생'
              },
              {
                'id' : 3,
                'image' : 'https://placeimg.com/64/64/3',
                'name' :'홍길동3',
                'birthday' : '9402126',
                'gender' : '남자',
                'job':'학생'
                }
    ]);
});

app.listen(port, ()=> console.log(`${port} OPEN`));