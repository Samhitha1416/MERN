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
    const student = await Student.deleteOne({ _id: req.params.id }); 
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
        const student = await person.findById(req.params.id);
        student.S_id = req.body.S_id;
        const a = await student.save();
        res.json(a);
   
        }
    catch(err)
       {
            res.send('Error')
        }
    
    })

module.exports = router