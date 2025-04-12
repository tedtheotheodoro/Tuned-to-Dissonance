import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

// Gets progress of the user in the database
export const getProgress = async (uid) => {
  const ref = doc(db, "progress", uid);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    return snap.data().unlockedStages;
  } else {
    // If the document doesn't exist, create it with default values
    const initial = {
      1: [0], // Act 1, Stage 0 unblocked by default
      2: [],
      3: [],
      4: [],
      5: []
    };
    await setDoc(ref, { unlockedStages: initial });
    return initial;
  }
};

// Updates progress unblocking new phase
export const updateProgress = async (uid, act, stage) => {
  const ref = doc(db, "progress", uid);
  const snap = await getDoc(ref);

  if (snap.exists()) {
    const data = snap.data();
    const currentStages = data.unlockedStages[act] || [];
    if (!currentStages.includes(stage)) {
      const updatedStages = [...currentStages, stage].sort();
      await updateDoc(ref, {
        [`unlockedStages.${act}`]: updatedStages
      });
    }
  }
};
