var preloaded = document.querySelector('.preloaded');
var queue = new createjs.LoadQueue(true, null, true);

queue.on('fileload', handleLoad, this);

queue.on('progress', handleProgress, this);

queue.on('complete', handleComplete, this);

queue.loadManifest([
    {
        id: 'sf',
        crossOrigin: true,
        type: createjs.Types.IMAGE,
        src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=35233ecf7c2f6b1b99123374610926fe'
    },
    {
        id: 'hk',
        crossOrigin: true,
        type: createjs.Types.IMAGE,
        src: 'https://images.unsplash.com/photo-1507941097613-9f2157b69235?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=f8f33afdfc69b16d51c996cf3a8cc1c7'
    },
    {
        id: 'lon',
        crossOrigin: true,
        type: createjs.Types.IMAGE,
        src: 'https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=4868d202b74b7a313bb34a3d8526428c'
    },
    {
        id: 'nyc',
        crossOrigin: true,
        type: createjs.Types.IMAGE,
        src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=d8f8d728cc689063536174ec02129ebc'
    },
    {
        id: 'tok',
        crossOrigin: true,
        type: createjs.Types.IMAGE,
        src: 'https://images.unsplash.com/photo-1505814360303-5bfcf2a8acb6?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=86aaa627e11ca46f2177787d563de340'
    }
]);

function handleProgress(event) {
    console.log(event.progress);
}

function handleLoad(event) {
    // console.log(event);
    var img = new Image();
    // img.crossOrigin = 'Anonymous';
    img.src = event.item.src;
    preloaded.appendChild(img);
    // var img = queue.getResult('image',true);
    // preloaded.appendChild(event.result);
}

function handleComplete() {
    document.querySelector('.main-container').classList.add('loaded');
    console.log('done');
}
