import { Measures, BioDatas } from "./measures"

export interface User {
    Date_of_birth: number
    Email: string
    First_name: string
    Gender: string
    ID: string
    Last_name: string
    Password: string
    Registration_date: number
  }


export type Virtual_users = Virtual_user[]

export interface Virtual_user {
  ID: string
  Physical_User_ID: number
  Name: string
  Email: string
  Goal: number
  Daily_calories: number
  Target_BMI : number
  Target_Body_fat : number
  Target_hip_circumference : number
  Target_waist_circumference : number
  Target_weight : number
  Start_date : Date
  End_date : Date
  Activity_level : string
  historical_measurements : Measures,
  historical_bio_data : BioDatas
}

