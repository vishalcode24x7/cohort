const reels = [
    {
        username: "travelwithanaya",
        likeCount: 12450,
        isLiked: true,
        commentCount: 342,
        video: "https://videos.pexels.com/video-files/854152/854152-hd_1920_1080_24fps.mp4",
        userProfile: "https://randomuser.me/api/portraits/women/21.jpg",
        shareCount: 185,
        isFollowed: "Follow",
        caption: "Sunrise views from the mountains 🌄✨"
    },
    {
        username: "fitraj",
        likeCount: 9870,
        isLiked: false,
        commentCount: 214,
        video: "https://videos.pexels.com/video-files/5644053/5644053-uhd_2562_1440_30fps.mp4",
        userProfile: "https://randomuser.me/api/portraits/men/32.jpg",
        shareCount: 97,
        isFollowed: "Unfollow",
        caption: "Morning workout routine 💪"
    },
    {
        username: "foodie_sneha",
        likeCount: 18420,
        isLiked: true,
        commentCount: 521,
        video: "https://videos.pexels.com/video-files/855457/855457-uhd_2560_1440_30fps.mp4",
        userProfile: "https://randomuser.me/api/portraits/women/44.jpg",
        shareCount: 290,
        isFollowed: "Follow",
        caption: "Homemade cheesy pasta 🍝❤️"
    },
    {
        username: "techwitharjun",
        likeCount: 7650,
        isLiked: false,
        commentCount: 108,
        video: "https://videos.pexels.com/video-files/3267066/3267066-uhd_2560_1440_25fps.mp4",
        userProfile: "https://randomuser.me/api/portraits/men/18.jpg",
        shareCount: 63,
        isFollowed: "Unfollow",
        caption: "Top 5 VS Code extensions 🚀"
    },
    {
        username: "naturelens",
        likeCount: 25670,
        isLiked: true,
        commentCount: 801,
        video: "https://videos.pexels.com/video-files/4334576/4334576-sd_640_360_24fps.mp4",
        userProfile: "https://randomuser.me/api/portraits/women/56.jpg",
        shareCount: 455,
        isFollowed: "Follow",
        caption: "Hidden waterfall in the forest 🌿💧"
    },
    {
        username: "dancewithme",
        likeCount: 14320,
        isLiked: false,
        commentCount: 376,
        video: "https://videos.pexels.com/video-files/5139026/5139026-uhd_2560_1440_30fps.mp4",
        userProfile: "https://randomuser.me/api/portraits/women/61.jpg",
        shareCount: 241,
        isFollowed: "Unfollow",
        caption: "Trending dance challenge 🕺"
    },
    {
        username: "gaminghub",
        likeCount: 21980,
        isLiked: true,
        commentCount: 645,
        video: "https://videos.pexels.com/video-files/854152/854152-hd_1920_1080_24fps.mp4",
        userProfile: "https://randomuser.me/api/portraits/men/47.jpg",
        shareCount: 512,
        isFollowed: "Follow",
        caption: "Epic gaming clutch 🎮🔥"
    },
    {
        username: "dailyquotes",
        likeCount: 6320,
        isLiked: false,
        commentCount: 89,
        video: "https://videos.pexels.com/video-files/5644053/5644053-uhd_2562_1440_30fps.mp4",
        userProfile: "https://randomuser.me/api/portraits/women/29.jpg",
        shareCount: 42,
        isFollowed: "Unfollow",
        caption: "Success starts with discipline."
    },
    {
        username: "carsandcoffee",
        likeCount: 17250,
        isLiked: true,
        commentCount: 482,
        video: "https://videos.pexels.com/video-files/855457/855457-uhd_2560_1440_30fps.mp4",
        userProfile: "https://randomuser.me/api/portraits/men/55.jpg",
        shareCount: 321,
        isFollowed:"Unfollow",
        caption: "Dream car spotted today 🏎️"
    },
    {
        username: "petworld",
        likeCount: 29840,
        isLiked: false,
        commentCount: 934,
        video: "https://videos.pexels.com/video-files/3267066/3267066-uhd_2560_1440_25fps.mp4",
        userProfile: "https://randomuser.me/api/portraits/women/12.jpg",
        shareCount: 610,
        isFollowed: "Unfollow",
        caption: "Cute puppy reaction 🐶❤️"
    }
];

var sum = '';
reels.forEach(function (elem) {
    sum = sum + `<div class="reel">
                    <video class="main-img" autoplay loop muted
                        src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}"
                                alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon">${elem.isLiked?'<i class="love ri-heart-fill"></i>':'<i class="ri-poker-hearts-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-send-ins-fill"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>`
})

let allReels = document.querySelector('.all-reels')
allReels.innerHTML = sum
