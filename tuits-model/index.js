import mongoose from 'mongoose';
import tuitsSchema from '../tuits-schema/index.js'
const tuitsModel = mongoose
    .model('TuitModel', tuitsSchema);
export default tuitsModel;