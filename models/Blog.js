const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        content: {
            type: String,
            required: true
        },

        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        category: {
            type: String,
            default: "General"
        },

        tags: {
            type: [String],
            default: []
        },

        status: {
            type: String,
            enum: ["Draft", "Published"],
            default: "Draft"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Blog", blogSchema);