import { useState } from 'react';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { generateImageUrls } from './store/gallery-data';
import './App.css';

function App() {
    const [imageUrls, setImageUrls] = useState(generateImageUrls(5));

    return (
        <div className="min-h-screen bg-gradient-to-b from-rose-500 to-rose-900 flex flex-col">

            <div className="flex-1 flex flex-col">
                <div className="text-2xl p-4">Header</div>

                <Container className="flex-1 m-4" imageUrls={imageUrls} />

                <div className="text-2xl p-4 bg-red-600">
                    Footer

                    <Button className="m-4 bg-sky-600" onClick={() => setImageUrls([])}>
                        Clear
                    </Button>

                    <Button onClick={() => setImageUrls(generateImageUrls(5))}>
                        Update
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default App;
