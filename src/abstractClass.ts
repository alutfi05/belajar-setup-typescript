abstract class TakingPhoto {
    constructor(public cameraMode: string, public filter: string) {}

    abstract getPhoto(): void;

    getPhotoTime(): number {
        // some complex calculation
        return 20;
    }
}

// const ahmad = new TakingPhoto('front camera', 'beautify');
// error -> cannot create objecy using abstract class
// can create object with class who extend the abstract class

class Instagram2 extends TakingPhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter);
    }

    getPhoto(): void {
        console.log('Take the photo');
    }
}

const ahmad = new Instagram2('front camera', 'beautify', 10);
console.log(ahmad);
ahmad.getPhoto();
console.log(ahmad.getPhotoTime());
