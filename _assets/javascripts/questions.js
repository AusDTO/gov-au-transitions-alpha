export const QuestionFlow = {
  questions: [
    {
      question: "What living options are they interested in?",
      name: "live",
      type: "checkbox",
      legend: "Select as many as apply",
      values: [
        {value: "athome", label: "At home"},
        {value: "family", label: "Family or friend’s home"},
        {value: "nursinghome", label: "Nursing home"},
        {value: "retirementvillage", label: "Retirement village"},
        {value: "nolive", label: "I don't know"}
      ]
    },
    {
      question: "What do they need help with?",
      name: "helpnursinghome",
      condition: "nursinghome",
      type: "checkbox",
      legend: "Select as many as apply",
      values: [
        {value: "nursinginvolved", label: "What’s involved in getting my older person into a nursing home?"},
        {value: "nursingprovide", label: "What does a nursing home provide?"},
        {value: "nursingcosts", label: "What are the costs?"},
        {value: "nursingfind", label: "How do I find one?"}
      ]
    },
    {
      question: "What do you need help with?",
      name: "homehelp",
      condition: "athome,family",
      type: "checkbox",
      legend: "Select as many as apply",
      values: [
        {value: "homehelpget", label: "How do they get home help?"},
        {value: "homehelpkind", label: "What kinds of help are available?"},
        {value: "homehelpcosts", label: "What are the costs?"},
        {value: "homehelpfind", label: "How do I find these services?"}
      ]
    },
    {
      question: "What do you need help with?",
      legend: "Select as many as apply",
      name: "newlocation",
      condition: "retirementvillage",
      type: "checkbox",
      values: [
        {value: "retirementwhat", label: "What’s involved in getting into a retirement village?"},
        {value: "retirementprovide", label: "What does a retirement village provide?"},
        {value: "retirementcosts", label: "What are the costs?"},
        {value: "retirementfind", label: "How do I find retirement villages?"}
      ]
    },
    {
      question: "What do you need help with?",
      name: "homeassist",
      condition: "athome,family",
      type: "checkbox",
      legend: "Select as many as apply",
      values: [
        {value: "homeassistcooking", label: "Cooking and preparing meals"},
        {value: "homeassisteating", label: "Eating"},
        {value: "homeassistcleaning", label: "Cleaning"},
        {value: "homeassistmodifications", label: "Home modifications"},
        {value: "homeassistshowering", label: "Showering"},
        {value: "homeassistdressing", label: "Dressing"},
        {value: "homeassisttoilet", label: "Going to the toilet"},
        {value: "homeassistwashing", label: "Hanging out and bringing in the washing"},
        {value: "homeassistgardening", label: "Gardening"}
      ]
    },
    {
      question: "What’s involved in getting home modificaitons?",
      name: "homemods",
      condition: "athome,family",
      type: "checkbox",
      legend: "Select as many as apply",
      values: [
        {value: "homemodswhat", label: "What do Home Modifications help me to do?"},
        {value: "homemodscost", label: "What are the costs?"},
        {value: "homemodshow", label: "How do I get them?"}
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
