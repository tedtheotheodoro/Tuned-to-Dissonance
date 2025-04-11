const act3Stages = [
    {
      id: 1,
      title: "Texture Collapse",
      description: "Order these artists based on how texture and abstraction shaped their sound.",
      artists: ["Cocteau Twins", "A.R. Kane", "My Bloody Valentine", "Slowdive", "Grouper"],
      correctOrder: ["Cocteau Twins", "A.R. Kane", "My Bloody Valentine", "Slowdive", "Grouper"],
      type: "timeline",
      setting: "The noise didn’t disappear — it dissolved. Echoes became brushstrokes.",
      feedback: "Correct! You’re attuned to the collapse of clarity.",
      audioTrack: "texture-collapse.mp3"
    },
    {
      id: 2,
      title: "Beyond the Verse",
      description: "Select artists that used voice more as texture than message.",
      artists: ["Dead Can Dance", "This Mortal Coil", "The The", "Dif Juz", "Crumb"],
      correctAnswers: ["Dead Can Dance", "This Mortal Coil", "Dif Juz"],
      type: "selection",
      setting: "Lyrics melted, phonemes danced. Language became emotion.",
      feedback: "Yes — voice here is atmosphere, not meaning.",
      audioTrack: "beyond-the-verse.mp3"
    },
    {
      id: 3,
      title: "Scenes that Shimmer",
      description: "Pair artists that were part of the same experimental scenes.",
      artists: ["Brian Eno", "Durutti Column", "Bark Psychosis", "David Sylvian", "Talk Talk", "Fripp & Eno"],
      correctPairs: [
        ["Brian Eno", "Fripp & Eno"],
        ["Durutti Column", "David Sylvian"],
        ["Bark Psychosis", "Talk Talk"]
      ],
      type: "pairs",
      setting: "Some cities were quiet. That’s where the shimmer echoed loudest.",
      feedback: "Nicely done. These sounds share more than geography.",
      audioTrack: "scenes-shimmer.mp3"
    },
    {
      id: 4,
      title: "Frequencies of the Other",
      description: "Categorize each artist by how they challenged musical norms.",
      artists: ["The Residents", "Nico", "Throbbing Gristle", "Julee Cruise", "Holger Czukay"],
      categories: {
        "Alienation": ["Throbbing Gristle", "The Residents"],
        "Dream Logic": ["Julee Cruise", "Nico"],
        "Deconstruction": ["Holger Czukay"]
      },
      type: "categorization",
      setting: "Melody unraveled. Rhythm crumbled. Meaning floated.",
      feedback: "Yes. Experimental doesn’t mean random — it means rebuilt.",
      audioTrack: "frequencies-other.mp3"
    },
    {
      id: 5,
      title: "Endless Echo",
      description: "Order these artists by how they sustained experimental aesthetics across decades.",
      artists: ["Björk", "Stereolab", "Laika", "Jenny Hval", "FKA Twigs"],
      correctOrder: ["Stereolab", "Laika", "Björk", "Jenny Hval", "FKA Twigs"],
      type: "timeline",
      setting: "Post-punk is dead. Long live the echo.",
      feedback: "You hear the dissonance that refused to fade.",
      audioTrack: "endless-echo.mp3"
    }
  ];
  
  export default act3Stages;
  