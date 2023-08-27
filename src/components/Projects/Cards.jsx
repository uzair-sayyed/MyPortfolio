import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import socialBook from "../../assets/socialbook.png";
import airTickets from "../../assets/airTickets.png";
import imageSearch from "../../assets/imageSearch.png";
import news from "../../assets/news.png";
import usabilityHub from "../../assets/usabilityHub.png";
import restaurant from "../../assets/restaurant.png";
import qrcode from "../../assets/qrcode.png";
import weatherapp from "../../assets/weatherapp.png";
import calculator from "../../assets/calculator.png";
import expensetracker from "../../assets/expensetracker.png";
import passwordgenerator from "../../assets/passwordgenerator.png";
import myportfolio from "../../assets/myportfolio.png";
function Cards() {
  const [datas, setDatas] = useState([
    {
      id: 1,
      title: "Social Book",
      description:
        "It is a project Inspired by Facebook. It is complete responsive. It has two pages Home and Profile. It has Dark mode feature. (By clicking on user icon at top right)",
      techStack: "HTML, CSS, JavaScript, Resposnvie Design",
      livePreview: " https://uzair-sayyed.github.io/SocialBook/",
      github: "https://github.com/uzair-sayyed/SocialBook",
      image: socialBook,
    },
    {
      id: 2,
      title: "Usability Hub",
      description:
        "Usability Hub is a project I completed using HTML, CSS & JS. It is a cloned of original Usability Hub Website. It is completely Responsive for all devices.",
      techStack: "HTML, CSS, JavaScript, Resposnvie Design",
      livePreview: "https://uzair-sayyed.github.io/UsabilityHubClone/",
      github: "https://github.com/uzair-sayyed/UsabilityHubClone",
      image: usabilityHub,
    },
    {
      id: 3,
      title: "Restaurant Site",
      description:
        " Website for a Restaurant. It is completely responsive. Added smooth scrollbar using JS. No other libraries used to Style the website Complete CSS code.",
      techStack: "HTML , JavaScript, CSS",
      livePreview: "https://uzair-sayyed.github.io/RestrauntWebsite/",
      github: "https://github.com/uzair-sayyed/RestrauntWebsite",
      image: restaurant,
    },
    {
      id: 4,
      title: "Air Tickets",
      description:
        "Air Tickets website is for flight bookings. It is a project which I completed during my internship at Technohacks Edutech. It is completely responsive.",
      techStack: "HTML, CSS, JavaScript, Resposnvie Design",
      livePreview: "https://uzair-sayyed.github.io/AirTickets/",
      github: "https://github.com/uzair-sayyed/AirTickets",
      image: airTickets,
    },
    {
      id: 5,
      title: "Image Search App",
      description:
        "Image Search App Show the results according to the user search inputs. It is developed using Vanilla Javascript. It uses the Fetch method of JS to fetch the Images from the API.",
      techStack: "HTML, JavaScript, CSS",
      livePreview: "https://uzair-sayyed.github.io/ImageSearchAPI/",
      github: "https://github.com/uzair-sayyed/ImageSearchAPI",
      image: imageSearch,
    },
    {
      id: 6,
      title: "News App",
      description:
        " This App shows the latest news fetched from the web API. It is completely Responsive for the better user experience.",
      techStack: "HTML , JavaScript, CSS",
      livePreview: "https://uzair-sayyed.github.io/NewsApp/",
      github: "https://github.com/uzair-sayyed/NewsApp",
      image: news,
    },
    {
      id: 7,
      title: "QR Code Generator",
      description:
        "QR Code Genrator is API based application which provides Barcode Scanner for texts and links, etc. It is written on vanilla Javascript.",
      techStack: "HTML, CSS, JavaScript",
      livePreview: "https://uzair-sayyed.github.io/QrCodeGenerator/",
      github: "https://github.com/uzair-sayyed/QrCodeGenerator",
      image: qrcode,
    },
    {
      id: 8,
      title: "Weather App",
      description:
        "This app shows weather information based on the location entered. It fetched the data from the Web services API.",
      techStack: "HTML, CSS, JavaScript",
      livePreview: "https://uzair-sayyed.github.io/WeatherApp/",
      github: "https://github.com/uzair-sayyed/WeatherApp",
      image: weatherapp,
    },
    {
      id: 9,
      title: "Calculator",
      description:
        "This app includes math operations functionalities. It is also has features like switching from light mode to dark mode",
      techStack: "HTML, CSS, JavaScript",
      livePreview: "https://uzair-sayyed.github.io/Calculator2/",
      github: "https://github.com/uzair-sayyed/Calculator2",
      image: calculator,
    },
    {
      id: 10,
      title: "Expense Tracker",
      description:
        "This app is completely based on React components and Logics. It has reusable components. It includes graphical data representation too.",
      techStack: "HTML, CSS, JavaScript, React",
      livePreview: "https://uzairsayyed-expensetracker.netlify.app/",
      github: "https://github.com/uzair-sayyed/ExpenseTracker",
      image: expensetracker,
    },
    {
      id: 11,
      title: "Password Generator",
      description:
        "Password generator app is for generating random passwords. It can generate password on specific conditions like Uppercase, onlywords, with symbols, etc.",
      techStack: "HTML, CSS, JavaScript",
      livePreview: "https://uzair-sayyed.github.io/PasswordGenerator/",
      github: "https://github.com/uzair-sayyed/PasswordGenerator",
      image: passwordgenerator,
    },
    {
      id: 12,
      title: "My Portfolio",
      description:
        "Completely developed using React. It has many features that make user experience little more better.",
      techStack: "HTML, CSS, JavaScript",
      livePreview: "https://uzairsayyed.netlify.app/",
      github: "https://github.com/uzair-sayyed/MyPortfolio",
      image: myportfolio,
    },
  ]);
  return datas.map((data) => {
    return <ProjectCard key={data.id} data={data} />;
  });
}

export default Cards;
