// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
// The class should also contain the following methods:
// - a method that adds up all the student's scores
// - a method that adds up all the possible scores
// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)
class clsStudent{
    constructor(studentName, className, studentScores, possibleScores){
        this.studentName = studentName;
        this.className = className;
        this.studentScores = studentScores;
        this.possibleScores = possibleScores;
        }

        addScores(){
            let aScores = this.studentScores.reduce((currentTotal, item)=>{
                return item.scores + currentTotal
            },
            0)
            return aScores
                }
        possScores(){
            let pScores = this.possibleScores.reduce((currentTotal, item)=>{
                return item.scores + currentTotal
            },
            0)
            return pScores
        }
        calcGrade(){
            if(this.addScores() / this.possScores() < 100 && this.addScores() / this.possScores() > 90){
                    return "A"            
            }
             else if(this.addScores() / this.possScores() < 90 && this.addScores() / this.possScores() > 80){
                 return "B"
                 }
            else if(this.addScores() / this.possScores() < 80 && this.addScores() / this.possScores() > 70){
                return "c"
            }
            else if(this.addScores() / this.possScores() < 70 && this.addScores() / this.possScores() > 60){
                return "D"
            }
            else if(this.addScores() / this.possScores() < 60){
                return "F"
            }
            else{
                return "ERROR"
            }
        }
        
        
    }