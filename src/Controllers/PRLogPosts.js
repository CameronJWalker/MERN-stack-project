import PostPRLog from  "../Models/postPRLog"

export const getPost = async (req, res) => {
    try {
        const postprlog = await PostPRLog.find();

        res.status(200).json(postprlog);
    } catch (error) {
        res.status(404).json ({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost= new PostPRLog(post);

    try {
       await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}