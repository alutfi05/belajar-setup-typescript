interface TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
}

interface Story {
    createStory(): void;
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {}
}

class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ) {}

    createStory(): void {
        console.log('Story was created');
    }
}

const ig = new Instagram('front camera', 'beautify', 4);
console.log(ig);

const yt = new Youtube('back camera', 'anime', 10, 'youtube short');
console.log(yt);
yt.createStory();
