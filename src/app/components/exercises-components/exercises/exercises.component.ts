import { Component, OnInit } from '@angular/core';
import { FormExerciseComponent } from '../exercise-form/exercise-form.component';
import { CalculatorService } from '../../../services/calculator.service';
import { ExerciseComponent } from '../exercise/exercise.component';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [FormExerciseComponent, ExerciseComponent],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.css'
})
export class ExercisesComponent implements OnInit {
  exercises : any

  data = [
    {
        "bodyPart": "lower legs",
        "equipment": "body weight",
        "gifUrl": "https://v2.exercisedb.io/image/-EA4vBhetgIhoR",
        "id": "1368",
        "name": "ankle circles",
        "target": "calves",
        "secondaryMuscles": [
            "ankle stabilizers"
        ],
        "instructions": [
            "Sit on the ground with your legs extended in front of you.",
            "Lift one leg off the ground and rotate your ankle in a circular motion.",
            "Perform the desired number of circles in one direction, then switch to the other direction.",
            "Repeat with the other leg."
        ]
    },
    {
        "bodyPart": "lower legs",
        "equipment": "assisted",
        "gifUrl": "https://v2.exercisedb.io/image/JeIcqNkBrnqS1Y",
        "id": "1708",
        "name": "assisted lying calves stretch",
        "target": "calves",
        "secondaryMuscles": [
            "hamstrings"
        ],
        "instructions": [
            "Lie on your back with your legs extended.",
            "Bend one knee and place your foot flat on the ground.",
            "Using your hands or a towel, gently pull your toes towards your body, feeling a stretch in your calf.",
            "Hold the stretch for 20-30 seconds.",
            "Release the stretch and repeat on the other leg."
        ]
    },
    {
        "bodyPart": "lower legs",
        "equipment": "band",
        "gifUrl": "https://v2.exercisedb.io/image/ZRiFWUEpSAMatX",
        "id": "0999",
        "name": "band single leg calf raise",
        "target": "calves",
        "secondaryMuscles": [
            "ankles",
            "feet"
        ],
        "instructions": [
            "Stand with your feet hip-width apart and place the band around the ball of your left foot.",
            "Hold onto a stable object for balance if needed.",
            "Slowly raise your left heel off the ground, lifting your body weight onto the ball of your foot.",
            "Pause for a moment at the top, then slowly lower your left heel back down to the starting position.",
            "Repeat for the desired number of repetitions, then switch to the right leg."
        ]
    },
    {
        "bodyPart": "lower legs",
        "equipment": "band",
        "gifUrl": "https://v2.exercisedb.io/image/s6BSQr5ZDOXgIr",
        "id": "1000",
        "name": "band single leg reverse calf raise",
        "target": "calves",
        "secondaryMuscles": [
            "hamstrings",
            "glutes"
        ],
        "instructions": [
            "Stand with your feet hip-width apart and place the band around the ball of your foot.",
            "Hold onto a stable object for balance.",
            "Slowly raise your heel off the ground, lifting your body weight onto the ball of your foot.",
            "Pause for a moment at the top, then slowly lower your heel back down to the starting position.",
            "Repeat for the desired number of repetitions, then switch to the other leg."
        ]
    },
    {
        "bodyPart": "lower legs",
        "equipment": "band",
        "gifUrl": "https://v2.exercisedb.io/image/FMvbruOC46WgDl",
        "id": "1369",
        "name": "band two legs calf raise - (band under both legs) v. 2",
        "target": "calves",
        "secondaryMuscles": [
            "ankles",
            "feet"
        ],
        "instructions": [
            "Stand with your feet shoulder-width apart and place a resistance band under both feet.",
            "Hold the ends of the band with your hands for stability.",
            "Raise your heels off the ground as high as possible, using your calves.",
            "Pause for a moment at the top, then slowly lower your heels back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ]
    },
    {
        "bodyPart": "lower legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/Pqbx6btd2dCm0E",
        "id": "1370",
        "name": "barbell floor calf raise",
        "target": "calves",
        "secondaryMuscles": [
            "hamstrings"
        ],
        "instructions": [
            "Place a barbell on the floor in front of you.",
            "Stand with the balls of your feet on the edge of the barbell, with your heels hanging off.",
            "Hold onto a stable object for balance if needed.",
            "Raise your heels as high as possible, using your calves to lift your body.",
            "Pause for a moment at the top, then slowly lower your heels back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ]
    },
    {
        "bodyPart": "lower legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/KZHT7GrKau9vca",
        "id": "0088",
        "name": "barbell seated calf raise",
        "target": "calves",
        "secondaryMuscles": [
            "hamstrings",
            "quadriceps"
        ],
        "instructions": [
            "Sit on a bench with your feet flat on the floor and a barbell resting on your thighs.",
            "Place the balls of your feet on a raised platform, such as a block or step.",
            "Position the barbell across your thighs and hold it securely with your hands.",
            "Keeping your back straight and your core engaged, lift your heels off the ground by extending your ankles.",
            "Pause for a moment at the top, then slowly lower your heels back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ]
    },
    {
        "bodyPart": "lower legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/Jx-hWPwymMk6y4",
        "id": "1371",
        "name": "barbell seated calf raise",
        "target": "calves",
        "secondaryMuscles": [
            "hamstrings"
        ],
        "instructions": [
            "Sit on a bench with your feet flat on the floor and a barbell resting on your thighs.",
            "Place the balls of your feet on a raised platform, such as a block or step.",
            "Lower your heels as far as possible, feeling a stretch in your calves.",
            "Raise your heels as high as possible, contracting your calves.",
            "Repeat for the desired number of repetitions."
        ]
    },
    {
        "bodyPart": "lower legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/TmGhuLc6v1ICnl",
        "id": "1372",
        "name": "barbell standing calf raise",
        "target": "calves",
        "secondaryMuscles": [
            "hamstrings",
            "glutes"
        ],
        "instructions": [
            "Stand with your feet shoulder-width apart and place a barbell across your upper back.",
            "Raise your heels off the ground as high as possible, using only your toes.",
            "Pause for a moment at the top, then slowly lower your heels back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ]
    },
    {
        "bodyPart": "lower legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/BPkn6RJVowro8z",
        "id": "0108",
        "name": "barbell standing leg calf raise",
        "target": "calves",
        "secondaryMuscles": [
            "hamstrings",
            "glutes"
        ],
        "instructions": [
            "Stand with your feet shoulder-width apart and place a barbell across your upper back.",
            "Raise your heels off the ground as high as possible, using your calves.",
            "Pause for a moment at the top, then slowly lower your heels back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ]
    }
  ]

  constructor(private calculator : CalculatorService){}


  ngOnInit(): void {
    // this.calculator.getData().subscribe((data : any) => {
    //   console.log('data')
    //   console.log(data)
    // })

    this.exercises = this.data
  }
}



