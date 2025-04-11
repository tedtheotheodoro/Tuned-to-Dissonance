const act2Stages = [
    {
      id: 1,
      title: "Tropical Dissonance",
      description: "Classify Brazilian post-punk bands by their core emotional and aesthetic qualities.",
      setting: "São Paulo, 1985. Urban poetry, underground melancholy, distorted hearts.",
      type: "categorization",
      artists: ["Fellini", "Finis Africae", "Hojerizah", "Uns e Outros", "Legião Urbana"],
      categories: {
        "Urban Melancholy": ["Legião Urbana", "Uns e Outros"],
        "Romantic Darkness": ["Hojerizah"],
        "Poetic Detachment": ["Fellini", "Finis Africae"]
      },
      audioTrack: "tropical-dissonance.mp3",
      feedback: "São Paulo wasn’t silent. You’ve heard the whispers through concrete."
    },
    {
      id: 2,
      title: "Cold Walls, Warm Reverbs",
      description: "Map post-punk from the post-Soviet bloc according to emotional purpose.",
      setting: "Minsk, 1991. Collapse echoes in the basslines and bedroom vocals.",
      type: "categorization",
      artists: ["Kino", "Molchat Doma", "Grazhdanskaya Oborona", "Human Tetris", "Motorama"],
      categories: {
        "Protest": ["Kino", "Grazhdanskaya Oborona"],
        "Alienation": ["Molchat Doma"],
        "Escape": ["Human Tetris", "Motorama"]
      },
      audioTrack: "cold-walls.mp3",
      feedback: "These aren’t just sounds — they’re exits from a crumbling system."
    },
    {
      id: 3,
      title: "Mechanical Descent",
      description: "Assign German bands to the function of their sonic dissonance.",
      setting: "Berlin, 1982. Sound turned into metal, repetition, collapse.",
      type: "categorization",
      artists: ["Kraftwerk", "Einstürzende Neubauten", "DAF", "Xmal Deutschland", "Liaisons Dangereuses"],
      categories: {
        "Rhythm": ["DAF"],
        "Destruction": ["Einstürzende Neubauten"],
        "Abstraction": ["Kraftwerk"],
        "Texture": ["Xmal Deutschland"],
        "Repetition": ["Liaisons Dangereuses"]
      },
      audioTrack: "mechanical-descent.mp3",
      feedback: "Your ears have adapted to cold mechanics and burning wires."
    },
    {
      id: 4,
      title: "Electric Body Collapse",
      description: "Group Japanese bands by expressive strategy: performance, distortion, conceptual noise.",
      setting: "Tokyo, 1983. Chaotic, synthetic, grotesque — yet pop.",
      type: "categorization",
      artists: ["The Stalin", "P-Model", "Yapoos", "INU", "Sadie Sads"],
      categories: {
        "Sonic Violence": ["The Stalin", "Sadie Sads"],
        "Pop Subversion": ["P-Model", "INU"],
        "Conceptual Noise": ["Yapoos"]
      },
      audioTrack: "electric-body.mp3",
      feedback: "From noise to nuance, you’ve felt Japan’s aesthetic convulsion."
    },
    {
      id: 5,
      title: "Noir et Synthetique",
      description: "Match French bands to emotional landscapes evoked by their sound.",
      setting: "Paris, 1984. Foggy clubs, surreal minds, glamorous detachment.",
      type: "categorization",
      artists: ["Kas Product", "Trisomie 21", "Martin Dupont", "Taxi Girl", "Les Rita Mitsouko"],
      categories: {
        "Longing": ["Trisomie 21", "Martin Dupont"],
        "Detachment": ["Kas Product", "Taxi Girl"],
        "Surrealism": ["Les Rita Mitsouko"]
      },
      audioTrack: "noir-synthetique.mp3",
      feedback: "France danced with shadows — and now so did you."
    }
  ];
  
  export default act2Stages;
  