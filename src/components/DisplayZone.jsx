
import { Objective } from "./Objective";
import "./DisplayZone.css";

export const DisplayZone = ({
    goals,
    setGoals,
    handleRemoveGoal,
    openEditModal,
}) => {
    const updatedActiveGoals = [...goals].filter((goal) => !goal.done);
    const updatedCompletedGoals = [...goals].filter((goal) => goal.done);

    return (
        <div className='display-zone'>
            <h3 className='display-zone__subtitle'>Objectifs en cours:</h3>
            <div className='display-zone__list'>
                {updatedActiveGoals.map((item, index) => {
                    const originalIndex = goals.indexOf(item);
                    return (
                        <Objective
                            key={originalIndex}
                            objective={item}
                            setGoals={setGoals}
                            goals={updatedActiveGoals}
                            handleRemoveGoal={() =>
                                handleRemoveGoal(originalIndex)
                            }
                            openEditModal={() => openEditModal(originalIndex)}
                            index={index}
                        />
                    );
                })}
            </div>

            <h3 className='display-zone__subtitle'>Objectifs réalisés:</h3>
            <div className='display-zone__list'>
                {updatedCompletedGoals.map((item, index) => {
                    const originalIndex = goals.indexOf(item);
                    return (
                        <Objective
                            key={originalIndex}
                            objective={item}
                            setGoals={setGoals}
                            goals={updatedCompletedGoals}
                            handleRemoveGoal={() =>
                                handleRemoveGoal(originalIndex)
                            }
                            openEditModal={() => openEditModal(originalIndex)}
                            index={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};
