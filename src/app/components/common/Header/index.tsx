// src/components/Header.tsx

import React from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image'

// Definindo o tipo para as props do componente
type HeaderProps = {
    title: string;
    // Você pode adicionar mais propriedades aqui, conforme necessário
};

// Componente de cabeçalho com tipagem TypeScript
const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className={styles.header}>
            <Link href='./'>
                <Image alt="Home" className={styles.homeIcon} src='home_icon.svg' width={100} height={48} />
            </Link>
            <h1 className={styles.title}>{title}</h1>
            {/* Você pode adicionar mais elementos de UI aqui */}
        </header>
    );
};

export default Header;
