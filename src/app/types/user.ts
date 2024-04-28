import { Measures, BioDatas } from "./measures"

export interface User {
    Date_of_birth: number
    Email: string
    First_name: string
    Gender: string
    ID: number
    Last_name: string
    Password: string
    Registration_date: number
  }


export type Virtual_users = Virtual_user[]

export interface Virtual_user {
  ID: number
  Physical_User_ID: number
  Name: string
  Email: string
  Goal: string
  Daily_calories: number
  historical_measurements : Measures,
  historical_bio_data : BioDatas
}
