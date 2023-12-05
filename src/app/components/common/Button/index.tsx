import React from 'react';
import styles from './button.module.css';
import Link from 'next/link';

type ButtonProps = {
    title: string;
    source: string;
};


const Button: React.FC<ButtonProps> = ({ title, source }) => {
    
    return (
        <Link href={source} passHref className={styles.linkButton}>
            <button className={styles.buttonClick}>
                {title}
            </button>
        </Link>
    );
};

export default Button;