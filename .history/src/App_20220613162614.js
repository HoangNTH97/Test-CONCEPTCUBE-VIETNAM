import { useState } from 'react';
import Carousel from './components/carousel/Carousel';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Tutorial from './components/Tutorial/Tutorial';
import TutorialVideoList from './components/Tutorial/TutorialVideoList/TutorialVideoList';
import VideoItem from './components/VideoList/VideoItem/VideoItem';
import VideoList from './components/VideoList/VideoList';

function App() {
    const [close, setClose] = useState(false);

    const receiveData = (data) => {
        setClose(data);
    };

    return (
        <div className="App">
            <Header />
            <Carousel />
            <VideoList />
            <Footer />
            <Modal onReceiveData={receiveData} />
        </div>
    );
}

export default App;
