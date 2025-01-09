document.addEventListener("DOMContentLoaded", () => {
    const saveButton = document.getElementById("saveButton");
    
    saveButton.addEventListener("click", () => {
        const sleepHours = document.getElementById("sleepHours").value;
        const waterIntake = document.getElementById("waterIntake").value;
        const mood = document.getElementById("moodSelect").value;
        const workout = document.getElementById("workout").value;

        if (sleepHours && waterIntake && mood && workout) {
            alert(`
                Self-Care Recorded:
                Hours of Sleep: ${sleepHours} hours
                Water Intake: ${waterIntake} ml
                Mood: ${mood}
                Workout: ${workout}
            `);
        } else {
            alert("Please fill in all the fields.");
        }
    });
});
