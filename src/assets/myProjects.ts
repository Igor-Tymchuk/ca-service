export interface MyProject {
  title: string;
  description: string;
  img: string;
  urlLive: string;
  urlGit: string;
}

import aquaTrack from "../images/aquaTrack.webp";
import backendAquaTrack from "../images/backendAquaTrack.webp";
import backendContacts from "../images/backendContacts.webp";
import callOfVictory from "../images/callOfVictory.webp";
import movieInfo from "../images/movieInfo.webp";
import phoneBook from "../images/phoneBook.webp";
import portfolio from "../images/portfolio.webp";
import searchImages from "../images/searchImages.webp";
import searchImagesTS from "../images/searchImagesTS.webp";
import webStudio from "../images/webStudio.webp";
import watchCharm from "../images/watchCharm.webp";
import rentalCar from "../images/rentalCar.webp";

export const myProjects: MyProject[] = [
  {
    title: "WebStudio",
    description:
      "It is my projects Lorem, ipsum dolor sit amet consectetur adipisicing elit. At delectus consectetur quo quasi aut, soluta rerum? Quasi earum hic impedit!",
    img: webStudio,
    urlGit: "https://github.com/Igor-Tymchuk/goit-markup-hw-06",
    urlLive: "https://igor-tymchuk.github.io/goit-markup-hw-06/",
  },
  {
    title: "WatchCharm",
    description:
      "It is my projects Lorem, ipsum dolor sit amet consectetur adipisicing elit. At delectus consectetur quo quasi aut, soluta rerum? Quasi earum hic impedit!",
    img: watchCharm,
    urlGit: "https://github.com/Artur-Luniaka/LunTeam",
    urlLive: "https://artur-luniaka.github.io/LunTeam/",
  },
  {
    title: "Search Images...",
    description:
      "It is my projects Lorem, ipsum dolor sit amet consectetur adipisicing elit. At delectus consectetur quo quasi aut, soluta rerum? Quasi earum hic impedit!",
    img: searchImages,
    urlGit: "https://github.com/Igor-Tymchuk/goit-js-hw-12",
    urlLive: "https://igor-tymchuk.github.io/goit-js-hw-12/",
  },
  {
    title: "Portfolio - Infinity Team",
    description:
      "It is my projects Lorem, ipsum dolor sit amet consectetur adipisicing elit. At delectus consectetur quo quasi aut, soluta rerum? Quasi earum hic impedit!",
    img: portfolio,
    urlGit: "https://github.com/Igor-Tymchuk/infinity-team",
    urlLive: "https://igor-tymchuk.github.io/infinity-team/",
  },
  {
    title: "MovieInfo",
    description:
      "It is my projects Lorem, ipsum dolor sit amet consectetur adipisicing elit. At delectus consectetur quo quasi aut, soluta rerum? Quasi earum hic impedit!",
    img: movieInfo,
    urlGit: "https://github.com/Igor-Tymchuk/goit-react-hw-05",
    urlLive: "https://goit-react-hw-05-two-zeta.vercel.app/",
  },
  {
    title: "PhoneBook",
    description:
      "It is my projects Lorem, ipsum dolor sit amet consectetur adipisicing elit. At delectus consectetur quo quasi aut, soluta rerum? Quasi earum hic impedit!",
    img: phoneBook,
    urlGit: "https://github.com/Igor-Tymchuk/goit-react-hw-08",
    urlLive: "https://goit-react-hw-08-ebon-six.vercel.app/",
  },
  {
    title: "Search Images and photos [TS]",
    description:
      "It is my projects Lorem, ipsum dolor sit amet consectetur adipisicing elit. At delectus consectetur quo quasi aut, soluta rerum? Quasi earum hic impedit!",
    img: searchImagesTS,
    urlGit: "https://github.com/Igor-Tymchuk/goit-typescript-hw-02",
    urlLive: "https://goit-typescript-hw-02-six-cyan.vercel.app/",
  },
  {
    title: "Backend for Contacts App",
    description:
      "It is my projects Lorem, ipsum dolor sit amet consectetur adipisicing elit. At delectus consectetur quo quasi aut, soluta rerum? Quasi earum hic impedit!",
    img: backendContacts,
    urlGit: "https://github.com/Igor-Tymchuk/nodejs-hw-mongodb",
    urlLive: "https://nodejs-hw-mongodb-hw-2.onrender.com/api-docs/",
  },
  {
    title: "Backend for AquaTrack App",
    description:
      "It is my projects Lorem, ipsum dolor sit amet consectetur adipisicing elit. At delectus consectetur quo quasi aut, soluta rerum? Quasi earum hic impedit!",
    img: backendAquaTrack,
    urlGit: "https://github.com/Igor-Tymchuk/aquacoders-backend",
    urlLive: "https://aquacoders.onrender.com/api-docs/",
  },
  {
    title: "Aqua Track",
    description:
      "It is my projects Lorem, ipsum dolor sit amet consectetur adipisicing elit. At delectus consectetur quo quasi aut, soluta rerum? Quasi earum hic impedit!",
    img: aquaTrack,
    urlGit: "https://github.com/Artur-Luniaka/aquacoders",
    urlLive: "https://aquacoders.vercel.app/",
  },
  {
    title: "Call of Victory",
    description:
      "It is my projects Lorem, ipsum dolor sit amet consectetur adipisicing elit. At delectus consectetur quo quasi aut, soluta rerum? Quasi earum hic impedit!",
    img: callOfVictory,
    urlGit: "https://github.com/Igor-Tymchuk/stp-7969",
    urlLive: "https://igor-tymchuk.github.io/stp-7969/",
  },
  {
    title: "Rental Car",
    description:
      "It is my projects Lorem, ipsum dolor sit amet consectetur adipisicing elit. At delectus consectetur quo quasi aut, soluta rerum? Quasi earum hic impedit!",
    img: rentalCar,
    urlGit: "https://github.com/Igor-Tymchuk/rental-car",
    urlLive: "https://rental-car-dusky.vercel.app/",
  },
];
