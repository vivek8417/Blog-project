import Blog from "../model/blog-model.js"

export const getAllBlog = async (req, res, next) => {
    let blogs;

    try {
        blogs = await Blog.find();
    } catch (err) {

        return console.log(err)

    }
    if (!blogs) {
        return res.status(404).json({ message: "No blogs found" })
    }
    
    return res.status(200).json({ blogs })
};

export const addBlog = async (req, res, next) => {
    const { title, description, image } = req.body;

    const blog = new Blog({
        title,
        description,
        image
    });

    try {
        await blog.save()

    } catch (err) {
        return console.log(err)
    }

    return res.status(201).json({ message: "Publishing the blog successfully" })

}

export const getBlogById = async (req, res, next) => {
    const id = req.params.id;
    let blog;
    try {
        blog = await Blog.findById(id)
    } catch (err) {
        return console.log(err)
    }
    if (!blog) {
        return res.status(404).json({ message: "Blog not found" })
    }
    return res.status(200).json(blog)


}