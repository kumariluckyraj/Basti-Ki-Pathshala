"use server"

import connectDb from "@/db/connectDb"
import User from "@/models/User"



export const fetchuser = async (username) => {
    await connectDb()
    let u = await User.findOne({ username })
  
    if (!u) {
      return null // or throw an error, depending on your design
    }
  
    let user = u.toObject({ flattenObjectIds: true })
    return user
  }
  



  export const updateProfile = async (formData, oldusername) => {
    await connectDb();
  
    // Convert FormData to object (if it's not already an object)
    const ndata =
      typeof formData.entries === "function"
        ? Object.fromEntries(formData.entries())
        : formData;
  
    // Check if username is being updated
    if (oldusername !== ndata.username) {
      const existing = await User.findOne({ username: ndata.username });
      if (existing) {
        return { error: "Username already exists" };
      }
    }
  
    const updated = await User.findOneAndUpdate(
      { username: oldusername },
      {
        name: ndata.name,
        email: ndata.email,
        username: ndata.username,
        phone: ndata.phone,
        committee: ndata.committee,
        experience: ndata.experience,
        updateAt: new Date(),
      },
      { new: true }
    );
  
    return updated;
  };
  