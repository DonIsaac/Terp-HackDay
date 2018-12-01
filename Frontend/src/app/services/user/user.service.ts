import { Injectable } from '@angular/core';
import { UserData } from '../../components/UserData';
import { Course } from '../../components/Course'

@Injectable()
export class UserService {

  sampleData: UserData = {
    
    email: "Test@Thegoogs.com",
    name: "Tod",
    profile: "someSite.png",
    major: "CS",
    validCourses: Course[0] = [
      { courseCode: "CMNS250", courseName: "Discrete Structures" }
    ]
    
  }

  constructor() { 
  }

  getUser(): UserData{
    return this.sampleData
  }

}
