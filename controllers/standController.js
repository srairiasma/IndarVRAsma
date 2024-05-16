const Stand = require('../models/stand');

// Create a new stand
exports.createStands = async (req, res) => {
    try {
        const stands = await Stand.insertMany(req.body);
        res.status(201).json(stands);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all stands
exports.getStands = async (req, res) => {
    try {
        const stands = await Stand.find();
        res.json(stands);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.updateItemVisibility = async (req, res) => {
    const { standCode, itemCode } = req.body;

    try {
        const stand = await Stand.findOne({ code: standCode });
        if (!stand) {
            return res.status(404).json({ message: 'Stand not found' });
        }

        // Update items visibility
        stand.items.forEach(item => {
            item.visible = (item.code === itemCode);
        });

        await stand.save();
        res.json(stand);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// Get a single stand by ID
exports.getStandById = async (req, res) => {
    try {
        const stand = await Stand.findById(req.params.id);
        if (!stand) {
            return res.status(404).json({ message: 'Stand not found' });
        }
        res.json(stand);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a stand by ID
exports.updateStand = async (req, res) => {
    try {
        const stand = await Stand.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!stand) {
            return res.status(404).json({ message: 'Stand not found' });
        }
        res.json(stand);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a stand by ID
exports.deleteStand = async (req, res) => {
    try {
        const stand = await Stand.findByIdAndDelete(req.params.id);
        if (!stand) {
            return res.status(404).json({ message: 'Stand not found' });
        }
        res.json({ message: 'Stand deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
