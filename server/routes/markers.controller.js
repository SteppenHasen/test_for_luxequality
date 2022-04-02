import { 
    getAllMarkers, 
    addNewMarker,
    existMarkerWithID,
    deleteMarkerById,
    getMarkerById } from '../models/markers.model.js'

function httpgetAllMarkers(req, res) {
    return res.status(200).json(getAllMarkers);
};

function httpAddNewMarker(req, res) {
    const marker = req.body;

    if (!marker.description || !marker.name || !marker.adress 
        || !marker.price) {
            return res.status(400).json({
                error: 'Missing required marker property'
            })
        }

    addNewMarker(marker);
    res.status(201).json(marker);
};

function httpDeleteMarker(req, res) {
    const markerID = req.params.id

    if (!existMarkerWithID(markerID)) {
        return res.status(404).json({
            error: 'Marker not found'
        })
    }

    const deleted = deleteMarkerById(markerID)
    return res.status(200).json(deleted)
}

function httpgetMarker(req, res) {
    const markerID = req.params.id

    if (!existMarkerWithID(markerID)) {
        return res.status(404).json({
            error: 'Marker not found'
        })
    }

    const markerWithID = getMarkerById(markerID)
    return res.status(200).json(markerWithID)
}

export {
    httpgetAllMarkers,
    httpAddNewMarker,
    httpDeleteMarker,
    httpgetMarker
};