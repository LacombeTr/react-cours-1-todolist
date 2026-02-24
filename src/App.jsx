import { useState } from "react";
import "./App.css";

function App() {
    const [newObjective, setNewObjective] = useState(null);
    const [activeObjective, setActiveObjective] = useState(null);
    const [editedObjective, setEditedObjective] = useState(null);

    const [modalVisible, setModalVisible] = useState(false);

    const [goals, setGoals] = useState([]);

    const handleChange = (text) => {
        setNewObjective({ objective: text, done: false });
    };

    const handleAddGoal = () => {
        if (newObjective.objective.trim()) {
            setGoals([...goals, newObjective]);
            setNewObjective("");
        }
    };

    const handleRemoveGoal = (index) => {
        const updatedGoals = goals.filter((_, i) => i !== index);
        setGoals(updatedGoals);
    };

    const handleEditGoal = (index) => {
        setActiveObjective(index);
        setEditedObjective(goals[index]);
        setModalVisible(true);
    };

    return (
        <div className="container">
            <div className="background" />
            <h1 className="title">Mes buts 2026</h1>
            <p className="subtitle">Ajouter un nouvel objectif:</p>

            <CreateZone
                newObjective={newObjective}
                handleChange={handleChange}
                handleAddGoal={handleAddGoal}
            />

            <DisplayZone
                goals={goals}
                setGoals={setGoals}
                handleRemoveGoal={handleRemoveGoal}
                openEditModal={handleEditGoal}
            />

            <EditModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                goals={goals}
                setGoals={setGoals}
                activeObjective={activeObjective}
                setActiveObjective={setActiveObjective}
                editedObjective={editedObjective}
                setEditedObjective={setEditedObjective}
            />
            <StatusBar style='auto' />
        </div>
    );
}

export default App;
