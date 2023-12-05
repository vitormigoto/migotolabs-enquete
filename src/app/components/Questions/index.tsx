import React from 'react';
import styles from './questions.module.css';
import Button from '../common/Button';

type QuestionProps = {
    data: string[]
};


const Question: React.FC<QuestionProps> = ({data}) => {    
    return (
        <main className={styles.main}>
            {data.map((item, index) => (
                <Button title={item.title} source={item.source}></Button>                
            ))}
        </main>
    );
};

export default Question;