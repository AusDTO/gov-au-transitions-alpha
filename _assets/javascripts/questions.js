export const QuestionFlow = {
  questions: [
    {
      question: "How old are they?",
      name: "age",
      type: "radio",
      //legend: "Select as many as apply",
      values: [
        {value: "under50", label: "Under 50"},
        {value: "50to64", label: "50 to 64"},
        {value: "65to79", label: "65 to 79"},
        {value: "80to95", label: "80 to 95"},
        {value: "95", label: "95 plus"}
      ]
    },
    {
      question: "Are they recieving a pension?",
      name: "pension",
      type: "checkbox",
      //legend: "This helps us to suggest things like subsidised services and the right forms.",
      values: [
        {value: "pension", label: "Age pension"},
        {value: "disability", label: "Disability pension"},
        {value: "veteran", label: "Veteran/war widow or widower"},
        {value: "Don’t know", label: "Don’t know"},
        {value: "other", label: "Other"}
      ]
    },
    {
      question: "What best describes your situation?",
      name: "situation",
      type: "radio",
      //legend: "Select as many as apply",
      values: [
        {value: "future", label: "I’m thinking about the future"},
        {value: "notmanaging", label: "I’m starting not to manage"},
        {value: "needhelp", label: "I know that I need some help"},
        {value: "Crisis", label: "I’m in a crisis"}
      ]
    },
    {
      question: "Are there any physical issues that you’re concerned about?",
      name: "physical",
      //condition: "ownhome,family",
      type: "autocomplete",
      legend: "E.g. arthritis",
      values: [
        {value: "arthritis", label: "Arthritis"},
        {value: "osteoporosis", label: "Osteoporosis"},
        {value: "diabetes", label: "Diabetes"},
        {value: "frailty", label: "Frailty"},
        {value: "Heart", label: "Heart Disease"},
        {value: "Incontinence", label: "Incontinence"},
        {value: "respiratory", label: "Respiratory Disease"},
        {value: "influenza", label: "Influenza and Pneumonia"},
        {value: "obesity", label: "Obesity"},
        {value: "sight", label: "Sight problems"},
        {value: "Hearing", label: "Hearing problems"},
      ]
    },
    {
      question: "Are there any mental or emotional issues that you’re concerned about?",
      name: "emotional",
      type: "checkbox",
      values: [
        {value: "loneliness", label: "Loneliness"},
        {value: "confusion", label: "Confusion"},
        {value: "forgetful", label: "Forgetfulness"},
        {value: "Anxiety", label: "Anxiety"},
        {value: "Depression", label: "Depression"},
        {value: "dementia", label: "Dementia"},
        {value: "noissues", label: "No issues"},
      ]
    },
    {
      question: "What do you want to look at?",
      name: "live",
      type: "checkbox",
      values: [
        {value: "ownhome", label: "Staying at home"},
        {value: "moving", label: "Moving to a more appropriate set up"},
        {value: "outandabout", label: "Getting out and about"},
      ]
    },
    {
      question: "What kind of assistance do you think is required?",
      name: "assistance",
      condition: "ownhome,outandabout",
      type: "checkbox",
      values: [
        {value: "gettingaround", label: "Getting around the house"},
        {value: "Eating", label: "Eating well"},
        {value: "maintenance", label: "Home maintenance"},
        {value: "transport", label: "Transport"},
        {value: "exercise", label: "Exercise"},
        {value: "social", label: "Social connections"},
        {value: "hygiene", label: "Personal hygiene"},
        {value: "medications", label: "Managing medications"},
        {value: "affairs", label: "Managing home affairs"},
        {value: "supervision", label: "Supervision"},
        {value: "noassistance", label: "None"},
      ]
    },
    {
      question: "Where do they live?",
      name: "location",
      condition: "ownhome,outandabout",
      type: "location",
      legend: "This helps us to suggest local services",
      values: []
    },
    {
      question: "Which options are you interested in learning about?",
      name: "learning",
      condition: "moving",
      type: "checkbox",
      values: [
        {value: "gettingaround", label: "Living near__________"},
        {value: "singlestorey", label: "Single storey accommodation"},
        {value: "support", label: "Supervision and support"},
        {value: "Nursingcare", label: "Nursing care"},
        {value: "independent", label: "Staying independent at home"},
        {value: "maintaininghome", label: "Help in maintaining a home"},
        {value: "community", label: "Living in a community"},
      ]
    },
    {
      question: "Where are they considering living?",
      name: "location",
      condition: "moving",
      type: "location",
      values: []
    },

  ],
  results: [
    {
      title: "Getting home help",
      id: "homehelp",
      condition: "retirementvillage,nursinghome,nolive",
      abstract: "Below are some next steps and information to assist you to get the types of in home help you need.",
      list: [
        {
          title: "What's in your area",
          type: "result",
          items: []
        },
        {
          title: "Related information",
          type: "information",
          items: []
        }
      ]
    },
    {
      title: "Getting out and about",
      id: "outandabout",
      condition: "",
      abstract: "Below are some local results next steps and information to assist you to get the types of help with transport that you need",
      list: [
        {
          title: "Services in your area",
          type: "result",
          items: [
            {
              label: "Community Health Focus Bus for the Elderly",
              link: "",
              number: 1
            },
            {
              label: "Local bus routes",
              link: "",
              number: 5
            },
            {
              label: "Local taxi companies",
              link: "",
              number: 2
            }
          ]
        },
        {
          title: "Next steps",
          type: "steps",
          items: [
            {
              label: "Get assessed for transport assistance - My Aged Care",
              abstract: "My Aged Care will advise on any transport assistance for regular appointments.",
              type: "subsidy",
              actions: [
                {
                  label: "Learn more about assesments",
                  link: "",
                  type: "info"
                },
                {
                  label: "1800 200 422",
                  link: "1800 200 422",
                  type: "link",
                  prefix: "Call:"
                }
              ]
            },
            {
              label: "Apply for a SA seniors card",
              abstract: "An SA seniors card provides discounts on public transport fares.",
              actions: [
                {
                  label: "Apply for a seniors card",
                  link: "",
                  type: "button"
                }
              ]
            },
            {
              label: "Apply for a senioprs metrocard",
              abstract: "You can travel free on trains, busses and trans in metropolitan Adelaide from 9:01am to 3:00pm and 7:01pm to 7:00am weekdays. At other times the concession is around 50% of the normal fare.",
              actions: [
                {
                  label: "Apply for a seniors metrocard",
                  link: "",
                  type: "button"
                }
              ]
            },
            {
              label: "Apply for a disability parking permit",
              abstract: "Carers and people with age related disabilities can apply for a disability parking permit.",
              actions: [
                {
                  label: "Apply for a parking permit",
                  link: "",
                  type: "link",
                  prefix: "Form: "
                }
              ]
            },
            {
              label: "Get your driving ability assessed",
              abstract: "Ask your GP to confirm your fitness to hold a driver's licence.",
              actions: [
                {
                  label: "5 GP's in your area",
                  link: "",
                  type: "link",
                  prefix: "Service finder: "
                }
              ]
            }
          ]
        },
        {
          title: "Related information",
          type: "information",
          items: [
            {
              label: "SA Gov:Medical fitness to drive",
              link: ""
            },
            {
              label: "Australian Human Rights Commision: Your rights in retirement to transport",
              link: ""
            },
            {
              label: "SA Gov: Motorised wheelchairs",
              link: ""
            }
          ]
        }
      ]
    },
    {
      title: "Help with health and wellbeing",
      id: "healthwellbeing",
      condition: "",
      abstract: "Below are some local results next steps and information to assist you to get the types of help with health and wellbeing you need.",
      list: [
        {
          title: "Local results",
          type: "result",
          items: []
        },
        {
          title: "Next steps",
          type: "steps"
        },
        {
          title: "Related information",
          type: "information",
          items: []
        }
      ]
    }
  ]
}
