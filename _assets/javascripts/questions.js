export const QuestionFlow = {
  questions: [
    {
      question: "Are you looking for yourself or someone else?",
      name: "yourselforsomeone",
      type: "radio",
      setLanguage: true,
      //legend: "Select as many as apply",
      values: [
        {value: "first", label: "Myself"},
        {value: "third", label: "Someone else"}
      ]
    },
    {
      question: {
          first: "How old are you?",
          third: "How old are they?"
      },
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
        {value: "ownhome", label: "Staying at home"},
        {value: "moving", label: "Moving to a more appropriate set up"},
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
          first: "What options are you interested in finding out about?",
          third: "What options are they interested in finding out about?"
      },
      name: "learning",
      condition: "moving,notsure",
      type: "checkbox",
      legend: "Select all that apply",
      values: [
        {value: "retirement", label: "Retirement villages"},
        {value: "agedcare", label: "Aged care homes"},
        {value: "independent", label: "Living with family and friends"},
        {value: "culturemove", label: "Cultural background support"},
      ]
    },
    {
      question: "What help is needed in the home?",
      name: "assistance",
      condition: "ownhome,notsure,retirement,independent,culturemove",
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
      //legend: "This helps us to suggest services with specific language skills",
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
      //legend: "This helps us to suggest local services with langua",
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
      condition: "ownhome,transport,notsure,health,social",
      type: "location",
      legend: "This helps us to suggest local services",
      values: []
    },
    {
      question: {
        first: "Where are you considering living?",
        third: "Where are they considering living?",
      },
      name: "locationconsidering",
      condition: "moving,notsure",
      type: "location",
      values: []
    }
  ],
  results: [
    {
      title: "Health and wellbeing",
      id: "healthwellbeingresult",
      condition: "health",
      abstract: "Explore local services, information and contacts to get the help and advice you need.",
      categorysnippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo diam. Aliquam luctus porttitor diam, et tristique lacus venenatis et.",
      list: [
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
              label: "Mental health resources for seniors",
              link: "http://www.mindhealthconnect.org.au/older-person-mental-health",
              condition: "dementia",
            },
            {
              label: "Learn more about dementia",
              link: "https://nsw.fightdementia.org.au/national/about-dementia",
              condition: "dementia",
            },
            {
              label: "Learn what to do about dementia in the short and long term",
              link: "http://www.myagedcare.gov.au/health-conditions/dementia",
              condition: "dementia",
            },
            {
              label: "How to care for someone with dementia",
              link: "http://www.healthdirect.gov.au/caring-for-someone-with-dementia",
              condition: "dementia",
            },
            {
              label: "Mental health resources for seniors",
              link: "http://www.mindhealthconnect.org.au/older-person-mental-health",
              condition: "depression",
            },
            {
              label: "Depression in older people",
              link: "https://www.beyondblue.org.au/who-does-it-affect/older-people",
              condition: "depression",
            },
          ]
        },
        {
          title: "Next steps",
          type: "steps",
          items: [
            {
              label: "Croatian community support",
              abstract: "Get support from Croatian-speaking carers who provide transport and outings, social support and domestic assistance through this not-for-profit organisation.",
              condition: "croatianbkg,croatianlang",
              actions: [
                {
                  label: "Croatian Club Adelaide: care for the aged",
                  link: "http://www.croatianclubadelaide.com/croatian-care-for-the-aged",
                  type: "link",
                  prefix: "Visit:",
                }
              ]
            },
            {
              label: "What to do in an emergency",
              abstract: "Call Lifeline 24/7",
              condition: "depression",
              actions: [
                {
                  label: "13 11 14",
                  link: "tel:131114",
                  type: "link",
                  prefix: "Call:"
                }
              ]
            },
            {
              label: "Free professional support for depression",
              abstract: "You can see a free psychiatrist, psychologist or social worker or other health professional by appointment.",
              condition: "depression",
              actions: [
                {
                  label: "Find mental health services for older people in South Australia",
                  link: "http://www.sahealth.sa.gov.au/wps/wcm/connect/public+content/sa+health+internet/health+services/mental+health+services/older+persons+mental+health+services",
                  type: "link",
                  prefix: "",
                }
              ]
            },
            {
              label: "Counselling through Medicare",
              abstract: "You can see a free psychiatrist, psychologist or social worker or other health professional by appointment.",
              type: "funded",
              condition: "depression",
              actions: [
                {
                  label: "Apply for a Medicare card",
                  link: "https://www.humanservices.gov.au/sites/default/files/documents/3101-1306en.pdf",
                  type: "link",
                  prefix: "Form:"
                },
                {
                  label: "Learn about applying for a Medicare card",
                  link: "https://www.humanservices.gov.au/customer/subjects/medicare-services",
                  type: "secondary",
                  prefix: ""
                },
                {
                  label: "A sample mental health plan",
                  link: "http://www.health.gov.au/internet/main/publishing.nsf/content/mental-ba-gpsamp",
                  type: "secondary",
                  prefix: ""
                },
              ]
            },
            {
              label: "Get advice on depression",
              abstract: "Call BeyondBlue for support and advice 24/7.",
              condition: "depression",
              actions: [
                {
                  label: "1300 22 4636",
                  link: "tel:1300224636",
                  type: "link",
                  prefix: "Call:",
                }
              ]
            },
            {
              label: "Call the dementia hotline for advice",
              abstract: "Contact Alzheimer’s Australia: National Dementia hotline, 9am to 5pm Monday to Friday",
              condition: "dementia",
              actions: [
                {
                  label: "1800 100 500",
                  link: "tel:1800100500",
                  type: "link",
                  prefix: "Call:"
                }
              ]
            },
            {
              label: "Apply for support with continence products and services (state)",
              abstract: "Ask about the form to apply for discounted products and services and take it to your doctor. South Australia Continence Resource Centre. Monday to Friday 9am to 5pm.",
              type: "funded",
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
              label: "Apply for support with continence products and services (national)",
              abstract: "Download the form to apply for discounted products and services and take it to your doctor.",
              condition: "incontinence",
              type: "funded",
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
          ]
        }
      ]
    },
    {
      title: "Getting out and about",
      id: "outandaboutresult",
      condition: "transport",
      abstract: "Know about alternatives for getting around–when ageing, medical conditions and taking medicines impact on the ability to drive.",
      categorysnippet: "Lorem ipsum dolor sit amet,  porttitor diam, et tristique lacus venenatis et.",
      list: [
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
              label: "South Australia: Disability Parking Permits",
              link: "https://www.sa.gov.au/topics/transport-travel-and-motoring/public-transport-and-travel/getting-around-with-a-disability/disability-parking-permit",
              condition: "transport",
            },
            {
              label: "South Australia: Vision impaired travel pass",
              link: "https://www.sa.gov.au/topics/transport-travel-and-motoring/public-transport-and-travel/getting-around-with-a-disability/vision-impaired-travel-pass",
              condition: "transport",
            },
            {
              label: "South Australia: Public transport companion card",
              link: "https://www.sa.gov.au/topics/transport-travel-and-motoring/public-transport-and-travel/getting-around-with-a-disability/companion-cards",
              condition: "transport",
            },
            {
              label: "South Australia: Motorised wheelchairs",
              link: "https://www.sa.gov.au/topics/transport-travel-and-motoring/public-transport-and-travel/getting-around-with-a-disability/motorised-wheelchairs",
              condition: "transport",
            },
            {
              label: "Australian Human Rights Commission: Your rights in retirement to transport",
              link: "http://www.humanrights.gov.au/publications/your-rights-retirement/11-your-right-transport",
              condition: "transport",
            },
          ]
        },
        {
          title: "Next steps",
          type: "steps",
          items: [
            {
              label: "Review your driving ability",
              abstract: "Ask your doctor to confirm your fitness to hold a driver’s licence.",
              condition: "transport",
              //type: "funded",
              actions: [
                {
                  label: "South Australia: Medical fitness to drive",
                  link: "http://www.sa.gov.au/topics/transport-travel-and-motoring/motoring/drivers-and-licences/medical-fitness-to-drive",
                  type: "link",
                  prefix: "Visit:"
                },
              ]
            },
            {
              label: "Help with travel to appointments",
              abstract: "Call My Aged Care to be assessed. If you qualify, you will either be picked up by a transport service or able to use vouchers or subsidies, such as for taxi services. Monday to Friday 8am to 8pm, Saturdays 10am to 2pm",
              type: "funded",
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
              label: "Call the public transport concessions hotline",
              abstract: "Find out about reduced public transport fares.",
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
              label: "Apply for concessions on public transport",
              abstract: "If you hold an approved concession card, receive a Centrelink payment or hold a Seniors Card you can receive a concession on public transport fares.",
              condition: "transport",
              actions: [
                {
                  label: "Use the concessions finder",
                  link: "http://www.dcsi.sa.gov.au/concessions",
                  type: "link",
                  prefix: ""
                },
                {
                  label: "South Australia: Apply for a public transport concession",
                  link: "https://www.sa.gov.au/topics/employment-money-taxes/financial-support/concessions-and-benefits/concessions/transport-concessions",
                  type: "link",
                  prefix: "Apply:"
                }
              ]
            },
            {
              label: "Use your Seniors Card as a Seniors Metrocard",
              abstract: "You can travel free on trains, buses and trams in metropolitan Adelaide from 9:01am to 3:00pm and 7:01pm to 7:00am weekdays. At other times the concession is around 50% of the normal fare.",
              //type: "funded",
              condition: "transport",
              actions: [
                {
                  label: "Seniors Metrocard",
                  link: "http://www.sa.gov.au/topics/seniors/seniors-card/the-new-seniors-metrocard",
                  type: "link",
                  prefix: "Visit:"
                },
              ]
            },
            {
              label: "Apply to use subsidised taxis",
              abstract: "If you have difficulty accessing public transport you can apply for reduced taxi fares. ",
              //type: "funded",
              condition: "transport",
              actions: [
                {
                  label: "South Australia: Apply for taxi fare subsidies",
                  link: "https://www.sa.gov.au/topics/transport-travel-and-motoring/public-transport-and-travel/getting-around-with-a-disability/taxi-fare-subsidy-scheme",
                  type: "link",
                  prefix: "Apply:"
                },
              ]
            },
          ]
        }
      ]
    },
    {
      title: "Help at home",
      id: "homeresults",
      condition: "ownhome,notsure",
      abstract: "Explore local services and support that will help you to stay at home–whether that is your current home, a family or friend’s home, or a retirement village.",
      categorysnippet: "Sed sit amet leo diam. Aliquam luctus porttitor diam, et tristique lacus venenatis et.",
      list: [
        {
          title: "Local services",
          type: "result",

          items: [
            {
              label: "Home care package providers",
              link: "http://www.myagedcare.gov.au/service-finder?tab=home-care-package-providers&location=ELIZABETH%20BAY%20%20NSW,2011&service=hcp-level-34",
              number: 33
            },
            {
              label: "Home modifications providers",
              link: "http://www.myagedcare.gov.au/service-finder?tab=help-at-home&location=MORPHETT%20VALE%20%20SA,%205162&service=Home%20modifications",
              number: 6
            },
            {
              label: "Mobility aids providers",
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
              label: "Find a local home and community service provider",
              link: "http://www.sahealth.sa.gov.au/wps/wcm/connect/public+content/sa+health+internet/health+services/hospitals+and+health+services+-+country+south+australia",
              condition: "ownhome,notsure",
            },
            {
              label: "Choosing a home care service provider",
              link: "",
              condition: "ownhome,notsure",
            },
            {
              label: "Australian Croatian aged care community service providers",
              link: "http://www.accs.asn.au/index.php/96-aged-care-providers",
              condition: "croatianbkg,croatianlang",
            },
          ]
        },
        {
          title: "Next steps",
          type: "steps",
          items: [
            {
              label: "Getting in-home help",
              abstract: "Call My Aged Care to arrange for an assessment in your home. This will help to know your support needs for day-to-day activities, personal care, transport for shopping or appointments and nursing and health care. Have your Medicare card ready. Call Monday to Friday, 8am to 5pm.",
              type: "funded",
              condition: "ownhome,notsure",
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
              label: "Types of home help",
              abstract: "There are two kinds of in-home help that is subsidised by the government—basic home support and a package of services that is coordinated by an advisor or case manager.",
              type: "funded",
              condition: "ownhome,notsure",
              actions: [
                {
                  label: "Compare basic home support and home care packages",
                  link: "",
                  type: "link"
                },
                {
                  label: "Choosing a home care service provider",
                  link: "",
                  type: "link",
                  prefix: ""
                }
              ]
            },
            {
              label: "Estimate home care package fees",
              abstract: "Your provider may ask you to pay a basic daily fee of up to 17.5% of the single basic age pension. You will also need to contribute an income-tested care fee if your income is over a certain amount.",
              condition: "ownhome,notsure",
              actions: [
                {
                  label: "Estimate home care package fees",
                  link: "http://www.myagedcare.gov.au/fee-estimator/home-care/form",
                  type: "button"
                }
              ]
            },
          ]
        }
      ]
    },
    {
      title: "Aged care homes",
      id: "agedcarresult",
      condition: "moving,notsure",
      abstract: "Consider aged care when you need help with day-to-day tasks or health care, or when you’re not able to look after yourself as well as you used to.",
      categorysnippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo diam.",
      list: [
        {
          title: "Local services",
          type: "result",
          items: [
            {
              label: "Permanent facilities",
              link: "http://www.myagedcare.gov.au/service-finder?tab=aged-care-homes&view=list&location=MORPHETT%20VALE%20%20SA,5162&service=Residential%20Permanent",
              number: 43
            },
            {
              label: "Residential respite low care services",
              link: "http://www.myagedcare.gov.au/service-finder?tab=aged-care-homes&view=list&location=MORPHETT%20VALE%20%20SA,5162&service=Residential%20Respite%20Low%20Care",
              number: 46
            },
            {
              label: "Residential respite high care services",
              link: "http://www.myagedcare.gov.au/service-finder?tab=aged-care-homes&view=list&location=MORPHETT%20VALE%20%20SA,5162&service=Residential%20Respite%20Low%20Care",
              number: 43
            },
            {
              label: "Multi-purpose residential service",
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
              label: "Australian Croatian Community Services",
              link: "http://www.croatianclubadelaide.com/croatian-care-for-the-aged",
              condition: "croatianbkg,croatianlang",
            },
            {
              label: "Choosing an aged care home",
              link: "",
              condition: "moving,notsure",
            },
          ]
        },
        {
          title: "Next steps",
          type: "steps",
          items: [
            {
              label: "Being assessed",
              abstract: "Firstly have your needs assessed by the Aged Care Assessment Team (ACAT). They will come to your home and if you are eligible, send you a letter of approval for a place in aged care. To arrange for an assessment call My Aged Care. Have your Medicare card ready or your My Aged Care profile ID if you already have one. Call Monday to Friday 8am to 8pm, or Saturday 10am to 2pm.",
              condition: "moving,notsure",
              actions: [
                {
                  label: "1800 200 422",
                  link: "tel:1800200422",
                  type: "link",
                  prefix: "Call:"
                },
                {
                  label: "About ACAT assessments",
                  link: "",
                  type: "secondary",
                  prefix: ""
                },
              ]
            },
            {
              label: "Estimate costs of residential care",
              abstract: "You will need to contribute to the costs of your residential care in the aged care home. Costs include the basic fee, daily fee and any additional means-tested contribution.",
              condition: "moving,notsure",
              actions: [
                {
                  label: "Estimate residential care fees",
                  link: "http://www.myagedcare.gov.au/fee-estimator/residential-care/form",
                  type: "button",
                  prefix: ""
                },
                {
                  label: "Schedule of residential care fees and charges",
                  link: "https://agedcare.health.gov.au/funding/aged-care-fees-and-charges/schedule-of-fees-and-charges-for-pre-1-july-2014-residents-from-1-july-2016",
                  type: "secondary"
                },
              ]
            },
            {
              label: "Complete an income and assets assessment",
              abstract: "You will be asked to complete the means-test assessment to know if you can access subsidised care",
              condition: "moving,notsure",
              actions: [
                {
                  label: "Complete an income and assets assessment",
                  link: "https://www.humanservices.gov.au/customer/services/aged-care-means-test-assessments",
                  type: "link"
                },
              ]
            },
          ]
        }
      ]
    },

  ]
}
