export const QuestionFlow = {
  questions: [
    {
      question: "What living options do they want to look into?",
      name: "live",
      type: "checkbox",
      legend: "Select as many as apply",
      values: [
        {value: "ownhome", label: "Own home"},
        {value: "family", label: "Family or friend’s home"},
        {value: "retirementvillage", label: "Retirement village"},
        {value: "nursinghome", label: "Nursing home"},
        {value: "nolive", label: "I don't know"}
      ]
    },
    {
      question: "What do you think they need help with?",
      name: "help",
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
      type: "location",
      legend: "This helps us to suggest local services.",
      values: []
    },
    {
      question: "Which area/s are they considering moving to?",
      legend: "This helps us to suggest local services.",
      name: "newlocation",
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
        {value: "aboriginal", label: "Aboriginal or Torres Strait Islander peoples"},
      ]
    }
  ],
  results: [
    {
      id: "[data-result-set='altliving']",
      rules: "retirementvillage,nursinghome,nolive"
    },
    {
      id: "#retirement-village",
      rules: "retirementvillage"
    },
    {
      id: "#retirementvillage-costs",
      rules: "retirementvillage+pensioner,veteran"
    }
  ]
}
