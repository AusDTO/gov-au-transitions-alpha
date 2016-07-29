export const QuestionFlow = {
  questions: [
    {
      question: "How old is the person?",
      name: "age",
      type: "radio",
      legend: "We need their age group in order to determine what applies to them",
      values: [
        {value: "65", label: "65 years or older"},
        {value: "50", label: "50 years or older (and an Aboriginal or Torres Strait Islander)"},
        {value: "noage", label: "None of these"}
      ]
    },
    {
      question: "Where might it be most appropriate for them to live?",
      name: "live",
      type: "checkbox",
      legend: "Think about their wishes, as well as any conditions or needs that would make that possible. You can choose more than 1 option.",
      values: [
        {value: "ownhome", label: "Own home (with modifications and/or support)"},
        {value: "family", label: "Family or friend’s home (with modifications and/or support)"},
        {value: "retirementvillage", label: "Retirement village (low care)"},
        {value: "transitionvillage", label: "Transition village (low support with increasing care options)"},
        {value: "nursinghome", label: "Nursing home (high care)"},
        {value: "nolive", label: "I don't know"}
      ]
    },
    {
      question: "What is your name?",
      name: "live",
      type: "radio",
      legend: "Think about their wishes, as well as any conditions or needs that would make that possible. You can choose more than 1 option.",
      values: [
        {value: "1", label: "Own home (with modifications and/or support)"},
        {value: "2", label: "Family or friend’s home (with modifications and/or support)"},

        {value: "6", label: "I don't know"}
      ]
    }
  ]
}
