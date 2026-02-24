import { useState, useEffect } from "react";
import "./Objective.css";

export const Objective = ({
    objective,
    setGoals,
    openEditModal,
    handleRemoveGoal,
    index,
}) => {
    const [isChecked, setChecked] = useState(objective.done);

    useEffect(() => {
        setGoals((prevGoals) => {
            const updatedGoals = [...prevGoals];
            updatedGoals[index] = { ...objective, done: isChecked };
            return updatedGoals;
        });
    }, [isChecked, index, setGoals]);
    
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
