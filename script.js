const workoutPlan = {
    "Monday": {
    "muscleGroup": "Chest and Triceps",
    "warmUp": [
        {
            "name": "Treadmill",
            "details": "5 minutes at 5 km/h"
        },
        {
            "name": "Dynamic Stretches",
            "details": "Arm circles, shoulder rolls, chest stretches"
        }
    ],
    "exercises": [
        {
            "name": "Push-Ups",
            "sets": 4,
            "repsPlan": [5, 8, 10, 12, 14, 16], // Reps increase by 2 every 2 weeks
            "weightPlan": ["Bodyweight"],
            "progression": "If standard push-ups become easy, elevate feet or add a weighted backpack."
        },
        {
            "name": "Dumbbell Chest Press",
            "sets": 4,
            "reps": 12,
            "weightPlan": [5, 6, 7, 8, 9, 10] // Weights in kg per hand, increase every 2 weeks
        },
        {
            "name": "Dumbbell Flyes",
            "sets": 3,
            "reps": 12,
            "weightPlan": [2, 4, 5, 6, 7, 8] // Weights in kg per hand, increase every 2 weeks
        },
        {
            "name": "Incline Push-Ups",
            "sets": 3,
            "reps": "Max reps",
            "progression": "Decrease incline height over time to increase difficulty."
        },
        {
            "name": "Dumbbell Overhead Triceps Extension",
            "sets": 4,
            "reps": 12,
            "weightPlan": [5, 6, 7, 8, 9, 10] // Weights in kg, increase every 2 weeks
        },
        {
            "name": "Bench Dips",
            "sets": 3,
            "reps": "Max reps",
            "weightPlan": ["Bodyweight", 2, 4, 6, 8, 10], // Weights in kg, increase every 2 weeks
            "progression": "Increase weight by 2kg every 2 weeks."
        },
        {
            "name": "Triceps Kickbacks",
            "sets": 3,
            "reps": 12,
            "weightPlan": [2, 3, 4, 5, 6, 7] // Weights in kg per hand, increase every 2 weeks
        }
    ],
    "cardio": {
        "name": "Treadmill Intervals",
        "details": [
            "Warm-Up: 5 minutes at 6 km/h",
            "Intervals: 1 min at 9 km/h (jog), 1 min at 6 km/h (walk), repeat for 10 cycles",
            "Cool Down: 5 minutes at 5 km/h"
        ]
    },
    "coolDown": [
        {
            "name": "Static Stretches",
            "details": "Chest and triceps stretches"
        }
    ]
    },
    "Tuesday": {
    "muscleGroup": "Back and Biceps",
    "warmUp": [
        {
            "name": "Jumping Jacks",
            "details": "2 minutes"
        },
        {
            "name": "Dynamic Stretches",
            "details": "Arm swings, torso twists"
        }
    ],
    "exercises": [
        {
            "name": "Bent-Over Dumbbell Rows",
            "sets": 4,
            "reps": 12,
            "weightPlan": [5, 6, 8, 10, 12, 14], // Increase by 1-2kg every 2 weeks
            "progression": "Increase weight by 1-2kg every 2 weeks"
        },
        {
            "name": "Dumbbell Deadlifts",
            "sets": 4,
            "reps": 10,
            "weightPlan": [10, 12, 14, 16, 18, 20], // Increase by 2kg every 2 weeks
            "progression": "Increase weight by 2kg every 2 weeks"
        },
        {
            "name": "Supermans",
            "sets": 3,
            "reps": 15,
            "weightPlan": ["Bodyweight"]
        },
        {
            "name": "Reverse Flyes",
            "sets": 3,
            "reps": 12,
            "weightPlan": [2, 3, 4, 5, 6, 7], // Increase by 1kg every 2 weeks
            "progression": "Increase weight by 1kg every 2 weeks"
        },
        {
            "name": "Dumbbell Bicep Curls",
            "sets": 4,
            "reps": 12,
            "weightPlan": [5, 6, 7, 8, 9, 10], // As per progression plan
            "progression": "Increase weight by 1kg every 2 weeks"
        },
        {
            "name": "Hammer Curls",
            "sets": 3,
            "reps": 12,
            "weightPlan": [5, 6, 7, 8, 9, 10], // Same progression as bicep curls
            "progression": "Same as Dumbbell Bicep Curls"
        },
        {
            "name": "Concentration Curls",
            "sets": 3,
            "reps": 10,
            "weightPlan": [4, 5, 6, 7, 8, 9], // Increase by 1kg every 2 weeks
            "progression": "Start with 4kg per hand, increase by 1kg every 2 weeks"
        }
    ],
    "cardio": {
        "name": "Skipping Rope",
        "details": [
            "Intervals: 1 minute jumping, 30 seconds rest",
            "Total Time: 20 minutes"
        ]
    },
    "coolDown": [
        {
            "name": "Static Stretches",
            "details": "Back and biceps stretches"
        }
    ]
    },
    "Wednesday": {
    "muscleGroup": "Legs and Abs (Including Tummy Trimmer)",
    "warmUp": [
        {
            "name": "Treadmill",
            "details": "5 minutes at 5 km/h"
        },
        {
            "name": "Dynamic Stretches",
            "details": "Leg swings, hip circles"
        }
    ],
    "exercises": [
        {
            "name": "Squats",
            "sets": 4,
            "reps": 15,
            "weightPlan": [
                "Bodyweight",    // Weeks 1-2
                5,               // Weeks 3-4
                7,               // Weeks 5-6
                9,               // Weeks 7-8
                11,              // Weeks 9-10
                13               // Weeks 11-12
            ],
            "progression": "Increase weight by 2kg every 2 weeks"
        },
        {
            "name": "Lunges",
            "sets": 4,
            "reps": "12 per leg",
            "weightPlan": [
                "Bodyweight",    // Weeks 1-2
                2,               // Weeks 3-4
                4,               // Weeks 5-6
                6,               // Weeks 7-8
                8,               // Weeks 9-10
                10               // Weeks 11-12
            ],
            "progression": "Increase weight by 2kg per hand every 2 weeks"
        },
        {
            "name": "Calf Raises",
            "sets": 4,
            "reps": 20,
            "weightPlan": [
                "Bodyweight",    // Weeks 1-2
                2,               // Weeks 3-4
                4,               // Weeks 5-6
                6,               // Weeks 7-8
                8,               // Weeks 9-10
                10               // Weeks 11-12
            ],
            "progression": "Increase weight by 2kg per hand every 2 weeks"
        },
        {
            "name": "Glute Bridges",
            "sets": 3,
            "reps": 15,
            "weightPlan": [
                "Bodyweight",    // Weeks 1-2
                5,               // Weeks 3-4
                9,               // Weeks 5-6
                13,              // Weeks 7-8
                17,              // Weeks 9-10
                21               // Weeks 11-12
            ],
            "progression": "Increase weight by 2-4kg every 2 weeks"
        },
        // Abs Exercises
        {
            "name": "Plank",
            "sets": 3,
            "durationPlan": [
                "30 seconds",    // Weeks 1-2
                "45 seconds",    // Week 3
                "60 seconds",    // Week 4
                "75 seconds",    // Week 5
                "90 seconds",    // Week 6
                "105 seconds"    // Week 7
            ],
            "progression": "Increase duration by 15 seconds every week"
        },
        {
            "name": "Crunches with Tummy Trimmer",
            "sets": 3,
            "reps": 15,
            "instructions": "Secure feet in tummy trimmer handles. Perform crunches pulling against the resistance."
        },
        {
            "name": "Leg Raises",
            "sets": 3,
            "reps": 15
        },
        {
            "name": "Russian Twists with Weight",
            "sets": 3,
            "reps": 20,
            "weightPlan": [
                "No weight",     // Weeks 1-2
                2,               // Weeks 3-4
                4,               // Weeks 5-6
                6,               // Weeks 7-8
                8,               // Weeks 9-10
                10               // Weeks 11-12
            ],
            "progression": "Increase weight by 1-2kg every 2 weeks"
        },
        // Additional Tummy Trimmer Exercises
        {
            "name": "Seated Rowing with Tummy Trimmer",
            "sets": 3,
            "reps": 15
        },
        {
            "name": "Standing Abdominal Crunches with Tummy Trimmer",
            "sets": 3,
            "reps": 15
        }
    ],
    "cardio": {
        "name": "Treadmill Incline Walk",
        "details": [
            "Set incline to 5%",
            "Walk at 6 km/h for 20 minutes"
        ]
    },
    "coolDown": [
        {
            "name": "Static Stretches",
            "details": "Legs and abs stretches"
        }
    ]
},
    "Thursday": {
        "muscleGroup": "Shoulders and Triceps",
    "warmUp": [
        {
            "name": "Treadmill",
            "details": "5 minutes at 5 km/h"
        },
        {
            "name": "Dynamic Stretches",
            "details": "Arm circles, shoulder rolls, neck stretches"
        }
    ],
    "exercises": [
        {
            "name": "Dumbbell Shoulder Press",
            "sets": 4,
            "reps": 12,
            "weightPlan": [5, 6, 7, 8, 9, 10], 
            "progression": "Increase by 1kg every 2 weeks"
        },
        {
            "name": "Lateral Raises",
            "sets": 3,
            "reps": 12,
            "weightPlan": [2, 3, 4, 5, 6, 7],
            "progression": "Increase by 1kg every 2 weeks"
        },
        {
            "name": "Front Raises",
            "sets": 3,
            "reps": 12,
            "weightPlan": [2, 3, 4, 5, 6, 7],
            "progression": "Increase by 1kg every 2 weeks"
        },
        {
            "name": "Upright Rows",
            "sets": 3,
            "reps": 12,
            "weightPlan": [4, 5, 6, 7, 8, 9],
            "progression": "Increase by 1kg every 2 weeks"
        },
        {
            "name": "Dumbbell Overhead Triceps Extension",
            "sets": 4,
            "reps": 12,
            "weightPlan": [5, 6, 7, 8, 9, 10],
            "progression": "Increase by 1kg every 2 weeks"
        },
        {
            "name": "Triceps Dips",
            "sets": 3,
            "reps": "Max reps",
            "weightPlan": [
                "Bodyweight", // Weeks 1-2
                2,           // Weeks 3-4
                4,           // Weeks 5-6
                6,           // Weeks 7-8
                8,           // Weeks 9-10
                10           // Weeks 11-12
            ],
            "progression": "Add 2kg every 2 weeks after starting with bodyweight"
        },
        {
            "name": "Triceps Kickbacks",
            "sets": 3,
            "reps": 12,
            "weightPlan": [2, 3, 4, 5, 6, 7],
            "progression": "Increase by 1kg every 2 weeks"
        }
    ],
    "cardio": {
        "name": "Skipping Rope",
        "details": [
            "1 min jumping, 30 seconds rest",
            "Repeat for 20 minutes"
        ]
    },
    "coolDown": [
        {
            "name": "Static Stretches",
            "details": "Focus on shoulders and triceps"
        }
    ]
},
    "Friday": {
    "muscleGroup": "Back and Biceps",
    "warmUp": [
        {
            "name": "Jumping Jacks",
            "details": "2 minutes"
        },
        {
            "name": "Dynamic Stretches",
            "details": "Arm swings, torso twists"
        }
    ],
    "exercises": [
        {
            "name": "Bent-Over Dumbbell Rows",
            "sets": 4,
            "reps": 12,
            "weightPlan": [5, 6, 8, 10, 12, 14], // Increase by 1-2kg every 2 weeks
            "progression": "Increase weight by 1-2kg every 2 weeks"
        },
        {
            "name": "Dumbbell Deadlifts",
            "sets": 4,
            "reps": 10,
            "weightPlan": [10, 12, 14, 16, 18, 20], // Increase by 2kg every 2 weeks
            "progression": "Increase weight by 2kg every 2 weeks"
        },
        {
            "name": "Supermans",
            "sets": 3,
            "reps": 15,
            "weightPlan": ["Bodyweight"]
        },
        {
            "name": "Reverse Flyes",
            "sets": 3,
            "reps": 12,
            "weightPlan": [2, 3, 4, 5, 6, 7], // Increase by 1kg every 2 weeks
            "progression": "Increase weight by 1kg every 2 weeks"
        },
        {
            "name": "Dumbbell Bicep Curls",
            "sets": 4,
            "reps": 12,
            "weightPlan": [5, 6, 7, 8, 9, 10], // As per progression plan
            "progression": "Increase weight by 1kg every 2 weeks"
        },
        {
            "name": "Hammer Curls",
            "sets": 3,
            "reps": 12,
            "weightPlan": [5, 6, 7, 8, 9, 10], // Same progression as bicep curls
            "progression": "Same as Dumbbell Bicep Curls"
        },
        {
            "name": "Concentration Curls",
            "sets": 3,
            "reps": 10,
            "weightPlan": [4, 5, 6, 7, 8, 9], // Increase by 1kg every 2 weeks
            "progression": "Start with 4kg per hand, increase by 1kg every 2 weeks"
        }
    ],
    "cardio": {
        "name": "Skipping Rope",
        "details": [
            "Intervals: 1 minute jumping, 30 seconds rest",
            "Total Time: 20 minutes"
        ]
    },
    "coolDown": [
        {
            "name": "Static Stretches",
            "details": "Back and biceps stretches"
        }
    ]
    },
    "Saturday": {
        "muscleGroup": "Legs and Abs (Including Tummy Trimmer)",
        "warmUp": [
            {
                "name": "Treadmill",
                "details": "5 minutes at 5 km/h"
            },
            {
                "name": "Dynamic Stretches",
                "details": "Leg swings, hip circles"
            }
        ],
        "exercises": [
            {
                "name": "Squats",
                "sets": 4,
                "reps": 15,
                "weightPlan": [
                    "Bodyweight",    // Weeks 1-2
                    5,               // Weeks 3-4
                    7,               // Weeks 5-6
                    9,               // Weeks 7-8
                    11,              // Weeks 9-10
                    13               // Weeks 11-12
                ],
                "progression": "Increase weight by 2kg every 2 weeks"
            },
            {
                "name": "Lunges",
                "sets": 4,
                "reps": "12 per leg",
                "weightPlan": [
                    "Bodyweight",    // Weeks 1-2
                    2,               // Weeks 3-4
                    4,               // Weeks 5-6
                    6,               // Weeks 7-8
                    8,               // Weeks 9-10
                    10               // Weeks 11-12
                ],
                "progression": "Increase weight by 2kg per hand every 2 weeks"
            },
            {
                "name": "Calf Raises",
                "sets": 4,
                "reps": 20,
                "weightPlan": [
                    "Bodyweight",    // Weeks 1-2
                    2,               // Weeks 3-4
                    4,               // Weeks 5-6
                    6,               // Weeks 7-8
                    8,               // Weeks 9-10
                    10               // Weeks 11-12
                ],
                "progression": "Increase weight by 2kg per hand every 2 weeks"
            },
            {
                "name": "Glute Bridges",
                "sets": 3,
                "reps": 15,
                "weightPlan": [
                    "Bodyweight",    // Weeks 1-2
                    5,               // Weeks 3-4
                    9,               // Weeks 5-6
                    13,              // Weeks 7-8
                    17,              // Weeks 9-10
                    21               // Weeks 11-12
                ],
                "progression": "Increase weight by 2-4kg every 2 weeks"
            },
            // Abs Exercises
            {
                "name": "Plank",
                "sets": 3,
                "durationPlan": [
                    "30 seconds",    // Weeks 1-2
                    "45 seconds",    // Week 3
                    "60 seconds",    // Week 4
                    "75 seconds",    // Week 5
                    "90 seconds",    // Week 6
                    "105 seconds"    // Week 7
                ],
                "progression": "Increase duration by 15 seconds every week"
            },
            {
                "name": "Crunches with Tummy Trimmer",
                "sets": 3,
                "reps": 15,
                "instructions": "Secure feet in tummy trimmer handles. Perform crunches pulling against the resistance."
            },
            {
                "name": "Leg Raises",
                "sets": 3,
                "reps": 15
            },
            {
                "name": "Russian Twists with Weight",
                "sets": 3,
                "reps": 20,
                "weightPlan": [
                    "No weight",     // Weeks 1-2
                    2,               // Weeks 3-4
                    4,               // Weeks 5-6
                    6,               // Weeks 7-8
                    8,               // Weeks 9-10
                    10               // Weeks 11-12
                ],
                "progression": "Increase weight by 1-2kg every 2 weeks"
            },
            // Additional Tummy Trimmer Exercises
            {
                "name": "Seated Rowing with Tummy Trimmer",
                "sets": 3,
                "reps": 15
            },
            {
                "name": "Standing Abdominal Crunches with Tummy Trimmer",
                "sets": 3,
                "reps": 15
            }
        ],
        "cardio": {
            "name": "Treadmill Incline Walk",
            "details": [
                "Set incline to 5%",
                "Walk at 6 km/h for 20 minutes"
            ]
        },
        "coolDown": [
            {
                "name": "Static Stretches",
                "details": "Legs and abs stretches"
            }
        ]
    }
};

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = new Date();
const dayName = daysOfWeek[date.getDay()];

