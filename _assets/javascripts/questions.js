export const QuestionFlow = {
  questions: [
    {
      question: "Are you looking for someone else or yourself?",
      name: "yourselforsomeone",
      type: "radio",
      setLanguage: true,
      //legend: "Select as many as apply",
      values: [
        {value: "third", label: "Someone else"},
        {value: "first", label: "Myself"}
      ]
    },
    {
      question: "What best describes your current need?",
      name: "situation",
      type: "radio",
      //legend: "Select as many as apply",
      values: [
        {value: "crisis", label: "I need help now"},
        {value: "future", label: "I’m thinking about the future"}
      ]
    },
    {
      question: "What support are you interested in learning about?",
      name: "supporttype",
      type: "checkbox",
      legend: "Select all that apply",
      values: [
        {value: "ownhome", label: "Help at home"},
        {value: "moving", label: "Moving somewhere else"},
        {value: "transport", label: "Getting transport"},
        {value: "health", label: "Health conditions"},
        {value: "social", label: "Social support and activities"},
        {value: "notsure", label: "I’m not sure"}
      ]
    },
    {
      question: "Are you concerned about any of these health conditions?",
      name: "physical",
      condition: "health,notsure",
      type: "checkbox",
      legend: "Select all that apply",
      values: [
        {value: "arthritis", label: "Arthritis"},
        {value: "dementia", label: "Dementia"},
        {value: "diabetes", label: "Diabetes"},
        {value: "respiratory", label: "Respiratory conditions"},
        {value: "incontinence", label: "Incontinence"},
        {value: "noconditions", label: "None of these"}
      ]
    },
    {
      question: "Are you concerned about any of these emotional issues?",
      name: "emotional",
      condition: "health,notsure",
      type: "checkbox",
      legend: "Select all that apply",
      values: [
        {value: "anxiety", label: "Anxiety"},
        {value: "depression", label: "Depression"},
        {value: "loneliness", label: "Loneliness"},
        {value: "noissues", label: "None of these"}
      ]
    },
    {
      question: {
          first: "What options would you like to know about for moving somewhere else?",
          third: "What options would they like to know about for moving somewhere else?"
      },
      name: "learning",
      condition: "moving,notsure",
      type: "checkbox",
      legend: "Select all that apply",
      values: [
        {value: "independent", label: "Living with family and friends"},
        {value: "retirement", label: "Retirement villages"},
        {value: "agedcare", label: "Aged care homes"},
        {value: "culturemove", label: "Cultural background support"},
      ],
      glossary: [
        { term: "Living with family or friends", description: "This is when an older person moves out of their own home to live with their family or friends. It includes living in a ‘granny flat’, which is a self-contained unit on the same property." },
        { term: "Retirement villages", description: "These are complexes of residential units for older people who are generally well but who want to live among other retired people." },
        { term: "Aged care homes", description: "These are for people who are no longer able to live in their own home, with family or friends or in a retirement village. They may also be known as nursing homes, residential care, hostels or high or low-care facilities." },
        { term: "Cultural background support", description: "This is support for people who come from a different culture. It means getting services in a language you most easily understand or living with people from a similar culture to you - Chinese or Croatian for example." },
      ],
    },
    {
      question: "What help is needed in the home?",
      name: "assistance",
      condition: "ownhome,notsure,retirement,independent",
      type: "checkbox",
      legend: "Select all that apply",
      values: [
        {value: "eating", label: "Cooking and eating"},
        {value: "culturehome", label: "Cultural background support"},
        {value: "maintenance", label: "Home maintenance"},
        {value: "housework", label: "Housework"},
        {value: "medications", label: "Managing medication"},
        {value: "hygiene", label: "Personal hygiene"},
        {value: "stayingfit", label: "Staying fit"},
        {value: "supervision", label: "Supervision and nursing care"},
        {value: "noassistance", label: "None"},
      ]
    },
    {
      question: {
        first: "What is your cultural background?",
        third: "What is their cultural background?",
      },
      name: "background",
      condition: "culturehome,culturemove",
      type: "autocomplete",
      legend: {
        first: "This helps us to find the most appropriate services. Please enter the culture you most identify with.",
        third: "This helps us to find the most appropriate services. Please enter the culture they most identify with.",
      },
      values: [
        {value: "background1", label: "Albanian"},
        {value: "background2", label: "Arabic"},
        {value: "background3", label: "Aboriginal and Torres Strait Islander"},
        {value: "background4", label: "Basque"},
        {value: "background5", label: "Bengali"},
        {value: "croatianbkg", label: "Croatian"},
        {value: "background6", label: "Czech"},
        {value: "background7", label: "Danish"},
        {value: "background8", label: "Russian"},
        {value: "background9", label: "Japanese"},
        {value: "background10", label: "English"},
        {value: "background11", label: "German"},
        {value: "background12", label: "French"},
      ]
    },
    {
      question: {
        first: "What language do you prefer?",
        third: "What language do they prefer?",
      },
      name: "language",
      condition: "culturehome,culturemove",
      type: "autocomplete",
      legend: {
        first: "Please enter the language you find easiest to understand.",
        third: "Please enter the language they find easiest to understand.",
      },
      values: [
        {value: "language1", label: "Mandarin"},
        {value: "language2", label: "Spanish"},
        {value: "language3", label: "English"},
        {value: "language4", label: "Hindi/Urdu"},
        {value: "language5", label: "Arabic"},
        {value: "language6", label: " Portuguese"},
        {value: "language7", label: "Bengali"},
        {value: "language8", label: "Russian"},
        {value: "language9", label: "Japanese"},
        {value: "language10", label: "Punjabi"},
        {value: "croatianlang", label: "Croatian"},
      ]
    },
    {
      question: {
          first: "Where do you live?",
          third: "Where do they live?",
      },
      name: "location",
      condition: "ownhome,transport!moving,notsure,health!moving,social!moving",
      type: "location",
      legend: "This helps us to suggest local services. Please enter a suburb, town or postcode.",
      values: []
    },
    {
      question: {
        first: "Where are you considering living?",
        third: "Where are they considering living?",
      },
      name: "locationconsidering",
      condition: "moving+health,notsure",
      type: "location",
      legend: "Please enter a suburb, town or postcode.",
      values: []
    }
  ],
  results: [
    {
      title: "Help at home",
      id: "homeresults",
      condition: "ownhome,notsure",
      abstract: "Get the help and advice you need to stay in your home, a family or friend’s home, or a retirement village.",
      categorysnippet: "Get the help and advice you need to stay in your home, a family or friend’s home, or a retirement village.",
      list: [
        {
          title: "Possible next steps",
          type: "steps",
          description: "Stay independent in your home with support for day-to-day activities, personal care, transport and nursing and health care.",
          items: [
            {
              label: "Getting in-home help",
              abstract: "Call My Aged Care to arrange an assessment in your home for the support services you need.They will then recommend service providers, or give you a referral code to choose your own. Call Monday to Friday 8am to 8pm, or Saturday 10am to 2pm, AEST.",
              type: "",
              condition: "ownhome,notsure",
              actions: [
                {
                  label: "1800 200 422",
                  link: "tel:1800200422",
                  type: "link",
                  prefix: "Call:"
                },
                {
                  label: "Being assessed for home help",
                  link: "",
                  type: "secondary"
                }
              ]
            },
            {
              label: "Types of home help",
              abstract: "There are two kinds of in-home help that are subsidised by the government — basic home support and a package of support services coordinated by an advisor or case manager.",
              type: "",
              condition: "ownhome,notsure",
              actions: [
                {
                  label: "Compare basic home support and home care packages",
                  link: "",
                  type: "link"
                },
              ]
            },
            {
              label: "Estimate home care package fees",
              abstract: "Your provider may ask you to pay a basic daily fee of up to 17.5% of the single basic age pension. You will also need to contribute an income-tested care fee if your income is over a certain amount.",
              condition: "ownhome,notsure",
              actions: [
                {
                  label: "View the My Aged Care website: Estimate home care package fees",
                  link: "http://www.myagedcare.gov.au/fee-estimator/home-care/form",
                  type: "external",
                  prefix: ""
                },
                {
                  label: "Choosing a home care service provider",
                  link: "",
                  type: "link"
                },
              ]
            },
          ]
        },

        {
          title: "Local services",
          description: "Explore these services to see what’s available in your area.",
          type: "result",

          items: [
            {
              label: "Home care package providers - My Aged Care",
              link: "http://www.myagedcare.gov.au/service-finder?tab=home-care-package-providers&location=MORPHETT%20VALE%20%20SA,5162&service=hcp-level-1234",
              number: 33
            },
            {
              label: "Home modifications providers - My Aged Care",
              link: "http://www.myagedcare.gov.au/service-finder?tab=help-at-home&location=MORPHETT%20VALE%20%20SA,%205162&service=Home%20modifications",
              number: 6
            },
            {
              label: "Mobility aids providers - My Aged Care",
              link: "http://www.myagedcare.gov.au/service-finder?tab=help-at-home&location=MORPHETT%20VALE%20%20SA,%205162&service=Goods,%20equipment%20and%20assistive%20technology&subtype=Support%20and%20mobility%20aids",
              number: 13
            }
          ]
        },
        {
          title: "Further information",
          type: "information",
          items: [
            {
              label: "View SA Health website: Find a local home and community service provider",
              link: "http://www.sahealth.sa.gov.au/wps/wcm/connect/public+content/sa+health+internet/health+services/hospitals+and+health+services+-+country+south+australia",
              condition: "ownhome,notsure",
              external: true
            },
            {
              label: "View SA Health website: Find hospitals and health services",
              link: "http://www.sahealth.sa.gov.au/wps/wcm/connect/public+content/sa+health+internet/health+services/hospitals+and+health+services+-+country+south+australia",
              condition: "ownhome,notsure",
            },
            {
              label: "View Australian Croatian Community Services website: Aged care providers",
              link: "http://www.accs.asn.au/index.php/96-aged-care-providers",
              condition: "croatianbkg,croatianlang",
            },
          ]
        },
      ]
    },
    {
      title: "Moving to an aged care home",
      id: "agedcarresult",
      condition: "agedcare,notsure",
      abstract: "Consider aged care as a next step when you’re not able to look after yourself as well as you used to.",
      categorysnippet: "Consider an aged care home as a next step when you’re not able to look after yourself as well as you used to.",
      list: [
        {
          title: "Possible next steps",
          type: "steps",
          description: "There are a few things you need to know and do to move into an aged care home that is subsidised by the Australian government.",
          items: [
            {
              label: "Being assessed for care",
              abstract: "First have your needs assessed to receive care. To arrange for this call My Aged Care. If you are eligible you will then receive a letter of approval for a place in an aged care home. Call Monday to Friday 8am to 8pm, or Saturday 10am to 2pm, AEST.",
              condition: "moving,notsure",
              actions: [
                {
                  label: "1800 200 422",
                  link: "tel:1800200422",
                  type: "link",
                  prefix: "Call:"
                },
                {
                  label: "Being assessed for aged care",
                  link: "",
                  type: "secondary",
                  prefix: ""
                },
                {
                  label: "Choosing an aged care home",
                  link: "",
                  type: "secondary",
                  prefix: ""
                },
              ]
            },
            {
              label: "Estimate costs of residential care",
              abstract: "Estimate what you will need to contribute to the costs of your place in an aged care home.",
              condition: "moving,notsure",
              actions: [
                {
                  label: "View My Aged Care website: Estimate residential care fees",
                  link: "http://www.myagedcare.gov.au/fee-estimator/residential-care/form",
                  type: "link"
                },
              ]
            },
            {
              label: "Complete a means test",
              abstract: "You will also need to complete a means test of your income and assets to find out if you can get subsidised care.",
              condition: "moving,notsure",
              actions: [
                {
                  label: "View the Department of Human Services website: Complete an income and assets assessment	",
                  link: "https://www.humanservices.gov.au/customer/services/aged-care-means-test-assessments",
                  type: "link"
                },
              ]
            },
          ]
        },
        {
          title: "Local services",
          type: "result",
          description: "Explore these facilities to see what’s available in your area.",
          items: [
            {
              label: "Permanent facilities - My Aged Care",
              link: "http://www.myagedcare.gov.au/service-finder?tab=aged-care-homes&view=list&location=MORPHETT%20VALE%20%20SA,5162&service=Residential%20Permanent",
              number: 43
            },
            {
              label: "Residential respite low care services - My Aged Care",
              link: "http://www.myagedcare.gov.au/service-finder?tab=aged-care-homes&view=list&location=MORPHETT%20VALE%20%20SA,5162&service=Residential%20Respite%20Low%20Care",
              number: 46
            },
            {
              label: "Residential respite high care services - My Aged Care",
              link: "http://www.myagedcare.gov.au/service-finder?tab=aged-care-homes&view=list&location=MORPHETT%20VALE%20%20SA,5162&service=Residential%20Respite%20Low%20Care",
              number: 43
            },
            {
              label: "Multi-purpose residential service - My Aged Care",
              link: "http://www.myagedcare.gov.au/service-finder?tab=aged-care-homes&view=list&location=MORPHETT%20VALE%20%20SA,5162&service=Residential%20Respite%20Low%20Care",
              number: 1
            },
          ]
        },
        {
          title: "Further information",
          type: "information",
          items: [
            {
              label: "View the Australian Croatian Community Services website: aged care providers",
              link: "http://www.croatianclubadelaide.com/croatian-care-for-the-aged",
              condition: "croatianbkg,croatianlang",
            },
          ]
        },
      ]
    },
    {
      title: "Moving to a retirement village",
      id: "retirementresult",
      condition: "retirement",
      abstract: "In a retirement village you can apply for the government-subsidised services you need to stay independent in your home.",
      categorysnippet: "In a retirement village you can apply for the government-subsidised services you need to stay independent in your home.",
      list: [
        {
          title: "Possible next steps",
          type: "steps",
          items: [
            {
              label: "Being assessed for care",
              abstract: "First have your needs assessed to receive care. To arrange for this call My Aged Care. If you are eligible you will then receive a letter of approval for a place in an aged care home. Call Monday to Friday 8am to 8pm, or Saturday 10am to 2pm, AEST.",
              condition: "moving,notsure",
              actions: [
                {
                  label: "1800 200 422",
                  link: "tel:1800200422",
                  type: "link",
                  prefix: "Call:"
                }
              ]
            },
          ]
        },
        {
          title: "Local services",
          type: "result",
          items: [
          ]
        },
        {
          title: "Further information",
          type: "information",
          items: [
          ]
        },
      ]
    },
    {
      title: "Moving in with family or friends",
      id: "friendsresult",
      condition: "independent",
      abstract: "Steps you might like to consider and information on how to get the types of support you need.",
      categorysnippet: "Steps you might like to consider and information on how to get the types of support you need.",
      list: [
        {
          title: "Possible next steps",
          type: "steps",
          items: [
            {
              label: "Being assessed for care",
              abstract: "First have your needs assessed to receive care. To arrange for this call My Aged Care. If you are eligible you will then receive a letter of approval for a place in an aged care home. Call Monday to Friday 8am to 8pm, or Saturday 10am to 2pm, AEST.",
              condition: "moving,notsure",
              actions: [
                {
                  label: "1800 200 422",
                  link: "tel:1800200422",
                  type: "link",
                  prefix: "Call:"
                }
              ]
            },
          ]
        },
        {
          title: "Local services",
          type: "result",
          items: [
          ]
        },
        {
          title: "Further information",
          type: "information",
          items: [
          ]
        },
      ]
    },

    {
      title: "Support for health and wellbeing",
      id: "healthwellbeingresult",
      condition: "health",
      abstract: "Explore local services, information and contacts to get the help and advice you need.",
      categorysnippet: "Find out about the government support, advice and local services you need.",
      list: [
        {
          title: "Possible next steps",
          type: "steps",
          items: [
            {
              label: "Croatian community support",
              abstract: "Get support from Croatian-speaking carers who provide transport and outings, social support and domestic assistance through this not-for-profit organisation.",
              condition: "croatianbkg,croatianlang",
              actions: [
                {
                  label: "View the Croatian Club Adelaide website: care for the aged",
                  link: "http://www.croatianclubadelaide.com/croatian-care-for-the-aged",
                  type: "link",
                  prefix: "Visit:",
                }
              ]
            },
            {
              label: "Arthritis: Help for arthritis",
              abstract: "Find products to make living with arthritis easier",
              condition: "arthritis",
              actions: [
                {
                  label: "08 8379 5711",
                  link: "tel:0883795711",
                  type: "link",
                  prefix: "Call:"
                },
                {
                  label: "1800 011 041",
                  link: "tel:1800011041",
                  type: "link",
                  prefix: "Country SA Freecall:"
                },
                {
                  label: "Visit the Arthritis South Australia website: Arthritis SA shop",
                  link: "https://www.arthritissa.org.au/shop/retail",
                  type: "link",
                }
              ]
            },
            {
              label: "Depression: Access free professional support for older people",
              abstract: "You can see a free psychiatrist, psychologist or social worker or other health professional by appointment.",
              condition: "depression",
              actions: [
                {
                  label: "View the South Australia Government Health website: Mental health services for older people in South Australia",
                  link: "http://www.sahealth.sa.gov.au/wps/wcm/connect/public+content/sa+health+internet/health+services/mental+health+services/older+persons+mental+health+services",
                  type: "link",
                  prefix: "",
                }
              ]
            },
            {
              label: "Depression: Counselling through Medicare",
              abstract: "To get subsidised medication and 10 counselling sessions for depression you will need to have a Medicare care and a mental health plan in place with your doctor.",
              type: "",
              condition: "depression",
              actions: [
                {
                  label: "View the Department of Human Services website: Apply for a Medicare card",
                  link: "https://www.humanservices.gov.au/customer/services/medicare/medicare-card",
                  type: "link",
                  prefix: ""
                },
                {
                  label: "View the Department of Health Services website: A sample mental health plan",
                  link: "http://www.health.gov.au/internet/main/publishing.nsf/content/mental-ba-gpsamp",
                  type: "link",
                  prefix: ""
                },
              ]
            },
            {
              label: "Depression: Get advice on depression",
              abstract: "Call BeyondBlue for support and advice 24/7.",
              condition: "depression",
              actions: [
                {
                  label: "1300 22 4636",
                  link: "tel:1300224636",
                  type: "link",
                  prefix: "Call:",
                },
                {
                  label: "View the BeyondBlue website",
                  link: "https://www.beyondblue.org.au",
                  type: "link",
                  prefix: "",
                },
              ]
            },
            {
              label: "Dementia: Call the dementia hotline for advice",
              abstract: "Contact Alzheimer’s Australia: National Dementia hotline, 9am to 5pm Monday to Friday",
              condition: "dementia",
              actions: [
                {
                  label: "1800 100 500",
                  link: "tel:1800100500",
                  type: "link",
                  prefix: "Call:"
                },
                {
                  label: "View the Alzheimer’s Australia, fight dementia website",
                  link: "https://www.fightdementia.org.au/",
                  type: "link",
                  prefix: ""
                }
              ]
            },
            {
              label: "Incontinence: Apply for continence support",
              abstract: "Call the Continence Resource Centre for the form to apply for discounted products and services. Complete and take it to your doctor. Monday to Friday 9am to 5pm",
              type: "",
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
              label: "Incontinence: Apply for continence products",
              abstract: "Download the Department of Health form to apply for discounted products and services. Complete and take it to your doctor.",
              condition: "incontinence",
              type: "",
              actions: [
                {
                  label: "View the Australian Government Department of Health website: Continence Aids Payment Scheme application",
                  link: "http://www.bladderbowel.gov.au/caps/application.htm",
                  type: "link",
                  prefix: "Form:"
                },
              ]
            },
            {
              label: "Incontinence: Get advice about incontinence",
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
              label: "Diabetes: Call the National Diabetes Support Services helpline",
              abstract: "Call for expert advice on how to manage diabetes and support others.",
              condition: "diabetes",
              actions: [
                {
                  label: "1300 136 588",
                  link: "tel:1300136588",
                  type: "link",
                  prefix: "Call:"
                },
              ]
            },
            {
              label: "Diabetes: Register for National Diabetes Support Services",
              abstract: "You can receive free support services including discounts on glucose and urine test strips, insulin needles and syringes.",
              condition: "diabetes",
              type: "",
              actions: [
                {
                  label: "View the National Diabetes Support Services website: register",
                  link: "https://www.ndss.com.au/registration",
                  type: "link",
                  prefix: ""
                },
              ]
            },
            {
              label: "Loneliness: Find a community visitor",
              abstract: "Connect with a volunteer companion matched to your interests, hobbies and background. Available to people receiving a home care package. Talk to your service provider or call the Community Visitors Program.",
              condition: "loneliness",
              actions: [
                {
                  label: "08 8372 5191",
                  link: "tel:0883725191",
                  type: "link",
                  prefix: "Call:"
                },
              ]
            },
          ]
        },
        {
          title: "Local services",
          type: "result",
          items: [
            {
              label: "Dementia services in your area",
              link: "",
              number: 3,
              condition: "dementia"
            },
            {
              label: "Local pharmacies",
              link: "http://www.healthdirect.gov.au/australian-health-services/results/morphett_vale,5162/tihcs,aht-12243/pharmacy",
              number: 5
            },
            {
              label: "Local doctors",
              link: "http://www.healthdirect.gov.au/australian-health-services/results/morphett_vale,5162/tihcs,aht-11222/general-practice",
              number: 4
            },
          ]
        },
        {
          title: "Further information",
          type: "information",
          items: [
            {
              label: "View the HealthDirect website: Learn more about arthritis",
              link: "http://www.healthdirect.gov.au/arthritis",
              condition: "arthritis",
            },
            {
              label: "View the South Australia Alzheimer’s Australia website: Learn about dementia",
              link: "https://nsw.fightdementia.org.au/national/about-dementia",
              condition: "dementia",
            },
            {
              label: "View the My Aged Care website: What to do about dementia in the short and long term",
              link: "http://www.myagedcare.gov.au/health-conditions/dementia",
              condition: "dementia",
            },
            {
              label: "View the HealthDirect website: How to care for someone with dementia",
              link: "http://www.healthdirect.gov.au/caring-for-someone-with-dementia",
              condition: "dementia",
            },
            {
              label: "View the HealthDirect website: Mental health resources for seniors",
              link: "http://www.mindhealthconnect.org.au/older-person-mental-health",
              condition: "dementia, depression",
            },
            {
              label: "View the SA Health website: Mental health services in South Australia",
              link: "http://www.sahealth.sa.gov.au/wps/wcm/connect/Public+Content/SA+Health+Internet/Health+services/Mental+health+services/",
              condition: "depression",
            },
            {
              label: "View the BeyondBlue website: Depression in older people",
              link: "https://www.beyondblue.org.au/who-does-it-affect/older-people",
              condition: "depression",
            },
            {
              label: "View the BeyondBlue website: Learn about depression",
              link: "https://www.beyondblue.org.au/who-does-it-affect/older-people",
              condition: "depression",
            },
            {
              label: "View the BeyondBlue: Find a health professional",
              link: "https://www.beyondblue.org.au/get-support/find-a-professional",
              condition: "depression",
            },
            {
              label: "View the Diabetes Australia website: learn more about diabetes",
              link: "https://www.diabetesaustralia.com.au/what-is-diabetes",
              condition: "diabetes",
            },
            {
              label: "View the HealthDirect website: Learn more about loneliness and isolation",
              link: "http://www.mindhealthconnect.org.au/loneliness-isolation-mental-health",
              condition: "loneliness",
            },
          ]
        }
      ]
    },
    {
      title: "Getting transport",
      id: "transportresult",
      condition: "transport",
      abstract: "Know how to apply for local subsidised transport and taxis and concessions on public transport.",
      categorysnippet: "Know how to apply for local subsidised transport and taxis and concessions on public transport.",
      list: [
        {
          title: "Possible next steps",
          type: "steps",
          items: [
            {
              label: "Review your driving ability",
              abstract: "Ask your doctor to confirm your fitness to hold a driver’s licence.",
              condition: "transport",
              //type: "",
              actions: [
                {
                  label: "View the South Australia Government website: Medical fitness to drive",
                  link: "http://www.sa.gov.au/topics/transport-travel-and-motoring/motoring/drivers-and-licences/medical-fitness-to-drive",
                  type: "link",
                  prefix: ""
                },
              ]
            },
            {
              label: "Help with travel to appointments",
              abstract: "Call My Aged Care to be assessed. If you qualify, you could be picked up by a transport service or alternatively get vouchers or subsidies for taxi services.",
              type: "",
              condition: "transport",
              actions: [
                {
                  label: "1800 200 422",
                  link: "tel:1800200422",
                  type: "link",
                  prefix: "Call:"
                },
              ]
            },
            {
              label: "Apply for concessions on public transport",
              abstract: "If you hold an approved concession card, receive a Centrelink payment or hold a Seniors Card you can receive a concession on public transport fares.",
              condition: "transport",
              actions: [
                {
                  label: "View the South Australia Government website: Use the concessions finder",
                  link: "http://www.dcsi.sa.gov.au/concessions",
                  type: "link",
                  prefix: ""
                },
                {
                  label: "View the South Australia Government website: Apply for a public transport concession",
                  link: "https://www.sa.gov.au/topics/employment-money-taxes/financial-support/concessions-and-benefits/concessions/transport-concessions",
                  type: "link",
                  prefix: ""
                }
              ]
            },
            {
              label: "Find out about reduced public transport fares",
              abstract: "Call the public transport concessions hotline.",
              condition: "transport",
              actions: [
                {
                  label: "1800 307 758",
                  link: "tel:1800307758",
                  type: "link",
                  prefix: "Call:"
                },
                {
                  label: "8226 6789",
                  link: "tel:8226 6789",
                  type: "link",
                  prefix: "Text Telephone Service (TTY):"
                },
                {
                  label: "131 450",
                  link: "tel:131450",
                  type: "link",
                  prefix: "Translating and Interpreting Service (TIS National):"
                },
                {
                  label: "TransportConcessionCardSA@sa.gov.au",
                  link: "mailto:TransportConcessionCardSA@sa.gov.au",
                  type: "link",
                  prefix: "Email:"
                },
              ]
            },
            {
              label: "Use your Seniors Card as a Seniors Metrocard",
              abstract: "You can travel free on trains, buses and trams in metropolitan Adelaide from 9:01am to 3:00pm and 7:01pm to 7:00am weekdays. At other times the concession is around 50% of the normal fare.",
              //type: "",
              condition: "transport",
              actions: [
                {
                  label: "View the South Australia Government website: Seniors Metrocard",
                  link: "http://www.sa.gov.au/topics/seniors/seniors-card/the-new-seniors-metrocard",
                  type: "link",
                  prefix: ""
                },
              ]
            },
            {
              label: "Apply to use subsidised taxis",
              abstract: "If you have difficulty accessing public transport you can apply for reduced taxi fares. ",
              //type: "",
              condition: "transport",
              actions: [
                {
                  label: "View the South Australia Government website: Apply for taxi fare subsidies",
                  link: "https://www.sa.gov.au/topics/transport-travel-and-motoring/public-transport-and-travel/getting-around-with-a-disability/taxi-fare-subsidy-scheme",
                  type: "link",
                  prefix: ""
                },
              ]
            },
          ]
        },
        {
          title: "Local services",
          type: "result",
          items: [
            {
              label: "Local bus routes",
              link: "https://www.adelaidemetro.com.au/routes/248",
              number: 4
            },
          ]
        },
        {
          title: "Further information",
          type: "information",
          items: [
            {
              label: "View the South Australia Government website: Disability Parking Permits",
              link: "https://www.sa.gov.au/topics/transport-travel-and-motoring/public-transport-and-travel/getting-around-with-a-disability/disability-parking-permit",
              condition: "transport",
            },
            {
              label: "View the South Australia Government website: Vision impaired travel pass",
              link: "https://www.sa.gov.au/topics/transport-travel-and-motoring/public-transport-and-travel/getting-around-with-a-disability/vision-impaired-travel-pass",
              condition: "transport",
            },
            {
              label: "View the South Australia Government website: Public transport companion card",
              link: "https://www.sa.gov.au/topics/transport-travel-and-motoring/public-transport-and-travel/getting-around-with-a-disability/companion-cards",
              condition: "transport",
            },
            {
              label: "View the South Australia Government website: Motorised wheelchairs",
              link: "https://www.sa.gov.au/topics/transport-travel-and-motoring/public-transport-and-travel/getting-around-with-a-disability/motorised-wheelchairs",
              condition: "transport",
            },
          ]
        },
      ]
    },


  ]
}
