export const Types = [
    {
        id: 9,
        name: "Javascript"
    },
    {
        id: 10,
        name:"c programming"

    },
    {
        id: 11,
        name:"PHP"

    },
    {
        id: 12,
        name:"CSS"
    },
    {
        id: 13,
        name: "HTML",
    },
    {
        id: 14,
        name: "Networking",
    },
    {
        id: 15,
        name: "DATABASE",
    }



];
export const Queries  = [
    {   
        category: "CSS",
        type: "Multiple",
        difficulty:'easy',
        question:
          "Where in an HTML document is the correct place to refer to an external style sheet?",
        incorrectAnswers: [
          "In the <body> section",
          "At the end of the document",
          "You can't refer to an external style sheet",
        ],
        correctAnswer: "In the <head> section",
      },
      {
        category: "CSS",
        type: "Multiple",
        difficulty:'easy',
        question: "Which HTML tag is used to define an internal style sheet?",
        incorrectAnswers: ["<script>", "<headStyle>", "<css>"],
        correctAnswer: "<style>",
      },
      {
        category: "CSS",
        type: "Multiple",
        difficulty:'easy',
        question: "Which HTML attribute is used to define inline styles?",
        incorrectAnswers: ["class", "font", "styles"],
        correctAnswer: "style",
      },
      { 
        category: "CSS",
        type: "Multiple",
        difficulty:'easy',
        question: "Which is the correct CSS syntax?",
        incorrectAnswers: [
          "{body:color=black;}",
          "{body;color:black;}",
          "body:color=black;",
        ],
        correctAnswer: "body {color: black;}",
      },
      {
        category: "CSS",
        type: "Multiple",
        difficulty:'easy',
        question: "How do you insert a comment in a CSS file?",
        incorrectAnswers: [
          "' this is a comment",
          "// this is a comment",
          "// this is a comment //",
        ],
        correctAnswer: "/* this is a comment */",
      },
      {
        category: "CSS",
        type: "Multiple",
        difficulty:'easy',
        question: "Which property is used to change the background color?",
        incorrectAnswers: ["color", "bgcolor", "bgColor"],
        correctAnswer: "background-color",
      },
      {
        category: "CSS",
        type: "Multiple",
        difficulty:'easy',
        question: "How do you add a background color for all <h1> elements?",
        incorrectAnswers: [
          "all.h1 {background-color:#FFFFFF;}",
          "h1.setAll {background-color:#FFFFFF;}",
          "h1.all {background-color:#FFFFFF;}",
        ],
        correctAnswer: "h1 {background-color:#FFFFFF;}",
      },

];
export const Level = ["easy", "medium","hard"];
export const Idx = ["A","B","C","D"];
