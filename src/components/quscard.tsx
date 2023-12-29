import React from 'react'

type Props = {
    question: string;
    answer:string[];
    callback:any;
    userAnswer:boolean;
    questionNr:number;
    totalQuestions:number;
};

const  Quscard: React.FC<Props> = ({
    question,
    answer,
    callback,
    userAnswer,
    questionNr,
    totalQuestions

}) => 

 <div>
    <p className='number'>
        Question: {questionNr}/{totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{__html: question}} />
 </div>
  


export default  Quscard;