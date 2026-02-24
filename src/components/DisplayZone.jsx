import "./DisplayZone.css";
import { Objective } from "./Objective";

export const DisplayZone = ({
    goals,
    setGoals,
    handleRemoveGoal,
    openEditModal,
}) => {
    const activeGoals = goals.filter((goal) => !goal.done);
    const completedGoals = goals.filter((goal) => goal.done);

    return (
        <div className='display-zone'>
            <h3 className='display-zone__subtitle'>Objectifs en cours:</h3>
            <div className='display-zone__list'>
                {activeGoals.map((item, index) => {
                    const originalIndex = goals.indexOf(item);
                    return (
                        <Objective
                            key={originalIndex}
                            objective={item}
                            setGoals={setGoals}
                            goals={activeGoals}
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
                {completedGoals.map((item, index) => {
                    const originalIndex = goals.indexOf(item);
                    return (
                        <Objective
                            key={originalIndex}
                            objective={item}
                            setGoals={setGoals}
                            goals={completedGoals}
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
