import Carousel from './components/carousel/Carousel';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import VideoList from './components/VideoList/VideoList';

function App() {
    return (
        <div className="App">
            <Header />
            <Carousel />
            <VideoList />
            <Footer />
            <Modal />
        </div>
    );
}

export default App;
