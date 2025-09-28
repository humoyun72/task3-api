const express = require("express");
const app = express();

// EKUK hisoblash funksiyasi
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b); // EKUB
}
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// URL sening emailingga mos
app.get("/humoyunmirzomahmudov99_gmail_com", (req, res) => {
    const x = parseInt(req.query.x, 10);
    const y = parseInt(req.query.y, 10);

    if (!Number.isInteger(x) || x <= 0 || !Number.isInteger(y) || y <= 0) {
        return res.send("NaN");
    }

    res.send(lcm(x, y).toString());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
