import { ppo_1,c,cpp,javascript,html,css,python,tensorflow,reactjs,nodejs,instagram,github,linkedin } from "../assets";
export const NavData=[
    {
        id:"about",
        title:"About",
    },
    {
        id:"projects",
        title:"Projects",
    },
    {
        id:"contact",
        title:"Contact",
    },
];
 const projects=[
    {
        name: "PPO Drone",
        description:"Implemented Proximal Policy Optimization (PPO) and Advantage Actor-Critic (A2C) reinforcement learning algorithms to develop an simulated autonomous drone system capable of stabilization and precise movement. Utilized these algorithms to build and train the drone’s policy network with Pytorch, to optimize its actions on custom environment feedback. Its performance is optimized over time by incorporating reward and value functions.",
        skills:[
            {
                skill:"Python",
                color:"text-[#2ecc71]",
            },
            {
                skill:"Pytorch",
                color:"text-[#e67e22]"
            },
        ],
        image:ppo_1,
        link:"https://github.com/",
    },
    {
        name: "EveryNote",
        description:"Developed a Full-Stack web application using the MERN stack. The application provides a platform for students to post and share links to their handwritten notes. Leveraged React for the front-end user interface, enabling an interactive experience. Implemented a RESTful API using Express.js to handle data requests and interact with the MongoDB database. Integrated authentication and authorization features using JWT Authentication to ensure secure access to the applications functionality",
        skills:[
            {
                skill:"Mongodb",
                color:"text-[#2ecc71]",
            },
            {
                skill:"Express",
                color:"text-[#e67e22]"
            },
            {
                skill:"Node.js",
                color:"text-[#e74c3c]"
            },
        ],
        image:ppo_1,
        link:"https://github.com/",
    },
    {
        name: "Stock-price prediction",
        description:"Developed a deep learning model in Python to predict Apple Inc. (AAPL) stock prices. Extracted historical stock price data using the OpenBB Terminal SDK, and preprocessed it by dividing it into nonoverlapping windows of 4 days closing prices to forecast the next days price. Employed a variety of architectures, including LSTM+Dense, RNN+Dense, and Dense-only models, using a window of the past 4 days closing prices to predict the next days price for Apple Inc. (AAPL) stock. Achieved a remarkable accuracy of 98.8 percent with the best-performing architecture.",
        skills:[
            {
                skill:"Python",
                color:"text-[#2ecc71]",
            },
            {
                skill:"Pytorch",
                color:"text-[#e67e22]"
            },
            {
                skill:"RNN-LSTM",
                color:"text-[#e74c3c]"
            },
        ],
        image:ppo_1,
        link:"https://github.com/",
    },
    {
        name: "Pegasis",
        description:"Developed an object detection system using the SSD (Single Shot MultiBox Detector) architecture to accurately predict and locate humans and cars in images. Implemented depth estimation model that incorperated Encoder-Decoder architecture to accurately predict the distance of objects from the camera.",
        skills:[
            {
                skill:"Python",
                color:"text-[#2ecc71]",
            },
            {
                skill:"Pytorch",
                color:"text-[#e67e22]",
            },
            {
                skill:"SSD",
                color:"text-[#e74c3c]",
            },
        ],
        image:ppo_1,
        link:"https://github.com/",
    },
 ];


 const footerdata=[
    {
        id:"github",
        icon:github,
        link:"https://github.com/susanth-24/"
    },
    {
        id:"linkedin",
        icon:linkedin,
        link:"https://www.linkedin.com/in/sai-susanth-reddy-sanam-a1b7a9223/"
    },
    {
        id:"instagram",
        icon:instagram,
        link:"https://www.instagram.com/susanth_24ig/",
    },
];
 const expertise = [
    {
        name: "C",
        icon: c,
    },
    {
        name: "C++",
        icon: cpp,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Tensorflow",
        icon: tensorflow,
    },
    {
      name: "HTML ",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Node JS",
      icon: nodejs,
    },
    
   
  ];

  
  
export {projects,expertise,footerdata};