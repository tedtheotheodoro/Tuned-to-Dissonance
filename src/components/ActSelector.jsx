// src/components/ActSelector.jsx
export default function ActSelector({ onSelect }) {
    const acts = [
      { id: 1, title: "The Foundation", unlocked: true },
      { id: 2, title: "Global Feedback", unlocked: false },
      // ... outros atos
    ];
  
    return (
      <div className="act-selector">
        {acts.map(act => (
          <button 
            key={act.id}
            onClick={() => act.unlocked && onSelect(act.id)}
            disabled={!act.unlocked}
          >
            Act {act.id}: {act.title}
          </button>
        ))}
      </div>
    );
  }