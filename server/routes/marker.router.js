import { 
    httpgetAllMarkers, 
    httpAddNewMarker, 
    httpDeleteMarker, 
    httpgetMarker } from './markers.controller.js'
import express from 'express'
import multer from 'multer'

const markersRouter = express.Router();

markersRouter.get('/', httpgetAllMarkers);
markersRouter.post('/', multer().none(), httpAddNewMarker);
markersRouter.delete('/:id', httpDeleteMarker)
markersRouter.get('/:id', httpgetMarker);

export default markersRouter