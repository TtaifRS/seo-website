import express from 'express';
import { analyzers } from '../controllers/analyzers.js';

export const router = express.Router()

router.route('/analyzers/').get(analyzers)