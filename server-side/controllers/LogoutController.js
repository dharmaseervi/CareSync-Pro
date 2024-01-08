
export default async function logoutSession(req, res) {
    try {
        req.session.destroy((error) => {
            if (error) throw error
            res.status(200).send('Logout Success')
        });
    } catch (error) {
        console.error('Error during logout:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

};