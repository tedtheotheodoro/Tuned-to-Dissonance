export const initialState = {
  userAnswers: [],
  selectedItems: [],
  availableArtists: [],
  showFeedback: false,
  isCorrect: false,
  feedback: "",
  progressData: {
    1: [0],
    2: [],
    3: [],
    4: [],
    5: []
  }
};

export function stageReducer(state, action) {
  switch (action.type) {
    case 'RESET_STAGE':
      return {
        ...initialState,
        availableArtists: Array.isArray(action.artists) 
          ? [...action.artists].sort(() => Math.random() - 0.5)
          : [],
        progressData: state.progressData
      };
      
    case 'ADD_TO_TIMELINE':
      return {
        ...state,
        userAnswers: [...state.userAnswers, action.artist],
        availableArtists: state.availableArtists.filter(a => a !== action.artist)
      };
      
    case 'TOGGLE_SELECTION':
      return {
        ...state,
        selectedItems: state.selectedItems.includes(action.item)
          ? state.selectedItems.filter(item => item !== action.item)
          : [...state.selectedItems, action.item]
      };
      
    case 'ADD_PAIR':
      return {
        ...state,
        userAnswers: [...state.userAnswers, action.pair.sort()],
        selectedItems: []
      };
      
    case 'UPDATE_CATEGORIZATION':
      return {
        ...state,
        userAnswers: {
          ...state.userAnswers,
          [action.artist]: action.category
        }
      };
      
    case 'SET_FEEDBACK':
      return {
        ...state,
        showFeedback: true,
        isCorrect: action.payload.isCorrect,
        feedback: action.payload.feedback
      };
      
    case 'CLEAR_FEEDBACK':
      return {
        ...state,
        showFeedback: false
      };
      
    case 'SET_PROGRESS':
      return {
        ...state,
        progressData: action.payload
      };
      
    default:
      return state;
  }
}

export const arraysEqual = (a, b) => 
  a.length === b.length && a.every((val, i) => val === b[i]);

export const pairsEqual = (userPairs, correctPairs) => {
  const normalizedUser = userPairs.map(p => p.sort().join(','));
  const normalizedCorrect = correctPairs.map(p => p.sort().join(','));
  return arraysEqual(normalizedUser, normalizedCorrect);
};