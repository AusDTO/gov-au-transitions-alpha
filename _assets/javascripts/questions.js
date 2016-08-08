export const QuestionFlow = {
  questions: [
    {
      question: "What living options are they interested in?",
      name: "live",
      type: "checkbox",
      legend: "Select as many as apply",
      values: [
        {value: "ownhome", label: "Own home"},
        {value: "family", label: "Family or friend’s home"},
        {value: "retirementvillage", label: "Retirement village"},
        {value: "nursinghome", label: "Nursing home"},
        {value: "nolive", label: "I don't know"}
      ],
      glossary: [
        {term: "Own home", description: "The house that you currently live in."},
        {term: "Family or friend’s home", description: "A family of firend house that the person may move to."},
        {term: "Retirement village", description: "A retirement village is going to be defined later."},
        {term: "Nursing home", description: "A nursing home is going to be defined later."},
        {term: "I don't know", description: "I dont know is when you don't know where the person is going to live."}
      ]
    },
    {
      question: "What do you think they need help with?",
      name: "help",
      condition: "ownhome,family",
      type: "checkbox",
      legend: "Select as many as apply",
      values: [
        {value: "home", label: "Managing at home"},
        {value: "meds", label: "Managing medication"},
        {value: "outandabout", label: "Getting out and about"}
      ]
    },
    {
      question: "Where do they live?",
      name: "location",
      condition: "ownhome,family",
      type: "location",
      legend: "This helps us to suggest local services.",
      values: []
    },
    {
      question: "Which area/s are they considering moving to?",
      legend: "This helps us to suggest local services.",
      name: "newlocation",
      condition: "retirementvillage,nursinghome,nolive",
      type: "locationaddmore",
      legend: "postcode, town or village",
      values: []
    },
    {
      question: "Do any of these apply?",
      name: "entitlement",
      type: "checkbox",
      legend: "This helps us to suggest things like subsidised services and the right forms.",
      values: [
        {value: "pensioner", label: "Age pensioner"},
        {value: "disability", label: "Disability pensioner"},
        {value: "veteran", label: "Veteran/war widow or widower"},
        {value: "aboriginal", label: "Aboriginal or Torres Strait Islander peoples"}
      ]
    },
    {
      question: "What medical conditions do you know they have?",
      name: "medicalconditions",
      type: "autocomplete",
      legend: "This helps us point you to the correct area in order to get help in that area.",
      values: [
        {value: "arthritis", label: "Arthritis"},
        {value: "heartdisease", label: "Heart Disease"},
        {value: "cancer", label: "Cancer"},
        {value: "respiratorydisease", label: "Respiratory Disease"},
        {value: "alzheimers", label: "Alzheimer’s Disease"},
        {value: "osteoporosis", label: "Osteoporosis"},
        {value: "diabetes", label: "Diabetes"},
        {value: "influenza", label: "Influenza and Pneumonia"},
        {value: "falls", label: "Falls"},
        {value: "substanceabuse", label: "Substance Abuse"},
        {value: "obesity", label: "Obesity"},
        {value: "depression", label: "Depression"},
        {value: "sight", label: "Sight problems"},
        {value: "hearing", label: "Hearing problems"}
      ]
    }
  ],
  results: [
    {
      id: "[data-result-set='altliving']",
      rules: "retirementvillage,nursinghome,nolive"
    },
    // {
    //   id: "#retirement-village",
    //   rules: "retirementvillage"
    // },
    // {
    //   id: "#retirementvillage-costs",
    //   rules: "retirementvillage+pensioner,veteran"
    // },
    {
      id: "[data-result-set='athome']",
      rules: "ownhome,family"
    },
    {
      id: "[data-result-set='medical']",
      rules: "meds"
    },
    {
      id: "[data-result-set='outandabout']",
      rules: "outandabout"
    }


  ]
}
