import React from "react";
import Cards from "./Components/Cards";
import { RiHeartFill } from "@remixicon/react";

const App = () => {
  const people = [
  {
    bgBanner: "https://picsum.photos/1200/300?random=1",
    DP: "https://i.pravatar.cc/150?img=1",
    username: "john_doe",
    title: "Building modern responsive websites using React and Tailwind CSS",
    likecount: "15.4K",
    postscount: 86,
    views: "342.1K",
  },
  {
    bgBanner: "https://picsum.photos/1200/300?random=2",
    DP: "https://i.pravatar.cc/150?img=2",
    username: "emma_wilson",
    title: "Creating beautiful user interfaces with clean design principles daily",
    likecount: "18.9K",
    postscount: 112,
    views: "428.7K",
  },
  {
    bgBanner: "https://picsum.photos/1200/300?random=3",
    DP: "https://i.pravatar.cc/150?img=3",
    username: "alex_smith",
    title: "Sharing creative coding tutorials and practical JavaScript development tips",
    likecount: "27.1K",
    postscount: 145,
    views: "651K",
  },
  {
    bgBanner: "https://picsum.photos/1200/300?random=4",
    DP: "https://i.pravatar.cc/150?img=4",
    username: "sophia_lee",
    title: "Capturing stunning travel photography with natural",
    likecount: "13.7K",
    postscount: 74,
    views: "298.5K",
  },
  {
    bgBanner: "https://picsum.photos/1200/300?random=5",
    DP: "https://i.pravatar.cc/150?img=5",
    username: "michael_b",
    title: "Exploring hidden travel destinations and unforgettable cultural experiences",
    likecount: "32.2K",
    postscount: 193,
    views: "815.4K",
  },
  {
    bgBanner: "https://picsum.photos/1200/300?random=6",
    DP: "https://i.pravatar.cc/150?img=6",
    username: "olivia_j",
    title: "Helping people achieve fitness goals through consistent healthy lifestyle habits",
    likecount: "24.5K",
    postscount: 129,
    views: "534.2K",
  },
  {
    bgBanner: "https://picsum.photos/1200/300?random=7",
    DP: "https://i.pravatar.cc/150?img=7",
    username: "daniel_k",
    title: "Writing efficient backend code and scalable software architecture solutions",
    likecount: "11.8K",
    postscount: 58,
    views: "241.8K",
  },
  {
    bgBanner: "https://picsum.photos/1200/300?random=8",
    DP: "https://i.pravatar.cc/150?img=8",
    username: "ava_martin",
    title: "Inspiring fashion enthusiasts with trendy outfits and styling ideas everyday",
    likecount: "39.8K",
    postscount: 210,
    views: "987.6K",
  },
  {
    bgBanner: "https://picsum.photos/1200/300?random=9",
    DP: "https://i.pravatar.cc/150?img=9",
    username: "ethan_h",
    title: "Producing original music tracks with professional studio recording techniques",
    likecount: "22.4K",
    postscount: 98,
    views: "476.9K",
  },
  {
    bgBanner: "https://picsum.photos/1200/300?random=10",
    DP: "https://i.pravatar.cc/150?img=10",
    username: "mia_clark",
    title: "Teaching digital marketing strategies for sustainable business growth online",
    likecount: "17.6K",
    postscount: 103,
    views: "389.4K",
  },
];

  return (
    <div className="min-h-screen bg-black text-white p-10 flex gap-10 flex-wrap">
      {people.map(function (elem) {
        return (
          <Cards
            Banner={elem.bgBanner}
            DP={elem.DP}
            username={elem.username}
            title={elem.title}
            like={elem.likecount}
            posts={elem.postscount}
            views={elem.views}
          />
        );
      })}
    </div>
  );
};

export default App;
