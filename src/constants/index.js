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
        description:"lorem ipsum",
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
        description:"lorem ipsum",
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
        description:
        "Lorem ipsum ",
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
        name: "Image captioning",
        description:"Lorem ipsum",
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
                skill:"CNN RNN",
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