import React from 'react';
import styles from './button.module.css';

type ButtonProps = {
    title: string;
    source: string;
};


const Button: React.FC<ButtonProps> = ({ title, source }) => {
    return (
        <footer className={styles.footer}>
            <hr/>
            <p>Desenvolvido por Vitor Migoto - 2023</p>
        </footer>
    );
};

export default Button;