const act4Stages = [
    {
      id: 1,
      title: "Revival Machine",
      description: "Arrange bands in a lineage of aesthetic revival, from direct homage to post-digital interpretation.",
      artists: ["Interpol", "Editors", "The Rapture", "She Wants Revenge", "White Lies"],
      correctOrder: ["She Wants Revenge", "Interpol", "Editors", "White Lies", "The Rapture"],
      type: "timeline",
      setting: "The early 2000s weren’t nostalgic — they were recursive. Gloom returned in skinny jeans, tighter and glossier. The revival had arrived.",
      feedback: "They didn’t invent it. They remembered it — perfectly, painfully. You’ve mapped the revival spiral, where every loop feels newer and older at once.",
      audioTrack: "revival-machine.mp3"
    },
    {
      id: 2,
      title: "Digital Heartache",
      description: "Classify each band by emotional interface — how pain translates in the digital era.",
      artists: ["CHVRCHES", "Purity Ring", "Grimes (early era)", "TR/ST", "Crystal Castles"],
      categories: {
        "Polished Anxiety": ["CHVRCHES", "TR/ST"],
        "Dreamcore Isolation": ["Purity Ring"],
        "Fragmented Identity": ["Grimes (early era)", "Crystal Castles"],
        "Futurist Romance": ["CHVRCHES", "Grimes (early era)"],
        "Synthetic Rage": ["TR/ST", "Crystal Castles"]
      },
      type: "categorization",
      setting: "The synths are bright, the voices glitch, the feelings are huge — but buried. This is the era of curated intimacy, echo chambers, and fragile strength.",
      feedback: "You are feeling everything, but no one sees it. You are dancing alone. You are perfect in pixels — and bleeding through the screen.",
      audioTrack: "digital-heartache.mp3"
    },
    {
      id: 3,
      title: "Shadow Feed",
      description: "Connect artists through language, texture, and atmosphere in the global digital cult circuit.",
      artists: ["Molchat Doma", "She Past Away", "Lebanon Hanover", "Boy Harsher", "Drab Majesty"],
      correctPairs: [
        ["Molchat Doma", "She Past Away"],
        ["Lebanon Hanover", "Boy Harsher"],
        ["Drab Majesty", "Lebanon Hanover"]
      ],
      type: "pairs",
      setting: "The screen glows in the dark. Your feed scrolls endlessly. Post-punk's children whisper in Cyrillic, Turkish, and reverb.",
      feedback: "You've wandered deep into the digital catacombs. These aren't trends — they're hauntings. In every cold wave, another language aches. In every loop, a memory reboots.",
      audioTrack: "shadow-feed.mp3"
    },
    {
      id: 4,
      title: "Lo-Fi Sanctuaries",
      description: "Categorize bands by aesthetic minimalism and emotional numbness.",
      artists: ["Have a Nice Life", "Duster", "Planning for Burial", "Low (late)", "Midwife"],
      categories: {
        "Dissociation": ["Planning for Burial", "Midwife"],
        "Emptiness": ["Duster", "Low (late)"],
        "Silent Collapse": ["Have a Nice Life"]
      },
      type: "categorization",
      setting: "Too online to speak, too tired to scream. In this stage, post-punk becomes lo-fi therapy — buried in hiss and crushed drums.",
      feedback: "The distortion wasn’t broken. It was shelter. You’ve tuned into the static that protects, numbs, and remembers. You’re not alone in the hum.",
      audioTrack: "lofi-sanctuaries.mp3"
    }
  ];
  
  export default act4Stages;
  