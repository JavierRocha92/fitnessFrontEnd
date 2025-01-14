import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormExerciseComponent } from '../exercise-form/exercise-form.component';
import { CalculatorService } from '../../../services/calculator.service';
import { ExerciseComponent } from '../exercise/exercise.component';
import { UsersService } from '../../../services/users.service';
import { LoaderComponent } from '../../loader/loader.component';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [FormExerciseComponent, ExerciseComponent, LoaderComponent],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.css',
})
export class ExercisesComponent implements OnInit{
  exercises: any;
  isLoading : boolean = false

  initial_data = [
    {
        "bodyPart": "cardio",
        "equipment": "body weight",
        "gifUrl": "https://v2.exercisedb.io/image/PJfzNp8IhF1Z3N",
        "id": "3220",
        "name": "astride jumps (male)",
        "target": "cardiovascular system",
        "secondaryMuscles": [
            "quadriceps",
            "hamstrings",
            "calves"
        ],
        "instructions": [
            "Stand with your feet shoulder-width apart.",
            "Bend your knees and lower your body into a squat position.",
            "Jump explosively upwards, extending your legs and arms.",
            "While in the air, spread your legs apart and bring your arms out to the sides.",
            "Land softly with your feet shoulder-width apart, bending your knees to absorb the impact.",
            "Repeat for the desired number of repetitions."
        ]
    },
    {
        "bodyPart": "cardio",
        "equipment": "body weight",
        "gifUrl": "https://v2.exercisedb.io/image/SfLEaUlIr9f0yr",
        "id": "3672",
        "name": "back and forth step",
        "target": "cardiovascular system",
        "secondaryMuscles": [
            "quadriceps",
            "hamstrings",
            "glutes",
            "calves"
        ],
        "instructions": [
            "Stand with your feet shoulder-width apart.",
            "Step forward with your right foot, bending your knee and lowering your body into a lunge position.",
            "Push off with your right foot and step back to the starting position.",
            "Repeat the movement with your left foot, alternating legs with each step.",
            "Continue stepping back and forth, maintaining a steady pace.",
            "Repeat for the desired duration or number of repetitions."
        ]
    },
    {
        "bodyPart": "cardio",
        "equipment": "body weight",
        "gifUrl": "https://v2.exercisedb.io/image/VgWq5cOhqO81Ym",
        "id": "3360",
        "name": "bear crawl",
        "target": "cardiovascular system",
        "secondaryMuscles": [
            "core",
            "shoulders",
            "triceps"
        ],
        "instructions": [
            "Start on all fours with your hands directly under your shoulders and your knees directly under your hips.",
            "Lift your knees slightly off the ground, keeping your back flat and your core engaged.",
            "Move your right hand and left foot forward simultaneously, followed by your left hand and right foot.",
            "Continue crawling forward, alternating your hand and foot movements.",
            "Maintain a steady pace and keep your core tight throughout the exercise.",
            "Continue for the desired distance or time."
        ]
    },
    {
        "bodyPart": "cardio",
        "equipment": "body weight",
        "gifUrl": "https://v2.exercisedb.io/image/IDG7gKBaGausL4",
        "id": "1160",
        "name": "burpee",
        "target": "cardiovascular system",
        "secondaryMuscles": [
            "quadriceps",
            "hamstrings",
            "calves",
            "shoulders",
            "chest"
        ],
        "instructions": [
            "Start in a standing position with your feet shoulder-width apart.",
            "Lower your body into a squat position by bending your knees and placing your hands on the floor in front of you.",
            "Kick your feet back into a push-up position.",
            "Perform a push-up, keeping your body in a straight line.",
            "Jump your feet back into the squat position.",
            "Jump up explosively, reaching your arms overhead.",
            "Land softly and immediately lower back into a squat position to begin the next repetition."
        ]
    },
    {
        "bodyPart": "cardio",
        "equipment": "leverage machine",
        "gifUrl": "https://v2.exercisedb.io/image/AnKK-fYoBnrgvm",
        "id": "2331",
        "name": "cycle cross trainer",
        "target": "cardiovascular system",
        "secondaryMuscles": [
            "quadriceps",
            "hamstrings",
            "glutes"
        ],
        "instructions": [
            "Adjust the seat height and position yourself on the cycle cross trainer.",
            "Place your feet on the pedals and grip the handlebars.",
            "Start pedaling in a smooth and controlled motion.",
            "Maintain a steady pace and increase the resistance if desired.",
            "Continue pedaling for the desired duration of your cardio workout."
        ]
    },
    {
        "bodyPart": "cardio",
        "equipment": "dumbbell",
        "gifUrl": "https://v2.exercisedb.io/image/GvQbLzcPxEIzwd",
        "id": "1201",
        "name": "dumbbell burpee",
        "target": "cardiovascular system",
        "secondaryMuscles": [
            "quadriceps",
            "hamstrings",
            "calves",
            "shoulders",
            "triceps",
            "core"
        ],
        "instructions": [
            "Start in a standing position with your feet shoulder-width apart and a dumbbell in each hand.",
            "Lower your body into a squat position, placing the dumbbells on the ground in front of you.",
            "Kick your feet back into a push-up position, keeping your body in a straight line.",
            "Perform a push-up, bending your elbows and lowering your chest towards the ground.",
            "Jump your feet back towards your hands, landing in a squat position.",
            "Stand up explosively, lifting the dumbbells off the ground and bringing them to your shoulders.",
            "Press the dumbbells overhead, fully extending your arms.",
            "Lower the dumbbells back to your shoulders and repeat the entire sequence for the desired number of repetitions."
        ]
    },
    {
        "bodyPart": "cardio",
        "equipment": "body weight",
        "gifUrl": "https://v2.exercisedb.io/image/rG7J9bwbUlDrl4",
        "id": "3221",
        "name": "half knee bends (male)",
        "target": "cardiovascular system",
        "secondaryMuscles": [
            "quadriceps",
            "hamstrings",
            "glutes"
        ],
        "instructions": [
            "Stand with your feet shoulder-width apart.",
            "Bend your knees and lower your body down as if you were sitting back into a chair.",
            "Keep your chest up and your weight in your heels.",
            "Pause for a moment at the bottom, then push through your heels to return to the starting position.",
            "Repeat for the desired number of repetitions."
        ]
    },
    {
        "bodyPart": "cardio",
        "equipment": "body weight",
        "gifUrl": "https://v2.exercisedb.io/image/AmFvoGXt6tVoac",
        "id": "3636",
        "name": "high knee against wall",
        "target": "cardiovascular system",
        "secondaryMuscles": [
            "quadriceps",
            "hamstrings",
            "glutes",
            "calves"
        ],
        "instructions": [
            "Stand facing a wall with your feet hip-width apart.",
            "Place your hands on the wall for support.",
            "Engage your core and lift your right knee up towards your chest, while keeping your left foot on the ground.",
            "Quickly switch legs, bringing your left knee up towards your chest and lowering your right foot back down.",
            "Continue alternating legs in a running motion, bringing your knees up as high as possible.",
            "Maintain a fast pace and keep your upper body stable throughout the exercise.",
            "Repeat for the desired duration or number of repetitions."
        ]
    },
    {
        "bodyPart": "cardio",
        "equipment": "body weight",
        "gifUrl": "https://v2.exercisedb.io/image/bJl0V-hAQA3oeb",
        "id": "0501",
        "name": "jack burpee",
        "target": "cardiovascular system",
        "secondaryMuscles": [
            "quadriceps",
            "hamstrings",
            "calves",
            "shoulders",
            "triceps",
            "core"
        ],
        "instructions": [
            "Start in a standing position with your feet shoulder-width apart.",
            "Lower your body into a squat position, placing your hands on the ground in front of you.",
            "Kick your feet back, landing in a push-up position.",
            "Perform a push-up, lowering your chest to the ground and then pushing back up.",
            "Jump your feet forward, landing in a squat position.",
            "Jump up explosively, reaching your arms overhead.",
            "Land softly and immediately lower back into the squat position to begin the next repetition."
        ]
    },
    {
        "bodyPart": "cardio",
        "equipment": "body weight",
        "gifUrl": "https://v2.exercisedb.io/image/txB2uBvn2nhzN0",
        "id": "3224",
        "name": "jack jump (male)",
        "target": "cardiovascular system",
        "secondaryMuscles": [
            "quadriceps",
            "calves"
        ],
        "instructions": [
            "Stand with your feet together and your arms by your sides.",
            "Jump up, spreading your feet apart and raising your arms above your head.",
            "As you land, quickly jump back to the starting position.",
            "Repeat for the desired number of repetitions."
        ]
    }
]


  constructor(
    private calculator: CalculatorService,
    private user_service: UsersService
  ) {}

  ngOnInit(): void {
    this.user_service.checkSession();
    this.isLoading = true
    
    this.calculator.getData().subscribe((data: any) => {
      this.exercises = data
      this.isLoading= false
    });
    // if(!this.exercises.length){
    //   this.setDefaultData();
    // }
  }
  
  setDefaultData(){
    this.exercises = this.initial_data

  }

 

  
}
