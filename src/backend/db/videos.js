import { v4 as uuid } from "uuid";
/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  {
    _id: uuid(),
    img_src:
      "https://i.ytimg.com/vi/n-f8udP21Jg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCR2qXKGpawxcSf09E7vKmqf7gGBg",
    url: "https://www.youtube.com/embed/n-f8udP21Jg",
    title: "Air Jordan Commercials (1986-2020)",
    creator: "Piotrekz Productions",
    views: "1.7M",
    duration: "25m55s",
    categoryName: "Sneaker ads",
    description:
      "In 1984, Nike and Michael Jordan teamed up to launch Jordan Brand. Nearly 40 years later, inspired by the greatest to ever play the game, the franchise continues to lead and shape the basketball footwear industry.",
  },
  {
    _id: uuid(),
    img_src:
      "https://i.ytimg.com/vi/fYBCkz06vmQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeSASJQw0E4Dz8ee7hddS-dazQJw",
    url: "https://www.youtube.com/embed/fYBCkz06vmQ",
    title: "Kobe Bryant EVERY Nike Shoe Commercial",
    creator: "Piotrekz Productions",
    views: "820K",
    duration: "12m50s",
    categoryName: "Sneaker ads",
    description:
      "A compilation of all the commercials of Kobe's nike shoes series",
  },
  {
    _id: uuid(),
    img_src:
      "https://i.ytimg.com/vi/I4CoEqIvOiQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZ4UJ6IsaqcZkbq3wFdFmB21iQsQ",
    url: "https://www.youtube.com/embed/I4CoEqIvOiQ",
    title: "NYC's Most Influential Sneakers",
    creator: "Complex",
    views: "829K",
    duration: "21m51s",
    categoryName: "Sneaker origins",
    description:
      "On the first episode of Complex's newest docu-series, Sole Origins, sneaker legends including DJ Clark Kent, Joe La Puma, Jeff Staple and Va$htie uncover their stories behind the most influential sneakers of NYC.",
  },
  {
    _id: uuid(),
    img_src:
      "https://i.ytimg.com/vi/hViOYZVMiWs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCr2fmQKtd1JYX5rrK9DtQrRtROLA",
    url: "https://www.youtube.com/embed/hViOYZVMiWs",
    title: "Nike Adapt BB Unboxing",
    creator: "Unbox therapy",
    views: "5M",
    duration: "5m7s",
    categoryName: "Sneaker unboxing",
    description:
      "The Nike Adapt BB self lacing sneakers are the most futuristic shoes on the planet. This is the first Nike Adapt BB unboxing.",
  },
  {
    _id: uuid(),
    img_src:
      "https://i.ytimg.com/vi/0jvt8Js0OU0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQv-G6KiBTpfNiO8LFTThExeLB9A",
    url: "https://www.youtube.com/embed/0jvt8Js0OU0",
    title: "Cristiano Ronaldo Goes Sneaker Shopping",
    creator: "Complex",
    views: "33.3M",
    duration: "9m34s",
    categoryName: "Sneaker shopping",
    description:
      "Cristiano Ronaldo goes Sneaker Shopping with Joe La Puma at Honor 23 in Beijing, China in his first interview since joining Juventus, and talks about his humble beginnings growing up in Madeira, Nike making new sneakers for Juventus, and his son, Cristiano Jr., wanting to dress like his dad.",
  },
];
