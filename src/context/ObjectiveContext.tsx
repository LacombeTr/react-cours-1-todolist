import React, { createContext, useContext, useState, ReactNode } from "react";

// Types
export interface Objective {
    objective: string;
    done: boolean;
}

export interface ObjectiveContextType {
    goals: Objective[];
    newObjective: Objective | null;
    activeObjective: number | null;
    editedObjective: Objective | null;
    modalVisible: boolean;

    handleChange: (text: string) => void;
    handleAddGoal: () => void;
    handleRemoveGoal: (index: number) => void;
    handleEditGoal: (index: number) => void;

    setGoals: React.Dispatch<React.SetStateAction<Objective[]>>;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setEditedObjective: React.Dispatch<React.SetStateAction<Objective | null>>;
    setActiveObjective: React.Dispatch<React.SetStateAction<number | null>>;
}

const ObjectiveContext = createContext<ObjectiveContextType | undefined>(
    undefined,
);

export const useObjective = (): ObjectiveContextType => {
    const context = useContext(ObjectiveContext);
    if (!context) {
        throw new Error(
            "useObjective doit être utilisé dans un ObjectiveProvider",
        );
    }
    return context;
};

// Props du Provider
interface ObjectiveProviderProps {
    children: ReactNode;
}

export const ObjectiveProvider: React.FC<ObjectiveProviderProps> = ({
    children,
}) => {
    const [goals, setGoals] = useState<Objective[]>([]);
    const [newObjective, setNewObjective] = useState<Objective | null>(null);
    const [activeObjective, setActiveObjective] = useState<number | null>(null);
    const [editedObjective, setEditedObjective] = useState<Objective | null>(
        null,
    );
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const handleChange = (text: string) => {
        setNewObjective({ objective: text, done: false });
    };

    const handleAddGoal = () => {
        if (newObjective && newObjective.objective.trim()) {
            setGoals((prevGoals) => [...prevGoals, newObjective]);
            setNewObjective(null);
        }
    };

    const handleRemoveGoal = (index: number) => {
        setGoals((prevGoals) => prevGoals.filter((_, i) => i !== index));
    };

    const handleEditGoal = (index: number) => {
        setActiveObjective(index);
        setEditedObjective(goals[index]);
        setModalVisible(true);
    };

    const contextValue: ObjectiveContextType = {
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
    };

    return (
        <ObjectiveContext.Provider value={contextValue}>
            {children}
        </ObjectiveContext.Provider>
    );
};

export default ObjectiveProvider;
