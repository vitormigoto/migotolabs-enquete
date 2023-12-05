// src/components/Header.tsx

import React from 'react';
import styles from './Header.module.css';

// Definindo o tipo para as props do componente
type HeaderProps = {
    title: string;
    // Você pode adicionar mais propriedades aqui, conforme necessário
};

// Componente de cabeçalho com tipagem TypeScript
const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            {/* Você pode adicionar mais elementos de UI aqui */}
        </header>
    );
};

export default Header;