const startDate = new Date("December 1, 2024");
const today = new Date();
const timeDiff = today - startDate;
const weekNumber = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7)) + 1;

function getReps(repsPlan) {
    if (Array.isArray(repsPlan)) {
        const index = Math.floor((weekNumber - 1) / 2);
        return repsPlan[Math.min(index, repsPlan.length - 1)] + " reps";
    } else {
        return repsPlan;
    }
}

function getWeight(weightPlan) {
    if (Array.isArray(weightPlan)) {
        const index = Math.floor((weekNumber - 1) / 2);
        return weightPlan[Math.min(index, weightPlan.length - 1)] + " kg";
    } else {
        return weightPlan;
    }
}


function displayWorkout() {
    const container = document.getElementById('workout-container');

    if (!workoutPlan.hasOwnProperty(dayName)) {
        container.innerHTML = `<p>Today is a rest day. Enjoy your recovery!</p>`;
        return;
    }
    
    container.innerHTML = '';
    
    const workout = workoutPlan[dayName];
    const muscleGroup = workout.muscleGroup;
    const exercises = workout.exercises;

    const muscleGroupHeader = document.createElement('h2');
    muscleGroupHeader.textContent = muscleGroup;
    container.appendChild(muscleGroupHeader);

        if (workout.warmUp) {
            const warmUpHeader = document.createElement('h3');
            warmUpHeader.textContent = 'Warm-Up';
            container.appendChild(warmUpHeader);
    
            workout.warmUp.forEach((activity) => {
                const activityDiv = document.createElement('div');
                activityDiv.className = 'activity';
    
                const activityName = document.createElement('p');
                activityName.innerHTML = `<strong>${activity.name}</strong>: ${activity.details}`;
                activityDiv.appendChild(activityName);
    
                container.appendChild(activityDiv);
            });
        }
    
    
    exercises.forEach((exercise, index) => {
        const exerciseDiv = document.createElement('div');
        exerciseDiv.className = 'exercise';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `exercise-${index}`;
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                exerciseDiv.classList.add('completed');
            } else {
                exerciseDiv.classList.remove('completed');
            }
            saveProgress();
        });

        const exerciseHeader = document.createElement('label');
        exerciseHeader.setAttribute('for', `exercise-${index}`);
        exerciseHeader.innerHTML = `<strong>${exercise.name}</strong>`;

        exerciseDiv.appendChild(checkbox);
        exerciseDiv.appendChild(exerciseHeader);
        const details = document.createElement('p');
        details.innerHTML = `<strong>Sets:</strong> ${exercise.sets}<br>
                             <strong>Reps:</strong> ${getReps(exercise.reps)}<br>
                             <strong>Weight:</strong> ${getWeight(exercise.weightPlan)}`;
        exerciseDiv.appendChild(details);

        container.appendChild(exerciseDiv);
    });

            if (workout.cardio) {
                const cardioHeader = document.createElement('h3');
                cardioHeader.textContent = 'Cardio';
                container.appendChild(cardioHeader);
        
                const cardioDiv = document.createElement('div');
                cardioDiv.className = 'activity';
        
                const cardioName = document.createElement('p');
                cardioName.innerHTML = `<strong>${workout.cardio.name}</strong>`;
        
                const cardioDetails = document.createElement('ul');
                workout.cardio.details.forEach((detail) => {
                    const listItem = document.createElement('li');
                    listItem.textContent = detail;
                    cardioDetails.appendChild(listItem);
                });
        
                cardioDiv.appendChild(cardioName);
                cardioDiv.appendChild(cardioDetails);
                container.appendChild(cardioDiv);
            }
        
            if (workout.coolDown) {
                const coolDownHeader = document.createElement('h3');
                coolDownHeader.textContent = 'Cool-Down';
                container.appendChild(coolDownHeader);
        
                workout.coolDown.forEach((activity) => {
                    const activityDiv = document.createElement('div');
                    activityDiv.className = 'activity';
        
                    const activityName = document.createElement('p');
                    activityName.innerHTML = `<strong>${activity.name}</strong>: ${activity.details}`;
                    activityDiv.appendChild(activityName);
        
                    container.appendChild(activityDiv);
                });
            }

    loadProgress();
}

function saveProgress() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const progress = {};
    checkboxes.forEach((checkbox, index) => {
        progress[`exercise-${index}`] = checkbox.checked;
    });
    localStorage.setItem(`progress-${dayName}`, JSON.stringify(progress));
}

function loadProgress() {
    const savedProgress = JSON.parse(localStorage.getItem(`progress-${dayName}`)) || {};
    for (const [key, value] of Object.entries(savedProgress)) {
        const checkbox = document.getElementById(key);
        if (checkbox) {
            checkbox.checked = value;
            if (value) {
                checkbox.parentElement.classList.add('completed');
            }
        }
    }
}

displayWorkout();
