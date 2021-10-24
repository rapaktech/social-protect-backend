exports.getFacebook = (req, res) => {
    return res.status(200).json({ message: "Facebook!" });
}

exports.getInstagram = (req, res) => {
    return res.status(200).json({ message: "Instagram!" });
}

exports.getTwitter = (req, res) => {
    return res.status(200).json({ message: "Twitter!" });
}

exports.getWhatsApp = (req, res) => {
    return res.status(200).json({ message: "WhatsApp!" });
}