const express = require('express')
const router = express.Router()
const Student = require('../models/student')


router.get('/', async(req,res) => 
{
    try
    {
           const students = await Student.find()
           res.json(students)
    }
    catch(err)
    {
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => 
{
    const student = new Student
   ({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub,
        year: req.body.year,
        age:req.body.age
    })

    try
   {
        const a1 =  await student.save() 
        res.json(a1)
    }
catch(err)
   {
        res.send('Error')
    }
})

router.delete('/:id',async(req,res)=> 
{
    try
   {
        const student = await Student.findById(req.params.id) 
        if (!student) return res.status(404).json({message: 'Student not found'});
        await student.deleteOne();
        res.json({message: 'Student Deleted'});  
    }
catch(err)
   {
        res.send('Error')
    }

})
router.patch('/:id',async(req,res)=> 
    {
        try
       {
        const student = await Student.findById(req.params.id);
        
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        // Iterate over the request body keys and update the corresponding student fields
        Object.keys(req.body).forEach(key => {
            student[key] = req.body[key];
        });

        const updatedStudent = await student.save();
        res.json(updatedStudent);
   
        }
    catch(err)
       {
            res.send('Error')
        }
    
    })

module.exports = router