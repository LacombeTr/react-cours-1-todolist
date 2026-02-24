import { useState, useEffect } from "react";
import "./Objective.css";

export const Objective = ({
    objective,
    goals,
    setGoals,
    openEditModal,
    handleRemoveGoal,
    index,
}) => {
    const [isChecked, setChecked] = useState(objective.done);

    useEffect(() => {
        const updatedGoals = [...goals];
        updatedGoals[index] = { ...objective, done: isChecked };
        setGoals(updatedGoals);
    }, [isChecked, goals, index, objective, setGoals]);

    return (
        <div className='objective-item' onClick={() => openEditModal(index)}>
            <input
                type='checkbox'
                className='objective-checkbox'
                checked={isChecked}
                onChange={(e) => setChecked(e.target.checked)}
                onClick={(e) => e.stopPropagation()}
            />
            <span className='objective-text'>- {objective.objective}</span>
            <button
                className='objective-delete'
                onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveGoal(index);
                }}
                aria-label="Supprimer l'objectif"
            >
                ×
            </button>
        </div>
    );
};
