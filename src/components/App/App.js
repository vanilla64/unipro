import './App.sass';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Cards from "../Cards/Cards";
import Card from "../Card/Card";
import MainCards from "../MainCards/MainCards";
import Pagination from "../Pagination/Pagination";

function App() {
  return (
    <div className="app">
      <Header />
      <Main>
        <MainCards />
        <Cards>
          <Card title={'Новости'} isOpened={true} />
          <Card title={'Раскрытие информации'} />
          <Card title={'Закупки и продажи'} />
          <Card title={'Блок 3'} />
        </Cards>
        <Pagination />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
