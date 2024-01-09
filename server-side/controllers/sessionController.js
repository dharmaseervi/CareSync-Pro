export default async function sessionManagement(req, res) {

    try {
        if (!req.session.user) {
            console.log('User is not authenticated');
            res.status(401).json({ error: 'Unauthorized' });
        } else {
            console.log('User is authenticated:', req.session.user );
            res.status(200).json({ message: 'Access granted to protected route', data: req.session.user });
            

        }
    } catch (error) {
        console.error("Error querying session:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
