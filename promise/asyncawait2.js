const generateExam = ()=>{


        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve({
                    examId: 123,
                    message: "Exam is generated",
                })
            },2000)
        })

}
const generateQuestion = (examData)=>{



    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                questionId: 456,
                message: "Question is generated",
                examId: examData.examId
            })
        },3000)
    })

}

// generateExam().then((examData)=>{

//     console.log("Exam is generated...",examData)
//     generateQuestion(examData).then((questionData)=>{
//         console.log("Question is generated...",questionData)
//     })

// })


const generateQuestionPaper = async ()=>{

    console.log("Exam is about to generate...")
    const examData = await generateExam()
    console.log("Exam is generated...",examData)
    console.log("Question is about to generate...")
    const questionData = await generateQuestion(examData)
    console.log("Question is generated...",questionData)
    


}

generateQuestionPaper()


