import Carousel from './components/carousel/Carousel';
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
            <TutorialVideoList />
        </div>
    );
}

export default App;
