import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PlayerSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    shirtNumber: {
        type: number,
    },
    isCoach: {
        type: Boolean,
        default: false,
    },
    team: {
        type: String,
    },
    speed: {
        type: Number,
        enum: [1,2,3]
    },
    createdDate: {
        type: Date,
        default: Date.now()
    },
});
