import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Questions from './components/Questions';
import "./globals.css";

export default function Page() {
  const itens = [
    {title:'Pergunta 1', source:'page'},
    {title:'Pergunta 2', source:'page'},
    {title:'Pergunta 3', source:'page'}
  ]

  return (<>
    <Header title="Escolha a Enquete"></Header>
    <Questions data={itens}/>
    <Footer/>
  </>)
}