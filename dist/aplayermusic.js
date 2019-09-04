const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // mini: false,
    fixed: true, //吸底模式，与迷你模式冲突
    autoplay: false,//默认是否自动播放
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,//默认音量
    mutex: true,//是否不允许多个播放器同时播放
    listFolded: true,//是否默认收起播放列表
    listMaxHeight: 90,//播放列表的高度
    lrcType: 3, //使用lrc文件提供歌词
    //网易云默认外链链接：http://music.163.com/song/media/outer/url?id=ID数字.mp3
    audio: [
        {
            name: '행복을 찾아서(寻找幸福)',
            artist: 'Leessang / 赵贤雅',
            url: 'http://music.163.com/song/media/outer/url?id=22842399.mp3',
            cover: 'http://p1.music.126.net/2996FlCtcEluFUaFG9Y16A==/857619069689686.jpg',
            lrc: '/dist/music/22842399.lrc',
            theme: '#46718b'
        }
    ]
});
