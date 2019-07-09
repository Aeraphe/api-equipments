import { Request, Response, Router } from 'express';
import { RecordRoutes } from './core/record.routes';
import * as passport from 'passport';




let router = Router();

// // middleware that is specific to this router
// middleware.forEach(iten => {
//     router.use(iten.action);
// });

// Wellcome Route
router.get('/', function (req: Request, res: Response) {

});


// Define the Core routes (Protected)
router.use(
    '/core',
    router.use(
        '/records',
        passport.authenticate('jwt', { session: false }),
        RecordRoutes
    )
);

export default router;
