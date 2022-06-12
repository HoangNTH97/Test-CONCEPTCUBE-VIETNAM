import Carousel from './components/carousel/Carousel';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Tutorial from './components/Tutorial/Tutorial';
import TutorialVideoList from './components/Tutorial/TutorialVideoList/TutorialVideoList';
import VideoItem from './components/VideoList/VideoItem/VideoItem';
import VideoList from './components/VideoList/VideoList';

function App() {
    return (
        <div className="App">
            <Header />
            <Carousel />
            <VideoList />
            <Footer />
        </div>
    );
}

export default App;