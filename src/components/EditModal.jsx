import { useState } from "react";
import "./EditModal.css";

export const EditModal = ({
    modalVisible,
    setModalVisible,
    goals,
    setGoals,
    activeObjective,
    setActiveObjective,
    editedObjective,
    setEditedObjective,
}) => {
    const [, setValue] = useState("");

    const handleInputChange = (e) => {
        setValue(e.target.value);
        setEditedObjective({ ...editedObjective, objective: e.target.value });
    };

    const handleCancelEdit = () => {
        setEditedObjective(null);
        setActiveObjective(null);
        setModalVisible(false);
    };

    const handleEdit = () => {
        const updatedGoals = [...goals];
        updatedGoals[activeObjective] = editedObjective;
        setGoals(updatedGoals);
        setEditedObjective(null);
        setModalVisible(false);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setModalVisible(false);
        }
    };

    if (!modalVisible) return null;

    return (
        <div className='modal-overlay' onClick={handleOverlayClick}>
            <div className='modal-container'>
                <h2 className='modal-title'>Éditer l'objectif</h2>

                <input
                    type='text'
                    className='modal-input'
                    value={editedObjective?.text || ""}
                    onInput={handleInputChange}
                    placeholder="Modifier l'objectif"
                    autoFocus
                />

                <div className='modal-buttons'>
                    <button className='modal-button' onClick={handleEdit}>
                        Valider
                    </button>

                    <button className='modal-button' onClick={handleCancelEdit}>
                        Fermer
                    </button>
                </div>
            </div>
        </div>
    );
};
