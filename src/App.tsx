import { HTMLAttributes, useState } from 'react';
import './App.css';
import { galleryImages } from './store/gallery-data';

type ContainerProps = {
    imageUrls: ImageUrls;
};

function Container({ imageUrls }: ContainerProps) {
    return (
        <div className="flex space-x-4">
            {imageUrls.map((url, idx) => (
                <div className="" key={idx}>
                    <img src={url} alt="gallery image" />
                </div>
            ))}
        </div>
    );
}

type ImageUrls = string[];

function generateImageUrls(numberImages: number): ImageUrls {
    // const rv: string[] = [];

    // for (let i = 0; i < numberImages; i++) {
    //     rv.push(`https://source.unsplash.com/random/?animals`);
    // }

    // console.log('items', rv);

    // return rv;

    return galleryImages;
}

function Button({ children, ...rest }: React.HTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className="m-4 px-4 py-2 bg-rose-600 border-slate-400 border rounded shadow active:scale-[.97]"
            {...rest}
        >
            {children}
        </button>
    );
}

function App() {
    const [imageUrls, setImageUrls] = useState(generateImageUrls(5));

    return (
        <div className="min-h-screen bg-gradient-to-b from-rose-500 to-rose-900 flex flex-col">
            <div className="flex-1 flex flex-col">
                <div className="text-2xl p-4">Header</div>
                <div className="flex-1">
                    <Container imageUrls={imageUrls} />

                    <Button onClick={() => {
                        setImageUrls(generateImageUrls(5));
                    }}>Update</Button>

                    <Button onClick={() => {
                        setImageUrls([]);
                    }}>Clear</Button>

                    {/* <button
                        className="m-4 px-4 py-2 bg-rose-600 border-slate-400 border rounded shadow active:scale-[.97]"
                        onClick={() => {
                            setImageUrls(generateImageUrls(5));
                        }}
                    >
                        Update
                    </button> */}

                    {/* <button
                        className="m-4 px-4 py-2 bg-rose-600 border-slate-400 border rounded shadow active:scale-[.97]"
                        onClick={() => {
                            setImageUrls([]);
                        }}
                    >
                        Clear
                    </button> */}
                </div>
                <div className="text-2xl p-4 bg-red-600">Footer</div>
            </div>
        </div>
    );
}

export default App;
