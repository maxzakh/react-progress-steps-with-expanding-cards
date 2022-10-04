import testDog from '../assets/test-images/test-dog.jfif';
import testHorse from '../assets/test-images/test-horse.jfif';
import testMouses from '../assets/test-images/test-mouses.jfif';
import testOwl from '../assets/test-images/test-owl.jfif';
import testPanda from '../assets/test-images/test-panda.jfif';

export const galleryImages = [
    testDog,
    testHorse,
    testMouses,
    testOwl,
    testPanda,
];


export type ImageUrls = string[];

export function generateImageUrls(numberImages: number): ImageUrls {
    // const rv: string[] = [];

    // for (let i = 0; i < numberImages; i++) {
    //     rv.push(`https://source.unsplash.com/random/?animals`);
    // }

    // console.log('items', rv);

    // return rv;

    return galleryImages;
}
