import { 
    httpgetAllMarkers, 
    httpAddNewMarker, 
    httpDeleteMarker, 
    httpgetMarker } from './markers.controller'
import express from 'express'

const markersRouter = express.Router();

markersRouter.get('/', httpgetAllMarkers);
markersRouter.post('/', httpAddNewMarker);
markersRouter.delete(':id', httpDeleteMarker)
markersRouter.get('/:id', httpgetMarker);

export default markersRouter