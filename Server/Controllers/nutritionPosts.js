import PostNutrition from "../Models/postNutrition";

export const getPost = async (req, res) => {
    try {
        const postNutrition  = await PostNutrition.find();

        res.status(200).json(postNutrition);
    } catch (error) {
        res.status(404).json ({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost= new postNutrition(post);

    try {
       await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}