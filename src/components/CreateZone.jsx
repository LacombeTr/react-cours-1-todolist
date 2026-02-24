import './CreateZone.css';

export const CreateZone = ({ newObjective, handleChange, handleAddGoal }) => {
    return (
        <div className="create-zone">
            <input
                className="create-zone__input"
                type="text"
                value={newObjective}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Entrez un nouvel objectif"
            />
            <button
                className="create-zone__button"
                onClick={handleAddGoal}
            >
                Ajouter
            </button>
        </div>
    );
};
