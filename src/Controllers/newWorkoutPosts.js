import PostNewWorkout from "../Models/postNewWorkout";

export const getPost = async (req, res) => {
    try {
        const postnewWorkouts  = await  postNewWorkout.find();

        res.status(200).json(postnewWorkouts);
    } catch (error) {
        res.status(404).json ({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost= new PostNewWorkout(post);

    try {
       await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}