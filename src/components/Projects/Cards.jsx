import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import socialBook from "../../assets/socialbook.png";
import airTickets from "../../assets/airTickets.png";
import imageSearch from "../../assets/imageSearch.png";
import news from "../../assets/news.png";
import usabilityHub from "../../assets/usabilityHub.png";
import restaurant from "../../assets/restaurant.png";
function Cards() {
  const [datas, setDatas] = useState([
    {
      id: 1,
      title: "Air Tickets",
      description:
        "Air Tickets website is for flight bookings. It is a project which I completed during my internship at Technohacks Edutech. It is completely responsive.",
      techStack: "HTML, CSS, JavaScript, Resposnvie Design",
      livePreview: "https://uzair-sayyed.github.io/AirTickets/",
      github: "https://github.com/uzair-sayyed/AirTickets",
      image: airTickets,
    },
    {
      id: 2,
      title: "Social Book",
      description:
        "It is a project Inspired by Facebook. It is complete responsive. It has two pages Home and Profile. It has Dark mode feature. (By clicking on user icon at top right)",
      techStack: "HTML, CSS, JavaScript, Resposnvie Design",
      livePreview: " https://uzair-sayyed.github.io/SocialBook/",
      github: "https://github.com/uzair-sayyed/SocialBook",
      image: socialBook,
    },
    {
      id: 3,
      title: "Usability Hub",
      description:
        "Usability Hub is a project I completed using HTML, CSS & JS. It is a cloned of original Usability Hub Website. It is completely Responsive for all devices.",
      techStack: "HTML, CSS, JavaScript, Resposnvie Design",
      livePreview: "https://uzair-sayyed.github.io/UsabilityHubClone/",
      github: "https://github.com/uzair-sayyed/UsabilityHubClone",
      image: usabilityHub,
    },
    {
      id: 4,
      title: "Restaurant Site",
      description:
        " Website for a Restaurant. It is completely responsive. Added smooth scrollbar using JS. No other libraries used to Style the website Complete CSS code.",
      techStack: "HTML , JavaScript, SASS, React",
      livePreview: "https://uzair-sayyed.github.io/RestrauntWebsite/",
      github: "https://github.com/uzair-sayyed/RestrauntWebsite",
      image: restaurant,
    },
    {
      id: 5,
      title: "Image Search App",
      description:
        "Image Search App Show the results according to the user search inputs. It is developed using Vanilla Javascript. It uses the Fetch method of JS to fetch the Images from the API.",
      techStack: "HTML , JavaScript, SASS, React",
      livePreview: "https://uzair-sayyed.github.io/ImageSearchAPI/",
      github: "https://github.com/uzair-sayyed/ImageSearchAPI",
      image: imageSearch,
    },
    {
      id: 6,
      title: "News App",
      description:
        " This App shows the latest news fetched from the web API. It is completely Responsive for the better user experience.",
      techStack: "HTML , JavaScript, SASS, React",
      livePreview: "https://uzair-sayyed.github.io/NewsApp/",
      github: "https://github.com/uzair-sayyed/NewsApp",
      image: news,
    },
  ]);
  return datas.map((data) => {
    return <ProjectCard key={data.id} data={data} />;
  });
}

export default Cards;
