import { CreateZone } from "./components/CreateZone";
import { DisplayZone } from "./components/DisplayZone";
import { EditModal } from "./components/EditModal";
import { useObjective } from "./context/ObjectiveContext";
import "./App.css";

function App() {
    const {
        goals,
        newObjective,
        activeObjective,
        editedObjective,
        modalVisible,

        handleChange,
        handleAddGoal,
        handleRemoveGoal,
        handleEditGoal,

        setGoals,
        setModalVisible,
        setEditedObjective,
        setActiveObjective,
    } = useObjective();

    return (
        <div className='container'>
            <div className='background' />
            <h1 className='title'>Mes buts 2026</h1>
            <p className='subtitle'>Ajouter un nouvel objectif:</p>

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
        </div>
    );
}

export default App;
