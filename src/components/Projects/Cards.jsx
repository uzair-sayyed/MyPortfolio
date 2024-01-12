import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import socialBook from "../../assets/socialbook (1).png";
import airTickets from "../../assets/airTickets (1).png";
import imageSearch from "../../assets/imageSearch (1).png";
import news from "../../assets/news (1).png";
import usabilityHub from "../../assets/usabilityHub (1).png";
import restaurant from "../../assets/restaurant (1).png";
import qrcode from "../../assets/qrcode (1).png";
import weatherapp from "../../assets/weatherapp (1).png";
import calculator from "../../assets/calculator (1).png";
import expensetracker from "../../assets/expensetracker.png";
import passwordgenerator from "../../assets/passwordgenerator (1).png";
import myportfolio from "../../assets/myportfolio (1).png";
import movieApp from "../../assets/movieApp.png";
import foodOrderApp from "../../assets/foodOrderApp.png";
import todoList from "../../assets/todoList.png";
import tictactoe from "../../assets/tictactoe.png";
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
      title: "Cart App (React)",
      description:
        "Added Complete Cart functionality to this app with Modal opening for Cart and Checkout Form. User can fill the form for the order. Data will be recieve in the backend Data folder in JSON format",
      techStack: "HTML, JavaScript, CSS, React",
      livePreview: "https://food-order-app-uzairsayyed.netlify.app/",
      github: "https://github.com/uzair-sayyed/Food-Order-App",
      image: foodOrderApp,
    },
    {
      id: 7,
      title: "News App",
      description:
        " This App shows the latest news fetched from the web API. It is completely Responsive for the better user experience.",
      techStack: "HTML , JavaScript, CSS",
      livePreview: "https://uzair-sayyed.github.io/NewsApp/",
      github: "https://github.com/uzair-sayyed/NewsApp",
      image: news,
    },
    {
      id: 8,
      title: "Movie App (React)",
      description:
        "Created using React Router Dom and Axios it redirects you to the other page once you click on the movie card. Error handling is also done in this project.",
      techStack: "HTML , JavaScript, CSS, React, React Router Dom",
      livePreview: "https://movieappuzairsayyed.netlify.app/",
      github: "https://github.com/uzair-sayyed/Movie-App",
      image: movieApp,
    },
    {
      id: 9,
      title: "My Portfolio (React)",
      description:
        "Used Router Dom Library and many other external libraries for features. Used raw css for complete styling and added media queries for responsiveness.",
      techStack:
        "HTML, CSS, JavaScript, React, React Router Dom, External libraries",
      livePreview: "https://uzairsayyed.netlify.app/",
      github: "https://github.com/uzair-sayyed/MyPortfolio",
      image: myportfolio,
    },
    {
      id: 10,
      title: "QR Code Generator",
      description:
        "QR Code Genrator is API based application which provides Barcode Scanner for texts and links, etc. It is written on vanilla Javascript.",
      techStack: "HTML, CSS, JavaScript",
      livePreview: "https://uzair-sayyed.github.io/QrCodeGenerator/",
      github: "https://github.com/uzair-sayyed/QrCodeGenerator",
      image: qrcode,
    },
    {
      id: 11,
      title: "Weather App",
      description:
        "This app shows weather information based on the location entered. It fetched the data from the Web services API.",
      techStack: "HTML, CSS, JavaScript",
      livePreview: "https://uzair-sayyed.github.io/WeatherApp/",
      github: "https://github.com/uzair-sayyed/WeatherApp",
      image: weatherapp,
    },
    {
      id: 12,
      title: "Calculator",
      description:
        "This app includes math operations functionalities. It is also has features like switching from light mode to dark mode",
      techStack: "HTML, CSS, JavaScript",
      livePreview: "https://uzair-sayyed.github.io/Calculator2/",
      github: "https://github.com/uzair-sayyed/Calculator2",
      image: calculator,
    },
    {
      id: 13,
      title: "Expense Tracker",
      description:
        "This app is completely based on React components and Logics. It has reusable components. It includes graphical data representation too.",
      techStack: "HTML, CSS, JavaScript, React",
      livePreview: "https://uzairsayyed-expensetracker.netlify.app/",
      github: "https://github.com/uzair-sayyed/ExpenseTracker",
      image: expensetracker,
    },
    {
      id: 14,
      title: "Password Generator",
      description:
        "Password generator app is for generating random passwords. It can generate password on specific conditions like Uppercase, onlywords, with symbols, etc.",
      techStack: "HTML, CSS, JavaScript",
      livePreview: "https://uzair-sayyed.github.io/PasswordGenerator/",
      github: "https://github.com/uzair-sayyed/PasswordGenerator",
      image: passwordgenerator,
    },
    {
      id: 15,
      title: "Todo App",
      description:
        "This is based on CRUD functionality. We can add, mark it completed and delete the task from browser local storage.",
      techStack: "HTML, CSS, JavaScript",
      livePreview: "https://uzair-sayyed.github.io/ToDoList/",
      github: "https://github.com/uzair-sayyed/ToDoList",
      image: todoList,
    },
    {
      id: 16,
      title: "Tic Tac Toe",
      description:
        "Added logics using Js core concept for tic tac toe and based upon that winner will be decided or match will be drawn. user can reset the game.",
      techStack: "HTML, CSS, JavaScript",
      livePreview: "https://uzair-sayyed.github.io/TictTac-Toe/",
      github: "https://github.com/uzair-sayyed/TictTac-Toe",
      image: tictactoe,
    },
  ]);
  return datas.map((data) => {
    return <ProjectCard key={data.id} data={data} />;
  });
}

export default Cards;
