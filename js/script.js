fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    function populateOptions() {
      const equipmentList = document.getElementById("equipment-list");
      const muscleGroupList = document.getElementById("muscle-group-list");

      data.equipment.forEach((item) => {
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "radio";
        checkbox.name = "equipment";
        checkbox.value = item;
        checkbox.addEventListener("change", updateSelection);
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(item));
        equipmentList.appendChild(label);
      });

      data.muscleGroups.forEach((item) => {
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "radio";
        checkbox.name = "muscleGroup";
        checkbox.value = item;
        checkbox.addEventListener("change", updateSelection);
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(item));
        muscleGroupList.appendChild(label);
      });
    }

    function updateSelection() {
      const selectedEquipment = document.querySelector(
        "input[name='equipment']:checked"
      );
      const selectedMuscle = document.querySelector(
        "input[name='muscleGroup']:checked"
      );
      const display = document.getElementById("selection-display");

      if (selectedEquipment && selectedMuscle) {
        const workout = data.workouts.find(
          (w) =>
            w.equipment === selectedEquipment.value &&
            w.muscleGroup === selectedMuscle.value
        );
        if (workout) {
          display.textContent = ` Workout: ${workout.name}`;
        } else {
          display.textContent = "#";
        }
      }
    }

    populateOptions();
  });
