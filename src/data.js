const sampleStudents = [
  { id: 1, name: 'Alice Johnson', ecoPoints: 150, badges: ['Eco Starter', 'Quiz Master'] },
  { id: 2, name: 'Bob Smith', ecoPoints: 120, badges: ['Eco Starter'] },
  { id: 3, name: 'Carol Davis', ecoPoints: 90, badges: ['Eco Starter'] },
  { id: 4, name: 'David Wilson', ecoPoints: 200, badges: ['Eco Starter', 'Quiz Master', 'Green Champion'] },
];

const environmentalModules = [
  {
    id: 1,
    title: 'Plastic Waste Management',
    icon: '♻️'
  },
  {
    id: 2,
    title: 'Energy Conservation',
    icon: '⚡'
  },
  {
    id: 3,
    title: 'Water Conservation',
    icon: '💧'
  }
];
const environmentalModulesMain = [
  {
    id: 1,
    title: 'Plastic Waste Management',
    description: 'Learn effectively about plastic pollution and recycling.',
    image: '/Waste Management.jpg' 
  },
  {
    id: 2,
    title: 'Energy Conservation',
    description: 'Discover ways to save energy at home and school',
    image: '/Energy Management.jpg'
  },
  {
    id: 3,
    title: 'Water Conservation',
    description: 'Understanding the importance of water conservation',
    image: '/Water Management.jpeg'
  }
];

const sampleQuizzes = {
  1: {
    questions: [
      {
        question: "How long does a plastic bottle take to decompose?",
        options: ["10 years", "50 years", "450 years", "1000 years"],
        correct: 2
      },
      {
        question: "Which symbol indicates that plastic can be recycled?",
        options: ["Triangle with number", "Circle", "Square", "Star"],
        correct: 0
      },
      {
        question: "What is the best way to reduce plastic waste?",
        options: ["Use more plastic bags", "Reuse and recycle", "Burn plastic", "Bury in ground"],
        correct: 1
      }
    ]
  },
  2: {
    questions: [
      {
        question: "Which appliance uses the most energy at home?",
        options: ["TV", "Air Conditioner", "Light bulb", "Phone charger"],
        correct: 1
      },
      {
        question: "What is renewable energy?",
        options: ["Coal power", "Solar power", "Gas power", "Nuclear power"],
        correct: 1
      },
      {
        question: "How much energy can you save by turning off lights?",
        options: ["0%", "5-10%", "10-15%", "50%"],
        correct: 2
      }
    ]
  },
  3:{
    questions: [
      {
        question: "What percentage of Earth's surface is covered by water?",
        options: ["50%", "60%", "70%", "80%"],
        correct: 2
      },
      {
        question: "Which activity wastes the most water?",
        options: ["Brushing teeth", "Taking a shower", "Washing dishes", "Watering plants"],
        correct: 1
      },
      {
        question: "What is a simple way to conserve water?",
        options: ["Fix leaks", "Leave taps running", "Use more water", "Water lawn daily"],
        correct: 0
      }
    ]
  }
};

export { sampleStudents, environmentalModules, sampleQuizzes, environmentalModulesMain };