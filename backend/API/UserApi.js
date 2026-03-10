//create min -express app
import exp from 'express'
import { UserModel } from '../models/UserModel.js' 
export const UserApp = exp.Router()

//user api routes

//create user
UserApp.post('/users',async(req,res)=>{
    try{
    const newUser=req.body
    const newUserDocument=new UserModel(newUser)
    await newUserDocument.save()
    res.status(201).json({message:"user created",payload:newUserDocument}) }
    catch(err){
        res.status(500).json({message:"error has occured",error:err.message})

    }
})


//-----//read all users

UserApp.get('/users',async(req,res)=>{

    let users=await UserModel.find()
    res.status(200).json({message:"user found",payload:users})
})


//----------------------------------------------//read a user by id

UserApp.get('/users/:id',async(req,res)=>{
    let uid=req.params.id;
    let user=await UserModel.findById(uid);
    res.status(200).json({message:"read all users", payload:user})
})


//delete a user by id()
UserApp.delete("/users/:id",async(req,res)=>{
    let uid=req.params.id;
    let user=await UserModel.findByIdAndUpdate(uid,{$set:{status:false}},{returnDocument:"after"})
    if(!user)
    {
        res.status(404).json({message:' user not found '})
    }
    res.status(404).json({message:"updated",payload:user})
})


//activate user(change status to true)
UserApp.patch("/users/:id",async(req,res)=>{
    let uid=req.params.id;
    let user=await UserModel.findByIdAndUpdate(uid,{$set:{status:true}})
    res.status(404).json({message:"user activated",payload:user})

})  

//update the user by id
