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
        {value: "incontinence", label: "Incontinence"},
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
        {value: "eating", label: "Eating well"},
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
      title: "Help to stay at home",
      id: "stay",
      condition: "ownhome",
      abstract: "Explore a home care package to get coordinated services for day-to-day activities, personal care, transport for shopping or appointments and nursing and health care.",
      list: [
        {
          title: "Services in your area",
          type: "result",
          items: [
            {
              label: "Home care package providers",
              link: "http://www.myagedcare.gov.au/service-finder?tab=home-care-package-providers&location=MORPHETT%20VALE%20%20SA,5162&service=hcp-level-1234",
              number: 51
            },
            {
              label: "Home modification providers",
              link: "http://www.myagedcare.gov.au/service-finder?tab=help-at-home&location=MORPHETT%20VALE%20%20SA,%205162&service=Home%20modifications",
              number: 6
            }
          ]
        },
        {
          title: "Next steps",
          type: "steps",
          items: [
            {
              label: "Getting in-home help",
              abstract: "Call My Aged Care to arrange for an up-to-date assessment in your home. Have your Medicare card ready or your My Aged Care profile ID if you already have one. Call Monday to Friday, 8am to 5pm.",
              type: "subsidy",
              actions: [
                {
                  label: "Being assessed for home help",
                  link: "",
                  type: "secondary"
                },
                {
                  label: "1800 200 422",
                  link: "tel:1800200422",
                  type: "link",
                  prefix: "Call:"
                }
              ]
            },
            {
              label: "Estimate home care package fees",
              abstract: "Your provider may ask you to pay: a basic daily fee of up to 17.5% of the single basic age pension, an income-tested care fee if your income is over a certain amount.",
              actions: [
                {
                  label: "Compare basic home support and home care packages",
                  link: "",
                  type: "secondary"
                },
                {
                  label: "Estimate home care package fees",
                  link: "http://www.myagedcare.gov.au/fee-estimator/home-care/form",
                  type: "button"
                }
              ]
            },
            {
              label: "Home modifications",
              abstract: "Modifications to your home such as rails and ramps may help you to be more safe supported as you move around. You can organise this yourself locally or through your your service provider who will assess your situation.",
              actions: [
                {
                  label: "Home maintenance and modifications",
                  link: "http://www.myagedcare.gov.au/help-home/home-maintenance-and-modifications",
                  type: "external",
                  prefix: "Visit:"
                }
              ]
            },
          ]
        },
        {
          title: "Related information",
          type: "information",
          items: [
            {
              label: "Home maintenance and modifications",
              link: "http://www.myagedcare.gov.au/help-home/home-maintenance-and-modifications"
            },
            {
              label: "Getting out and about",
              link: ""
            }
          ]
        }
      ]
    },
    {
      title: "Considering an aged care home",
      id: "moving",
      //condition: "",
      abstract: "When you need help with day-to-day tasks or health care, you’re not able to look after yourself as well as you used to, and you would like some company.",
      list: [
        {
          title: "Services in your area",
          type: "result",
          items: [
          ]
        },
        {
          title: "Next steps",
          type: "steps",
          items: [
          ]
        },
        {
          title: "Related information",
          type: "information",
          items: [
          ]
        }
      ]
    },
    {
      title: "Help with health and wellbeing",
      id: "healthwellbeing",
      //condition: "",
      abstract: "Below are some local results next steps and information to assist you to get the types of help with health and wellbeing you need.",
      list: [
        {
          title: "Services in your area",
          type: "result",
          items: [
            {
              label: "Local pharmacies",
              link: "http://www.healthdirect.gov.au/australian-health-services/results/morphett_vale,5162/tihcs,aht-12243/pharmacy",
              number: 5
            },
            {
              label: "Local general practices",
              link: "http://www.healthdirect.gov.au/australian-health-services/results/morphett_vale,5162/tihcs,aht-11222/general-practice",
              number: 4
            },
            {
              label: "In-home meal services",
              link: "http://www.myagedcare.gov.au/service-finder?tab=help-at-home&location=MORPHETT%20VALE%20%20SA,%205162&service=Meals&subtype=At%20Home",
              number: 28
            }
          ]
        },
        {
          title: "Next steps",
          type: "steps",
          items: [
            {
              label: "Help with meals and nutrition",
              abstract: "You can get free or subsidised meal delivery, help with preparing and eating and shopping services in your local area.",
              condition: "eating",
              type: "subsidy",
              actions: [
                {
                  label: "Senior services guide",
                  link: "http://www.seniorservicesguide.com.au/list/Meals/australia/sa/city+of+onkaparinga+lg/morphett+vale",
                  type: "link",
                  prefix: "Find services:"
                }
              ]
            },
            {
              label: "Managing your medicines",
              abstract: "If you are having difficulty remembering to take your prescribed medicines, your pharmacist can use a sealed weekly Webster pack to help you manage.",
              condition: "medications",
              actions: [
                {
                  label: "Managing medicines",
                  link: "",
                  type: "secondary"
                },
                {
                  label: "Create a medicines eList",
                  link: "http://www.nps.org.au/topics/how-to-be-medicinewise/managing-your-medicines/medicines-list/medicines-elist",
                  type: "button",
                }
              ]
            },
            {
              label: "State help with continence services",
              abstract: "Ask about the form to apply for discounted products and services and take it to your doctor. South Australia Continence Resource Centre. Monday to Friday 9am to 5pm.",
              type: "subsidy",
              condition: "incontinence",
              actions: [
                {
                  label: "8266 5260",
                  link: "tel:82665260",
                  type: "link",
                  prefix: "Call:"
                },
                {
                  label: "1300 885 886",
                  link: "tel:1300885886",
                  type: "link",
                  prefix: "Call:"
                },
              ]
            },
            {
              label: "National help with continence service",
              abstract: "Download the form to apply for discounted products and services and take it to your doctor.",
              condition: "incontinence",
              type: "subsidy",
              actions: [
                {
                  label: "Continence Aids Payment Scheme application",
                  link: "http://www.bladderbowel.gov.au/caps/application.htm",
                  type: "link",
                  prefix: "Form:"
                },
              ]
            },
            {
              label: "Get advice about incontinence",
              abstract: "Contact the Continence Foundation of Australia helpline, Monday to Friday, 8am to 8pm",
              condition: "incontinence",
              actions: [
                {
                  label: "1800 330 0666",
                  link: "tel:18003300666",
                  type: "link",
                  prefix: "Call:"
                },
              ]
            },
            {
              label: "Get advice on dementia",
              abstract: "Contact Alzheimer’s Australia: National Dementia hotline, Monday to Friday, 9am to 5pm",
              condition: "dementia",
              actions: [
                {
                  label: "1800 100 500",
                  link: "tel:1800 100 500",
                  type: "link",
                  prefix: "Call:"
                },
              ]
            },
          ]
        },
        {
          title: "Related information",
          type: "information",
          items: [
            {
              label: "Continence Foundation of Australia",
              link: "http://www.continence.org.au/pages/get-help.html",
              condition: "incontinence",
            },
            {
              label: "Learn more about Dementia",
              link: "https://sa.fightdementia.org.au/",
              condition: "incontinence",
            },
            {
              label: "How to care for someone with dementia",
              link: "http://www.healthdirect.gov.au/caring-for-someone-with-dementia",
              condition: "dementia",
            }
          ]
        }
      ]
    }
  ]
}
