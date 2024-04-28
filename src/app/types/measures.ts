

export type Measures = Measure[]

export interface Measure {
    ID: number
    Virtual_User_ID: number
    Date_time: number
    Height: number
    Weight: number
    Waist_circumference: number
    Hip_circumference: number
  }
export type BioDatas = BioData[]

export interface BioData {
  ID: number
  Virtual_User_ID: number
  Date_time: number
  Age: number
  Gender: string
  Height: number
  Weight: number
  BMI: number
  Body_fat: number
  Activity_level: string
}
