class Video {
    constructor(title,uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    
    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`)
    }
}

let furstVideo = new Video('1984', 'Bob', "3600")
furstVideo.watch();

let secondVideo = new Video('World', 'Jon', '400')

const videoData = [
    { title: 'React', uploader: 'Elena', time: 450 },
    { title: 'CSS', uploader: 'Vova', time: 350 },
    { title: 'HTML', uploader: 'Mark', time: 200 },
    { title: 'Node', uploader: 'Efrat', time: 500 },
    { title: 'Angular', uploader: 'Chris', time: 400 }
];

let videoInstances = [];

videoData.forEach(data => {
    let video = new Video(data.title, data.uploader, data.time);
    videoInstances.push(video);
});

videoInstances.forEach(video => {
    video.watch();
});