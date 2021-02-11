const qBank = [
    {
      question:
        "10 rs me hukaah kon piya tha   ",
      answers: ["Maaya", "Rifaq Sugar", "Ehtesham", "Ashfaq"],
      correct: "Maaya",
      questionId: "099099"
    },
    {
      question:
        'Whose catch phrase is this "Abba ni maante na"?',
      answers: ["Ehtesham", "Tarique", "Rifaq", "Ashfaq"],
      correct: "Ehtesham",
      questionId: "183452"
    },
    {
      question:
        "Ali k course se kon chutiya bana tha",
      answers: ["Imran", "Ashfaq", "Maaya", "Tarique"],
      correct: "Imran",
      questionId: "267908"
    },
    {
      question: "Sobiya ko kiske naam se chidate the ",
      answers: [
        "wajid bhai",
        "Mujib bhai",
      ],
      correct: "Mujib bhai",
      questionId: "333247"
    },
    {
      question: "Who is the eldest in the group?",
      answers: ["Maaya", "Areeba", "Ehtesham", "Imran"],
      correct: "Maaya",
      questionId: "496293"
    },
    {
      question:
        "who is the youngest in the group",
      answers: [
        "Ashfaq",
        "Rifaq",
        "Sobiya",
        "Gulfaam"
      ],
      correct: "Ashfaq",
      questionId: "588909"
    },
    {
      question:
        '____ - Honey',
      answers: ["Rifaq", "Ehtesham", "Aniket", "Imran"],
      correct: "Rifaq",
      questionId: "648452"
    },
    {
      question: "_____ - Chor",
      answers: ["Rifaq", "Ehtesham", "Aniket", "Ashfaq"],
      correct: "Aniket",
      questionId: "786649"
    },
    {
      question:
        "_____ - Badeer",
      answers: ["Rifaq", "Tarique", "Imran", "Ashfaq"],
      correct: "Ashfaq",
      questionId: "839754"
    },
    {
      question:
        "Tower kisko connect karna tha :P",
      answers: [
        "Gulfaam",
        "Areeba",
        "Rifaq",
        "Sobiya"
      ],
      correct: "Gulfaam",
      questionId: "98390"
    },
    {
      question: "New phone k liye train se phone kisne feka tha?",
      answers: ["Rifaq", "Ehtesham", "Aniket", "Ashfaq"],
      correct: "Rifaq",
      questionId: "1071006"
    },
    {
      question: "_________ - Dekcha",
      answers: ["Areeba",
      "Rifaq",
      "Sobiya",
      "Gulfaam"],
      correct: "Areeba",
      questionId: "1174154"
    },
  ];
  
  export default (n = 5) =>
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
  