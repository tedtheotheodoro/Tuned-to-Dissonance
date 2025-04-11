const act1Stages = [
    {
      id: 1,
      title: "The First Echo",
      description: "Chronologically order artists based on aesthetic influence and cultural impact.",
      artists: ["The Stooges", "Joy Division", "New Order", "Interpol", "Editors"],
      correctOrder: ["The Stooges", "Joy Division", "New Order", "Interpol", "Editors"],
      type: "timeline",
      setting: "It's Manchester, 1979. The cold is not just outside — it's in the sound.",
      feedback: "Correct! The echo from Detroit to Manchester now rings through London and Brooklyn.",
      audioTrack: "/sounds/act1_01.mp3"
    },
    {
      id: 2,
      title: "The Gothic Thread",
      description: "Select central artists of post-punk gothic.",
      artists: ["Siouxsie and the Banshees", "Bauhaus", "The Cure", "Cold Cave", "Placebo"],
      correctAnswers: ["Siouxsie and the Banshees", "Bauhaus", "The Cure"],
      type: "selection",
      setting: "Dark eyeliner, sharp guitars. A ritual of sound emerges from the underground.",
      feedback: "The cathedral of sound welcomes its true disciples.",
      audioTrack: "/sounds/act1_02.mp3"
    },
    {
      id: 3,
      title: "Dance into the Dissonance",
      description: "Build an evolutionary chain from rhythmic post-punk to dance-punk.",
      artists: ["Talking Heads", "Gang of Four", "LCD Soundsystem", "New Order", "!!! (Chk Chk Chk)"],
      correctOrder: ["Talking Heads", "Gang of Four", "New Order", "LCD Soundsystem", "!!! (Chk Chk Chk)"],
      type: "timeline",
      setting: "The beat kicks in. It's no longer just sadness — it moves you.",
      feedback: "Yes! You followed the rhythm through the chaos.",
      audioTrack: "/sounds/act1_03.mp3"
    },
    {
      id: 4,
      title: "The Northern Lament",
      description: "Connecting artists by lyrical aesthetics and melancholic sensibility.",
      artists: ["Joy Division", "The Smiths", "The Cure", "Radiohead", "Belle and Sebastian", "Suede"],
      correctPairs: [
        ["The Cure", "Suede"],
        ["The Smiths", "Belle and Sebastian"],
        ["Joy Division", "Radiohead"]
      ],
      type: "pairs",
      setting: "Some bands didn't scream — they sighed. The North produced a different kind of pain.",
      feedback: "Melancholy recognizes its own.",
      audioTrack: "/sounds/act1_04.mp3"
    },
    {
      id: 5,
      title: "Sons of Collapse",
      description: "Classify modern artists by type of vocal expression.",
      artists: ["IDLES", "Fontaines D.C.", "The Murder Capital", "Dry Cleaning", "Savages"],
      categories: {
        "Spoken": ["Dry Cleaning"],
        "Shouted": ["IDLES", "Savages"],
        "Sung": ["Fontaines D.C."],
        "Whispered": ["The Murder Capital"]
      },
      type: "categorization",
      setting: "The world didn't get any better. But the sound got louder, sharper, more desperate.",
      feedback: "You heard them for what they really are.",
      audioTrack: "/sounds/act1_05.mp3"
    }
  ];
  
  export default act1Stages;
  